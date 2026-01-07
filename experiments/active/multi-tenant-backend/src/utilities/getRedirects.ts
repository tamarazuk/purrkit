import configPromise from '@payload-config'
import { getTenantFromCookie } from '@payloadcms/plugin-multi-tenant/utilities'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'
import { headers } from 'next/headers'
import { getCollectionIDType } from './getCollectionIDType'

export async function getRedirects(
  depth = 1,
  tenant?: number | string,
) {
  const payload = await getPayload({ config: configPromise })
  const selectedTenant =
    tenant ??
    getTenantFromCookie(
      headers(),
      getCollectionIDType({ payload, collectionSlug: 'tenants' }),
    )

  const { docs: redirects } = await payload.find({
    collection: 'redirects',
    depth,
    limit: 0,
    pagination: false,
    ...(selectedTenant && {
      where: {
        tenant: {
          equals: selectedTenant,
        },
      },
    }),
  })

  return redirects
}

/**
 * Returns a unstable_cache function mapped with the cache tag for 'redirects'.
 *
 * Cache all redirects together to avoid multiple fetches.
 */
export const getCachedRedirects = (tenant?: number | string) =>
  unstable_cache(async () => getRedirects(1, tenant), ['redirects', tenant ?? 'default'], {
    tags: [`redirects_${tenant ?? 'default'}`],
  })
