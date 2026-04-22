import { team, salon } from '@/lib/content';

export default function Team() {
  return (
    <section className="relative bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        <div className="relative" data-reveal>
          <div className="absolute right-0 top-0 hidden md:block max-w-[300px] text-right">
            <div className="label text-ink/55">The hands</div>
            <div className="mt-2 body-m text-ink/70">
              A small group that has worked side by side long enough to finish
              each other&apos;s blow-outs.
            </div>
          </div>
          <h2 className="section-word text-ink">The Team</h2>
        </div>

        <div className="mt-8 border-b border-ink mb-14 md:mb-20" />

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {team.map((m, i) => (
            <article key={m.role} className="col-span-12 md:col-span-4" data-reveal>
              <figure className="relative aspect-[4/5] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${m.image}')` }}
                  role="img"
                  aria-label={m.role}
                />
                <div className="absolute top-4 left-4 rounded-full bg-cream/95 px-3 py-1.5 label">
                  Chair 0{i + 1}
                </div>
              </figure>
              <div className="pt-7">
                <h3 className="font-display uppercase text-[clamp(26px,2.8vw,38px)] leading-[1.05] tracking-[0.015em] text-ink">
                  {m.role}
                </h3>
                <div className="mt-3 label text-ink/55">
                  {m.specialty}
                </div>
                <p className="mt-6 body-m text-ink/75">
                  {m.bio}
                </p>
                <a href={salon.phone.href} className="mt-7 inline-flex items-center gap-2 text-[13px] text-ink pb-1 border-b border-ink/40 hover:border-ink transition-colors">
                  Book with this chair
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
