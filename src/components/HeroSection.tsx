import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play, Users, MapPin } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const layer4Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!layer1Ref.current || !layer2Ref.current || !layer3Ref.current || !layer4Ref.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      gsap.to(layer1Ref.current, { x: moveX * 0.5, y: moveY * 0.5, duration: 1, ease: 'power2.out' });
      gsap.to(layer2Ref.current, { x: moveX * 1, y: moveY * 1, duration: 1, ease: 'power2.out' });
      gsap.to(layer3Ref.current, { x: moveX * 1.5, y: moveY * 1.5, duration: 1, ease: 'power2.out' });
      gsap.to(layer4Ref.current, { x: moveX * 2, y: moveY * 2, duration: 1, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll fade-out
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 600, 0);
      if (contentRef.current) {
        contentRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial animations
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.5,
          ease: 'power3.out',
        }
      );
    }

    if (imagesRef.current) {
      gsap.fromTo(imagesRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.8,
          ease: 'power3.out',
        }
      );
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const travelImages = [
    'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80',
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
  ];

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1: Sky with clouds */}
        <div
          ref={layer1Ref}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
          }}
        />

        {/* Layer 2: Mountain ridge */}
        <div
          ref={layer2Ref}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7,
          }}
        />

        {/* Layer 3: Beach/traveler silhouette */}
        <div
          ref={layer3Ref}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
          }}
        />

        {/* Layer 4: Foreground plants */}
        <div
          ref={layer4Ref}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            opacity: 0.3,
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left Content */}
          <div ref={contentRef}>
            <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Discover the World with{' '}
              <span className="bg-gradient-to-r from-travel-sky to-travel-coral bg-clip-text text-transparent">
                Rimigo
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Premium curated journeys to the most beautiful destinations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-gradient-to-r from-travel-sky to-travel-ocean text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Destinations
              </button>
              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Watch Travel Video
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <Users className="w-6 h-6 text-travel-sky" />
                <div>
                  <p className="text-2xl font-bold text-white">4000+</p>
                  <p className="text-sm text-white/80">Happy Travelers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <MapPin className="w-6 h-6 text-travel-coral" />
                <div>
                  <p className="text-2xl font-bold text-white">125+</p>
                  <p className="text-sm text-white/80">Destinations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div ref={imagesRef} className="hidden lg:flex flex-col gap-4 justify-center">
            {travelImages.map((img, index) => (
              <div
                key={index}
                className="relative h-48 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <img
                  src={img}
                  alt={`Travel destination ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
