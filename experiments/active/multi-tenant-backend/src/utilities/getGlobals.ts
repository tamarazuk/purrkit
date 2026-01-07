import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getTenantFromCookie } from '@payloadcms/plugin-multi-tenant/utilities'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'
import { headers } from 'next/headers'
import { getCollectionIDType } from './getCollectionIDType'

type Global = keyof Config['globals']

// NOTE: This helper is optional and currently unused in the demo routes.
// If you wire it up later, keep it aligned with tenant routing strategy.
async function getGlobal(
  slug: Global,
  depth = 0,
  tenant?: Config['collections']['tenants']['id'],
) {
  const payload = await getPayload({ config: configPromise })
  const selectedTenant =
    tenant ??
    getTenantFromCookie(
      headers(),
      getCollectionIDType({ payload, collectionSlug: 'tenants' }),
    )

  const global = await payload.findGlobal({
    slug,
    depth,
    req: {
      headers: selectedTenant ? { cookie: `payload-tenant=${selectedTenant}` } : {},
    } as any,
  })

  return global
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (
  slug: Global,
  depth = 0,
  tenant?: Config['collections']['tenants']['id'],
) =>
  unstable_cache(async () => getGlobal(slug, depth, tenant), [slug, depth, tenant ?? 'default'], {
    tags: [`global_${slug}_${tenant ?? 'default'}`],
  })
