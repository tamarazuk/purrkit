import { NextResponse } from 'next/server'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { seed } from '@/seed'

const canSeed =
  process.env.NEXT_PUBLIC_PAYLOAD_TEMPLATE_MODE === 'true' ||
  process.env.PAYLOAD_SEED_ON_INIT === 'true'

export async function POST() {
  if (!canSeed) {
    return NextResponse.json(
      { message: 'Seeding is disabled in this environment.' },
      { status: 403 }
    )
  }

  const payload = await getPayload({ config: configPromise })
  const { docs: users } = await payload.find({
    collection: 'users',
    limit: 1,
    overrideAccess: true,
  })

  if (users.length > 0) {
    return NextResponse.json(
      { message: 'Users already exist. Seeding is only available on a fresh database.' },
      { status: 409 }
    )
  }

  await seed(payload)

  return NextResponse.json({ message: 'Seed completed.' })
}
