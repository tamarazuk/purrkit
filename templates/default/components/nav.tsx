'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
              <svg className="w-5 h-5 fill-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
            </div>
            <span className="font-hand font-bold text-xl md:text-2xl text-slate-800 group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                      pathname === item.href ? 'text-primary font-bold' : 'text-slate-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? 'w-full' : ''
                    }`} />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/donate">
              <button className="h-9 px-3 rounded-full bg-secondary text-white hover:bg-secondary/90 shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 font-bold text-sm transition-all active:scale-95">
                Donate Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-xl">
            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-base font-medium ${
                      pathname === item.href ? 'text-primary' : 'text-slate-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/donate" onClick={() => setIsOpen(false)}>
                  <button className="w-full h-11 px-6 py-2 rounded-full bg-secondary text-white hover:bg-secondary/90 shadow-md shadow-secondary/20 font-bold text-sm transition-all">
                    Donate Now
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
