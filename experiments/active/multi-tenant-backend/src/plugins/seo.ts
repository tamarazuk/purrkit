import { seoPlugin } from '@payloadcms/plugin-seo'

import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'

import { Page, Post } from '@/payload-types'
import { buildTenantURL } from '@/utilities/tenantPaths'

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | Payload Website Template`
    : 'Payload Website Template'
}

const generateURL: GenerateURL<Post | Page> = ({ collectionConfig, doc }) => {
  if (!doc?.slug) {
    return buildTenantURL({
      collection: 'pages',
      slug: '',
      tenant: typeof doc?.tenant === 'object' ? doc?.tenant : undefined,
    })
  }

  const collection =
    collectionConfig?.slug === 'posts'
      ? 'posts'
      : collectionConfig?.slug === 'pages'
        ? 'pages'
        : 'pages'

  return buildTenantURL({
    collection,
    slug: doc.slug,
    tenant: typeof doc?.tenant === 'object' ? doc?.tenant : undefined,
  })
}

export default seoPlugin({
  generateTitle,
  generateURL,
})
