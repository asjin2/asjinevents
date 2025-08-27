import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import ShareButton from '@/components/blog/ShareButton';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Wedding Decoration Trends in 2024 for South Indian Weddings',
    excerpt: 'Discover the latest wedding decoration trends that are making waves in Tamil Nadu weddings this year.',
    content: `
      <p>Wedding decorations have evolved significantly over the years, and 2024 brings exciting new trends that perfectly blend traditional South Indian elements with contemporary aesthetics. As Nagercoil's premier wedding decoration specialists, we've compiled the top 10 trends that are defining weddings across Tamil Nadu this year.</p>

      <h2>1. Sustainable and Eco-Friendly Decorations</h2>
      <p>More couples are choosing environmentally conscious decorations. This includes using locally sourced flowers, biodegradable materials, and reusable decor elements. Banana leaves, coconut shells, and natural fibers are making a strong comeback in modern Tamil weddings.</p>

      <h2>2. Minimalist Mandap Designs</h2>
      <p>Gone are the days of overly elaborate mandaps. 2024 sees a shift towards clean, minimalist designs that focus on quality over quantity. Simple geometric patterns with fresh flowers create stunning visual impact without overwhelming the ceremony space.</p>

      <h2>3. Mixed Floral Arrangements</h2>
      <p>Combining traditional South Indian flowers like jasmine and marigold with exotic blooms creates unique, eye-catching arrangements. This trend allows couples to honor tradition while adding personal touches to their wedding decor.</p>

      <h2>4. LED and Smart Lighting Integration</h2>
      <p>Technology meets tradition with smart lighting solutions. LED strips hidden within traditional decorations create magical ambiance while being energy-efficient and customizable to match different ceremony phases.</p>

      <h2>5. Personalized Photo Backdrops</h2>
      <p>Custom photo backdrops featuring the couple's love story, family heritage, or favorite quotes are becoming increasingly popular. These create memorable photo opportunities and add personal meaning to the celebration.</p>

      <h2>Conclusion</h2>
      <p>These trends reflect the evolving preferences of modern couples who want to honor tradition while expressing their unique style. At Asjin Events, we help couples incorporate these trends seamlessly into their wedding celebrations across Nagercoil and Kanyakumari district.</p>
    `,
    image: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756318960/wed_3_extvds.jpg',
    author: 'Asjin Events Team',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Wedding Trends'
  },
  {
    id: 2,
    title: 'Planning a Budget-Friendly Wedding in Nagercoil: Complete Guide',
    excerpt: 'Learn how to plan a beautiful wedding without breaking the bank. Tips and tricks from our experienced planners.',
    content: `
      <p>Planning a wedding in Nagercoil doesn't have to drain your savings. With careful planning and smart choices, you can create a beautiful celebration that fits your budget. Here's our comprehensive guide to planning an affordable yet memorable wedding.</p>

      <h2>Setting Your Budget</h2>
      <p>Start by determining your total budget and allocating funds to different aspects of your wedding. Typically, decorations should account for 8-10% of your total wedding budget. This helps you make informed decisions about where to splurge and where to save.</p>

      <h2>Choosing the Right Season</h2>
      <p>Wedding costs vary significantly by season. Consider planning your wedding during off-peak months (March-May, September-October) when venue and vendor prices are typically lower. You'll also have better availability and more negotiating power.</p>

      <h2>Smart Decoration Choices</h2>
      <p>Focus on high-impact areas like the mandap and entrance. Use locally available flowers like jasmine, roses, and marigolds which are both beautiful and cost-effective. Consider renting decorative items instead of purchasing them.</p>

      <h2>DIY Elements</h2>
      <p>Incorporate DIY elements where possible. Simple crafts like paper flowers, handmade rangoli, or family photo displays can add personal touches while keeping costs down. Involve family members to make it a bonding experience.</p>

      <h2>Vendor Negotiations</h2>
      <p>Don't hesitate to negotiate with vendors. Many are willing to work within your budget, especially if you're flexible with dates or services. Consider package deals that bundle multiple services together for better value.</p>

      <h2>Final Tips</h2>
      <p>Remember, a beautiful wedding is about celebrating love, not about how much you spend. Focus on creating meaningful moments and memories that will last a lifetime. With proper planning, you can have a stunning wedding in Nagercoil without overspending.</p>
    `,
    image: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756318960/wed_4_ysydxn.jpg',
    author: 'Asjin Events Team',
    date: '2024-01-10',
    readTime: '7 min',
    category: 'Wedding Planning'
  },
  {
    id: 3,
    title: 'Best Wedding Venues in Kanyakumari District for 2024',
    excerpt: 'A comprehensive guide to the most beautiful wedding venues across Kanyakumari district.',
    content: `
      <p>Choosing the perfect venue is one of the most important decisions in wedding planning. Kanyakumari district offers a diverse range of stunning venues, from traditional halls to beachside locations. Here's our curated list of the best wedding venues for 2024.</p>

      <h2>Beach Venues</h2>
      <p>Kanyakumari's coastline offers breathtaking beach venues perfect for couples who dream of a seaside wedding. The natural beauty of the ocean provides a stunning backdrop that requires minimal decoration. Popular options include private beach resorts and public beach areas with proper permits.</p>

      <h2>Heritage Properties</h2>
      <p>Several heritage properties in the district have been converted into wedding venues, offering a blend of history and elegance. These venues provide unique architectural features and often include beautiful gardens perfect for outdoor ceremonies.</p>

      <h2>Traditional Wedding Halls</h2>
      <p>For couples preferring traditional settings, Nagercoil and surrounding areas offer numerous well-equipped wedding halls. These venues typically provide essential amenities and can accommodate large guest lists comfortably.</p>

      <h2>Resort Venues</h2>
      <p>Resort weddings are gaining popularity for their all-inclusive packages and scenic locations. Many resorts in the district offer wedding packages that include accommodation, catering, and basic decorations.</p>

      <h2>Temple Venues</h2>
      <p>For deeply traditional ceremonies, several temples in the district allow wedding celebrations in their premises. These venues offer spiritual significance and often feature beautiful traditional architecture.</p>

      <h2>Choosing the Right Venue</h2>
      <p>Consider factors like guest capacity, accessibility, parking, catering facilities, and decoration policies when selecting your venue. Visit potential venues in person and discuss your specific requirements with the management.</p>
    `,
    image: 'https://res.cloudinary.com/dszxkjpev/image/upload/v1756318966/wed_6_tbosvx.jpg',
    author: 'Asjin Events Team',
    date: '2024-01-05',
    readTime: '6 min',
    category: 'Venues'
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: 'Post Not Found | Asjin Events Blog'
    };
  }

  return {
    title: `${post.title} | Asjin Events Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                {post.category}
              </span>
              <div className="flex items-center space-x-1 mr-4">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1 mr-4">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} read</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <p className="text-xl text-gray-600">
                {post.excerpt}
              </p>
              <ShareButton 
                title={post.title}
                excerpt={post.excerpt}
              />
            </div>
          </div>

          <div className="mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-purple-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">
                  Expert wedding planners and decorators serving Nagercoil and Kanyakumari district. 
                  With over 10 years of experience, we create magical wedding celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Dream Wedding?</h2>
          <p className="text-xl mb-8">
            Contact Asjin Events today for expert wedding planning and decoration services in Nagercoil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918903821128" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/918903821128" 
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}