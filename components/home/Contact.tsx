import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Plan Your <span className="text-purple-200">Dream Event?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-3xl mx-auto px-4">
            Contact Asjin Events today for a free consultation. Let's discuss how 
            we can make your special day truly unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full mb-2 sm:mb-4">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">Call Us</h3>
            <p className="text-xs sm:text-base text-purple-100">+91 8903821128</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full mb-2 sm:mb-4">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">WhatsApp</h3>
            <p className="text-xs sm:text-base text-purple-100">Quick Responses</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full mb-2 sm:mb-4">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">Service Area</h3>
            <p className="text-xs sm:text-base text-purple-100">Nagercoil & Kanyakumari District</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full mb-2 sm:mb-4">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">Business Hours</h3>
            <p className="text-xs sm:text-base text-purple-100">9 AM - 8 PM (Daily)</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <a 
            href="tel:+918903821128" 
            className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            <Phone className="inline h-5 w-5 mr-2" />
            Call Now
          </a>
          <a 
            href="https://wa.me/918903821128?text=Hi,%20I%20would%20like%20to%20know%20about%20your%20wedding%20decoration%20services" 
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            <MessageCircle className="inline h-5 w-5 mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}