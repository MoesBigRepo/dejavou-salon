export default function Welcome() {
  return (
    <section className="relative bg-cream py-24 md:py-36" data-reveal>
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 md:gap-20">
          <div className="col-span-12 md:col-span-7">
            <div className="label text-ink/55 mb-8">Welcome to DejaVou</div>
            <p className="display-serif text-ink text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.3]">
              For us, cutting is a craft practiced by the hands of a
              well-trained artisan. That is why we keep searching, drawing
              inspiration, discovering new ground. You are invited to a place
              where the fantasy of a new look becomes real — stylists who have
              worked with the room long enough to treat every client with
              patience, care, and a quiet kind of luxury.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8 md:pt-4 md:border-l md:border-ink/15">
            <div className="label text-ink/55 mb-6">A small studio, since 2016</div>
            <p className="body-l text-ink/75 mb-8">
              DEJAVOU SALON INC has worked out of the same corner of Railroad
              Ave in Montvale, New Jersey, long enough that regulars book a
              season out and new clients still walk in on a Saturday morning.
              Four chairs, warm light, and a rotating bench of stylists who
              finish a visit with the same line: thank you for coming in.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#salon" className="btn-black">Visit the studio</a>
              <a href="/services" className="link-u text-[14px]">See the menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
