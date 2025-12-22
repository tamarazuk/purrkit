import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/button';
import { cats } from '@/data/cats';

interface CatPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: CatPageProps): Promise<Metadata> {
  const { id } = await params;
  const cat = cats.find((c) => c.id === id);

  if (!cat) {
    return {
      title: 'Cat Not Found',
    };
  }

  return {
    title: cat.name,
    description: cat.description,
  };
}

export async function generateStaticParams() {
  return cats.map((cat) => ({
    id: cat.id,
  }));
}

export default async function CatPage({ params }: CatPageProps) {
  const { id } = await params;
  const cat = cats.find((c) => c.id === id);

  if (!cat) {
    notFound();
  }

  // Get related cats (excluding current cat)
  const relatedCats = cats.filter((c) => c.id !== cat.id).slice(0, 3);

  return (
    <main>
      {/* Cat Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{cat.name}</h1>
                  <p className="text-xl text-muted-foreground">
                    {cat.age} • {cat.gender}
                  </p>
                </div>

                {/* Traits */}
                <div className="flex flex-wrap gap-2">
                  {cat.traits.map((trait) => (
                    <span
                      key={trait}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">About {cat.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                  <h3 className="font-bold text-lg">Adoption Information</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Spayed/Neutered and up-to-date on vaccinations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Health checked by licensed veterinarian</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Microchipped for identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Includes starter supply of food and toys</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <ButtonLink href="/contact" variant="primary" size="lg" className="flex-1">
                    Apply to Adopt {cat.name}
                  </ButtonLink>
                  <ButtonLink href="/cats" variant="outline" size="lg" className="flex-1">
                    View All Cats
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cats */}
      {relatedCats.length > 0 && (
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedCats.map((relatedCat) => (
                  <div key={relatedCat.id} className="group relative overflow-hidden rounded-xl border border-border bg-background">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={relatedCat.image}
                        alt={relatedCat.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{relatedCat.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {relatedCat.age} • {relatedCat.gender}
                      </p>
                      <ButtonLink
                        href={`/cats/${relatedCat.id}`}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        View Details
                      </ButtonLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
