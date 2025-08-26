import Link from 'next/link';
import { Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const services = [
    'Wedding Decorations',
    'Event Planning',
    'Floral Arrangements',
    'Reception Decor',
    'Pre-Wedding Events',
    'Corporate Events'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Wedding Decor Nagercoil', href: '/wedding-decor-nagercoil' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Asjin Events Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-bold text-xl">Asjin Events</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium wedding decor and event management services in Nagercoil. 
              Creating magical moments across Kanyakumari district since 2014.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/asjin_events" 
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
                aria-label="Follow Asjin Events on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/asjinevents" 
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
                aria-label="Follow Asjin Events on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@asjinevents" 
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
                aria-label="Subscribe to Asjin Events on YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-purple-400" />
                <a href="tel:+918903821128" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  +91 8903821128
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-gray-300">
                  Serving Nagercoil &<br />Kanyakumari District
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Business Hours:</p>
              <p className="text-gray-300">9:00 AM - 8:00 PM (Daily)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Asjin Events. All rights reserved. | 
            <span className="text-purple-400"> Best Wedding Decorators in Nagercoil, Kanyakumari District</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Keywords: Wedding Decor Nagercoil, Mandap Decoration, Event Decorators Kanyakumari, Marriage Decoration Services, Wedding Planners Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}