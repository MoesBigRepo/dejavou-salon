import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Visit from '@/components/Visit';
import CTA from '@/components/CTA';
import { salon, images } from '@/lib/content';

export const metadata = {
  title: 'Contact · DejaVou Salon',
  description: 'Call, message, or walk in. 6 Railroad Ave, Montvale NJ.',
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="relative bg-cream pt-32 md:pt-44 pb-14">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10">
          <div className="relative">
            <div className="absolute right-0 top-0 hidden md:block max-w-[320px] text-right">
              <div className="label text-ink/55">Four ways in</div>
              <p className="mt-2 body-m text-ink/70">
                We answer the phone during open hours and the inbox every morning.
              </p>
            </div>
            <h1 className="section-word text-ink">Contact</h1>
          </div>
          <div className="mt-8 border-b border-ink" />
        </div>
      </section>

      <section className="relative bg-cream py-16 md:py-28">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-7" data-reveal>
              <p className="display-serif text-ink text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.3] max-w-2xl">
                The salon is open Tuesday through Saturday. Booking by phone
                is fastest &mdash; Messenger and email replies land by the end
                of the business day, weekends included.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={salon.phone.href} className="btn-filled">Call now</a>
                <a href={salon.messenger.href} target="_blank" rel="noreferrer" className="btn-black">Open Messenger</a>
                <a href={salon.email.href} className="btn-black">Email us</a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5" data-reveal>
              <figure className="aspect-[4/5] w-full overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${images.contactHero}')` }}
                  role="img"
                  aria-label="DejaVou Salon storefront, Montvale NJ"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Visit />
      <CTA />
      <Footer />
    </>
  );
}
