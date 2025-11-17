import DestinationLayout from '../components/DestinationLayout';
import { Waves, Palmtree, Sun, Sparkles } from 'lucide-react';

const Maldives = () => {
  const destinationData = {
    badge: 'Indian Ocean',
    badgeColor: 'bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-700 border-cyan-200',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
    heroImageAlt: 'Maldives',
    title: 'MALDIVES',
    titleColor: '#0891b2',
    subtitle: 'Where crystal waters meet endless horizons',

    aboutLabel: 'Discover',
    aboutTitle: 'Paradise',
    aboutTitleItalic: 'An Island',
    aboutParagraph1: 'The Maldives, a tropical paradise scattered across the Indian Ocean, is a collection of 1,190 coral islands forming 26 natural atolls. With its powder-white beaches, crystal-clear turquoise waters, and vibrant marine life, this archipelago represents the ultimate luxury escape.',
    aboutParagraph2: 'From overwater villas with glass floors to world-class diving spots and pristine coral reefs, the Maldives offers an unparalleled experience of natural beauty, tranquility, and indulgence in one of Earth most stunning destinations.',
    aboutImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    aboutImageAlt: 'Maldives Resort',

    statsLabel: 'Island Highlights',
    statsTitle: 'Experience',
    statsTitleHighlight: 'Maldives',
    statsDescription: 'A destination where luxury meets pristine natural beauty',
    stats: [
      {
        icon: Waves,
        iconColor: '#0891b2',
        number: '1190',
        label: 'Coral Islands',
        accentColor: '#0891b2',
        description: 'Scattered across 26 natural atolls',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
        imageAlt: 'Maldives Islands',
      },
      {
        icon: Palmtree,
        iconColor: '#06b6d4',
        number: '200+',
        label: 'Luxury Resorts',
        accentColor: '#06b6d4',
        description: 'Exclusive overwater and beachfront villas',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
        imageAlt: 'Maldives Resort',
      },
      {
        icon: Sun,
        iconColor: '#22d3ee',
        number: '30°C',
        label: 'Average Temperature',
        accentColor: '#22d3ee',
        description: 'Perfect tropical climate year-round',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        imageAlt: 'Maldives Beach',
      },
      {
        icon: Sparkles,
        iconColor: '#0e7490',
        number: '2000+',
        label: 'Marine Species',
        accentColor: '#0e7490',
        description: 'Vibrant coral reefs and diverse sea life',
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
        imageAlt: 'Maldives Underwater',
      },
    ],

    experiences: [
      {
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
        title: 'Overwater Villas',
        subtitle: 'Luxury Living',
        description: 'Stay in stunning villas suspended over crystal-clear lagoons',
      },
      {
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80',
        title: 'Diving & Snorkeling',
        subtitle: 'Underwater Paradise',
        description: 'Explore vibrant coral reefs and swim with manta rays',
      },
      {
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80',
        title: 'Private Islands',
        subtitle: 'Exclusive Retreats',
        description: 'Experience ultimate privacy on secluded island resorts',
      },
      {
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
        title: 'Sunset Cruises',
        subtitle: 'Romantic Journeys',
        description: 'Sail across turquoise waters as the sun paints the sky',
      },
    ],
    experiencesDescription: 'Discover the luxury experiences that make the Maldives a dream destination',

    ctaTitle: 'Maldives Escape',
    ctaDescription: 'Let our travel experts design your perfect Maldives getaway. From luxury overwater villas to private island resorts and underwater adventures, we create unforgettable tropical experiences.',
    ctaImages: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    ],
    ctaRating: '5.0',
    ctaGradient: 'bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-900',
  };

  return <DestinationLayout {...destinationData} />;
};

export default Maldives;
