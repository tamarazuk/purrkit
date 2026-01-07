import type { CollectionConfig } from 'payload'

import { authenticatedOrPublicTenant } from '@/access/authenticatedOrPublicTenant'
import { authenticated } from '@/access/authenticated'
import { createEnsureUniqueSlugPerTenant } from '@/utilities/ensureUniqueSlugPerTenant'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublicTenant,
    update: authenticated,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          createEnsureUniqueSlugPerTenant('categories', 'category'),
        ],
      },
      index: true,
      label: 'Slug',
      required: true,
    },
  ],
}
