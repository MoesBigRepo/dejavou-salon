import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Studio from '@/components/Studio';
import SignatureCards from '@/components/SignatureCards';
import Team from '@/components/Team';
import WorkFeed from '@/components/WorkFeed';
import Ethos from '@/components/Ethos';
import PricingTeaser from '@/components/PricingTeaser';
import Visit from '@/components/Visit';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav tone="light" />
      <Hero />
      <Welcome />
      <Studio />
      <SignatureCards />
      <Ethos />
      <Team />
      <WorkFeed />
      <PricingTeaser />
      <Visit />
      <CTA />
      <Footer />
    </>
  );
}
