import type { Metadata } from 'next'
import { mission } from '@/content/mission'
import { ButtonLink } from '@/components/button'

// UPDATE: Customize your About page metadata
export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Whiskers Cat Rescue, our mission, and how we help cats in need find their forever homes.',
}

// UPDATE: Add your team members or volunteers here
const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Director',
    bio: "Sarah founded Whiskers Cat Rescue in 2015 after fostering her first cat. She's passionate about making a difference in the lives of cats.",
  },
  {
    name: 'Mike Chen',
    role: 'Volunteer Coordinator',
    bio: 'Mike manages our amazing volunteer team and ensures every event runs smoothly.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Foster Program Manager',
    bio: 'Emily oversees our foster program and works tirelessly to match cats with the perfect temporary homes.',
  },
  {
    name: 'David Thompson',
    role: 'Adoption Counselor',
    bio: 'David helps families find their perfect feline companion and ensures successful adoptions.',
  },
]

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-hand mb-6 text-4xl font-bold text-slate-900 md:text-6xl">
              Our Story
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Dedicated to saving lives, one meow at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-hand mb-6 text-3xl font-bold text-slate-900">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Whiskers Cat Rescue was founded in 2015 when our founder, Sarah,
                rescued her first stray cat from the streets of Portland. What
                started as a personal mission quickly grew into a community-wide
                effort to help cats in need.
              </p>
              <p>
                Over the years, we've rescued, rehabilitated, and rehomed over
                500 cats. From tiny kittens to senior cats, from healthy cats to
                those needing special medical care, we believe every cat
                deserves a chance at a happy life.
              </p>
              <p>
                Today, we're proud to work with a network of dedicated
                volunteers, foster families, and community partners who share
                our passion for feline welfare. Together, we're making a real
                difference in the lives of cats across the Portland area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-primary/5 rounded-3xl p-8">
                <h3 className="text-primary mb-4 text-xl font-bold">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-slate-700">
                  {mission.statement}
                </p>
              </div>
              <div className="bg-secondary/5 rounded-3xl p-8">
                <h3 className="text-secondary mb-4 text-xl font-bold">
                  {mission.values[0]?.title || 'Our Vision'}
                </h3>
                <p className="leading-relaxed text-slate-700">
                  {mission.values[0]?.description ||
                    'A community where every cat is valued, protected, and has a safe place to call home.'}
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-hand mb-6 text-3xl font-bold text-slate-900">
                How We Work
              </h2>
              <div className="space-y-6 leading-relaxed text-slate-600">
                <p>
                  We rely 100% on donations and volunteer power. We do not
                  receive government funding. Every dollar donated goes directly
                  to the medical care, food, and supplies for our cats.
                </p>
                <p>
                  Our rigorous adoption process ensures that our cats go to
                  safe, committed homes. We provide lifetime support to our
                  adopters because once a Whiskers cat, always family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-hand mb-12 text-center text-3xl font-bold text-slate-900">
              How We Help
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-slate-900">
                      Medical Care
                    </h3>
                    <p className="text-slate-600">
                      Every cat receives complete veterinary care including
                      vaccinations, spay/neuter, and treatment for any medical
                      issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold">Foster Network</h3>
                    <p className="text-slate-600">
                      Our foster families provide temporary homes where cats can
                      decompress, socialize, and prepare for adoption.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold">Perfect Matches</h3>
                    <p className="text-slate-600">
                      We carefully match cats with adopters to ensure
                      successful, lifetime placements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold">Education & Support</h3>
                    <p className="text-slate-600">
                      We provide resources and ongoing support to ensure cats
                      and their families thrive together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-hand mb-4 text-center text-3xl font-bold text-slate-900">
              Our Team
            </h2>
            <p className="mb-12 text-center text-lg text-slate-600">
              Meet the dedicated people making a difference every day
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-1 text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-3 text-sm font-medium">
                    {member.role}
                  </p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-hand mb-4 text-3xl font-bold text-slate-900">
            Want to Join Our Mission?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
            There are many ways to get involved and help cats in need.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/foster" variant="primary" size="lg">
              Become a Foster
            </ButtonLink>
            <ButtonLink href="/donate" variant="accent" size="lg">
              Make a Donation
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
