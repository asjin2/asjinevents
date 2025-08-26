import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata = {
  title: 'Wedding Decor Nagercoil | #1 Event Decorators Kanyakumari District | Asjin Events',
  description: '⭐ Best Wedding Decorators in Nagercoil | 500+ Happy Couples ✓ Mandap Decorations ✓ Floral Arrangements ✓ Event Planning | Serving Kanyakumari District | Call +91-8903821128 for Free Quote',
  keywords: 'wedding decor Nagercoil, wedding decorators Nagercoil, mandap decoration Nagercoil, wedding planners Kanyakumari, best wedding decorators, marriage decoration services, event decorators Tamil Nadu, wedding stage decoration, floral arrangements, reception decoration, pre wedding events decoration, sangeet decoration, mehendi decoration, engagement decoration, car decoration wedding, affordable wedding decoration Nagercoil, premium wedding decor services Kanyakumari district',
  openGraph: {
    title: 'Wedding Decor Nagercoil | #1 Event Decorators Kanyakumari District | Asjin Events',
    description: '⭐ Best Wedding Decorators in Nagercoil | 500+ Happy Couples | Mandap Decorations & Event Planning in Kanyakumari District',
    url: 'https://asjinevents.xyz',
    type: 'website',
    images: [
      {
        url: 'https://asjinevents.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Asjin Events - Best Wedding Decorators in Nagercoil'
      }
    ],
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