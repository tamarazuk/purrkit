import Link from 'next/link'
import { siteConfig } from '@/config/site'
import SocialIcons from '@/components/social-icons'
import {
  HeartIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
} from '@/components/icons'
import { WaveDivider } from '@/components/wave-divider'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-200">
      <WaveDivider />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-hand flex items-center gap-2 text-2xl font-bold text-white">
              <HeartIcon className="text-secondary h-6 w-6" />
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcons
                size="sm"
                backgroundColorClass="bg-slate-800"
                iconColorClass="text-slate-400"
                hoverBackgroundColorClass="hover:bg-primary"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-secondary text-sm text-slate-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <LocationIcon className="text-primary h-5 w-5 shrink-0" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <PhoneIcon className="text-primary h-5 w-5 shrink-0" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <EmailIcon className="text-primary h-5 w-5 shrink-0" />
                {siteConfig.email}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Get Updates</h4>
            <p className="text-sm text-slate-400">
              Subscribe to hear about new arrivals and rescue stories.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="focus:ring-primary flex-1 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:outline-none"
              />
              <button className="bg-secondary hover:bg-secondary/90 shadow-secondary/20 h-11 rounded-full px-6 py-2 text-sm font-bold whitespace-nowrap text-white shadow-md transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
