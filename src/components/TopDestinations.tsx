import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TopDestinations = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card, 
        {
          scale: 0.8,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const destinations = [
    {
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    },
    {
      name: 'Switzerland',
      country: 'Europe',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    },
    {
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    },
    {
      name: 'Dubai Desert',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    },
    {
      name: 'Maldives',
      country: 'Indian Ocean',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    },
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-white to-travel-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-travel-charcoal mb-4">
            Top Destinations You'll Love
          </h2>
          <p className="text-xl text-gray-600">
            Explore the world's most breathtaking locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-travel-sky" />
                  <span className="text-sm text-white/80">{destination.country}</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white">
                  {destination.name}
                </h3>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-travel-sky/50 transition-all duration-500 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
