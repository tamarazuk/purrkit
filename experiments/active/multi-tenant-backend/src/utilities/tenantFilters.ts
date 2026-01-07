import type { PayloadRequest, Where } from 'payload'

import { extractID } from './extractID'
import { getTenantFromRequest } from './getTenantFromRequest'

type TenantFilterArgs = {
  data?: Record<string, unknown>
  req?: PayloadRequest
  siblingData?: Record<string, unknown>
  tenant?: unknown
}

export const getTenantFilter = ({
  data,
  req,
  siblingData,
  tenant,
}: TenantFilterArgs): true | Where => {
  const tenantID =
    extractID(tenant) ??
    extractID(data?.tenant) ??
    extractID(siblingData?.tenant) ??
    (req ? getTenantFromRequest(req) : null)

  if (!tenantID) {
    return true
  }

  return {
    tenant: {
      equals: tenantID,
    },
  }
}
