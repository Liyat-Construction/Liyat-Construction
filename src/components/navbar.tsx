/**
 * Navbar Component
 * Transparent glass navbar that floats over hero
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container } from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const { desktop: allNavLinks, tablet: tabletNavLinks, cta } = siteConfig.navigation;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-brand-primary/95 border-b border-white/10 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'flex items-center gap-2 text-xl font-bold transition-colors',
              'hover:text-brand-accent text-white'
            )}
          >
            <div className="border-brand-accent/60 flex h-8 w-8 items-center justify-center rounded-lg border bg-white/10">
              <Image
                src="/logo.png"
                alt={siteConfig.logoAlt}
                width={24}
                height={24}
                className="h-6 w-auto object-contain"
              />
            </div>
            <span>{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation - lg and up */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {allNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  'hover:text-brand-accent text-white/80'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href={cta.href}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                'bg-brand-primary hover:bg-brand-primary-dark text-white',
                'dark:bg-brand-primary dark:hover:bg-brand-primary-dark dark:text-white'
              )}
            >
              {cta.label}
            </Link>

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle variant="navbar" />
            </div>
          </div>

          {/* Tablet Navigation - md only (no Contact) */}
          <div className="hidden md:flex md:items-center md:gap-5 lg:hidden">
            {tabletNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  'hover:text-brand-accent text-white/80'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                'bg-brand-primary hover:bg-brand-primary-dark text-white',
                'dark:bg-brand-primary dark:hover:bg-brand-primary-dark dark:text-white'
              )}
            >
              {cta.label}
            </Link>

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle variant="navbar" />
            </div>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle variant="navbar" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn('rounded-lg p-2 transition-colors', 'text-white hover:bg-white/10')}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={cn(
              'border-t py-4 backdrop-blur-md md:hidden',
              'bg-brand-primary/95 border-white/10'
            )}
          >
            <div className="flex flex-col gap-4">
              {allNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-base font-medium transition-colors',
                    'hover:text-brand-accent text-white/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'mt-2 rounded-lg px-4 py-2 text-center text-sm font-medium',
                  'bg-brand-primary hover:bg-brand-primary-dark text-white',
                  'dark:bg-brand-primary dark:hover:bg-brand-primary-dark dark:text-white'
                )}
              >
                {cta.label}
              </Link>

              {/* Mobile Theme Toggle */}
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm text-white/60">Theme</span>
                <ThemeToggle variant="navbar" />
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
