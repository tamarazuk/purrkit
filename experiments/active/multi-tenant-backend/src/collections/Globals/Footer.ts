import type { CollectionConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidate'

export const Footer: CollectionConfig = {
  slug: 'footer',
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
          RowLabel: '@/components/admin/NavItemRowLabel#FooterRowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
