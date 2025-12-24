import type { Metadata } from 'next'
import ContactForm from '@/components/contact-form'
import { siteConfig } from '@/config/site'
import SocialIcons from '@/components/social-icons'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with us about adoption, fostering, volunteering, or general inquiries.',
}

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="from-primary-light/20 to-background bg-linear-to-b py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-hand mb-6 text-4xl font-bold md:text-6xl">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-xl">
              We'd love to hear from you! Whether you're interested in adopting,
              fostering, volunteering, or just have a question, we're here to
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-hand mb-6 text-3xl font-bold">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Fill out the form and we'll get back to you as soon as
                  possible, usually within 24-48 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-primary hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">Address</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card border-border rounded-xl border p-6">
                <h3 className="mb-4 font-bold">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 font-bold">Follow Us</h3>
                <SocialIcons />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border-border rounded-xl border p-8">
              <h2 className="font-hand mb-6 text-2xl font-bold">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
