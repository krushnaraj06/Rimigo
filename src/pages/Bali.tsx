import DestinationLayout from '../components/DestinationLayout';
import { Palmtree, Waves, Sparkles, Flower2 } from 'lucide-react';

const Bali = () => {
  const destinationData = {
    badge: 'Indonesia',
    badgeColor: 'bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-200',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
    heroImageAlt: 'Bali',
    title: 'BALI',
    titleColor: '#059669',
    subtitle: 'Where tropical paradise meets spiritual serenity',

    aboutLabel: 'Explore',
    aboutTitle: 'Paradise',
    aboutTitleItalic: 'A Tropical',
    aboutParagraph1: 'Bali, the Island of the Gods, is a mesmerizing blend of lush rice terraces, ancient temples, and pristine beaches. This Indonesian paradise offers a unique combination of natural beauty, rich culture, and spiritual tranquility that captivates every visitor.',
    aboutParagraph2: 'From the sacred temples of Ubud to the surf breaks of Uluwatu, from traditional dance performances to world-class spa retreats, Bali provides an unforgettable journey through tropical splendor and Balinese hospitality.',
    aboutImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    aboutImageAlt: 'Bali Rice Terraces',

    statsLabel: 'Island Highlights',
    statsTitle: 'Discover',
    statsTitleHighlight: 'Bali',
    statsDescription: 'A destination where nature, culture, and spirituality unite',
    stats: [
      {
        icon: Palmtree,
        iconColor: '#059669',
        number: '20000+',
        label: 'Hindu Temples',
        accentColor: '#059669',
        description: 'Sacred sites scattered across the island',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
        imageAlt: 'Bali Temple',
      },
      {
        icon: Waves,
        iconColor: '#0d9488',
        number: '95+',
        label: 'Beaches',
        accentColor: '#0d9488',
        description: 'From white sand to volcanic black shores',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        imageAlt: 'Bali Beach',
      },
      {
        icon: Sparkles,
        iconColor: '#10b981',
        number: '28°C',
        label: 'Average Temperature',
        accentColor: '#10b981',
        description: 'Perfect tropical climate year-round',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
        imageAlt: 'Bali Landscape',
      },
      {
        icon: Flower2,
        iconColor: '#14b8a6',
        number: '1000+',
        label: 'Spa Retreats',
        accentColor: '#14b8a6',
        description: 'Wellness and relaxation sanctuaries',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
        imageAlt: 'Bali Spa',
      },
    ],

    experiences: [
      {
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
        title: 'Rice Terraces',
        subtitle: 'Tegalalang Wonder',
        description: 'Walk through stunning emerald-green rice paddies',
      },
      {
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80',
        title: 'Sacred Temples',
        subtitle: 'Spiritual Journey',
        description: 'Explore ancient Hindu temples and cultural heritage',
      },
      {
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
        title: 'Beach Paradise',
        subtitle: 'Coastal Bliss',
        description: 'Surf, swim, and relax on pristine tropical beaches',
      },
      {
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80',
        title: 'Wellness Retreats',
        subtitle: 'Mind & Body',
        description: 'Rejuvenate with traditional Balinese spa treatments',
      },
    ],
    experiencesDescription: 'Discover the enchanting experiences that make Bali a tropical paradise',

    ctaTitle: 'Bali Adventure',
    ctaDescription: 'Let our travel experts design your perfect Bali escape. From luxury villas overlooking rice terraces to beachfront resorts and spiritual retreats, we create personalized journeys to the Island of the Gods.',
    ctaImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
    ],
    ctaRating: '4.9',
    ctaGradient: 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900',
  };

  return <DestinationLayout {...destinationData} />;
};

export default Bali;
