'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918903821128?text=Hi,%20I%20would%20like%20to%20know%20about%20your%20wedding%20decoration%20services"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contact Asjin Events via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918903821128"
        className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Call Asjin Events"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}