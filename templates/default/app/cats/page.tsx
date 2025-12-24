import type { Metadata } from 'next';
import CatCard from '@/components/cat-card';
import { cats } from '@/data/cats';

export const metadata: Metadata = {
  title: 'Adoptable Cats',
  description: 'Browse our wonderful cats looking for their forever homes. Find your perfect feline companion today!',
};

export default function Cats() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-hand text-4xl md:text-6xl font-bold mb-6 text-slate-900">Adoptable Cats</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              These furry friends are ready to meet their new families.
            </p>
          </div>
        </div>
      </section>

      {/* Cats Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cats.map((cat) => (
              <CatCard key={cat.id} cat={cat} />
            ))}
          </div>

          {/* Empty State (if no cats) */}
          {cats.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600">
                We don't have any cats available for adoption right now, but check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-hand text-3xl font-bold mb-12 text-center text-slate-900">Adoption Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold mb-2">Browse</h3>
                <p className="text-sm text-slate-600">
                  Look through our adoptable cats and find one that catches your eye
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-sm text-slate-600">
                  Fill out our adoption application form
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold mb-2">Meet</h3>
                <p className="text-sm text-slate-600">
                  Schedule a meet-and-greet with your potential new friend
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-bold mb-2">Adopt</h3>
                <p className="text-sm text-slate-600">
                  Complete the adoption and bring your new cat home!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
