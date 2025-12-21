import { PawPrint } from 'lucide-react'

interface GeneratorLayoutProps {
  children: React.ReactNode
}

export function GeneratorLayout({ children }: GeneratorLayoutProps) {
  return (
    <div className="from-cream via-cream-light to-teal-light min-h-screen bg-linear-to-br dark:from-slate-900 dark:via-slate-800 dark:to-teal-950">
      {/* Decorative paw prints */}
      <div className="text-teal/10 dark:text-teal/20 absolute top-8 left-8">
        <PawPrint className="h-16 w-16 rotate-12" />
      </div>
      <div className="text-apricot/10 dark:text-apricot/20 absolute top-32 right-16">
        <PawPrint className="h-12 w-12 -rotate-45" />
      </div>
      <div className="text-teal/10 dark:text-teal/20 absolute bottom-16 left-1/4">
        <PawPrint className="h-10 w-10 rotate-25" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-12 md:py-16">
        {children}
      </div>
    </div>
  )
}
