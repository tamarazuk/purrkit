import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import redirects from '@/plugins/redirects'
import nestedDocs from '@/plugins/nestedDocs'
import seo from '@/plugins/seo'
import formBuilder from '@/plugins/formBuilder'
import search from '@/plugins/search'
import multiTenant from '@/plugins/multiTenant'

import { Categories } from '@/collections/Categories'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Posts } from '@/collections/Posts'
import { Tenants } from '@/collections/Tenants'
import { Users } from '@/collections/Users'

import { Header } from '@/collections/Globals/Header'
import { Footer } from '@/collections/Globals/Footer'

import { seed } from '@/seed'

import { configuredRichText } from '@/fields/configuredRichText'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/admin/BeforeLogin'],
      views: {
        createFirstUser: {
          Component: '@/components/admin/CreateFirstUserTemplate',
        },
      },
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [
    Pages,
    Posts,
    Categories,
    Media,
    Header,
    Footer,
    Users,
    Tenants,
  ],
  // Using SQLite adapter for the template. Udate this to use your preferred database adapter.
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
  onInit: async (args) => {
    // Seeding is handled via the /api/seed endpoint to avoid running during admin requests.
    void args
  },
  editor: configuredRichText,
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  secret: process.env.PAYLOAD_SECRET as string,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  plugins: [
    redirects,
    nestedDocs,
    seo,
    formBuilder,
    search,
    // Multi-tenant plugin MUST be last so it can wrap all other collections
    multiTenant,
  ],
})
