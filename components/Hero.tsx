'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { salon, images } from '@/lib/content';

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.from('[data-hero-word] > span', {
        yPercent: 110,
        duration: 1.4,
        stagger: 0.08,
      })
        .from('[data-hero-desc]',  { opacity: 0, y: 18, duration: 1.1 }, '-=1.0')
        .from('[data-hero-label]', { opacity: 0, y: 12, duration: 0.9 }, '-=1.1')
        .from('[data-hero-cta]',   { opacity: 0, y: 14, duration: 0.9, stagger: 0.08 }, '-=0.9');
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url('${images.heroMain}')` }}
        role="img"
        aria-label="DejaVou Salon"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(33,33,33,0.28) 0%, rgba(0,0,0,0.00) 38%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1720px] flex-col justify-between px-6 md:px-10 pt-[100px] pb-12 md:pb-14 text-cream">
        {/* Top-right: eyebrow + describe paragraph */}
        <div className="flex flex-col items-start gap-8 md:flex-row md:justify-end md:items-start md:gap-16 pt-6 md:pt-10">
          <div data-hero-label className="label text-cream/80">
            Montvale, NJ &nbsp;·&nbsp; Since 2016
          </div>
          <p
            data-hero-desc
            className="max-w-md text-[15px] leading-[1.6] text-cream/85 md:text-[17px] md:leading-[1.55]"
          >
            For us, cutting is a craft practiced by hands that know the room.
            A neighborhood studio on Railroad Ave for precision cuts,
            editorial color, lash work, and the quiet kind of care that
            carries over to the rest of the week.
          </p>
        </div>

        {/* Bottom-left: massive wordmark */}
        <div className="flex flex-col gap-10">
          <h1
            className="hero-word text-cream"
            aria-label="DejaVou"
          >
            <span data-hero-word className="block overflow-hidden">
              <span className="inline-block will-change-transform">DejaVou</span>
            </span>
          </h1>

          <div className="flex flex-col-reverse gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="flex flex-wrap items-center gap-4">
              <a data-hero-cta href={salon.phone.href} className="btn-white">
                Book online
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link data-hero-cta href="/services" className="btn-white">
                The menu
              </Link>
            </div>
            <div data-hero-cta className="label text-cream/70 flex items-center gap-5">
              <span className="hidden md:block h-px w-10 bg-cream/60" />
              Scroll &nbsp;&darr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
