import type { Access } from 'payload'

import type { Tenant, User } from '../../../payload-types'

import { isSuperAdmin } from '../../../access/isSuperAdmin'
import { getUserTenantIDs } from '../../../utilities/getUserTenantIDs'

export const createAccess: Access<User> = ({ req }) => {
  if (!req.user) {
    return false
  }

  if (isSuperAdmin(req.user)) {
    return true
  }

  if (!isSuperAdmin(req.user) && req.data?.role === 'super-admin') {
    return false
  }

  const adminTenantAccessIDs = getUserTenantIDs(req.user, 'tenant-admin')

  const incomingTenants = req.data?.tenants
  const tenantRows = Array.isArray(incomingTenants)
    ? incomingTenants
    : incomingTenants
      ? [incomingTenants]
      : []

  const requestedTenants: Tenant['id'][] = tenantRows.map(
    (t: { tenant: Tenant['id'] }) => t.tenant,
  )

  const hasAccessToAllRequestedTenants = requestedTenants.every((tenantID) =>
    adminTenantAccessIDs.includes(tenantID),
  )

  if (hasAccessToAllRequestedTenants) {
    return true
  }

  return false
}
