import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TravelPackages = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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

  const packages = [
    {
      country: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80',
      price: '$2,499',
      duration: '7 Days / 6 Nights',
      badge: 'Best Seller',
      badgeColor: 'bg-travel-coral',
    },
    {
      country: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
      price: '$1,899',
      duration: '6 Days / 5 Nights',
      badge: 'Popular',
      badgeColor: 'bg-travel-sky',
    },
    {
      country: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
      price: '$3,299',
      duration: '8 Days / 7 Nights',
      badge: 'Premium',
      badgeColor: 'bg-yellow-500',
    },
    {
      country: 'Maldives Paradise',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
      price: '$3,999',
      duration: '5 Days / 4 Nights',
      badge: 'New',
      badgeColor: 'bg-green-500',
    },
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-travel-gray to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-travel-charcoal mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600">
            Handcrafted journeys for unforgettable experiences
          </p>
        </div>

        <div className="ml-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ width: 'calc(100% + 3px)', height: 'calc(24rem + 3px)' }}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.country}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {pkg.country}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">{pkg.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <DollarSign className="w-5 h-5" />
                    <span className="text-xl font-bold">{pkg.price}</span>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-travel-sky/50 transition-all duration-500 rounded-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-gradient-to-r from-travel-sky to-travel-ocean text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
            See More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
