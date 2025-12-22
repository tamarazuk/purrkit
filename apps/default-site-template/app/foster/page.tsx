import type { Metadata } from 'next';
import { ButtonLink } from '@/components/button';
import { fosterInfo } from '@/content/foster-info';

export const metadata: Metadata = {
  title: 'Foster Program',
  description: 'Become a foster parent and save lives. Learn about our foster program and how you can make a difference.',
};

export default function Foster() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-light/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-hand text-4xl md:text-6xl font-bold mb-6">
              {fosterInfo.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {fosterInfo.hero.description}
            </p>
            <ButtonLink href="/contact" variant="primary" size="lg">
              Apply to Foster
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-hand text-3xl font-bold mb-12 text-center">
              Why Foster?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {fosterInfo.benefits.map((benefit) => (
                <div key={benefit.title} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-hand text-3xl font-bold mb-12 text-center">
              How It Works
            </h2>
            <div className="space-y-8">
              {fosterInfo.process.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-hand text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {fosterInfo.faq.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold mb-3">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-hand text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Save Lives?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Join our foster family and experience the joy of helping cats find their forever homes.
          </p>
          <ButtonLink href="/contact" variant="accent" size="lg">
            Apply Now
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
