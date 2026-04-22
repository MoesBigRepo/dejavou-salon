import { salon, images, gallery } from '@/lib/content';

export default function Studio() {
  return (
    <section id="salon" className="relative bg-cream pt-12 pb-24 md:pb-40">
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        {/* Massive salon name + address absolute */}
        <div className="relative" data-reveal>
          <div className="absolute right-0 top-0 max-w-[280px] text-right">
            <div className="label text-ink/60">The Studio</div>
            <div className="mt-2 body-m text-ink/70">
              {salon.address.line1}<br/>{salon.address.line2}
            </div>
          </div>
          <h2 className="section-word text-ink">Montvale</h2>
        </div>

        <div className="mt-8 border-b border-ink mb-14 md:mb-20" />

        <div className="grid grid-cols-12 gap-10 md:gap-16">
          {/* Left: description + hours + book */}
          <div className="col-span-12 md:col-span-5" data-reveal>
            <p className="body-l text-ink mb-10">
              DejaVou Salon sits on the corner of Railroad Ave in the center
              of Montvale — a short walk to the coffee shop next door, easy
              parking on the street, and a room full of warm light and
              well-kept tools. Drop in for a consultation any Tuesday or
              Thursday after four.
            </p>
            <div className="flex flex-wrap gap-3 mb-14">
              <a href={salon.phone.href} className="btn-black">
                Book online
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={salon.phone.href} className="btn-black">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M5.5 2.5C5.5 2.5 7 2.5 7.5 3.5C8 4.5 9 6.5 9 6.5C9 6.5 8 7.5 7.5 7.5C7.5 9 9 10 10.5 10.5C10.5 10 11.5 9 11.5 9C11.5 9 13.5 10 14.5 10.5C15.5 11 15.5 12.5 15.5 12.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
                Call now
              </a>
            </div>

            <div>
              <div className="label text-ink mb-6">Opening hours</div>
              <ul className="divide-y divide-ink/15 border-t border-ink/15 border-b">
                {salon.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-3.5">
                    <span className="body-m text-ink">{h.day}</span>
                    <span className="body-m text-ink tabular-nums">{h.range}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: asymmetric gallery */}
          <div className="col-span-12 md:col-span-7" data-reveal>
            <div className="grid grid-cols-6 gap-3 md:gap-4">
              <figure className="col-span-4 aspect-[4/5] overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${images.studioWide}')` }}
                  role="img"
                  aria-label="DejaVou Salon interior"
                />
              </figure>
              <div className="col-span-2 flex flex-col gap-3 md:gap-4">
                <figure className="aspect-square overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${gallery[3].url}')` }}
                  />
                </figure>
                <figure className="aspect-square overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${images.studioDetail2}')` }}
                  />
                </figure>
              </div>
              <figure className="col-span-6 aspect-[16/8] overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${gallery[4].url}')` }}
                />
              </figure>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="label text-ink/55">01 / 16</span>
              <a href={salon.facebook} target="_blank" rel="noreferrer" className="link-u text-[13px]">
                See more on Facebook
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
