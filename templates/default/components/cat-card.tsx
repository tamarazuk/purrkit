import Image from 'next/image'
import { ButtonLink } from './button'
import type { Cat } from '@/data/cats'

export interface CatCardProps {
  cat: Cat
}

export default function CatCard({ cat }: CatCardProps) {
  return (
    <a href={`/cats/${cat.id}`} className="group block">
      <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border-none bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-4 pt-12 text-white">
            <h3 className="font-hand text-2xl font-bold">{cat.name}</h3>
            <p className="text-sm text-slate-200 opacity-90">
              {cat.gender} • {cat.age}
            </p>
          </div>
        </div>
        <div className="flex grow flex-col justify-between p-5">
          <div className="mb-4">
            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.traits.slice(0, 3).map((trait) => (
                <span
                  key={trait}
                  className="bg-primary-light text-primary inline-flex items-center rounded-full border-transparent px-3 py-1 text-xs font-normal"
                >
                  <svg
                    className="mr-1 h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <button className="border-primary text-primary hover:bg-primary flex h-11 w-full items-center justify-center rounded-full border-2 px-6 py-2 text-sm font-bold transition-all hover:text-white">
            Meet {cat.name}
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </button>
        </div>
      </div>
    </a>
  )
}

// Compact variant for featured sections
export function CatCardCompact({ cat }: CatCardProps) {
  return (
    <div className="group border-border bg-card relative overflow-hidden rounded-lg border transition-all hover:shadow-md">
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="96px"
          />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <h4 className="text-card-foreground truncate font-semibold">
              {cat.name}
            </h4>
            <p className="text-muted-foreground text-xs">
              {cat.age} • {cat.gender}
            </p>
          </div>
          <ButtonLink
            href={`/cats/${cat.id}`}
            variant="outline"
            size="sm"
            className="self-start text-xs"
          >
            View Details
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
