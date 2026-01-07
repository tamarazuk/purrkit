import type { Access, Where } from 'payload'

export const authenticatedOrPublicTenant: Access = ({ req }) => {
  if (req.user) {
    return true
  }

  return {
    'tenant.allowPublicRead': {
      equals: true,
    },
  } as Where
}
