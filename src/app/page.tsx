import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Sectors } from '@/components/sections/Sectors';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Capacity } from '@/components/sections/Capacity';
import { Portfolio } from '@/components/sections/Portfolio';
import { Process } from '@/components/sections/Process';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Sectors />
      <Services />
      <Capacity />
      <Portfolio />
      <Testimonials />
      <Process />
      <CTA />
      <Contact />
      <WhatsAppButton />
    </>
  );
}
