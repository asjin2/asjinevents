import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  const galleryImages = [
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756059253/download_9_vuouoz.jpg',
      alt: 'Elegant wedding mandap decoration by Asjin Events'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756061267/Jehana_Jabbar_Mishra_and_Kanishk_Mishra_Amaara_Farms_Delhi_nwkvko.jpg',
      alt: 'Beautiful floral arrangements for wedding ceremony'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756060542/download_11_yzxj3d.jpg',
      alt: 'Stunning wedding reception decoration setup'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756060255/Felt_the_love_in_the_air_besides_the_beachy_waves_from_the_couple_who_doesn_t_belong_here_A_tropical_feel_wedding_of_beautiful_revashah28_Makeup_and_hair__makeupbymansigupta_and_team_Location__thezurigoa_Photog_bbobjd.jpg',
      alt: 'Traditional Tamil wedding decoration in Nagercoil'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756058622/fc15a08055e0e0b6eb16e343dc0a9d31_fdvp7v.jpg',
      alt: 'Pre-wedding event decoration by Asjin Events'
    },
    {
      src: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756056741/Reception_idea_tmv8rp.jpg',
      alt: 'Romantic wedding backdrop with lighting'
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning wedding decorations and celebrations 
            across Nagercoil and Kanyakumari district.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}