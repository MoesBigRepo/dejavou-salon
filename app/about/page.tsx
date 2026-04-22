import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Team from '@/components/Team';
import Ethos from '@/components/Ethos';
import { salon, images } from '@/lib/content';

export const metadata = {
  title: 'About · DejaVou Salon',
  description:
    'DEJAVOU SALON INC — a neighborhood studio on Railroad Ave in Montvale, NJ. Since 2016.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <section className="relative bg-cream pt-32 md:pt-44 pb-14">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10">
          <div className="relative">
            <div className="absolute right-0 top-0 hidden md:block max-w-[320px] text-right">
              <div className="label text-ink/55">Since 2016</div>
              <p className="mt-2 body-m text-ink/70">
                Montvale, New Jersey &mdash; the corner of Railroad Ave.
              </p>
            </div>
            <h1 className="section-word text-ink">About</h1>
          </div>
          <div className="mt-8 border-b border-ink" />
        </div>
      </section>

      <section className="relative bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="col-span-12 md:col-span-7" data-reveal>
              <p className="display-serif text-ink text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.3]">
                DEJAVOU SALON INC has worked out of the same corner of
                Railroad Ave long enough that the light has a schedule.
                Four chairs. A team that reads a consultation in a glance.
                A room where cutting, color, and care are all the same trade.
              </p>
              <p className="mt-10 body-l text-ink/75 max-w-2xl">
                Our stylists are trained in precision cutting, hand-placed
                color, Brazilian keratin, and individual-application lash.
                Every visit begins with a consultation and ends with a plan
                for what to do between now and the next time you sit down.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={salon.phone.href} className="btn-black">Book a chair</a>
                <a href={salon.address.maps} target="_blank" rel="noreferrer" className="btn-black">Find the salon</a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5" data-reveal>
              <figure className="aspect-[4/5] w-full overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${images.studioWide}')` }}
                  role="img"
                  aria-label="DejaVou Salon interior"
                />
              </figure>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <figure className="aspect-square overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${images.studioDetail1}')` }}
                  />
                </figure>
                <figure className="aspect-square overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${images.studioDetail2}')` }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ethos />
      <Team />

      <CTA />
      <Footer />
    </>
  );
}
