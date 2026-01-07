import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import { isSuperAdmin } from '@/access/isSuperAdmin'
import type { Config } from '@/payload-types'
import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'

export default multiTenantPlugin<Config>({
  collections: {
    pages: {},
    posts: {},
    categories: {},
    media: {},
    forms: {},
    'form-submissions': {},
    redirects: {},
    search: {},
    header: {
      isGlobal: true,
    },
    footer: {
      isGlobal: true,
    },
  },
  // Debug mode makes the tenant field visible in the admin UI
  //debug: true,
  tenantField: {
    access: {
      read: () => true,
      update: ({ req }) => {
        if (isSuperAdmin(req.user)) {
          return true
        }
        return getUserTenantIDs(req.user).length > 0
      },
    },
  },
  tenantsArrayField: {
    includeDefaultField: false,
  },
  userHasAccessToAllTenants: (user) => isSuperAdmin(user),
})
