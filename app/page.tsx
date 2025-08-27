import Link from 'next/link';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Asjin Events</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/events" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Events
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Discover Amazing
            <span className="text-indigo-600"> Events</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Join us for unforgettable experiences, networking opportunities, and community gatherings. 
            Find your next adventure with Asjin Events.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/events"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Browse Events
            </Link>
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
            <p className="text-gray-600">
              Connect with like-minded individuals and build lasting relationships through our carefully curated events.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
              <MapPin className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Locations</h3>
            <p className="text-gray-600">
              Experience events in stunning venues across the city, from intimate spaces to grand halls.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Memorable Experiences</h3>
            <p className="text-gray-600">
              Every event is designed to create lasting memories and provide value that extends beyond the day.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}