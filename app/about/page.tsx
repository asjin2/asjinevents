import { Metadata } from 'next';
import Image from 'next/image';
import { Award, Users, Calendar, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Asjin Events - Wedding Decor Experts in Nagercoil',
  description: 'Learn about Asjin Events, Nagercoil\'s trusted wedding decor and event management company. Our passion for creating memorable celebrations across Kanyakumari district.',
  openGraph: {
    title: 'About Asjin Events - Wedding Decor Experts in Nagercoil',
    description: 'Learn about Asjin Events, your trusted partner for wedding decor and event management in Nagercoil, Kanyakumari district.',
  },
};

export default function About() {
  const stats = [
    { icon: Heart, label: 'Happy Couples', value: '500+' },
    { icon: Calendar, label: 'Events Completed', value: '1000+' },
    { icon: Users, label: 'Team Members', value: '20+' },
    { icon: Award, label: 'Years Experience', value: '8+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-purple-600">Asjin Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating magical moments and unforgettable celebrations in Nagercoil and across Kanyakumari district since 2016.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Asjin Events was born from a passion for creating extraordinary celebrations. Founded in Nagercoil, 
                we have been transforming weddings and special events across Kanyakumari district with our unique 
                blend of creativity, professionalism, and attention to detail.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey began with a simple mission: to make every celebration a memorable masterpiece. 
                Over the years, we've had the privilege of being part of countless love stories, 
                creating magical moments that couples and families treasure forever.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From intimate ceremonies to grand celebrations, we bring the same level of dedication, 
                creativity, and professionalism to every event. Our team understands that your special day 
                deserves nothing but perfection.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
                alt="Asjin Events team creating beautiful wedding decorations in Nagercoil"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create extraordinary celebrations that reflect the unique personality and vision of each client, 
                ensuring every moment is filled with beauty, joy, and unforgettable memories.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted and sought-after wedding decor and event management company in Tamil Nadu, 
                known for our creativity, professionalism, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Asjin Events?</h2>
            <p className="text-xl text-gray-600">What makes us Nagercoil's preferred wedding decor specialists</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep understanding of Nagercoil and Kanyakumari district traditions and venues'
              },
              {
                title: 'Creative Excellence',
                description: 'Innovative designs that perfectly capture your vision and personality'
              },
              {
                title: 'Professional Team',
                description: 'Experienced professionals dedicated to executing your dream celebration'
              },
              {
                title: 'Quality Materials',
                description: 'Premium decorations and materials for long-lasting beauty'
              },
              {
                title: 'Timely Execution',
                description: 'Reliable service delivery ensuring your event runs smoothly'
              },
              {
                title: 'Affordable Pricing',
                description: 'Competitive rates without compromising on quality or service'
              }
            ].map((item, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}