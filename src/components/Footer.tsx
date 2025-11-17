import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight, Palmtree, Star, MapPin, DollarSign } from 'lucide-react';
import RimigoWhiteLogo from '../assets/RimigoWhiteLogo.png';
import ImageCollage from './ImageCollage';
import Globe from '../assets/Globe4.PNG';

gsap.registerPlugin(ScrollTrigger);



const Footer = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLImageElement>(null);
  const [counters, setCounters] = useState({ vacations: 0, rating: 0, countries: 0, savings: 0 });

  useEffect(() => {
    // Stats counter animation
    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(counters, {
            vacations: 242,
            rating: 4.9,
            countries: 78,
            savings: 8354,
            duration: 2.5,
            ease: 'power2.out',
            onUpdate: function () {
              setCounters({
                vacations: Math.floor(this.targets()[0].vacations),
                rating: Math.floor(this.targets()[0].rating * 10) / 10,
                countries: Math.floor(this.targets()[0].countries),
                savings: Math.floor(this.targets()[0].savings),
              });
            },
          });
        },
      });
    }

    // Globe slide-up animation
    if (globeRef.current) {
      gsap.fromTo(
        globeRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: globeRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);


  return (
    <>
      {/* Image Collage Section */}
      <ImageCollage />

      {/* Globe Image Section with Slogan */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Left Side - Slogan */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-3">
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">
                Your Adventure Awaits
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display leading-tight mb-6">
              <span className="block text-gray-400 font-light italic mb-2">
                Wander
              </span>
              <span className="block font-cursive text-7xl md:text-8xl lg:text-9xl text-purple-600 mb-2" style={{ letterSpacing: '0.02em' }}>
                Explore
              </span>
              <span className="block text-travel-charcoal font-bold">
                Experience
              </span>
            </h2>
            <p className="text-200 text-gray-600 font-light max-w-md leading-relaxed">
              Every destination tells a story. Let yours begin with Rimigo.
            </p>
          </div>

          {/* Right Side - Globe */}
          <div className="flex-shrink-0">
            <img 
              ref={globeRef}
              src={Globe}
              alt="Globe"
              className="w-[600px] h-auto"
            />
          </div>
        </div>
      </div>

      <footer className="relative bg-black text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-travel-sky/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-travel-coral/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Stats Section */}
        <div ref={statsRef} className="py-16 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Vacations */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Palmtree className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {counters.vacations.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Vacations</div>
            </div>

            {/* Rating */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-600/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {counters.rating.toFixed(1)}
              </div>
              <div className="text-sm text-gray-400">Traveller Ratings</div>
            </div>

            {/* Countries */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-600/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {counters.countries}
              </div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>

            {/* Savings */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-600/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {counters.savings.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Average Savings per trip</div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Logo & Social */}
            <div className="lg:col-span-2">
              <img 
                src={RimigoWhiteLogo} 
                alt="Rimigo Logo" 
                className="h-20 mb-6"
              />
              <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
                Discover the world with premium curated journeys to the most beautiful destinations.
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-travel-sky hover:to-travel-ocean flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* About Rimigo */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">About Rimigo</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Sustainable Tourism
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Travel Planners */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Travel Planners</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Travel Planners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Sports Planners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Event Venues
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-travel-sky transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-travel-sky transition-colors" />
                    Plan Your Trip
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-8 border-t border-b border-white/10 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Adventure?</h3>
                <p className="text-gray-400">Join thousands of travelers exploring the world with Rimigo</p>
              </div>
              <button className="group px-8 py-4 bg-gradient-to-r from-travel-sky to-travel-ocean text-white font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <span>Start Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              ©2025 Rimigo USA. All Rights Reserved
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
