import type { AdminViewServerProps } from 'payload'

import { CreateFirstUserView } from '@payloadcms/next/views'

import { TemplateSeedClient } from './TemplateSeed.client'

const isTemplateModeEnabled =
  process.env.NEXT_PUBLIC_PAYLOAD_TEMPLATE_MODE === 'true' ||
  process.env.PAYLOAD_SEED_ON_INIT === 'true'

const CreateFirstUserTemplate = async (props: AdminViewServerProps) => {
  if (!isTemplateModeEnabled) {
    return CreateFirstUserView(props)
  }

  return (
    <div className="create-first-user">
      <h1>Template mode</h1>
      <p>
        This project is running in template mode. You can seed a demo database to explore the
        multi-tenant setup.
      </p>
      <TemplateSeedClient />
    </div>
  )
}

export default CreateFirstUserTemplate
