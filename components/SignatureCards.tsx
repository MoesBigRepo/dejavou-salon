import Link from 'next/link';
import { signatures, salon } from '@/lib/content';

export default function SignatureCards() {
  return (
    <section className="relative bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        <div className="relative" data-reveal>
          <div className="absolute right-0 top-0 hidden md:block max-w-[280px] text-right">
            <div className="label text-ink/55">A short menu</div>
            <div className="mt-2 body-m text-ink/70">
              Three signatures. The full menu lives in Services.
            </div>
          </div>
          <h2 className="section-word text-ink">Signatures</h2>
        </div>

        <div className="mt-8 border-b border-ink mb-14 md:mb-20" />

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {signatures.map((s, i) => (
            <article
              key={s.name}
              className="group col-span-12 md:col-span-4"
              data-reveal
            >
              <figure className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${s.image}')` }}
                  role="img"
                  aria-label={`${s.name} — DejaVou`}
                />
                <div className="absolute top-4 left-4 rounded-full bg-cream/95 px-3 py-1.5 label">
                  0{i + 1}
                </div>
              </figure>
              <div className="pt-6">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
                  <h3 className="font-display uppercase text-[clamp(28px,3.2vw,44px)] leading-none tracking-[0.015em] text-ink">
                    {s.name}
                  </h3>
                  <span className="body-m text-ink/80 whitespace-nowrap tabular-nums">
                    {s.priceFrom}
                  </span>
                </div>
                <p className="mt-5 body-m text-ink/75 min-h-[72px]">
                  {s.desc}
                </p>
                <div className="mt-7 flex items-center justify-between">
                  <a href={salon.phone.href} className="btn-black">
                    {s.cta}
                  </a>
                  <Link href="/services" className="link-u text-[13px]">
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
