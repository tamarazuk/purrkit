import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getTenantFromCookie } from '@payloadcms/plugin-multi-tenant/utilities'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'
import { headers } from 'next/headers'
import { getCollectionIDType } from './getCollectionIDType'

type Collection = keyof Config['collections']

// NOTE: This helper is optional and currently unused in the demo routes.
// If you wire it up later, keep it aligned with tenant routing strategy.
async function getDocument(
  collection: Collection,
  slug: string,
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

  const page = await payload.find({
    collection,
    depth,
    where: {
      ...(selectedTenant && {
        tenant: {
          equals: selectedTenant,
        },
      }),
      slug: {
        equals: slug,
      },
    },
  })

  return page.docs[0]
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedDocument = (
  collection: Collection,
  slug: string,
  depth = 0,
  tenant?: Config['collections']['tenants']['id'],
) =>
  unstable_cache(
    async () => getDocument(collection, slug, depth, tenant),
    [collection, slug, depth, tenant ?? 'default'],
    {
      tags: [`${collection}_${slug}_${tenant ?? 'default'}`],
    },
  )
