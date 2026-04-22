'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { salon } from '@/lib/content';

type Tone = 'dark' | 'light';

export default function Nav({ tone = 'dark' }: { tone?: Tone }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active: Tone = scrolled ? 'dark' : tone;
  const color = active === 'dark' ? 'text-ink' : 'text-cream';
  const borderCol = active === 'dark' ? 'border-ink/15' : 'border-cream/25';
  const bg =
    scrolled
      ? 'bg-cream/95 backdrop-blur-md'
      : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${bg} ${color}`}
      >
        <div
          className={`mx-auto flex max-w-[1720px] items-center justify-between px-6 md:px-10 transition-all duration-500 ${
            scrolled ? 'h-[68px]' : 'h-[84px]'
          } ${scrolled ? 'border-b border-ink/10' : 'border-b border-transparent'}`}
        >
          <button
            onClick={() => setOpen(true)}
            className={`flex items-center gap-3 tracking-[0.22em] text-[12px] uppercase ${color}`}
            aria-label="Open menu"
          >
            <span className="relative inline-block h-[10px] w-[22px]">
              <span className="absolute left-0 right-0 top-[1px] block h-[1px] bg-current" />
              <span className="absolute left-0 right-0 bottom-[1px] block h-[1px] bg-current" />
            </span>
            Menu
          </button>

          <Link href="/" aria-label="DejaVou" className={`leading-none ${color}`}>
            <span className="wordmark-sm text-[22px] md:text-[26px]">DejaVou</span>
          </Link>

          <a
            href={salon.phone.href}
            className={`hidden md:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 tracking-[0.14em] text-[11.5px] uppercase transition-colors ${
              active === 'dark'
                ? 'border-ink text-ink hover:bg-ink hover:text-cream'
                : 'border-cream text-cream hover:bg-cream hover:text-ink'
            }`}
          >
            Reservation
          </a>

          <a
            href={salon.phone.href}
            className={`md:hidden tracking-[0.14em] text-[11px] uppercase ${color}`}
          >
            Call
          </a>
        </div>
      </header>

      {/* Full-screen Menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-cream text-ink transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-hidden={!open}
      >
        <div className="mx-auto flex h-full max-w-[1720px] flex-col px-6 md:px-10">
          <div className="flex h-[84px] items-center justify-between">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 tracking-[0.22em] text-[12px] uppercase"
              aria-label="Close menu"
            >
              <span className="relative inline-block h-[14px] w-[14px]">
                <span className="absolute left-1/2 top-1/2 h-[1px] w-[18px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-ink" />
                <span className="absolute left-1/2 top-1/2 h-[1px] w-[18px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-ink" />
              </span>
              Close
            </button>
            <Link href="/" onClick={() => setOpen(false)} className="leading-none">
              <span className="wordmark-sm text-[22px] md:text-[26px]">DejaVou</span>
            </Link>
            <div className="w-[80px]" />
          </div>

          <nav className="flex flex-1 flex-col justify-center">
            <ul className="space-y-2 md:space-y-4">
              {[
                { href: '/',         label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about',    label: 'About' },
                { href: '/contact',  label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display uppercase tracking-[0.03em] text-[clamp(56px,10vw,140px)] leading-[0.96] block transition-opacity duration-300 hover:opacity-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between pb-12 border-t border-ink/15 pt-8">
            <div>
              <div className="label mb-2 text-ink/60">Visit</div>
              <a href={salon.address.maps} target="_blank" rel="noreferrer" className="text-[15px] block hover:opacity-60 transition-opacity">
                {salon.address.line1}<br/>{salon.address.line2}
              </a>
            </div>
            <div>
              <div className="label mb-2 text-ink/60">Call</div>
              <a href={salon.phone.href} className="text-[15px] hover:opacity-60 transition-opacity">
                {salon.phone.display}
              </a>
            </div>
            <div>
              <div className="label mb-2 text-ink/60">Email</div>
              <a href={salon.email.href} className="text-[15px] hover:opacity-60 transition-opacity break-all">
                {salon.email.address}
              </a>
            </div>
            <div>
              <div className="label mb-2 text-ink/60">Social</div>
              <a href={salon.facebook} target="_blank" rel="noreferrer" className="text-[15px] hover:opacity-60 transition-opacity">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
