import BrandLogo from "@/components/BrandLogo";
import HeaderMobileMenu from "@/components/HeaderMobileMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#open-source", label: "Open Source" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-200/60 bg-base-100/80 backdrop-blur-md supports-[backdrop-filter]:bg-base-100/60">
      <div className="navbar mx-auto h-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <HeaderMobileMenu items={navItems} />

          <a href="#" className="flex items-center gap-2 select-none">
            <BrandLogo />
          </a>
        </div>

        <nav className="navbar-center hidden lg:flex" aria-label="Primary">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium text-base-content/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="hover:text-primary focus:text-primary hover:bg-transparent"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-end gap-3">
          <ThemeToggle />
          <a
            className="btn btn-secondary rounded-xl border-none px-6 shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30"
            href="#waitlist"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
