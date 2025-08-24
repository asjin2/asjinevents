import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Wedding Decor Gallery - Asjin Events Nagercoil',
  description: 'Browse our stunning wedding decor gallery featuring real weddings and events in Nagercoil and Kanyakumari district. Get inspired for your special day.',
  openGraph: {
    title: 'Wedding Decor Gallery - Asjin Events Nagercoil',
    description: 'Browse our stunning wedding decor gallery featuring real weddings and events in Nagercoil.',
  },
};

export default function Gallery() {
  const categories = [
    'All',
    'Wedding Decorations',
    'Mandap Designs',
    'Floral Arrangements',
    'Reception Decor',
    'Pre-Wedding Events'
  ];

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      alt: 'Elegant wedding mandap decoration by Asjin Events in Nagercoil',
      category: 'Mandap Designs'
    },
    {
      src: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg',
      alt: 'Beautiful floral centerpiece arrangement for wedding reception',
      category: 'Floral Arrangements'
    },
    {
      src: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
      alt: 'Stunning wedding reception decor with elegant lighting',
      category: 'Reception Decor'
    },
    {
      src: 'https://images.pexels.com/photos/3585810/pexels-photo-3585810.jpeg',
      alt: 'Traditional south Indian wedding decoration in Nagercoil',
      category: 'Wedding Decorations'
    },
    {
      src: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg',
      alt: 'Colorful mehendi ceremony decoration setup',
      category: 'Pre-Wedding Events'
    },
    {
      src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg',
      alt: 'Romantic wedding backdrop with fairy lights',
      category: 'Wedding Decorations'
    },
    {
      src: 'https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg',
      alt: 'Grand mandap with intricate floral designs',
      category: 'Mandap Designs'
    },
    {
      src: 'https://images.pexels.com/photos/3585800/pexels-photo-3585800.jpeg',
      alt: 'Elegant table setting for wedding reception',
      category: 'Reception Decor'
    },
    {
      src: 'https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg',
      alt: 'Fresh flower arrangements for wedding ceremony',
      category: 'Floral Arrangements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our portfolio of stunning wedding decorations and event setups 
            across Nagercoil and Kanyakumari district.
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  index === 0 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-purple-600 px-2 py-1 rounded">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Dream Wedding?</h2>
          <p className="text-xl mb-8">
            Let us transform your vision into a beautiful reality. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918903821128" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/918903821128" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}