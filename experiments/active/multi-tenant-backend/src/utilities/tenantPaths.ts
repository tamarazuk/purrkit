import type { Config, Tenant } from '@/payload-types'
import type { PayloadRequest } from 'payload'

import { extractID } from './extractID'
import { getServerSideURL } from './getURL'

type TenantValue = Config['collections']['tenants']['id'] | Tenant | null | undefined

type ResolveTenantArgs = {
  req?: PayloadRequest
  tenant?: TenantValue
}

const normalizeTenantDomain = (domain?: string | null) => {
  if (!domain) {
    return null
  }

  return domain.replace(/^https?:\/\//, '')
}

export const resolveTenant = async ({ req, tenant }: ResolveTenantArgs) => {
  if (!tenant) {
    return null
  }

  if (typeof tenant === 'object') {
    return tenant
  }

  if (!req) {
    return null
  }

  try {
    return await req.payload.findByID({
      collection: 'tenants',
      depth: 0,
      id: tenant,
      req,
    })
  } catch {
    return null
  }
}

export const buildTenantPreviewPath = ({
  collection,
  slug,
  tenant,
}: {
  collection: 'posts' | 'pages'
  slug: string
  tenant?: Tenant | null
}) => {
  const collectionPrefixMap: Record<'posts' | 'pages', string> = {
    posts: '/posts',
    pages: '',
  }

  const normalizedSlug = slug === 'home' ? '' : slug
  const collectionPrefix = collectionPrefixMap[collection]
  const docPath = normalizedSlug
    ? `${collectionPrefix}/${encodeURIComponent(normalizedSlug)}`
    : collectionPrefix || '/'

  const tenantDomain = normalizeTenantDomain(tenant?.domain)
  const tenantPath = tenant?.slug
    ? `/tenant-slugs/${encodeURIComponent(tenant.slug)}`
    : tenantDomain
      ? `/tenant-domains/${encodeURIComponent(tenantDomain)}`
      : ''

  if (!tenantPath) {
    return docPath
  }

  return docPath === '/' ? tenantPath : `${tenantPath}${docPath}`
}

export const buildTenantRevalidatePaths = ({
  collection,
  slug,
  tenant,
}: {
  collection: 'posts' | 'pages'
  slug: string
  tenant?: Tenant | null
}) => {
  const basePath =
    collection === 'posts'
      ? `/posts/${slug}`
      : slug === 'home' || slug === '' || !slug
        ? '/'
        : `/${slug}`

  const tenantDomain = normalizeTenantDomain(tenant?.domain)
  const paths = [basePath]

  if (tenant?.slug) {
    paths.push(
      basePath === '/'
        ? `/tenant-slugs/${encodeURIComponent(tenant.slug)}`
        : `/tenant-slugs/${encodeURIComponent(tenant.slug)}${basePath}`,
    )
  }

  if (tenantDomain) {
    paths.push(
      basePath === '/'
        ? `/tenant-domains/${encodeURIComponent(tenantDomain)}`
        : `/tenant-domains/${encodeURIComponent(tenantDomain)}${basePath}`,
    )
  }

  return paths
}

export const buildTenantURL = ({
  collection,
  slug,
  tenant,
}: {
  collection: 'posts' | 'pages'
  slug: string
  tenant?: Tenant | null
}) => {
  const baseURL = getServerSideURL()
  const normalizedSlug = slug === 'home' ? '' : slug
  const docPath =
    collection === 'posts'
      ? `/posts/${encodeURIComponent(normalizedSlug)}`
      : normalizedSlug
        ? `/${encodeURIComponent(normalizedSlug)}`
        : '/'

  if (!tenant) {
    return `${baseURL}${docPath}`
  }

  const tenantDomain = normalizeTenantDomain(tenant.domain)

  if (tenantDomain) {
    const protocol = baseURL.startsWith('http')
      ? new URL(baseURL).protocol
      : 'https:'

    return `${protocol}//${tenantDomain}${docPath}`
  }

  if (tenant.slug) {
    const tenantPath = `/tenant-slugs/${encodeURIComponent(tenant.slug)}`
    return `${baseURL}${docPath === '/' ? tenantPath : `${tenantPath}${docPath}`}`
  }

  return `${baseURL}${docPath}`
}
