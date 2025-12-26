import { GITHUB_URL } from "@/lib/constants";

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="border-y border-base-200 bg-base-100 py-24"
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="mb-6 inline-flex items-center justify-center rounded-full bg-success/20 p-3 text-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
        <h2 className="mb-6 text-3xl font-bold text-base-content md:text-4xl">
          Built by the community, for the community
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-base-content/70">
          PurrKit is open source and free to use. We’re building it with
          developers, designers, and rescue volunteers who want better tools for
          the day-to-day work of saving lives.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-neutral btn-lg w-full rounded-xl px-8 sm:w-auto"
          >
            Contribute
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg w-full rounded-xl px-8 sm:w-auto"
          >
            Sponsor PurrKit
          </a>
        </div>
      </div>
    </section>
  );
}
