import { Github, Twitter, Heart } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-base-200 pt-16 pb-8 border-t border-base-content/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <img
              src={
                theme === "purrkitdark"
                  ? "/purrkit-logo-dark-bg.svg"
                  : "/purrkit-logo-light-bg.svg"
              }
              alt="PurrKit"
              className="h-8 mb-6"
            />
            <p className="text-base-content/70 mb-6">
              Empowering cat rescues with modern web tools, so they can focus on
              saving lives.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="btn btn-circle btn-ghost btn-sm hover:bg-primary/10 hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-ghost btn-sm hover:bg-primary/10 hover:text-primary"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Showcase
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#open-source"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-content/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-base-content/50">
            © {new Date().getFullYear()} PurrKit. All rights reserved.
          </p>
          <p className="text-sm text-base-content/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            for cats everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
