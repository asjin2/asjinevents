'use client';

import { useState } from 'react';
import Image from 'next/image';

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

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
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756058622/fc15a08055e0e0b6eb16e343dc0a9d31_fdvp7v.jpg',
      alt: 'Elegant wedding mandap decoration by Asjin Events in Nagercoil',
      category: 'Mandap Designs'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756058724/01d6569b7ecb5c4d08fe57c22a43a583_sufr2g.jpg',
      alt: 'Beautiful floral centerpiece arrangement for wedding reception',
      category: 'Floral Arrangements'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756059253/download_9_vuouoz.jpg',
      alt: 'Stunning wedding reception decor with elegant lighting',
      category: 'Reception Decor'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756061172/abafb0025c6e0b9eff9b6c991cf0d243_flvf36.jpg',
      alt: 'Traditional south Indian wedding decoration in Nagercoil',
      category: 'Wedding Decorations'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756060656/58a1b38ccc32d82f86166e8a179dca8f_jwhrfh.jpg',
      alt: 'Colorful mehendi ceremony decoration setup',
      category: 'Pre-Wedding Events'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756059706/download_10_eybdwd.jpg',
      alt: 'Romantic wedding backdrop with fairy lights',
      category: 'Wedding Decorations'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756060542/download_11_yzxj3d.jpg',
      alt: 'Grand mandap with intricate floral designs',
      category: 'Mandap Designs'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756060255/Felt_the_love_in_the_air_besides_the_beachy_waves_from_the_couple_who_doesn_t_belong_here_A_tropical_feel_wedding_of_beautiful_revashah28_Makeup_and_hair__makeupbymansigupta_and_team_Location__thezurigoa_Photog_bbobjd.jpg',
      alt: 'Elegant table setting for wedding reception',
      category: 'Reception Decor'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756061267/Jehana_Jabbar_Mishra_and_Kanishk_Mishra_Amaara_Farms_Delhi_nwkvko.jpg',
      alt: 'Fresh flower arrangements for wedding ceremony',
      category: 'Floral Arrangements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-purple-600">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            Explore our portfolio of stunning wedding decorations and event setups 
            across Nagercoil and Kanyakumari district.
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-purple-100'
                } text-xs sm:text-sm px-3 sm:px-6 py-1 sm:py-2`}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages
              .filter(image => activeCategory === 'All' || image.category === activeCategory)
              .map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-60 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Create Your Dream Wedding?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Let us transform your vision into a beautiful reality. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a 
              href="tel:+918903821128" 
              className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/918903821128" 
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-purple-600 transition-colors duration-300 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;