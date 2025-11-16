import DestinationLayout from '../components/DestinationLayout';
import { Building2, ShoppingBag, Palmtree, Trophy } from 'lucide-react';

const Dubai = () => {
  const destinationData = {
    badge: 'United Arab Emirates',
    badgeColor: 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border-amber-200',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    heroImageAlt: 'Dubai',
    title: 'DUBAI',
    titleColor: '#d97706',
    subtitle: 'Where futuristic dreams meet Arabian heritage',

    aboutLabel: 'Explore',
    aboutTitle: 'Metropolis',
    aboutTitleItalic: 'A Modern',
    aboutParagraph1: 'Dubai, the jewel of the United Arab Emirates, has transformed from a modest fishing village into one of the world most spectacular cities. Today, its soaring skyscrapers, luxury shopping, and innovative architecture create an urban landscape that pushes the boundaries of possibility.',
    aboutParagraph2: 'From the iconic Burj Khalifa to the traditional souks of Old Dubai, this city seamlessly blends cutting-edge modernity with rich Arabian culture, offering experiences that captivate every traveler.',
    aboutImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    aboutImageAlt: 'Dubai Skyline',

    statsLabel: 'City Highlights',
    statsTitle: 'Discover',
    statsTitleHighlight: 'Dubai',
    statsDescription: 'A destination where ambition meets innovation and luxury',
    stats: [
      {
        icon: Building2,
        iconColor: '#d97706',
        number: '828m',
        label: 'Burj Khalifa Height',
        accentColor: '#d97706',
        description: 'The world tallest building piercing the clouds',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
        imageAlt: 'Burj Khalifa',
      },
      {
        icon: ShoppingBag,
        iconColor: '#ea580c',
        number: '100+',
        label: 'Shopping Malls',
        accentColor: '#ea580c',
        description: 'World-class retail therapy and entertainment',
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
        imageAlt: 'Dubai Mall',
      },
      {
        icon: Palmtree,
        iconColor: '#f59e0b',
        number: '48°C',
        label: 'Summer Sunshine',
        accentColor: '#f59e0b',
        description: 'Year-round warmth and endless blue skies',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
        imageAlt: 'Dubai Beach',
      },
      {
        icon: Trophy,
        iconColor: '#b45309',
        number: '20M+',
        label: 'Annual Visitors',
        accentColor: '#b45309',
        description: 'One of the world most visited cities',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        imageAlt: 'Dubai Marina',
      },
    ],

    experiences: [
      {
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
        title: 'Burj Khalifa',
        subtitle: 'Touch the Sky',
        description: 'Experience breathtaking views from the world tallest building',
      },
      {
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&q=80',
        title: 'Desert Safari',
        subtitle: 'Arabian Adventure',
        description: 'Dune bashing, camel rides, and traditional Bedouin experiences',
      },
      {
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80',
        title: 'Luxury Shopping',
        subtitle: 'Retail Paradise',
        description: 'World-renowned malls with designer brands and entertainment',
      },
      {
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80',
        title: 'Palm Jumeirah',
        subtitle: 'Man-Made Marvel',
        description: 'Iconic palm-shaped island with luxury resorts and beaches',
      },
    ],
    experiencesDescription: 'Discover the extraordinary experiences that make Dubai a world-class destination',

    ctaTitle: 'Dubai Adventure',
    ctaDescription: 'Let our travel experts design your perfect Dubai experience. From luxury hotels to exclusive desert adventures, we create unforgettable journeys tailored to your dreams.',
    ctaImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    ],
    ctaRating: '4.8',
    ctaGradient: 'bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900',
  };

  return <DestinationLayout {...destinationData} />;
};

export default Dubai;
