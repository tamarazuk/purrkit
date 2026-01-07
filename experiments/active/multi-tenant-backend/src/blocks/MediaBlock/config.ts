import type { Block } from 'payload'
import { getTenantFilter } from '@/utilities/tenantFilters'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      filterOptions: ({ req, data, siblingData }) =>
        getTenantFilter({ req, data, siblingData }),
      relationTo: 'media',
      required: true,
    },
  ],
}
