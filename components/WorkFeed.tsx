import { gallery, salon } from '@/lib/content';

export default function WorkFeed() {
  return (
    <section className="relative bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        <div className="relative" data-reveal>
          <div className="absolute right-0 top-0 hidden md:block max-w-[280px] text-right">
            <div className="label text-ink/55">Gallery</div>
            <div className="mt-2 body-m text-ink/70">
              A rolling feed of recent work from the chair.
            </div>
          </div>
          <h2 className="section-word text-ink">Gallery</h2>
        </div>

        <div className="mt-8 border-b border-ink mb-14 md:mb-20" />

        <div className="grid grid-cols-12 gap-3 md:gap-4" data-reveal>
          {gallery.slice(0, 8).map((g, i) => {
            const spans = [
              'col-span-6 md:col-span-5 aspect-[4/5]',
              'col-span-6 md:col-span-3 aspect-[4/5]',
              'col-span-12 md:col-span-4 aspect-[4/5] md:aspect-[3/4]',
              'col-span-6 md:col-span-3 aspect-square',
              'col-span-6 md:col-span-3 aspect-square',
              'col-span-12 md:col-span-6 aspect-[16/10]',
              'col-span-6 md:col-span-3 aspect-square',
              'col-span-6 md:col-span-3 aspect-square',
            ];
            return (
              <figure
                key={i}
                className={`group relative overflow-hidden bg-muted ${spans[i]}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url('${g.url}')` }}
                  role="img"
                  aria-label={g.caption}
                />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)',
                  }}
                />
                <figcaption className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="inline-block bg-cream/95 px-3 py-1.5 label">
                    {g.caption}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="label text-ink/55">Updated weekly &middot; @dejavoukolc</span>
          <a href={salon.instagram} target="_blank" rel="noreferrer" className="btn-black">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
