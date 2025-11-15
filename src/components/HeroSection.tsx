import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play, Users, MapPin } from "lucide-react";
import HeroBanner from "../assets/HeroBanner1.jpg";
import HeroTraveller from "../assets/HeroTraveller.png";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const travellerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll fade-out
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 600, 0);
      if (contentRef.current) {
        contentRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial GSAP intro animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.out",
        }
      );
    }

    // Traveller image animation - pops up from right side after 2-3 seconds
    if (travellerRef.current) {
      gsap.fromTo(
        travellerRef.current,
        { x: 200, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 1,
          ease: "back.out(1.7)",
          
        }
      );
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroBanner})`,
          backgroundSize: '100% 100%',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center mt-[25px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Content */}
          <div ref={contentRef} className="relative max-w-2xl">
            {/* Small Tagline Above */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-light">
                Your Journey Begins
              </span>
            </div>

            <h1 className="mb-6 leading-relaxed">
              <span className="font-cursive text-5xl md:text-6xl font-normal text-white/95 block mb-2 drop-shadow-lg" style={{ letterSpacing: '0.02em' }}>
                The World is Calling
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-display text-white leading-snug">
                <span className="font-light text-white/80">— Let </span>
                <span className="font-cursive text-5xl md:text-6xl bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl italic" style={{ letterSpacing: '0.02em' }}>
                  Rimigo
                </span>
              </span>
              <span className="font-cursive text-4xl md:text-5xl font-normal text-amber-200/90 block mt-1 drop-shadow-lg" style={{ letterSpacing: '0.02em' }}>
                Take You There
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/85 mb-10 leading-relaxed max-w-lg font-light">
              Every trip is hand-crafted to offer you unforgettable experiences with ease and trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-gradient-to-r from-travel-sky to-travel-ocean text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Destinations
              </button>

              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2 border border-white/30">
                <Play className="w-5 h-5 fill-current" />
                Watch Travel Video
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                <Users className="w-6 h-6 text-travel-sky" />
                <div>
                  <p className="text-2xl font-bold text-travel-charcoal">
                    4000+
                  </p>
                  <p className="text-sm text-gray-600">Happy Travelers</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                <MapPin className="w-6 h-6 text-travel-coral" />
                <div>
                  <p className="text-2xl font-bold text-travel-charcoal">
                    125+
                  </p>
                  <p className="text-sm text-gray-600">Destinations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Traveller Image */}
          <div
            ref={travellerRef}
            className="hidden lg:flex justify-center items-end mt-6"
          >
            <img
              src={HeroTraveller}
              alt="Happy Traveller"
              className="w-full max-w-lg h-auto drop-shadow-2xl mt-[50px] ml-[100px]"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
