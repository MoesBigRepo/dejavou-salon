import { images } from '@/lib/content';

export default function Ethos() {
  return (
    <section className="relative overflow-hidden" data-reveal>
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url('${images.ethosBg}')` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-52 text-center">
        <div className="label text-cream/70 mb-10">From the room</div>
        <blockquote className="font-display text-cream text-[clamp(1.75rem,4vw,3.4rem)] leading-[1.22] max-w-4xl mx-auto">
          Cutting, color, and quiet care &mdash; a hand trained by the years,
          carried through every appointment, just minutes off Route 17.
        </blockquote>
        <div className="mt-14 flex items-center justify-center gap-5">
          <span className="h-px w-12 bg-cream/50" />
          <span className="label text-cream/70">DejaVou Salon &middot; Since 2016</span>
          <span className="h-px w-12 bg-cream/50" />
        </div>
      </div>
    </section>
  );
}
