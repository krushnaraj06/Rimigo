import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import RimigoCrop from '../assets/Rimigocrop.png';

gsap.registerPlugin(ScrollTrigger);

const TopDestinations = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          scale: 0.95,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.08,
          ease: 'power2.out',
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
      rating: 4.9,
      tours: 120,
      badge: 'Popular',
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      rating: 4.8,
      tours: 95,
      badge: 'Trending',
    },
    {
      name: 'Switzerland',
      country: 'Europe',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      rating: 4.9,
      tours: 78,
      badge: 'Premium',
    },
    {
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      rating: 4.7,
      tours: 150,
      badge: 'Romantic',
    },
    {
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      rating: 4.8,
      tours: 88,
      badge: 'Luxury',
    },
    {
      name: 'Maldives',
      country: 'Indian Ocean',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      rating: 5.0,
      tours: 65,
      badge: 'Paradise',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-8 bg-gradient-to-b from-white via-travel-gray/30 to-white overflow-hidden"
    >
      {/* Rimigo Crop Banner - Left Top */}
      <div className="absolute left-0 w-[650px] h-60 opacity-15 z-0 mb-[35px]" style={{ top: '160px' }}>
        <img
          src={RimigoCrop}
          alt="Rimigo Background"
          className="w-full h-full object-contain object-left-top"
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-travel-sky/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-travel-coral/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-7xl font-display font-bold text-travel-charcoal mb-6 leading-tight tracking-tight">
            <span className="italic">Top</span> Destinations{' '}
            <span className="relative inline-block">
              You'll{' '}
              <span className="bg-gradient-to-r from-travel-sky via-purple-800 to-travel-coral bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Love
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2, 150 2, 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#E26A5A" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover handpicked destinations that offer unforgettable experiences and breathtaking beauty
          </p>
        </div>

        {/* Cards Horizontal Scroll */}
        <div className="relative mb-16">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {destinations.map((destination, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-[450px] w-[380px] flex-shrink-0 overflow-hidden cursor-pointer snap-start"
                style={{
                  boxShadow:
                    hoveredIndex === index
                      ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                      : '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    style={{
                      filter: hoveredIndex === index ? 'brightness(1.1)' : 'brightness(1)',
                    }}
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-travel-sky/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="px-4 py-2 bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-travel-charcoal">{destination.badge}</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="px-3 py-1.5 bg-black/50 backdrop-blur-md flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-white">{destination.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium text-white/90">{destination.country}</span>
                  </div>

                  <h3 className="text-4xl font-display font-bold text-white mb-4 group-hover:text-travel-sky transition-colors duration-300">
                    {destination.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">{destination.tours}+ Tours Available</span>

                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-travel-ocean font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 hover:bg-travel-sky hover:text-white">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated Border */}
                <div
                  className="absolute inset-0 border-4 border-transparent transition-all duration-500"
                  style={{
                    borderColor: hoveredIndex === index ? 'rgba(59, 130, 246, 0.5)' : 'transparent',
                  }}
                />

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: hoveredIndex === index ? 'shine 1.5s ease-in-out' : 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Swipe Right Icon - Fixed Position */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
            <button className="w-16 h-16 rounded-full bg-gradient-to-r from-travel-sky to-travel-ocean shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse hover:animate-none">
              <ArrowRight className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-travel-sky to-travel-ocean text-Black font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
            View All Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TopDestinations;
