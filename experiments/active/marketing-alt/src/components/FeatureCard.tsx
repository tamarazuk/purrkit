import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
}

export function FeatureCard({ icon: Icon, title, description, comingSoon }: FeatureCardProps) {
  return (
    <div
      className="group relative p-7 md:p-8 rounded-2xl bg-base-200/80 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-base-200/90 hover:shadow-[0_24px_50px_-32px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none dark:bg-base-200/50 dark:hover:bg-base-200/60 dark:shadow-[0_20px_48px_-30px_rgba(0,0,0,0.7)] dark:focus-visible:ring-offset-base-300 dark:before:from-white/5"
      tabIndex={0}
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative z-10">
        {comingSoon && (
          <span
            className="absolute right-0 top-0 inline-flex items-center rounded-full bg-secondary/15 px-2.5 py-1 text-xs font-semibold text-secondary/90 ring-1 ring-secondary/20"
            title="In active development"
          >
            Coming soon
          </span>
        )}

        <div className="w-12 h-12 rounded-2xl bg-base-200/70 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 dark:bg-base-200/50">
          <Icon className="w-6 h-6 text-secondary/90" />
        </div>
        
        <h3 className="text-xl font-semibold font-display mb-3 text-base-content">
          {title}
        </h3>
        
        <p className="text-base-content/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
