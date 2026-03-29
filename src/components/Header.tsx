import { useEffect, useState } from 'react'
import logoUrl from '../assets/homeImages/logo.png'

const navLinks = [
  { href: '#who-we-are', label: 'Who we are', hasMenu: true },
  { href: '#who-we-treat', label: 'Who we treat', hasMenu: true },
  { href: '#services', label: 'Services', hasMenu: false },
  { href: '#resources', label: 'Resources', hasMenu: true },
] as const

function ChevronDown({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="bg-header sticky top-0 z-50">
      <a
        href="#main"
        className="bg-gold-gradient text-btn-text sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:px-4 focus:py-2 focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
            decoding="async"
          />
          <span className="text-nav font-sans text-sm font-semibold tracking-wide uppercase sm:text-base">
            Ada Psychiatry
          </span>
        </a>

        <nav className="text-nav hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map(({ href, label, hasMenu }) => (
            <a
              key={href}
              href={href}
              className="hover:text-gold-mid flex items-center gap-1 text-sm font-medium transition-colors"
            >
              {label}
              {hasMenu ? <ChevronDown /> : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="#book"
            className="bg-gold-gradient text-btn-text focus-visible:ring-gold-line inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
          >
            Book an Appointment
          </a>
        </div>

        <button
          type="button"
          className="text-nav inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 px-4 py-4 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="text-nav flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#book"
              className="bg-gold-gradient text-btn-text mt-3 rounded-full px-3 py-3 text-center text-base font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Book an Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
