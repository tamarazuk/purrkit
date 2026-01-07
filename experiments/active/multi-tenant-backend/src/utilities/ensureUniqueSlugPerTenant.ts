import type { FieldHook, Where } from 'payload'

import { ValidationError } from 'payload'

import { getUserTenantIDs } from './getUserTenantIDs'
import { extractID } from './extractID'

/**
 * Creates a field hook that ensures slug uniqueness per tenant
 * @param collectionSlug - The collection to validate against
 * @returns A beforeValidate field hook
 */
export const createEnsureUniqueSlugPerTenant = (
  collectionSlug: string,
  collectionLabel?: string,
): FieldHook => {
  const label = collectionLabel || collectionSlug.slice(0, -1) // Remove 's' from plural

  return async ({ data, originalDoc, req, value }) => {
    // if value is unchanged, skip validation
    if (originalDoc?.slug === value) {
      return value
    }

    const constraints: Where[] = [
      {
        slug: {
          equals: value,
        },
      },
    ]

    const incomingTenantID = extractID(data?.tenant)
    const currentTenantID = extractID(originalDoc?.tenant)
    const tenantIDToMatch = incomingTenantID || currentTenantID

    if (tenantIDToMatch) {
      constraints.push({
        tenant: {
          equals: tenantIDToMatch,
        },
      })
    }

    const findDuplicates = await req.payload.find({
      collection: collectionSlug as any,
      where: {
        and: constraints,
      },
    })

    if (findDuplicates.docs.length > 0 && req.user) {
      const tenantIDs = getUserTenantIDs(req.user)
      // if the user is an admin or has access to more than 1 tenant
      // provide a more specific error message
      if (req.user.role === 'super-admin' || tenantIDs.length > 1) {
        const attemptedTenantChange = await req.payload.findByID({
          id: tenantIDToMatch,
          collection: 'tenants',
        })

        throw new ValidationError({
          errors: [
            {
              message: `The "${attemptedTenantChange.name}" tenant already has a ${label} with the slug "${value}". Slugs must be unique per tenant.`,
              path: 'slug',
            },
          ],
        })
      }

      throw new ValidationError({
        errors: [
          {
            message: `A ${label} with the slug ${value} already exists. Slug must be unique per tenant.`,
            path: 'slug',
          },
        ],
      })
    }

    return value
  }
}
