import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, Heart, Mountain, Train, Snowflake, Watch } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Switzerland = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredExpIndex, setHoveredExpIndex] = useState<number | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (badgeRef.current) {
      tl.fromTo(badgeRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
    }

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1 },
        '-=0.4'
      );
    }

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        '-=0.6'
      );
    }

    if (statsRef.current) {
      tl.fromTo(statsRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4');
    }

    sectionsRef.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const destinationData = {
    badge: 'Swiss Alps',
    badgeColor: 'bg-gradient-to-r from-sky-50 to-sky-100 text-sky-700 border-sky-200',
    heroImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
    heroImageAlt: 'Switzerland',
    title: 'SWITZERLAND',
    titleColor: '#0284c7',
    subtitle: 'Where majestic peaks meet pristine alpine beauty',

    aboutLabel: 'Experience',
    aboutTitle: 'Wonderland',
    aboutTitleItalic: 'An Alpine',
    aboutParagraph1: 'Switzerland, nestled in the heart of Europe, is a land of breathtaking natural beauty and timeless elegance. From the snow-capped peaks of the Alps to the crystal-clear lakes and charming villages, this alpine paradise offers an unparalleled blend of outdoor adventure and sophisticated culture.',
    aboutParagraph2: 'Experience world-class skiing in Zermatt, cruise pristine lakes in Lucerne, ride scenic mountain railways, and indulge in Swiss chocolate and cheese. Switzerland is where nature perfection meets Swiss precision and hospitality.',
    aboutImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    aboutImageAlt: 'Swiss Alps',

    statsLabel: 'Alpine Highlights',
    statsTitle: 'Explore',
    statsTitleHighlight: 'Switzerland',
    statsDescription: 'A destination where natural beauty meets Swiss excellence',
    stats: [
      {
        icon: Mountain,
        iconColor: '#0284c7',
        number: '48',
        label: 'Alpine Peaks',
        accentColor: '#0284c7',
        description: 'Majestic mountains over 4000 meters high',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
        imageAlt: 'Swiss Mountains',
      },
      {
        icon: Train,
        iconColor: '#0369a1',
        number: '5000km',
        label: 'Railway Network',
        accentColor: '#0369a1',
        description: 'Scenic train routes through the Alps',
        image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
        imageAlt: 'Swiss Train',
      },
      {
        icon: Snowflake,
        iconColor: '#38bdf8',
        number: '200+',
        label: 'Ski Resorts',
        accentColor: '#38bdf8',
        description: 'World-class winter sports destinations',
        image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80',
        imageAlt: 'Swiss Skiing',
      },
      {
        icon: Watch,
        iconColor: '#075985',
        number: '1500+',
        label: 'Lakes',
        accentColor: '#075985',
        description: 'Crystal-clear alpine and glacial lakes',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80',
        imageAlt: 'Swiss Lake',
      },
    ],

    experiences: [
      {
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
        title: 'Matterhorn',
        subtitle: 'Iconic Peak',
        description: 'Marvel at one of the most photographed mountains in the world',
      },
      {
        image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1200&q=80',
        title: 'Glacier Express',
        subtitle: 'Scenic Railway',
        description: 'Journey through the Alps on the world slowest express train',
      },
      {
        image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1200&q=80',
        title: 'Alpine Skiing',
        subtitle: 'Winter Sports',
        description: 'Experience world-class slopes and pristine powder snow',
      },
      {
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&q=80',
        title: 'Lake Geneva',
        subtitle: 'Lakeside Beauty',
        description: 'Explore charming towns along Europe largest alpine lake',
      },
    ],
    experiencesDescription: 'Discover the alpine wonders that make Switzerland a year-round paradise',

    ctaTitle: 'Swiss Escape',
    ctaDescription: 'Let our travel experts craft your perfect Swiss adventure. From luxury chalets in St. Moritz to scenic train journeys and alpine hiking trails, we create unforgettable experiences in the heart of the Alps.',
    ctaImages: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
      'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80',
    ],
    ctaRating: '5.0',
    ctaGradient: 'bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900',
  };

  const stats = destinationData.stats;
  const experiences = destinationData.experiences;

  return (
    <div className="bg-white">
      {/* Hero Section - Custom for Switzerland with smaller title */}
      <div className="relative bg-white pt-20 pb-24">
        <div ref={badgeRef} className="text-center mb-10">
          <span className={`px-8 py-3 ${destinationData.badgeColor} text-sm font-bold uppercase tracking-[0.3em] border inline-flex items-center gap-2 shadow-lg`}>
            <Sparkles className="w-4 h-4" />
            {destinationData.badge}
          </span>
        </div>

        <div className="flex justify-center px-8 mb-16">
          <img
            ref={imageRef}
            src={destinationData.heroImage}
            alt={destinationData.heroImageAlt}
            className="w-full max-w-5xl h-[300px] object-cover shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          />
        </div>

        {/* Title for Switzerland */}
        <div className="relative z-20 w-full px-8 -mt-32 mb-10">
          <h1
            ref={titleRef}
            className="text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black text-center leading-none"
            style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              letterSpacing: '-0.02em',
              color: destinationData.titleColor,
              textShadow: `0 10px 40px ${destinationData.titleColor}50`,
            }}
          >
            {destinationData.title}
          </h1>
        </div>

        <div className="text-center mb-8 px-8">
          <p className="text-2xl md:text-3xl text-gray-600 font-light italic max-w-3xl mx-auto">{destinationData.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 px-8">
          <button className={`group px-10 py-5 ${destinationData.ctaGradient} text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3`}>
            <span>Explore Packages</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={`px-10 py-5 bg-white border-2 text-lg font-semibold hover:text-white transition-all duration-300`} style={{ borderColor: destinationData.titleColor, color: destinationData.titleColor }}>
            View Gallery
          </button>
        </div>
      </div>

      {/* About Section */}
      <div ref={(el) => { if (el) sectionsRef.current[0] = el; }} className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5" style={{ backgroundColor: destinationData.titleColor }} />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">{destinationData.aboutLabel}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-travel-charcoal mb-6 leading-tight">
                <span className="italic font-light">{destinationData.aboutTitleItalic}</span>
                <br />
                {destinationData.aboutTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{destinationData.aboutParagraph1}</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{destinationData.aboutParagraph2}</p>
              <button className="group flex items-center gap-3 font-semibold hover:gap-5 transition-all duration-300" style={{ color: destinationData.titleColor }}>
                <span>Read Full Story</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-[600px]">
              <img src={destinationData.aboutImage} alt={destinationData.aboutImageAlt} className="absolute inset-0 w-full h-full object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={(el) => { if (el) sectionsRef.current[1] = el; }} className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] border-b-2 pb-2" style={{ color: destinationData.titleColor, borderColor: destinationData.titleColor }}>
                {destinationData.statsLabel}
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-travel-charcoal mb-6">
              <span className="italic font-light">{destinationData.statsTitle}</span>{' '}
              <span style={{ color: destinationData.titleColor }}>{destinationData.statsTitleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{destinationData.statsDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-[280px] overflow-hidden">
                  <img src={stat.image} alt={stat.imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-6 right-6">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <stat.icon className="w-7 h-7" style={{ color: stat.iconColor }} />
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <div className="text-5xl font-black text-travel-charcoal mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">{stat.label}</div>
                  <div className="h-1 w-12 mb-4" style={{ backgroundColor: stat.accentColor }} />
                  <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div ref={(el) => { if (el) sectionsRef.current[2] = el; }} className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="w-6 h-6" style={{ color: destinationData.titleColor }} />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Curated Activities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-travel-charcoal mb-4 leading-none">
              <span className="italic font-light">Unforgettable</span>
              <br />
              <span style={{ color: '#6C63FF' }}>Experiences</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">{destinationData.experiencesDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => {
              const isHovered = hoveredExpIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredExpIndex(index)}
                  onMouseLeave={() => setHoveredExpIndex(null)}
                  className="group relative h-[500px] overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      style={{
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="text-sm text-white/70 uppercase tracking-wider mb-2">{exp.subtitle}</div>
                    <h3 className={`text-4xl font-display font-bold text-white mb-3 transition-colors duration-300 ${isHovered ? 'text-purple-400' : ''}`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">{exp.description}</p>
                    <button className={`flex items-center gap-2 text-white font-semibold transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                      animation: isHovered ? 'shine 1.5s ease-in-out' : 'none',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
      </div>

      {/* CTA Section */}
      <div ref={(el) => { if (el) sectionsRef.current[3] = el; }} className="relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className={`relative ${destinationData.ctaGradient} px-12 py-24 lg:py-32 flex items-center`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-white">Start Your Journey</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  <span className="italic font-light">Your Dream</span>
                  <br />
                  <span>{destinationData.ctaTitle}</span>
                </h2>

                <p className="text-xl text-white/90 mb-8 leading-relaxed">{destinationData.ctaDescription}</p>

                <div className="space-y-4 mb-10">
                  {['Personalized Itineraries', 'Exclusive Access', '24/7 Support'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">{feature}</div>
                        <div className="text-white/70 text-sm">
                          {idx === 0 && 'Custom-designed trips based on your preferences'}
                          {idx === 1 && 'VIP experiences and hidden gems'}
                          {idx === 2 && 'Dedicated concierge throughout your journey'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="group px-10 py-5 bg-white font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-xl" style={{ color: destinationData.titleColor }}>
                    <span>Plan Your Trip</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-semibold text-lg hover:bg-white transition-all duration-300 flex items-center gap-3">
                    <Heart className="w-5 h-5" />
                    <span>Save for Later</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] lg:h-auto">
              <div className="grid grid-cols-2 gap-4 h-full p-4">
                {destinationData.ctaImages.map((img, idx) => (
                  <div key={idx} className="relative overflow-hidden group">
                    <img src={img} alt={`Switzerland ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>

              <div className="absolute top-8 right-8 bg-white px-6 py-4 shadow-2xl">
                <div className="text-3xl font-black mb-1" style={{ color: destinationData.titleColor }}>{destinationData.ctaRating}★</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-600">Traveler Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switzerland;
