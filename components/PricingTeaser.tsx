import Link from 'next/link';
import { services } from '@/lib/content';

const TEASER_CATEGORIES = ['Cut', 'Color', 'Highlights', 'Blow Dry', 'Lash Extensions', 'Brow & Waxing'];

export default function PricingTeaser() {
  const teasers = services.filter((s) => TEASER_CATEGORIES.includes(s.title));

  return (
    <section className="relative bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        <div className="relative" data-reveal>
          <div className="absolute right-0 top-0 hidden md:block max-w-[320px] text-right">
            <div className="label text-ink/55">Plainly priced</div>
            <div className="mt-2 body-m text-ink/70">
              Consultation is free. Gratuity is at your discretion. Prices
              hold year-round.
            </div>
          </div>
          <h2 className="section-word text-ink">Menu</h2>
        </div>

        <div className="mt-8 border-b border-ink mb-14 md:mb-20" />

        <div className="grid grid-cols-12 gap-x-8 md:gap-x-16 gap-y-14 md:gap-y-20">
          {teasers.map((g) => (
            <div key={g.title} className="col-span-12 md:col-span-6" data-reveal>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display uppercase text-[clamp(26px,2.8vw,40px)] leading-none tracking-[0.015em] text-ink">
                  {g.title}
                </h3>
                <span className="label text-ink/55">
                  {g.rows.length} option{g.rows.length === 1 ? '' : 's'}
                </span>
              </div>
              <div className="h-px bg-ink/20 mb-2" />
              <ul>
                {g.rows.slice(0, 3).map((r) => (
                  <li key={r.name} className="flex items-baseline gap-3 py-3 border-b border-ink/10">
                    <span className="body-m text-ink">{r.name}</span>
                    <span className="flex-1 border-b border-dotted border-ink/25 translate-y-[-4px]" />
                    <span className="body-m text-ink tabular-nums">{r.price}</span>
                  </li>
                ))}
              </ul>
              {g.rows.length > 3 && (
                <div className="mt-3 label text-ink/50">
                  + {g.rows.length - 3} more
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center" data-reveal>
          <Link href="/services" className="btn-black">
            View the full menu
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
