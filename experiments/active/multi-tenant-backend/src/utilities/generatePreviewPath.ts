import type { PayloadRequest } from 'payload'
import type { Config, Page, Post } from '@/payload-types'

import { buildTenantPreviewPath, resolveTenant } from './tenantPaths'

type Props = {
  collection: 'pages' | 'posts'
  slug: string
  req: PayloadRequest
  tenant?: Config['collections']['tenants']['id'] | Page['tenant'] | Post['tenant']
}

export const generatePreviewPath = async ({ collection, slug, req, tenant }: Props) => {
  // Allow empty strings, e.g. for the homepage
  if (slug === undefined || slug === null) {
    return null
  }

  const resolvedTenant = await resolveTenant({ req, tenant })
  const path = buildTenantPreviewPath({
    collection,
    slug,
    tenant: resolvedTenant,
  })

  const encodedParams = new URLSearchParams({
    slug: encodeURIComponent(slug),
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
