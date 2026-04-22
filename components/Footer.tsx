import Link from 'next/link';
import { salon } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-cream border-t border-ink/15 pt-20 pb-32 md:pb-14">
      <div className="mx-auto max-w-[1720px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 md:gap-14 pb-16 border-b border-ink/15">
          <div className="col-span-12 md:col-span-5">
            <Link href="/" className="wordmark text-[clamp(52px,6.5vw,92px)] text-ink block">
              DejaVou
            </Link>
            <p className="mt-8 body-m text-ink/75 max-w-sm">
              {salon.legal}. A neighborhood salon on Railroad Ave for cut,
              color, lash, and care &mdash; by appointment since 2016.
            </p>
            <a
              href={salon.address.maps}
              target="_blank"
              rel="noreferrer"
              className="link-u mt-10 text-[13px] inline-flex"
            >
              {salon.address.line1}, {salon.address.line2}
            </a>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="label text-ink mb-6">Visit</div>
            <ul className="space-y-3 body-m">
              <li><Link href="/" className="text-ink hover:opacity-55 transition-opacity">Home</Link></li>
              <li><Link href="/services" className="text-ink hover:opacity-55 transition-opacity">Services</Link></li>
              <li><Link href="/about" className="text-ink hover:opacity-55 transition-opacity">About</Link></li>
              <li><Link href="/contact" className="text-ink hover:opacity-55 transition-opacity">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="label text-ink mb-6">Reach</div>
            <ul className="space-y-3 body-m">
              <li><a href={salon.phone.href} className="text-ink hover:opacity-55 transition-opacity">{salon.phone.display}</a></li>
              <li><a href={salon.email.href} className="text-ink hover:opacity-55 transition-opacity break-all">{salon.email.address}</a></li>
              <li><a href={salon.messenger.href} target="_blank" rel="noreferrer" className="text-ink hover:opacity-55 transition-opacity">Messenger</a></li>
              <li><a href={salon.facebook} target="_blank" rel="noreferrer" className="text-ink hover:opacity-55 transition-opacity">Facebook</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="label text-ink mb-6">Hours</div>
            <ul className="space-y-2 body-m">
              {salon.hours.map((h) => (
                <li key={h.day} className="flex items-baseline justify-between">
                  <span className="text-ink">{h.day}</span>
                  <span className="tabular-nums text-ink/70">{h.range}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="label text-ink/55">© {year} &nbsp; {salon.legal}</div>
          <div className="label text-ink/55">Montvale &nbsp;&middot;&nbsp; NJ &nbsp;&middot;&nbsp; 07645</div>
        </div>
      </div>
    </footer>
  );
}
