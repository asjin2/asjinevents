import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your <span className="text-purple-200">Dream Event?</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Contact Asjin Events today for a free consultation. Let's discuss how 
            we can make your special day truly unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-purple-100">+91 8903821128</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-purple-100">Quick Responses</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Service Area</h3>
            <p className="text-purple-100">Nagercoil & Kanyakumari District</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
            <p className="text-purple-100">9 AM - 8 PM (Daily)</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="tel:+918903821128" 
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="inline h-5 w-5 mr-2" />
            Call Now
          </a>
          <a 
            href="https://wa.me/918903821128?text=Hi,%20I%20would%20like%20to%20know%20about%20your%20wedding%20decoration%20services" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="inline h-5 w-5 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}