'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918903821128?text=Hi,%20I%20would%20like%20to%20know%20about%20your%20wedding%20decoration%20services"
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+918903821128"
        className="bg-purple-600 hover:bg-purple-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call us now"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Call Now
        </span>
      </a>
    </div>
  );
}