import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, DollarSign, Star } from 'lucide-react';

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
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-travel-charcoal mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600">
            Handcrafted journeys for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.country}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Badge */}
                <div className={`absolute top-6 right-6 ${pkg.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1`}>
                  <Star className="w-4 h-4 fill-current" />
                  {pkg.badge}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-display font-bold text-white mb-4">
                    {pkg.country}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-2xl font-bold">{pkg.price}</span>
                    </div>
                  </div>

                  <button className="w-full bg-white text-travel-ocean font-semibold py-3 rounded-xl hover:bg-travel-sky hover:text-white transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
