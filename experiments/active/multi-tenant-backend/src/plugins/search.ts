import { searchPlugin } from '@payloadcms/plugin-search'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

export default searchPlugin({
  collections: ['posts'],
  beforeSync: beforeSyncWithSearch,
  searchOverrides: {
    admin: {
      group: 'System',
    },
    fields: ({ defaultFields }) => {
      return [...defaultFields, ...searchFields]
    },
  },
})
