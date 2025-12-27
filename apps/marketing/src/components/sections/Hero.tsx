import GitHubIcon from "@/components/icons/GitHubIcon";
import { GITHUB_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2 opacity-50">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl mix-blend-multiply" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="badge badge-lg h-auto gap-2 border-primary/30 bg-primary/10 px-4 py-3 text-primary">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          In early access
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-base-content sm:text-5xl lg:text-7xl">
          Websites &amp; ops for cat rescues.{" "}
          <span className="text-secondary underline decoration-secondary/30 decoration-4 underline-offset-4">
            Simplified.
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-base-content/70 sm:text-xl">
          Launch a beautiful website, then keep cats, forms, and updates organized
          in one friendly portal. No tech skills required.
        </p>

        <div className="flex w-full flex-wrap justify-center gap-4">
          <a
            href="#waitlist"
            className="btn btn-secondary btn-lg rounded-xl border-none px-8 shadow-xl shadow-secondary/20 transition-all duration-200 hover:-translate-y-1"
          >
            Join the Waitlist
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg rounded-xl px-8"
          >
            <GitHubIcon width={20} height={20} />
            View on GitHub
          </a>
        </div>

        <div className="group relative mt-16 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-2xl lg:aspect-[21/9]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-base-200">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-base-200 bg-base-100 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-base-content/20"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h.01" />
                <path d="M15 9h.01" />
                <path d="M9 15h.01" />
                <path d="M15 15h.01" />
              </svg>
            </div>
            <p className="font-medium text-base-content/50">
              Dashboard preview coming soon
            </p>
          </div>

          <div className="absolute top-4 left-4 right-4 h-8 rounded-lg border border-base-200 bg-base-100 opacity-50" />
          <div className="absolute top-16 left-4 hidden h-full w-48 rounded-lg border border-base-200 bg-base-100 opacity-30 sm:block" />
        </div>
      </div>
    </section>
  );
}
