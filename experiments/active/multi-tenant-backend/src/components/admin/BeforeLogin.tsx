'use client'

import { Banner } from '@payloadcms/ui/elements/Banner'
import { CopyToClipboard } from '@payloadcms/ui/elements/CopyToClipboard'
import React from 'react'

const BeforeLogin: React.FC = () => {
  // Check if app is in template mode
  if (!process.env.NEXT_PUBLIC_PAYLOAD_TEMPLATE_MODE) return null

  return (
    <Banner>
      <h4>Welcome to the Multi-Tenant Headless Template</h4>
      <p>
        If this is your first visit, the database has been seeded with helpful
        dummy data. Use any of the sample users below to log in.
      </p>
      <ul>
        <li>
          <strong>Super Admin</strong>
          <br />
          <span>Email:</span> <code>demo@payloadcms.com</code>{' '}
          <CopyToClipboard
            defaultMessage="Copy"
            successMessage="Copied"
            value="demo@payloadcms.com"
          />
        </li>
        <li>
          <strong>Tenant Admin (Gold)</strong>
          <br />
          <span>Email:</span> <code>tenant1@payloadcms.com</code>{' '}
          <CopyToClipboard
            defaultMessage="Copy"
            successMessage="Copied"
            value="tenant1@payloadcms.com"
          />
        </li>
        <li>
          <strong>Tenant Admin (Silver)</strong>
          <br />
          <span>Email:</span> <code>tenant2@payloadcms.com</code>{' '}
          <CopyToClipboard
            defaultMessage="Copy"
            successMessage="Copied"
            value="tenant2@payloadcms.com"
          />
        </li>
        <li>
          <strong>Tenant Admin (Bronze)</strong>
          <br />
          <span>Email:</span> <code>tenant3@payloadcms.com</code>{' '}
          <CopyToClipboard
            defaultMessage="Copy"
            successMessage="Copied"
            value="tenant3@payloadcms.com"
          />
        </li>
        <li>
          <strong>Multi-Tenant Admin</strong>
          <br />
          <span>Email:</span> <code>multi-admin@payloadcms.com</code>{' '}
          <CopyToClipboard
            defaultMessage="Copy"
            successMessage="Copied"
            value="multi-admin@payloadcms.com"
          />
        </li>
      </ul>
      <p>
        <strong>Password (all accounts):</strong> <code>demo</code>{' '}
        <CopyToClipboard
          defaultMessage="Copy"
          successMessage="Copied"
          value="demo"
        />
      </p>
    </Banner>
  )
}

export default BeforeLogin
