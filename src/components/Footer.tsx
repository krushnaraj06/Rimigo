import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-travel-charcoal text-white pt-16 pb-8 overflow-hidden">
      {/* Faint world map background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-4">Rimigo</h3>
            <p className="text-gray-400 mb-6">
              Discover the world with premium curated journeys to the most beautiful destinations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-travel-sky flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-travel-sky flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-travel-sky flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-travel-sky flex items-center justify-center transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-xl font-bold mb-4">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Santorini, Greece</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Bali, Indonesia</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Swiss Alps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Paris, France</a></li>
              <li><a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Maldives</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-travel-sky mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Travel Street, Adventure City, AC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-travel-sky flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-travel-sky flex-shrink-0" />
                <span className="text-gray-400">hello@rimigo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Rimigo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-travel-sky transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
