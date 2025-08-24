import Image from 'next/image';
import Link from 'next/link';
import { Heart, Sparkles, Camera, Utensils, Music, Flower2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Decorations',
      description: 'Complete wedding decor including mandap, stage, and venue decorations',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
    },
    {
      icon: Flower2,
      title: 'Floral Arrangements',
      description: 'Exquisite floral decorations using fresh flowers for all occasions',
      image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg'
    },
    {
      icon: Sparkles,
      title: 'Event Planning',
      description: 'Complete event management from planning to execution',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg'
    },
    {
      icon: Camera,
      title: 'Pre-Wedding Events',
      description: 'Decoration services for engagement, sangeet, and mehendi ceremonies',
      image: 'https://images.pexels.com/photos/3585810/pexels-photo-3585810.jpeg'
    },
    {
      icon: Utensils,
      title: 'Reception Decor',
      description: 'Elegant reception decorations and dining arrangements',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg'
    },
    {
      icon: Music,
      title: 'Corporate Events',
      description: 'Professional corporate event decoration and management',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate ceremonies to grand celebrations, we provide comprehensive 
            event decoration and planning services across Nagercoil and Kanyakumari district.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} by Asjin Events`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-purple-600 p-2 rounded-full">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}