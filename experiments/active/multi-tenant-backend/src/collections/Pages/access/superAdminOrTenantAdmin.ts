import type { Access } from 'payload'

import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import { getTenantFromRequest } from '@/utilities/getTenantFromRequest'
import { extractID } from '@/utilities/extractID'
import { isSuperAdmin } from '../../../access/isSuperAdmin'

/**
 * Tenant admins and super admins can will be allowed access
 */
export const createSuperAdminOrTenantAdminAccess = (
  collection: 'pages' | 'posts',
): Access => {
  return async ({ req, id, data }) => {
    if (!req.user) {
      return false
    }

    if (isSuperAdmin(req.user)) {
      return true
    }

    const adminTenantAccessIDs = getUserTenantIDs(req.user, 'tenant-admin')
    const requestedTenant = extractID(data?.tenant)

    if (requestedTenant && adminTenantAccessIDs.includes(requestedTenant)) {
      return true
    }

    const tenantFromCookie = getTenantFromRequest(req)
    if (!requestedTenant && tenantFromCookie && adminTenantAccessIDs.includes(tenantFromCookie)) {
      return true
    }

    if (!id) {
      return false
    }

    const doc = await req.payload.findByID({
      id,
      collection,
      depth: 0,
      disableErrors: true,
      req,
    })

    const docTenant = extractID(doc?.tenant)

    return Boolean(docTenant && adminTenantAccessIDs.includes(docTenant))
  }
}

export const superAdminOrTenantAdminAccess = createSuperAdminOrTenantAdminAccess('pages')
