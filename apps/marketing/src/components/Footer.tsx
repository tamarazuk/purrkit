import GitHubIcon from "@/components/icons/GitHubIcon";
import { GITHUB_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="footer footer-center rounded border-t border-base-200 bg-base-100 p-10 text-base-content">
      <nav className="grid grid-flow-col gap-4" aria-label="Footer">
        <a className="link link-hover text-base-content/70 transition-colors hover:text-primary" href="#open-source">
          About us
        </a>
        <a className="link link-hover text-base-content/70 transition-colors hover:text-primary" href="#waitlist">
          Contact
        </a>
        <a className="link link-hover text-base-content/70 transition-colors hover:text-primary" href="#faq">
          Privacy Policy
        </a>
      </nav>

      <div className="grid grid-flow-col gap-6 text-base-content/60">
        <a
          className="cursor-pointer transition-colors hover:text-primary"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon width={24} height={24} />
        </a>
      </div>

      <p className="text-base-content/60">Made with love for cats everywhere.</p>
    </footer>
  );
}
