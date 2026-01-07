import type { CollectionSlug, Payload, File } from 'payload'
import type { Config } from 'payload'
import type { Form, Media, User, Tenant } from '@/payload-types'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'header',
  'footer',
  'tenants',
  'users',
]

const categories = [
  'Technology',
  'News',
  'Finance',
  'Design',
  'Software',
  'Engineering',
]

type TenantMedia = {
  image1: Media
  image2: Media
  image3: Media
  imageHome: Media
}

// Helper function to seed media for a tenant
async function seedMediaForTenant(
  payload: Payload,
  tenantId: number,
  buffers: {
    image1: File
    image2: File
    image3: File
    hero: File
  }
): Promise<TenantMedia> {
  const [image1Doc, image2Doc, image3Doc, imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'media',
      data: { ...image1, tenant: tenantId },
      file: buffers.image1,
    }),
    payload.create({
      collection: 'media',
      data: { ...image2, tenant: tenantId },
      file: buffers.image2,
    }),
    payload.create({
      collection: 'media',
      data: { ...image2, tenant: tenantId },
      file: buffers.image3,
    }),
    payload.create({
      collection: 'media',
      data: { ...imageHero1, tenant: tenantId },
      file: buffers.hero,
    }),
  ])

  return {
    image1: image1Doc,
    image2: image2Doc,
    image3: image3Doc,
    imageHome: imageHomeDoc,
  }
}

// Helper function to seed categories for a tenant
async function seedCategoriesForTenant(
  payload: Payload,
  tenantId: number
): Promise<void> {
  await Promise.all(
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category,
          tenant: tenantId,
        },
      })
    )
  )
}

// Helper function to seed posts for a tenant
async function seedPostsForTenant(
  payload: Payload,
  tenantId: number,
  media: TenantMedia,
  author: User
): Promise<void> {
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      ...post1({
        heroImage: media.image1,
        blockImage: media.image2,
        author,
      }),
      tenant: tenantId,
    },
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      ...post2({
        heroImage: media.image2,
        blockImage: media.image3,
        author,
      }),
      tenant: tenantId,
    },
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: { disableRevalidate: true },
    data: {
      ...post3({
        heroImage: media.image3,
        blockImage: media.image1,
        author,
      }),
      tenant: tenantId,
    },
  })

  // Update related posts
  await Promise.all([
    payload.update({
      id: post1Doc.id,
      collection: 'posts',
      data: { relatedPosts: [post2Doc.id, post3Doc.id] },
      context: { disableRevalidate: true },
    }),
    payload.update({
      id: post2Doc.id,
      collection: 'posts',
      data: { relatedPosts: [post1Doc.id, post3Doc.id] },
      context: { disableRevalidate: true },
    }),
    payload.update({
      id: post3Doc.id,
      collection: 'posts',
      data: { relatedPosts: [post1Doc.id, post2Doc.id] },
      context: { disableRevalidate: true },
    }),
  ])
}

// Helper function to seed pages and nav for a tenant
async function seedPagesForTenant(
  payload: Payload,
  tenant: Tenant,
  media: TenantMedia,
  contactForm: Form
): Promise<void> {
  const [homePage, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      context: { disableRevalidate: true },
      data: {
        ...home({ heroImage: media.imageHome, metaImage: media.image2 }),
        tenant: tenant.id,
        title: `Home - ${tenant.name}`,
      },
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      context: { disableRevalidate: true },
      data: {
        ...contactPageData({ contactForm }),
        tenant: tenant.id,
        title: `Contact - ${tenant.name}`,
      },
    }),
  ])

  // Seed header and footer for this tenant
  await Promise.all([
    payload.create({
      collection: 'header',
      context: { disableRevalidate: true },
      data: {
        tenant: tenant.id,
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Posts',
              url: '/posts',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.create({
      collection: 'footer',
      context: { disableRevalidate: true },
      data: {
        tenant: tenant.id,
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: tenant.name,
              url: '#',
            },
          },
        ],
      },
    }),
  ])
}

