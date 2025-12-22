import type { Metadata } from 'next';
import Button from '@/components/button';
import { donationInfo } from '@/content/donation-tiers';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support our mission to rescue and rehome cats in need. Every donation makes a difference.',
};

export default function Donate() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary-light/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-hand text-4xl md:text-6xl font-bold mb-6">
              {donationInfo.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {donationInfo.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-hand text-3xl font-bold mb-12 text-center">
              Choose Your Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationInfo.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-3">
                    ${tier.amount}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tier.description}
                  </p>
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">
                      INCLUDES:
                    </p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm">
                          <span className="text-primary">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* UPDATE: Add your payment processing link */}
                  <Button variant="primary" size="sm" className="w-full">
                    Donate ${tier.amount}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Amount */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Custom Amount</h2>
            <p className="text-muted-foreground mb-6">
              Want to donate a different amount? Enter your own contribution.
            </p>
            {/* UPDATE: Replace with your payment form */}
            <div className="flex gap-4">
              <input
                type="number"
                min="1"
                placeholder="Enter amount"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button variant="primary" size="md">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-hand text-3xl font-bold mb-8 text-center">
              {donationInfo.impact.title}
            </h2>
            <div className="space-y-4">
              {donationInfo.impact.breakdown.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.category}</span>
                    <span className="text-primary font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gradient-to-b from-background to-primary-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-hand text-3xl font-bold mb-12 text-center">
              Other Ways to Help
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {donationInfo.otherWays.map((way) => (
                <div key={way.title} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">{way.title}</h3>
                  <p className="text-muted-foreground">{way.description}</p>
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
            Every Dollar Saves Lives
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Your generosity helps us continue our mission to rescue, rehabilitate, and rehome cats in need.
          </p>
          <p className="text-sm text-white/75">
            We are a registered 501(c)(3) nonprofit. All donations are tax-deductible.
          </p>
        </div>
      </section>
    </main>
  );
}
