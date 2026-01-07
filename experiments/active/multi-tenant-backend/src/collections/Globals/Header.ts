import type { CollectionConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidate'

export const Header: CollectionConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Site Settings',
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/components/admin/NavItemRowLabel#HeaderRowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
