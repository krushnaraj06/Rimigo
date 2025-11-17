import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import RimigoLogo from '../assets/Rimigo-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDestinationsOpen(false);
      }
    };

    if (destinationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [destinationsOpen]);

  const handleNavClick = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const destinations = [
    { name: 'Santorini', path: '/santorini' },
    { name: 'Dubai', path: '/dubai' },
    { name: 'Paris', path: '/paris' },
    { name: 'Bali', path: '/bali' },
    { name: 'Switzerland', path: '/switzerland' },
    { name: 'Maldives', path: '/maldives' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'top-4 w-[95%] max-w-6xl'
            : 'top-0 w-full max-w-7xl'
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50'
              : 'bg-transparent'
          }`}
        >
          <div className="px-6 md:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={RimigoLogo}
                alt="Rimigo"
                className={`transition-all duration-500 ${
                  scrolled ? 'h-10' : 'h-12'
                } group-hover:scale-105`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isActive('/')
                    ? scrolled
                      ? 'text-rimigo-primary'
                      : 'text-white font-semibold'
                    : scrolled
                    ? 'text-gray-700 hover:text-rimigo-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Home
              </Link>

              {/* Destinations Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDestinationsOpen(!destinationsOpen)}
                  className={`flex items-center gap-1 font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? 'text-gray-700 hover:text-rimigo-primary'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Destinations
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${destinationsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {destinationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 py-2 animate-fade-in">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.path}
                        to={dest.path}
                        onClick={() => setDestinationsOpen(false)}
                        className={`block px-6 py-3 transition-all duration-200 ${
                          isActive(dest.path)
                            ? 'bg-rimigo-primary/10 text-rimigo-primary font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-rimigo-primary'
                        }`}
                      >
                        {dest.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('packages')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? 'text-gray-700 hover:text-rimigo-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Packages
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? 'text-gray-700 hover:text-rimigo-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                About
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? 'text-gray-700 hover:text-rimigo-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <button
              className={`hidden lg:block px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                scrolled
                  ? 'bg-gradient-to-r from-rimigo-primary to-rimigo-secondary text-Black'
                  : 'bg-white text-rimigo-primary hover:bg-rimigo-primary hover:text-Black'
              }`}
            >
              Login
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6 animate-slide-up">
            <div className="space-y-4">
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                  isActive('/')
                    ? 'bg-rimigo-primary/10 text-rimigo-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Destinations */}
              <div className="space-y-2">
                <div className="py-3 px-4 font-medium text-gray-500 text-sm uppercase tracking-wider">
                  Destinations
                </div>
                {destinations.map((dest) => (
                  <Link
                    key={dest.path}
                    to={dest.path}
                    className={`block py-3 px-4 rounded-lg transition-all ${
                      isActive(dest.path)
                        ? 'bg-rimigo-primary/10 text-rimigo-primary font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => {
                  handleNavClick('packages');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                Packages
              </button>

              <button
                onClick={() => {
                  handleNavClick('about');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                About
              </button>

              <button
                onClick={() => {
                  handleNavClick('contact');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                Contact
              </button>

              <button className="w-full mt-4 bg-gradient-to-r from-rimigo-primary to-rimigo-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