export const seed: NonNullable<Config['onInit']> = async (
  payload
): Promise<void> => {
  payload.logger.info('Seeding database...')

  payload.logger.info(`— Clearing collections...`)

  // Clear the database
  await Promise.all(
    collections.map((collection) =>
      payload.db.deleteMany({ collection, req: {} as any, where: {} })
    )
  )

  await Promise.all(
    collections
      .filter((collection) =>
        Boolean(payload.collections[collection]?.config.versions)
      )
      .map((collection) =>
        payload.db.deleteVersions({ collection, req: {} as any, where: {} })
      )
  )

  payload.logger.info(`— Creating tenants...`)

  const [tenant1, tenant2, tenant3] = await Promise.all([
    payload.create({
      collection: 'tenants',
      data: {
        name: 'Acme Corp',
        slug: 'acme',
        domain: 'acme.localhost',
      },
    }),
    payload.create({
      collection: 'tenants',
      data: {
        name: 'Widget Inc',
        slug: 'widget',
        domain: 'widget.localhost',
      },
    }),
    payload.create({
      collection: 'tenants',
      data: {
        name: 'Demo Site',
        slug: 'demo',
        domain: 'demo.localhost',
      },
    }),
  ])

  payload.logger.info(`— Creating users...`)

  const [, multiTenantAdmin, tenant1Admin, tenant2Admin, tenant3Admin] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        email: 'demo@payloadcms.com',
        password: 'demo',
        role: 'super-admin',
      },
    }),
    payload.create({
      collection: 'users',
      data: {
        email: 'multi-admin@payloadcms.com',
        password: 'demo',
        tenants: [
          { tenant: tenant1.id, role: 'tenant-admin' },
          { tenant: tenant2.id, role: 'tenant-admin' },
        ],
        username: 'multi-admin',
      },
    }),
    payload.create({
      collection: 'users',
      data: {
        email: 'tenant1@payloadcms.com',
        password: 'demo',
        tenants: [{ tenant: tenant1.id, role: 'tenant-admin' }],
        username: 'tenant1',
      },
    }),
    payload.create({
      collection: 'users',
      data: {
        email: 'tenant2@payloadcms.com',
        password: 'demo',
        tenants: [{ tenant: tenant2.id, role: 'tenant-admin' }],
        username: 'tenant2',
      },
    }),
    payload.create({
      collection: 'users',
      data: {
        email: 'tenant3@payloadcms.com',
        password: 'demo',
        tenants: [{ tenant: tenant3.id, role: 'tenant-admin' }],
        username: 'tenant3',
      },
    }),
  ])

  payload.logger.info(`— Fetching media files...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] =
    await Promise.all([
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp'
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp'
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp'
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp'
      ),
    ])

  const mediaBuffers = {
    image1: image1Buffer,
    image2: image2Buffer,
    image3: image3Buffer,
    hero: hero1Buffer,
  }

  // Seed Tenant 1 (Acme Corp)
  payload.logger.info(`— Seeding Tenant 1 (Acme Corp)...`)

  const tenant1Media = await seedMediaForTenant(
    payload,
    tenant1.id,
    mediaBuffers
  )
  await seedCategoriesForTenant(payload, tenant1.id)
  await seedPostsForTenant(payload, tenant1.id, tenant1Media, tenant1Admin)

  const contactForm1 = await payload.create({
    collection: 'forms',
    depth: 0,
    data: { ...contactFormData, tenant: tenant1.id },
  })

  await seedPagesForTenant(payload, tenant1, tenant1Media, contactForm1)

  // Seed Tenant 2 (Widget Inc)
  payload.logger.info(`— Seeding Tenant 2 (Widget Inc)...`)

  try {
    const tenant2Media = await seedMediaForTenant(
      payload,
      tenant2.id,
      mediaBuffers
    )
    payload.logger.info(`  ✓ Media created for Tenant 2`)

    await seedCategoriesForTenant(payload, tenant2.id)
    payload.logger.info(`  ✓ Categories created for Tenant 2`)

    await seedPostsForTenant(payload, tenant2.id, tenant2Media, tenant2Admin)
    payload.logger.info(`  ✓ Posts created for Tenant 2`)

    const contactForm2 = await payload.create({
      collection: 'forms',
      depth: 0,
      data: { ...contactFormData, tenant: tenant2.id },
    })
    payload.logger.info(`  ✓ Form created for Tenant 2`)

    await seedPagesForTenant(payload, tenant2, tenant2Media, contactForm2)
    payload.logger.info(`  ✓ Pages created for Tenant 2`)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    payload.logger.error(`Error seeding Tenant 2: ${message}`)
    throw error
  }

  // Seed Tenant 3 (Demo Site)
  payload.logger.info(`— Seeding Tenant 3 (Demo Site)...`)

  const tenant3Media = await seedMediaForTenant(
    payload,
    tenant3.id,
    mediaBuffers
  )
  await seedCategoriesForTenant(payload, tenant3.id)
  await seedPostsForTenant(payload, tenant3.id, tenant3Media, tenant3Admin)

  const contactForm3 = await payload.create({
    collection: 'forms',
    depth: 0,
    data: { ...contactFormData, tenant: tenant3.id },
  })

  await seedPagesForTenant(payload, tenant3, tenant3Media, contactForm3)

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
