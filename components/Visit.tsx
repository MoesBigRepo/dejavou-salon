import { salon } from '@/lib/content';

export default function Visit() {
  return (
    <section id="contact" className="relative bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        <div className="relative" data-reveal>
          <div className="absolute right-0 top-0 hidden md:block max-w-[300px] text-right">
            <div className="label text-ink/55">Book &middot; Visit &middot; Message</div>
            <div className="mt-2 body-m text-ink/70">
              We answer the phone during open hours and the inbox every morning.
            </div>
          </div>
          <h2 className="section-word text-ink">Visit</h2>
        </div>

        <div className="mt-8 border-b border-ink mb-14 md:mb-20" />

        <div className="grid grid-cols-12 gap-10 md:gap-14">
          <div className="col-span-12 md:col-span-5">
            <ul className="divide-y divide-ink/15 border-t border-ink/15 border-b">
              <li className="py-6">
                <div className="label text-ink/55 mb-2">Address</div>
                <a href={salon.address.maps} target="_blank" rel="noreferrer" className="font-display text-[clamp(22px,2vw,30px)] leading-tight text-ink hover:opacity-60 transition-opacity">
                  {salon.address.line1}<br/>{salon.address.line2}
                </a>
              </li>
              <li className="py-6">
                <div className="label text-ink/55 mb-2">Call or text</div>
                <a href={salon.phone.href} className="font-display text-[clamp(22px,2vw,30px)] leading-tight text-ink hover:opacity-60 transition-opacity">
                  {salon.phone.display}
                </a>
              </li>
              <li className="py-6">
                <div className="label text-ink/55 mb-2">Messenger</div>
                <a href={salon.messenger.href} target="_blank" rel="noreferrer" className="font-display text-[clamp(22px,2vw,30px)] leading-tight text-ink hover:opacity-60 transition-opacity">
                  Start a chat on Facebook
                </a>
              </li>
              <li className="py-6">
                <div className="label text-ink/55 mb-2">Email</div>
                <a href={salon.email.href} className="font-display text-[clamp(18px,1.8vw,26px)] leading-tight text-ink hover:opacity-60 transition-opacity break-all">
                  {salon.email.address}
                </a>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={salon.phone.href} className="btn-filled">
                Book online
              </a>
              <a href={salon.address.maps} target="_blank" rel="noreferrer" className="btn-black">
                Open in Maps
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="relative h-full min-h-[460px] overflow-hidden border border-ink/15">
              <iframe
                title="DejaVou Salon &mdash; 6 Railroad Ave, Montvale NJ"
                src="https://www.google.com/maps?q=6+Railroad+Ave+Montvale+NJ+07645&output=embed"
                className="block h-full w-full"
                style={{ minHeight: 540, filter: 'grayscale(0.35) contrast(1.02)' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ink/15 pt-10">
          <div className="label text-ink mb-8">Opening hours</div>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-2">
            {salon.hours.map((h) => (
              <div key={h.day} className="flex flex-col items-start py-3">
                <span className="label text-ink/55 mb-1.5">{h.day.slice(0, 3)}</span>
                <span className="body-m text-ink tabular-nums">{h.range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
