import type { PayloadRequest } from 'payload'
import { getTenantFromCookie } from '@payloadcms/plugin-multi-tenant/utilities'

import { getCollectionIDType } from './getCollectionIDType'

export const getTenantFromRequest = (req: PayloadRequest): number | string | null => {
  try {
    return getTenantFromCookie(
      req.headers,
      getCollectionIDType({ payload: req.payload, collectionSlug: 'tenants' }),
    )
  } catch {
    return null
  }
}
