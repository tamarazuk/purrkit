import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '../../../payload-types'
import { buildTenantRevalidatePaths, resolveTenant } from '@/utilities/tenantPaths'

export const revalidatePost: CollectionAfterChangeHook<Post> = async ({
  doc,
  previousDoc,
  req,
}) => {
  const { payload, context } = req
  if (!context.disableRevalidate) {
    const revalidatePaths = async (targetDoc: Post, label: string) => {
      const tenant = await resolveTenant({ req, tenant: targetDoc.tenant })
      const paths = buildTenantRevalidatePaths({
        collection: 'posts',
        slug: targetDoc.slug,
        tenant,
      })

      paths.forEach((path) => {
        payload.logger.info(`Revalidating ${label} at path: ${path}`)
        revalidatePath(path)
      })

      revalidateTag('posts-sitemap')
    }

    if (doc._status === 'published') {
      await revalidatePaths(doc, 'post')
    }

    if (previousDoc._status === 'published' && doc._status !== 'published') {
      await revalidatePaths(previousDoc, 'old post')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = async ({ doc, req }) => {
  if (!req.context.disableRevalidate) {
    const tenant = await resolveTenant({ req, tenant: doc?.tenant })
    const paths = buildTenantRevalidatePaths({
      collection: 'posts',
      slug: doc?.slug,
      tenant,
    })

    paths.forEach((path) => revalidatePath(path))
    revalidateTag('posts-sitemap')
  }

  return doc
}
