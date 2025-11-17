import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Shield, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';
import RimigoCrop from '../assets/Rimigocrop.png';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Parallax effect on image
    if (imageRef.current && sectionRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Content fade in
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Stagger items
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.1 + index * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Auto-rotate active feature
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: 'Handpicked Destinations',
      description: 'Curated locations selected by travel experts',
      detail: 'Every destination is personally vetted to ensure authentic experiences',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
      number: '01',
    },
    {
      icon: Shield,
      title: 'Premium Comfort',
      description: 'Luxury stays and seamless arrangements',
      detail: 'First-class accommodations with attention to every comfort detail',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      number: '02',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Local professionals with deep knowledge',
      detail: 'Passionate guides who bring destinations to life with stories',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
      number: '03',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance anywhere',
      detail: 'Always available support for complete peace of mind',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      number: '04',
    },
  ];

  const activeFeature = features[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Rimigo Crop Banner - Subtle */}
      <div className="absolute right-0 w-[500px] h-48 opacity-5 z-0" style={{ top: '100px' }}>
        <img
          src={RimigoCrop}
          alt="Rimigo Background"
          className="w-full h-full object-contain object-right-top"
        />
      </div>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="relative flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-32 bg-white">
          <div ref={contentRef} className="w-full max-w-xl -mt-[50px]">
            {/* Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-0.5 bg-travel-sky" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Why Rimigo
                </span>
              </div>
              <h2 className="text-6xl md:text-7xl font-display font-bold text-travel-charcoal leading-none mb-6">
                Travel
                <br />
                <span className="italic font-light">with</span> Purpose
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the difference of thoughtfully crafted journeys designed around you
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      if (el) itemsRef.current[index] = el;
                    }}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    {/* Active Indicator Line */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-travel-sky to-travel-ocean transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    <div
                      className={`pl-8 pr-6 py-6 border-l-4 transition-all duration-500 ${
                        isActive
                          ? 'border-travel-sky bg-gradient-to-r from-travel-sky/5 to-transparent'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-br from-travel-sky to-travel-ocean shadow-lg'
                              : 'bg-gray-100 group-hover:bg-gray-200'
                          }`}
                        >
                          <Icon
                            className={`w-7 h-7 transition-all duration-500 ${
                              isActive ? 'text-black' : 'text-gray-600 group-hover:text-gray-700'
                            }`}
                            strokeWidth={isActive ? 2.5 : 2}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3
                              className={`text-xl font-bold transition-colors duration-500 ${
                                isActive ? 'text-travel-sky' : 'text-travel-charcoal'
                              }`}
                            >
                              {feature.title}
                            </h3>
                            <span className="text-xs font-mono text-gray-400">{feature.number}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                          <p
                            className={`text-xs text-gray-500 transition-all duration-500 overflow-hidden ${
                              isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            {feature.detail}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ArrowRight
                          className={`flex-shrink-0 w-5 h-5 transition-all duration-500 ${
                            isActive
                              ? 'text-travel-sky opacity-100 translate-x-0'
                              : 'text-gray-400 opacity-0 -translate-x-2'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Dynamic Image */}
        <div className="relative lg:sticky lg:top-0 h-[50vh] lg:h-screen bg-gray-100 overflow-hidden">
          {/* Image Container */}
          <div ref={imageRef} className="absolute inset-0 -top-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Floating Info Card */}
          <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md shadow-2xl p-8 transform transition-all duration-700">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-travel-sky" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-travel-sky">
                    Featured
                  </span>
                </div>
                <h3 className="text-3xl font-display font-bold text-travel-charcoal mb-2">
                  {activeFeature.title}
                </h3>
                <p className="text-sm text-gray-600">{activeFeature.detail}</p>
              </div>
              <div className="flex-shrink-0 text-6xl font-bold text-gray-200">
                {activeFeature.number}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative h-1 flex-1 bg-gray-200 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-travel-sky to-travel-ocean transition-transform duration-500 origin-left ${
                      activeIndex === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
