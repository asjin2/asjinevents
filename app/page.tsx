import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata = {
  title: 'Asjin Events - Premier Wedding Decor & Event Management in Nagercoil',
  description: 'Transform your special moments with Asjin Events - Nagercoil\'s premier wedding decor and event management company. Serving Kanyakumari district with elegant decorations and professional planning.',
  openGraph: {
    title: 'Asjin Events - Premier Wedding Decor & Event Management in Nagercoil',
    description: 'Transform your special moments with elegant wedding decor and professional event management services in Nagercoil, Kanyakumari district.',
  },
};

export default function Home() {
  const schemaData = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}