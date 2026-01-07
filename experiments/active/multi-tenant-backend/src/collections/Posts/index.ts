import type { CollectionConfig, FieldHook } from 'payload'
import { ValidationError } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { createSuperAdminOrTenantAdminAccess } from '@/collections/Pages/access/superAdminOrTenantAdmin'

import { Banner } from '@/blocks/Banner/config'
import { Code } from '@/blocks/Code/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'
import { createEnsureUniqueSlugPerTenant } from '@/utilities/ensureUniqueSlugPerTenant'
import { extractID } from '@/utilities/extractID'
import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import { getTenantFromRequest } from '@/utilities/getTenantFromRequest'
import { getTenantFilter } from '@/utilities/tenantFilters'
import { authenticatedOrPublicTenant } from '@/access/authenticatedOrPublicTenant'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

const ensureAuthorsBelongToTenant: FieldHook = async ({ value, data, originalDoc, req }) => {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return value
  }

  const tenantID = extractID(data?.tenant || originalDoc?.tenant)

  if (!tenantID) {
    return value
  }

  const authorIDs = value
    .map((author) => extractID(author))
    .filter((authorID) => authorID !== null && authorID !== undefined)

  if (authorIDs.length === 0) {
    return value
  }
  const invalidAuthors: Array<string | number> = []

  const authorDocs = await Promise.all(
    authorIDs.map((id) =>
      req.payload.findByID({
        id,
        collection: 'users',
        depth: 0,
        overrideAccess: true,
        req,
      }),
    ),
  )

  authorDocs.forEach((authorDoc, index) => {
    if (!authorDoc) {
      invalidAuthors.push(authorIDs[index])
      return
    }

    const authorTenants = getUserTenantIDs(authorDoc)

    if (!authorTenants.includes(tenantID)) {
      invalidAuthors.push(authorIDs[index])
    }
  })

  if (invalidAuthors.length > 0) {
    throw new ValidationError({
      errors: [
        {
          message: 'Authors must belong to the same tenant as this post.',
          path: 'authors',
        },
      ],
    })
  }

  return value
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: createSuperAdminOrTenantAdminAccess('posts'),
    delete: createSuperAdminOrTenantAdminAccess('posts'),
    read: authenticatedOrPublicTenant,
    update: createSuperAdminOrTenantAdminAccess('posts'),
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'posts'>
  defaultPopulate: {
    title: true,
    slug: true,
    tenant: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    group: 'Content',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: async ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'posts',
          req,
          tenant: data?.tenant,
        }),
    },
    preview: async (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'posts',
        req,
        tenant: data?.tenant,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              filterOptions: ({ req, data, siblingData }) =>
                getTenantFilter({ req, data, siblingData }),
              relationTo: 'media',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
                    }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id, req, data, siblingData }) => {
                const tenantFilter = getTenantFilter({ req, data, siblingData })
                const baseFilter = id
                  ? {
                      id: {
                        not_in: [id],
                      },
                    }
                  : {}

                if (tenantFilter === true) {
                  return Object.keys(baseFilter).length > 0 ? baseFilter : true
                }

                if (Object.keys(baseFilter).length === 0) {
                  return tenantFilter
                }

                return {
                  and: [baseFilter, tenantFilter],
                }
              },
              hasMany: true,
              relationTo: 'posts',
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ req, data, siblingData }) =>
                getTenantFilter({ req, data, siblingData }),
              hasMany: true,
              relationTo: 'categories',
            },
          ],
          label: 'Meta',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      filterOptions: ({ req, data, siblingData }) => {
        const tenantFromData = extractID(data?.tenant || siblingData?.tenant)
        const tenantFromCookie = getTenantFromRequest(req)
        const tenantID = tenantFromData || tenantFromCookie

        if (!tenantID) {
          return true
        }

        return {
          'tenants.tenant': {
            equals: tenantID,
          },
        }
      },
      hasMany: true,
      relationTo: 'users',
      hooks: {
        beforeValidate: [ensureAuthorsBelongToTenant],
      },
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [createEnsureUniqueSlugPerTenant('posts', 'post')],
      },
      index: true,
      label: 'Slug',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
