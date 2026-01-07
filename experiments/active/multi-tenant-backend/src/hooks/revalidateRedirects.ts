import type { CollectionAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'
import { extractID } from '@/utilities/extractID'

export const revalidateRedirects: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating redirects`)

  const tenantID = extractID(doc?.tenant)
  if (tenantID) {
    revalidateTag(`redirects_${tenantID}`)
  }

  revalidateTag('redirects_default')

  return doc
}
