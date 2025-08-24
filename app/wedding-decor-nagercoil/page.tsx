import { Metadata } from 'next';
import Image from 'next/image';
import { Star, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { generateWeddingDecorSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Wedding Decor in Nagercoil - Premium Event Decoration Services | Asjin Events',
  description: 'Professional wedding decor services in Nagercoil, Kanyakumari District. Mandap decorations, floral arrangements, and complete event styling. Call +91 8903821128 for bookings.',
  keywords: 'wedding decor Nagercoil, wedding decorators Nagercoil, mandap decoration Nagercoil, wedding planners Kanyakumari, event decorators Tamil Nadu, marriage decoration Nagercoil',
  openGraph: {
    title: 'Wedding Decor in Nagercoil - Premium Event Decoration Services',
    description: 'Professional wedding decor services in Nagercoil with mandap decorations, floral arrangements, and complete event styling.',
    url: 'https://asjinevents.com/wedding-decor-nagercoil',
  },
};

export default function WeddingDecorNagercoil() {
  const schemaData = generateWeddingDecorSchema();

  const services = [
    'Traditional Tamil Wedding Decorations',
    'Modern Contemporary Mandap Designs',
    'Floral Arrangements & Centerpieces',
    'Stage Decorations & Backdrops',
    'Entrance & Gate Decorations',
    'Reception Hall Styling',
    'Lighting Design & Setup',
    'Bridal Car Decorations'
  ];

  const locations = [
    'Nagercoil City', 'Kanyakumari', 'Marthandam', 'Padmanabhapuram', 
    'Thuckalay', 'Colachel', 'Muttom', 'Eraniel'
  ];

  const faqs = [
    {
      question: 'What types of wedding decorations do you offer in Nagercoil?',
      answer: 'We offer comprehensive wedding decoration services including traditional mandap decorations, modern stage setups, floral arrangements, entrance decorations, reception hall styling, and lighting design. Our services cater to both traditional Tamil weddings and contemporary celebrations.'
    },
    {
      question: 'How much does wedding decoration cost in Nagercoil?',
      answer: 'Wedding decoration costs vary based on the venue size, decoration complexity, and services required. Our packages start from ₹25,000 for basic decorations and can go up to ₹2,00,000+ for grand celebrations. Contact us for a detailed quote based on your requirements.'
    },
    {
      question: 'Do you provide wedding decoration services outside Nagercoil?',
      answer: 'Yes, we provide wedding decoration services across the entire Kanyakumari district including Kanyakumari, Marthandam, Padmanabhapuram, Thuckalay, Colachel, and surrounding areas. Additional travel charges may apply for locations beyond 50km from Nagercoil.'
    },
    {
      question: 'How far in advance should I book wedding decoration services?',
      answer: 'We recommend booking your wedding decoration services at least 2-3 months in advance, especially during peak wedding season (November to February). This ensures availability and gives us adequate time to plan and prepare your decorations perfectly.'
    },
    {
      question: 'Do you provide fresh flowers for wedding decorations?',
      answer: 'Yes, we specialize in fresh flower decorations using locally sourced flowers including roses, jasmine, marigold, and other seasonal blooms. We also offer artificial flower options for budget-conscious clients or specific design requirements.'
    },
    {
      question: 'Can you customize wedding decorations according to our theme?',
      answer: 'Absolutely! We specialize in creating customized wedding decorations based on your theme, color preferences, and cultural requirements. Whether you want traditional South Indian, North Indian, or contemporary themes, we can bring your vision to life.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Wedding Decor in <span className="text-purple-600">Nagercoil</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Transform your special day with premium wedding decoration services in Nagercoil. 
                    Professional mandap decorations, stunning floral arrangements, and complete event styling 
                    across Kanyakumari district.
                  </p>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-gray-600 ml-2">4.9/5 (100+ Reviews)</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+918903821128" 
                    className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 text-center"
                  >
                    <Phone className="inline h-5 w-5 mr-2" />
                    Call +91 8903821128
                  </a>
                  <a 
                    href="https://wa.me/918903821128?text=Hi,%20I%20need%20wedding%20decoration%20services%20in%20Nagercoil" 
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 text-center"
                  >
                    WhatsApp Quote
                  </a>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
                  alt="Professional wedding decor services in Nagercoil by Asjin Events - mandap decorations and floral arrangements"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold text-gray-900">Serving Nagercoil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Wedding Decoration Services in Nagercoil
              </h2>
              <p className="text-xl text-gray-600">
                Complete wedding decor solutions for your perfect celebration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <CheckCircle className="h-6 w-6 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Asjin Events for Wedding Decor in Nagercoil?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">8+ Years Experience</h3>
                    <p className="text-gray-600">Extensive experience in wedding decorations across Nagercoil and Kanyakumari district</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Deep understanding of Tamil wedding traditions and local venue requirements</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                    <p className="text-gray-600">High-quality materials and fresh flowers for long-lasting beautiful decorations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Packages</h3>
                    <p className="text-gray-600">Competitive pricing with customizable packages to suit every budget</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/3585810/pexels-photo-3585810.jpeg"
                  alt="Why choose Asjin Events for wedding decorations in Nagercoil - quality and expertise"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Wedding Decoration Service Areas
              </h2>
              <p className="text-xl text-gray-600">
                We provide wedding decor services across Kanyakumari district
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="text-center p-4 border border-purple-200 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about wedding decoration services in Nagercoil
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Wedding Decoration?</h2>
            <p className="text-xl mb-8">
              Contact Asjin Events today for a free consultation and quote for your wedding decoration in Nagercoil.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Call Us</p>
                <p>+91 8903821128</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Business Hours</p>
                <p>9 AM - 8 PM (Daily)</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Service Area</p>
                <p>Nagercoil & Kanyakumari District</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918903821128" 
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Call Now for Free Quote
              </a>
              <a 
                href="https://wa.me/918903821128?text=Hi,%20I%20need%20a%20quote%20for%20wedding%20decoration%20in%20Nagercoil" 
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Get WhatsApp Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}