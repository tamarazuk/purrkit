import { ButtonLink } from '@/components/button'
import CatCard from '@/components/cat-card'
import { cats } from '@/data/cats'
import { mission } from '@/content/mission'

// UPDATE: Customize your home page hero section
export default function Home() {
  const featuredCats = cats.filter((cat) => cat.featured).slice(0, 4)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        {/* Abstract Background Shapes */}
        <div className="bg-primary/10 absolute top-0 right-0 -z-10 h-full w-2/3 rounded-bl-[100px]" />
        <div className="bg-secondary/10 absolute bottom-0 left-0 -z-10 h-1/2 w-1/3 rounded-tr-[100px]" />

        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <div className="space-y-8">
            <div className="text-primary inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-medium shadow-sm">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              <span>We've saved 500+ cats this year!</span>
            </div>

            <h1 className="text-5xl leading-[1.1] font-bold text-slate-900 md:text-7xl">
              Find your <br />
              <span className="text-primary font-hand relative inline-block">
                Purrfect
                <svg
                  className="text-secondary/40 absolute -bottom-2 left-0 -z-10 h-3 w-full"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              Match
            </h1>

            <p className="max-w-lg text-xl leading-relaxed text-slate-600">
              Every cat deserves a loving home. Join us in our mission to
              rescue, rehabilitate, and rehome cats in need.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/cats" variant="primary" size="lg">
                Adopt a Cat
              </ButtonLink>
              <ButtonLink href="/foster" variant="outline" size="lg">
                Become a Foster
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rotate-3 overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1443610762694-d993e81f69d9?w=1200&q=80"
                alt="Happy cat"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Decor elements */}
            <div className="bg-secondary absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-20 blur-2xl" />
            <div className="bg-primary absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary relative overflow-hidden py-16">
        <div className="relative z-10 container mx-auto grid grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {mission.stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="font-hand text-4xl font-bold text-white md:text-5xl">
                {stat.value}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cats */}
      <section className="bg-cream py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
            <h2 className="font-hand text-4xl font-bold text-slate-900">
              Waiting for Love
            </h2>
            <p className="text-lg text-slate-600">
              Meet some of our newest residents looking for their forever homes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {featuredCats.map((cat) => (
              <CatCard key={cat.id} cat={cat} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink
              href="/cats"
              variant="outline"
              size="lg"
              className="border-2 px-8"
            >
              View All Cats
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            {mission.values.map((value, index) => (
              <div
                key={value.title}
                className="bg-cream hover:bg-primary/5 hover:border-primary/20 space-y-6 rounded-3xl border border-transparent p-8 text-center transition-colors"
              >
                <div className="text-primary mx-auto flex h-16 w-16 rotate-3 items-center justify-center rounded-2xl bg-white shadow-md transition-transform hover:rotate-6">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {index === 0 && (
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    )}
                    {index === 1 && (
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    )}
                    {index === 2 && (
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548546738-8509cb246ed3?w=1600&q=80"
            alt="Background"
            className="h-full w-full object-cover opacity-20 mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 container mx-auto space-y-8 px-4 text-center">
          <h2 className="font-hand text-4xl font-bold text-white md:text-5xl">
            Can't Adopt? You Can Still Help!
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Your donations provide food, medical care, and shelter for cats
            waiting for their forever homes.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <ButtonLink
              href="/donate"
              variant="primary"
              size="lg"
              className="shadow-xl"
            >
              Make a Donation
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
