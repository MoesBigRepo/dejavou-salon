import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { services, salon, images } from '@/lib/content';

export const metadata = {
  title: 'Services · DejaVou Salon',
  description: 'Cut, color, highlights, keratin, lash, brow, make-up. Plainly priced.',
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <section className="relative bg-cream pt-32 md:pt-44 pb-14">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10">
          <div className="relative">
            <div className="absolute right-0 top-0 hidden md:block max-w-[320px] text-right">
              <div className="label text-ink/55">DejaVou Salon · Montvale NJ</div>
              <p className="mt-2 body-m text-ink/70">
                Consultation is free. Gratuity is at your discretion. Prices
                hold year-round.
              </p>
            </div>
            <h1 className="section-word text-ink">Menu</h1>
          </div>
          <div className="mt-8 border-b border-ink" />
        </div>
      </section>

      <section className="relative bg-cream pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10">
          <div className="space-y-24 md:space-y-36">
            {services.map((group, i) => {
              const reverse = i % 2 === 1;
              const img = [
                images.signatureCut,
                images.signatureColor,
                images.signatureLash,
                images.studioWide,
                images.studioDetail1,
                images.studioDetail2,
                images.ethosBg,
                images.contactHero,
              ][i % 8];
              return (
                <article key={group.title} data-reveal>
                  <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
                    <div className={`col-span-12 md:col-span-5 ${reverse ? 'md:order-2' : ''}`}>
                      <figure className="md:sticky md:top-28 relative aspect-[4/5] w-full overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url('${img}')` }}
                          role="img"
                          aria-label={group.title}
                        />
                        <div className="absolute top-4 left-4 rounded-full bg-cream/95 px-3 py-1.5 label">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </figure>
                    </div>
                    <div className={`col-span-12 md:col-span-7 ${reverse ? 'md:order-1' : ''}`}>
                      <h2 className="font-display uppercase text-[clamp(44px,6.5vw,104px)] leading-[0.95] tracking-[0.015em] text-ink">
                        {group.title}
                      </h2>
                      {group.subtitle && (
                        <p className="mt-5 max-w-md body-l text-ink/70">
                          {group.subtitle}
                        </p>
                      )}
                      <div className="mt-10 border-t border-ink/25">
                        <ul>
                          {group.rows.map((r) => (
                            <li key={r.name} className="group flex items-baseline gap-4 py-5 border-b border-ink/15">
                              <span className="body-l text-ink">{r.name}</span>
                              <span className="flex-1 border-b border-dotted border-ink/25 translate-y-[-4px]" />
                              <span className="body-l text-ink tabular-nums">{r.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-10">
                        <a href={salon.phone.href} className="btn-black">
                          Book {group.title.toLowerCase()}
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
