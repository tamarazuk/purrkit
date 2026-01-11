import { Link } from "wouter";
import { Moon, Sun, Menu, X, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/lib/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Open Source", href: "#open-source" },
    { name: "FAQ", href: "#faq" },
  ];

  const headerClasses = scrolled
    ? "bg-slate-900/75 text-base-100 backdrop-blur-md border-b border-white/10 shadow-sm py-3"
    : "bg-transparent text-base-content py-5";
  const navLinkClasses = scrolled
    ? "text-white/90 hover:text-white"
    : theme === "purrkitdark"
    ? "text-white/80 hover:text-white"
    : "text-base-content/80 hover:text-base-content";
  const logoSrc = scrolled
    ? "/purrkit-logo-dark-bg.svg"
    : theme === "purrkitdark"
    ? "/purrkit-logo-dark-bg.svg"
    : "/purrkit-logo-light-bg.svg";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity"
        >
          <img src={logoSrc} alt="PurrKit Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors font-display tracking-wide ${navLinkClasses}`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 border-l border-base-content/10 pl-6">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle btn-sm hover:rotate-12 transition-transform focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              aria-label="Toggle theme"
            >
              {theme === "purrkitdark" ? (
                <Sun className="w-5 h-5 text-warning" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            <a
              href="#waitlist"
              className="btn btn-primary btn-sm rounded-full px-6 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm"
          >
            {theme === "purrkitdark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 border-t border-base-200 shadow-xl p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium p-2 hover:bg-base-200 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-base-200 my-2" />
          <a
            href="https://github.com/purrkit"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-2 hover:bg-base-200 rounded-lg"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="#waitlist"
            className="btn btn-primary w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  );
}
