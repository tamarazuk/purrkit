import type { CollectionConfig } from 'payload'

import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { authenticatedOrPublicTenant } from '@/access/authenticatedOrPublicTenant'

import { superAdminOrTenantAdminAccess } from '@/collections/Pages/access/superAdminOrTenantAdmin'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { createEnsureUniqueSlugPerTenant } from '@/utilities/ensureUniqueSlugPerTenant'

import { Archive } from '@/blocks/ArchiveBlock/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@/blocks/Content/config'
import { FormBlock } from '@/blocks/Form/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'

import { hero } from '@/heros/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: superAdminOrTenantAdminAccess,
    delete: superAdminOrTenantAdminAccess,
    read: authenticatedOrPublicTenant,
    update: superAdminOrTenantAdminAccess,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
    tenant: true,
  },
  admin: {
    group: 'Content',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: async ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
          tenant: data?.tenant,
        }),
    },
    preview: async (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
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
    // {
    //   name: 'slug',
    //   type: 'text',
    //   defaultValue: 'home',
    //   hooks: {
    //     beforeValidate: [ensureUniqueSlug],
    //   },
    //   index: true,
    // },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
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
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [createEnsureUniqueSlugPerTenant('pages', 'page')],
      },
      index: true,
      label: 'Slug',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
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
