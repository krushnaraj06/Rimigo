import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, TrendingUp, Star, Users, MapPin, ArrowRight } from 'lucide-react';
import LuxuryTraveller from '../assets/LuxuryTraveller.png';
import ChooseYourStyle from '../assets/ChooseYourStyle.jpg';

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Adventure Seekers',
      subtitle: 'For The Bold & Brave',
      description: 'Push your limits with heart-pounding experiences. From mountain peaks to ocean depths, discover the thrill of adventure.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      travelerImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
      icon: TrendingUp,
      stats: '2,500+',
      statsLabel: 'Adventures',
      rating: 4.9,
      color: 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900',
      accentColor: 'text-slate-700',
      bgPattern: 'from-slate-50 to-gray-100',
    },
    {
      title: 'Luxury Escapes',
      subtitle: 'Premium & Exclusive',
      description: 'Experience unparalleled comfort and sophistication. Indulge in world-class amenities and personalized service.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      travelerImage: LuxuryTraveller,
      icon: Star,
      stats: '1,800+',
      statsLabel: 'Luxury Resorts',
      rating: 5.0,
      color: 'bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900',
      accentColor: 'text-amber-700',
      bgPattern: 'from-amber-50 to-orange-50',
    },
    {
      title: 'Cultural Tours',
      subtitle: 'Authentic & Immersive',
      description: 'Connect with local traditions and heritage. Experience the soul of destinations through authentic cultural encounters.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      travelerImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
      icon: Users,
      stats: '3,200+',
      statsLabel: 'Cultural Tours',
      rating: 4.8,
      color: 'bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900',
      accentColor: 'text-indigo-700',
      bgPattern: 'from-indigo-50 to-blue-50',
    },
    {
      title: 'Beach Retreats',
      subtitle: 'Relax & Unwind',
      description: 'Escape to paradise with pristine beaches and crystal-clear waters. Find your perfect slice of tropical heaven.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      travelerImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      icon: MapPin,
      stats: '950+',
      statsLabel: 'Beach Destinations',
      rating: 4.9,
      color: 'bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900',
      accentColor: 'text-teal-700',
      bgPattern: 'from-teal-50 to-cyan-50',
    },
  ];

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  // Animate on change
  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, [activeIndex]);

  // Background parallax
  useEffect(() => {
    if (!sectionRef.current || !backgroundRef.current) return;

    gsap.to(backgroundRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const current = experiences[activeIndex];
  const Icon = current.icon;
  const isEven = activeIndex % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Background Image - 100% Fit */}
      <div
        ref={backgroundRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ChooseYourStyle})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better content readability */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Aesthetic Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Choose Your Journey
            </span>
          </div>
          <h2 className="text-7xl font-display font-bold text-travel-charcoal mb-6 leading-none tracking-tight">
            <span className="italic font-light">Your</span>{' '}
            <span className="relative inline-block">
              Travel
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2, 150 2, 198 6" stroke="url(#travelGradient)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="travelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#E26A5A" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            <span className="bg-gradient-to-r from-travel-sky via-purple-500 to-travel-coral bg-clip-text text-transparent">
              Style
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover experiences crafted for your unique way of exploring the world
          </p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="relative">
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
            
            {/* Image Side */}
            <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-8'}`}>
              <div className="relative group">
                {/* Main Image */}
                <div className="relative h-[550px] overflow-hidden">
                  <img
                    src={current.travelerImage}
                    alt={current.title}
                    className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 ${current.color} opacity-20 mix-blend-multiply`} />
                  <div className="absolute inset-0 border-8 border-white/10" />
                </div>

                {/* Floating Number Badge */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 ${current.color} text-white flex flex-col items-center justify-center shadow-2xl font-bold`}>
                  <span className="text-3xl">{String(activeIndex + 1).padStart(2, '0')}</span>
                  <span className="text-xs opacity-80">OF 04</span>
                </div>

                {/* Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white shadow-2xl p-6 min-w-[200px]">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${current.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-travel-charcoal">{current.stats}</p>
                      <p className="text-xs text-gray-600 uppercase tracking-wider">{current.statsLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
              <div className="max-w-xl">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className={`w-12 h-12 ${current.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-sm font-semibold uppercase tracking-widest ${current.accentColor}`}>
                    {current.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-6xl font-display font-bold text-travel-charcoal mb-6 leading-none">
                  {current.title}
                </h3>

                {/* Decorative Line */}
                <div className={`w-24 h-1 ${current.color} mb-8`} />

                {/* Description */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(current.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-travel-charcoal">{current.rating}</span>
                  <span className="text-gray-500">/ 5.0</span>
                </div>

                {/* CTA Button */}
                <button className={`group ${current.color} text-white px-10 py-5 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3`}>
                  <span>Discover {current.title}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-20">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="w-14 h-14 border-2 border-travel-charcoal text-travel-charcoal hover:bg-travel-charcoal hover:text-white transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Progress Dots */}
          <div className="flex gap-3">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative group"
              >
                <div
                  className={`h-2 transition-all duration-500 ${
                    index === activeIndex
                      ? 'w-16 bg-travel-charcoal'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-travel-sky animate-pulse opacity-50" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-14 h-14 border-2 border-travel-charcoal text-travel-charcoal hover:bg-travel-charcoal hover:text-white transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxShowcase;
