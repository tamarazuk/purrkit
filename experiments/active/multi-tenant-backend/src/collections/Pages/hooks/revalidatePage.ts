import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Page } from '../../../payload-types'
import { buildTenantRevalidatePaths, resolveTenant } from '@/utilities/tenantPaths'

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({
  doc,
  previousDoc,
  req,
}) => {
  const { payload, context } = req
  if (!context.disableRevalidate) {
    const revalidatePaths = async (targetDoc: Page, label: string) => {
      const tenant = await resolveTenant({ req, tenant: targetDoc.tenant })
      const paths = buildTenantRevalidatePaths({
        collection: 'pages',
        slug: targetDoc.slug,
        tenant,
      })

      paths.forEach((path) => {
        payload.logger.info(`Revalidating ${label} at path: ${path}`)
        revalidatePath(path)
      })

      revalidateTag('pages-sitemap')
    }

    if (doc._status === 'published') {
      await revalidatePaths(doc, 'page')
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      await revalidatePaths(previousDoc, 'old page')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = async ({ doc, req }) => {
  if (!req.context.disableRevalidate) {
    const tenant = await resolveTenant({ req, tenant: doc?.tenant })
    const paths = buildTenantRevalidatePaths({
      collection: 'pages',
      slug: doc?.slug,
      tenant,
    })

    paths.forEach((path) => revalidatePath(path))
    revalidateTag('pages-sitemap')
  }

  return doc
}
