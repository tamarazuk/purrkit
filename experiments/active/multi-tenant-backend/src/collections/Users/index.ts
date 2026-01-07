import type { CollectionConfig } from 'payload'

import { createAccess } from './access/create'
import { readAccess } from './access/read'
import { updateAndDeleteAccess } from './access/updateAndDelete'
import { externalUsersLogin } from './endpoints/externalUsersLogin'
import { ensureUniqueUsername } from './hooks/ensureUniqueUsername'
import { isSuperAdmin } from '@/access/isSuperAdmin'
import { getUserTenantIDs } from '@/utilities/getUserTenantIDs'
import { setCookieBasedOnDomain } from './hooks/setCookieBasedOnDomain'
import { assignTenantOnCreate } from './hooks/assignTenantOnCreate'
import { tenantsArrayField } from '@payloadcms/plugin-multi-tenant/fields'

const defaultTenantArrayField = tenantsArrayField({
  tenantsArrayFieldName: 'tenants',
  tenantsArrayTenantFieldName: 'tenant',
  tenantsCollectionSlug: 'tenants',
  arrayFieldAccess: {},
  tenantFieldAccess: {},
  rowFields: [
    {
      name: 'role',
      type: 'select',
      defaultValue: 'tenant-viewer',
      hasMany: false,
      options: ['tenant-admin', 'tenant-viewer'],
      required: true,
      access: {
        update: ({ req }) => {
          const { user } = req
          if (!user) {
            return false
          }

          if (isSuperAdmin(user)) {
            return true
          }

          return true
        },
      },
    },
  ],
})

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: createAccess,
    delete: updateAndDeleteAccess,
    read: readAccess,
    update: updateAndDeleteAccess,
  },
  admin: {
    group: 'System',
    useAsTitle: 'email',
  },
  auth: true,
  endpoints: [externalUsersLogin],
  fields: [
    {
      type: 'text',
      name: 'password',
      hidden: true,
      access: {
        read: () => false, // Hide password field from read access
        update: ({ req, id }) => {
          const { user } = req
          if (!user) {
            return false
          }

          if (id === user.id) {
            // Allow user to update their own password
            return true
          }

          return isSuperAdmin(user)
        },
      },
    },
    {
      admin: {
        position: 'sidebar',
      },
      name: 'role',
      type: 'select',
      defaultValue: 'user',
      hasMany: false,
      options: ['super-admin', 'user'],
      access: {
        update: ({ req }) => {
          return isSuperAdmin(req.user)
        },
      },
    },
    {
      name: 'username',
      type: 'text',
      hooks: {
        beforeValidate: [ensureUniqueUsername],
      },
      index: true,
    },
    {
      name: 'tenantRole',
      type: 'select',
      defaultValue: 'tenant-viewer',
      hasMany: false,
      options: ['tenant-admin', 'tenant-viewer'],
      admin: {
        condition: (_, __, { user }) => {
          if (isSuperAdmin(user)) {
            return false
          }

          return getUserTenantIDs(user, 'tenant-admin').length <= 1
        },
        description: 'Applies to your current tenant.',
        position: 'sidebar',
      },
      access: {
        read: () => false,
      },
    },
    {
      ...defaultTenantArrayField,
      admin: {
        ...(defaultTenantArrayField?.admin || {}),
        condition: (_, __, { user }) => {
          if (isSuperAdmin(user)) {
            return true
          }

          return getUserTenantIDs(user, 'tenant-admin').length > 1
        },
        position: 'sidebar',
      },
    },
  ],
  // The following hook sets a cookie based on the domain a user logs in from.
  // It checks the domain and matches it to a tenant in the system, then sets
  // a 'payload-tenant' cookie for that tenant.

  hooks: {
    afterLogin: [setCookieBasedOnDomain],
    beforeValidate: [assignTenantOnCreate],
  },
}
