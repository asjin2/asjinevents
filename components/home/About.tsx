import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Star } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-purple-600">Asjin Events</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Since 2014, Asjin Events has been Nagercoil's premier wedding decor and event 
                management company, creating magical celebrations that reflect the unique personality 
                and vision of each couple.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our passionate team combines creativity, professionalism, and attention to detail 
                to transform your special day into an unforgettable masterpiece. We serve clients 
                across Kanyakumari district with the same level of dedication and excellence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">Client Rating</div>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dszxkjpev/image/upload/v1756061456/download_12_lyoc4v.jpg"
              alt="Asjin Events team creating beautiful wedding decorations in Nagercoil"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-600">1000+</div>
              <div className="text-gray-700 font-medium">Events Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}