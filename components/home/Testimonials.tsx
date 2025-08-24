import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya & Karthik',
      event: 'Wedding in Nagercoil',
      rating: 5,
      text: 'Asjin Events made our dream wedding come true! The mandap decoration was absolutely stunning and exactly what we envisioned. Their attention to detail and professionalism is unmatched.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
    },
    {
      name: 'Meera & Rajesh',
      event: 'Reception in Kanyakumari',
      rating: 5,
      text: 'Outstanding service from start to finish! The floral arrangements were breathtaking and the entire venue looked like a fairy tale. Highly recommend Asjin Events.',
      image: 'https://images.pexels.com/photos/3585810/pexels-photo-3585810.jpeg'
    },
    {
      name: 'Divya & Arun',
      event: 'Engagement in Marthandam',
      rating: 5,
      text: 'The team at Asjin Events exceeded our expectations. From planning to execution, everything was perfect. Our guests are still talking about the beautiful decorations!',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-purple-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our happy couples 
            across Kanyakumari district have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-purple-600">4.9/5</div>
              <div className="text-gray-600">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Happy Couples</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}