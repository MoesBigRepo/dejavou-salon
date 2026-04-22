import { salon, images } from '@/lib/content';

export default function CTA() {
  return (
    <section className="relative overflow-hidden" data-reveal>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${images.heroAlt}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.62) 100%)',
        }}
      />
      <div className="relative mx-auto max-w-[1720px] px-6 md:px-10 py-28 md:py-44 text-cream">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="label text-cream/70 mb-6">Reservation</div>
            <h2 className="font-display uppercase text-cream text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-[0.02em]">
              Reserve<br/>the chair
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <a href={salon.phone.href} className="btn-white">
              Book online
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={salon.phone.href} className="btn-white">
              Call now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 2.5C5.5 2.5 7 2.5 7.5 3.5C8 4.5 9 6.5 9 6.5C9 6.5 8 7.5 7.5 7.5C7.5 9 9 10 10.5 10.5C10.5 10 11.5 9 11.5 9C11.5 9 13.5 10 14.5 10.5C15.5 11 15.5 12.5 15.5 12.5" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </a>
            <a href={salon.messenger.href} target="_blank" rel="noreferrer" className="btn-white">
              Messenger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
