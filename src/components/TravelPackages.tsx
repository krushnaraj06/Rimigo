import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, Sparkles, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TravelPackages = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Cards stagger animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const packages = [
    {
      country: 'Santorini',
      location: 'Greece',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80',
      price: '2,499',
      duration: '7 Days',
      nights: '6 Nights',
      badge: 'Best Seller',
      description: 'Whitewashed villages and stunning sunsets',
      highlights: ['Sunset Views', 'Wine Tasting', 'Beach Resorts'],
    },
    {
      country: 'Bali',
      location: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
      price: '1,899',
      duration: '6 Days',
      nights: '5 Nights',
      badge: 'Popular',
      description: 'Tropical paradise with rich culture',
      highlights: ['Temple Tours', 'Rice Terraces', 'Spa Retreats'],
    },
    {
      country: 'Swiss Alps',
      location: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
      price: '3,299',
      duration: '8 Days',
      nights: '7 Nights',
      badge: 'Premium',
      description: 'Majestic mountains and pristine lakes',
      highlights: ['Mountain Hiking', 'Scenic Trains', 'Luxury Chalets'],
    },
    {
      country: 'Maldives',
      location: 'Indian Ocean',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
      price: '3,999',
      duration: '5 Days',
      nights: '4 Nights',
      badge: 'Luxury',
      description: 'Crystal waters and overwater villas',
      highlights: ['Private Villas', 'Diving', 'Spa & Wellness'],
    },
    {
      country: 'Paris',
      location: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
      price: '2,799',
      duration: '6 Days',
      nights: '5 Nights',
      badge: 'Romantic',
      description: 'City of lights and timeless romance',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise'],
    },
    {
      country: 'Dubai',
      location: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
      price: '2,299',
      duration: '5 Days',
      nights: '4 Nights',
      badge: 'Modern',
      description: 'Futuristic skyline meets desert adventure',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping'],
    },
    {
      country: 'Iceland',
      location: 'Nordic',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80',
      price: '3,499',
      duration: '7 Days',
      nights: '6 Nights',
      badge: 'Adventure',
      description: 'Land of fire, ice, and northern lights',
      highlights: ['Northern Lights', 'Blue Lagoon', 'Glacier Hiking'],
    },
    {
      country: 'Tokyo',
      location: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
      price: '2,999',
      duration: '8 Days',
      nights: '7 Nights',
      badge: 'Cultural',
      description: 'Ancient traditions meet modern innovation',
      highlights: ['Cherry Blossoms', 'Temples', 'Street Food'],
    },
    {
      country: 'Singapore',
      location: 'Southeast Asia',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80',
      price: '2,199',
      duration: '5 Days',
      nights: '4 Nights',
      badge: 'Urban',
      description: 'Garden city with world-class attractions',
      highlights: ['Marina Bay', 'Gardens by Bay', 'Hawker Food'],
    },
  ];

  return (
    <section className="relative pt-0 pb-20 px-8 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-travel-sky/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-travel-coral/5 to-amber-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="w-6 h-6 text-travel-sky" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Curated Experiences
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-travel-charcoal mb-4 leading-none">
            <span className="italic font-light">Featured</span>
            <br />
            <span className="bg-gradient-to-r from-travel-sky via-purple-600 to-travel-coral bg-clip-text text-transparent">
              Travel Packages
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Handcrafted journeys designed for unforgettable experiences
          </p>
        </div>

        {/* Perfect Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[400px] gap-6 mb-16">
          {packages.map((pkg, index) => {
            const isHovered = hoveredIndex === index;
            const isLarge = index === 0; // First card is larger

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden cursor-pointer ${
                  isLarge ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{
                  boxShadow: isHovered
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    : '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={pkg.image}
                    alt={pkg.country}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                    }}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="px-4 py-2 bg-white/95 backdrop-blur-md shadow-lg">
                    <span className="text-xs font-bold text-travel-charcoal uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Location */}
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-travel-sky" />
                    <span className="text-sm text-white/80 font-medium">{pkg.location}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display font-bold text-white mb-3 transition-colors duration-300 ${
                      isLarge ? 'text-5xl' : 'text-3xl'
                    } ${isHovered ? 'text-travel-sky' : ''}`}
                  >
                    {pkg.country}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">{pkg.description}</p>

                  {/* Highlights - Show on hover */}
                  <div
                    className={`flex flex-wrap gap-2 mb-4 transition-all duration-500 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-xs text-white"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-end justify-between pt-4 border-t border-white/20">
                    <div>
                      <div className="flex items-center gap-2 text-white/70 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {pkg.duration} / {pkg.nights}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-white/60">From</span>
                        <span className="text-3xl font-bold text-white">${pkg.price}</span>
                        <span className="text-xs text-white/60">/person</span>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      className={`flex items-center gap-2 px-6 py-3 bg-white text-travel-charcoal font-semibold transition-all duration-500 hover:bg-travel-sky hover:text-white ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: isHovered ? 'shine 1.5s ease-in-out' : 'none',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group px-12 py-5 bg-travel-charcoal text-white font-semibold text-lg hover:bg-gradient-to-r hover:from-travel-sky hover:to-travel-ocean transition-all duration-300 hover:shadow-xl flex items-center gap-3 mx-auto">
            <span>View All Packages</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default TravelPackages;
