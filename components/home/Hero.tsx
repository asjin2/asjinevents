import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dszxkjpev/image/upload/v1756055931/2151481511_bskp0a.jpg"
          alt="Elegant wedding decoration by Asjin Events in Nagercoil"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight" itemProp="headline">
          Best <span className="text-purple-300">Wedding Decorators</span><br />
          in Nagercoil
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-purple-100 leading-relaxed px-2" itemProp="description">
          #1 Wedding Decor & Event Management Company in Kanyakumari District<br />
          <span className="block sm:inline">⭐ 500+ Happy Couples</span>
          <span className="hidden sm:inline"> | </span>
          <span className="block sm:inline">Premium Mandap Decorations</span>
          <span className="hidden sm:inline"> | </span>
          <span className="block sm:inline">Call +91-8903821128</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Plan Your Event
          </Link>
          <Link
            href="/gallery"
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            View Gallery
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300">500+</div>
            <div className="text-xs sm:text-sm md:text-base text-purple-100">Happy Couples</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300">10+</div>
            <div className="text-xs sm:text-sm md:text-base text-purple-100">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300">1000+</div>
            <div className="text-xs sm:text-sm md:text-base text-purple-100">Events Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
}