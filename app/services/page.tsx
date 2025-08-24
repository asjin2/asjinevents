import { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Sparkles, Camera, Utensils, Music, Flower2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wedding Decor Services - Asjin Events Nagercoil',
  description: 'Comprehensive wedding decor and event management services in Nagercoil. From mandap decorations to floral arrangements, we create stunning celebrations across Kanyakumari district.',
  openGraph: {
    title: 'Wedding Decor Services - Asjin Events Nagercoil',
    description: 'Comprehensive wedding decor and event management services in Nagercoil, Kanyakumari district.',
  },
};

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Decorations',
      description: 'Complete wedding decor including mandap, stage, entrance, and venue decorations',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      features: ['Traditional & Modern Mandaps', 'Stage Decorations', 'Entrance Decor', 'Venue Styling']
    },
    {
      icon: Flower2,
      title: 'Floral Arrangements',
      description: 'Exquisite floral decorations using fresh flowers for all occasions',
      image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg',
      features: ['Bridal Bouquets', 'Centerpieces', 'Floral Backdrops', 'Garlands & Arrangements']
    },
    {
      icon: Sparkles,
      title: 'Event Planning',
      description: 'Complete event management from planning to execution',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
      features: ['Timeline Planning', 'Vendor Coordination', 'Guest Management', 'Event Coordination']
    },
    {
      icon: Camera,
      title: 'Pre-Wedding Events',
      description: 'Decoration services for engagement, sangeet, and mehendi ceremonies',
      image: 'https://images.pexels.com/photos/3585810/pexels-photo-3585810.jpeg',
      features: ['Engagement Decor', 'Sangeet Setup', 'Mehendi Decorations', 'Ring Ceremony']
    },
    {
      icon: Utensils,
      title: 'Reception Decor',
      description: 'Elegant reception decorations and dining arrangements',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg',
      features: ['Table Settings', 'Lighting Design', 'Backdrop Arrangements', 'Dance Floor Setup']
    },
    {
      icon: Music,
      title: 'Corporate Events',
      description: 'Professional corporate event decoration and management',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
      features: ['Conference Setup', 'Product Launches', 'Award Ceremonies', 'Corporate Parties']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive wedding decor and event management services in Nagercoil, 
            designed to make your special moments unforgettable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                      <service.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} by Asjin Events in Nagercoil`}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we bring your dream celebration to life</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', description: 'Creating detailed plans and mockups' },
              { step: '03', title: 'Preparation', description: 'Sourcing materials and coordinating logistics' },
              { step: '04', title: 'Execution', description: 'Bringing your dream to life on the day' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <span className="text-2xl font-bold text-purple-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}