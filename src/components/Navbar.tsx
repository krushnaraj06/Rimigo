import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Destinations', 'Packages', 'About', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className={`text-2xl font-display font-bold transition-colors duration-300 animate-scale-in ${
            scrolled ? 'text-travel-charcoal' : 'text-white'
          }`}
        >
          Rimigo
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`transition-all duration-300 hover:scale-110 animate-slide-up ${
                scrolled
                  ? 'text-travel-charcoal hover:text-travel-sky'
                  : 'text-white hover:text-travel-sky'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Book Now Button */}
        <button
          className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
            scrolled
              ? 'bg-gradient-to-r from-travel-sky to-travel-ocean text-white'
              : 'bg-white text-travel-ocean hover:bg-travel-sky hover:text-white'
          }`}
        >
          LOGIN
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${scrolled ? 'text-travel-charcoal' : 'text-white'}`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-8 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-travel-charcoal hover:text-travel-sky transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-travel-sky to-travel-ocean text-white px-6 py-2 rounded-full font-semibold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
