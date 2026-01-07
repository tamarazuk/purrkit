import type { CollectionBeforeValidateHook } from 'payload'

import type { User } from '@/payload-types'
import { isSuperAdmin } from '@/access/isSuperAdmin'
import { getTenantFromRequest } from '@/utilities/getTenantFromRequest'
import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import { extractID } from '@/utilities/extractID'

export const assignTenantOnCreate: CollectionBeforeValidateHook<User> = ({
  data,
  operation,
  originalDoc,
  req,
}) => {
  if (!data || !req.user) {
    return data
  }

  if (operation !== 'create' && operation !== 'update') {
    return data
  }

  if (!isSuperAdmin(req.user)) {
    data.role = 'user'
  }

  const tenantsValue = data.tenants
  const tenantsArray = Array.isArray(tenantsValue)
    ? tenantsValue
    : tenantsValue
      ? [tenantsValue]
      : []

  const tenantFromCookie = getTenantFromRequest(req)
  const adminTenantIDs = getUserTenantIDs(req.user, 'tenant-admin')
  const tenantToAssign = tenantFromCookie || adminTenantIDs[0]

  const requestedRole =
    data.tenantRole ??
    tenantsArray[0]?.role ??
    originalDoc?.tenants?.[0]?.role ??
    'tenant-viewer'

  if (data.tenantRole) {
    delete data.tenantRole
  }

  if (!tenantToAssign) {
    return data
  }

  if (tenantsArray.length > 0) {
    data.tenants = tenantsArray.map((row) =>
      extractID(row.tenant) === tenantToAssign ? { ...row, role: requestedRole } : row,
    )
    return data
  }

  return {
    ...data,
    tenants: [
      {
        tenant: tenantToAssign,
        role: requestedRole,
      },
    ],
  }
}
