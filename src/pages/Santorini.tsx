import DestinationLayout from '../components/DestinationLayout';
import { Sun, Waves, Mountain, Award } from 'lucide-react';
import Santorini1 from '../assets/Sentorin1.png';

const Santorini = () => {
  const destinationData = {
    badge: 'Greek Islands',
    badgeColor: 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border-purple-200',
    heroImage: Santorini1,
    heroImageAlt: 'Santorini',
    title: 'SANTORINI',
    titleColor: '#9333ea',
    subtitle: 'Where whitewashed dreams meet the Aegean blue',

    aboutLabel: 'Discover',
    aboutTitle: 'Paradise',
    aboutTitleItalic: 'A Volcanic',
    aboutParagraph1: 'Santorini, the crown jewel of the Cyclades, was shaped by one of history most powerful volcanic eruptions. Today, its dramatic caldera, whitewashed villages, and azure-domed churches create a landscape unlike anywhere else on Earth.',
    aboutParagraph2: 'From the romantic sunsets of Oia to the black sand beaches of Perissa, every corner of this island tells a story of natural beauty and timeless elegance.',
    aboutImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    aboutImageAlt: 'Santorini',

    statsLabel: 'Island Insights',
    statsTitle: 'Experience',
    statsTitleHighlight: 'Santorini',
    statsDescription: 'A destination defined by extraordinary beauty and timeless charm',
    stats: [
      {
        icon: Sun,
        iconColor: '#9333ea',
        number: '300+',
        label: 'Days of Sunshine',
        accentColor: '#9333ea',
        description: 'Enjoy perfect Mediterranean weather throughout the year',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
        imageAlt: 'Santorini Sunset',
      },
      {
        icon: Waves,
        iconColor: '#2563eb',
        number: '15+',
        label: 'Unique Beaches',
        accentColor: '#2563eb',
        description: 'Volcanic shores ranging from black to red sand',
        image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80',
        imageAlt: 'Santorini Beach',
      },
      {
        icon: Mountain,
        iconColor: '#4f46e5',
        number: '12',
        label: 'Cliff Villages',
        accentColor: '#4f46e5',
        description: 'Whitewashed settlements perched on the caldera',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
        imageAlt: 'Santorini Village',
      },
      {
        icon: Award,
        iconColor: '#d97706',
        number: '#1',
        label: 'Island Destination',
        accentColor: '#d97706',
        description: 'Consistently ranked as the world top island',
        image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800&q=80',
        imageAlt: 'Santorini Architecture',
      },
    ],

    experiences: [
      {
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80',
        title: 'Oia Sunset',
        subtitle: 'The Most Famous View',
        description: 'Watch the sun paint the sky in shades of gold and pink',
      },
      {
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
        title: 'Blue Domes',
        subtitle: 'Iconic Architecture',
        description: 'Explore the postcard-perfect churches',
      },
      {
        image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=80',
        title: 'Caldera Views',
        subtitle: 'Volcanic Beauty',
        description: 'Breathtaking vistas from cliff-side villages',
      },
      {
        image: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=1200&q=80',
        title: 'Wine Tasting',
        subtitle: 'Volcanic Vineyards',
        description: 'Sample unique Assyrtiko wines',
      },
    ],
    experiencesDescription: 'Discover the magic that makes Santorini one of the world most sought-after destinations',

    ctaTitle: 'Santorini Escape',
    ctaDescription: 'Let our travel experts craft a personalized itinerary tailored to your desires. From luxury accommodations to exclusive experiences, we handle every detail.',
    ctaImages: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80',
      'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=800&q=80',
    ],
    ctaRating: '4.9',
    ctaGradient: 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900',
  };

  return <DestinationLayout {...destinationData} />;
};

export default Santorini;
