import DestinationLayout from '../components/DestinationLayout';
import { Landmark, Coffee, Heart, Camera } from 'lucide-react';

const Paris = () => {
  const destinationData = {
    badge: 'France',
    badgeColor: 'bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 border-rose-200',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    heroImageAlt: 'Paris',
    title: 'PARIS',
    titleColor: '#e11d48',
    subtitle: 'Where romance meets timeless elegance',

    aboutLabel: 'Discover',
    aboutTitle: 'Romance',
    aboutTitleItalic: 'The City of',
    aboutParagraph1: 'Paris, the enchanting capital of France, has captivated hearts for centuries with its timeless beauty and romantic charm. From the iconic Eiffel Tower to the artistic treasures of the Louvre, every corner of this magnificent city tells a story of art, culture, and joie de vivre.',
    aboutParagraph2: 'Stroll along the Seine, savor exquisite French cuisine in charming bistros, and lose yourself in the bohemian streets of Montmartre. Paris is not just a destination, it is an experience that stays with you forever.',
    aboutImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    aboutImageAlt: 'Paris Eiffel Tower',

    statsLabel: 'City Highlights',
    statsTitle: 'Experience',
    statsTitleHighlight: 'Paris',
    statsDescription: 'A destination where art, culture, and romance converge',
    stats: [
      {
        icon: Landmark,
        iconColor: '#e11d48',
        number: '2000+',
        label: 'Historic Monuments',
        accentColor: '#e11d48',
        description: 'Centuries of architectural masterpieces',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
        imageAlt: 'Eiffel Tower',
      },
      {
        icon: Coffee,
        iconColor: '#be123c',
        number: '9000+',
        label: 'Cafés & Bistros',
        accentColor: '#be123c',
        description: 'Authentic French culinary experiences',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
        imageAlt: 'Paris Café',
      },
      {
        icon: Heart,
        iconColor: '#fb7185',
        number: '#1',
        label: 'Romantic City',
        accentColor: '#fb7185',
        description: 'The world most romantic destination',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80',
        imageAlt: 'Paris Romance',
      },
      {
        icon: Camera,
        iconColor: '#9f1239',
        number: '130+',
        label: 'Museums',
        accentColor: '#9f1239',
        description: 'Home to world-renowned art collections',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
        imageAlt: 'Louvre Museum',
      },
    ],

    experiences: [
      {
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
        title: 'Eiffel Tower',
        subtitle: 'Iconic Landmark',
        description: 'Ascend the Iron Lady for breathtaking panoramic views',
      },
      {
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80',
        title: 'Louvre Museum',
        subtitle: 'Art & Culture',
        description: 'Discover masterpieces including the Mona Lisa',
      },
      {
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=80',
        title: 'Seine River Cruise',
        subtitle: 'Romantic Journey',
        description: 'Glide past illuminated monuments on the water',
      },
      {
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80',
        title: 'Montmartre',
        subtitle: 'Bohemian Quarter',
        description: 'Explore artistic streets and the Sacré-Cœur Basilica',
      },
    ],
    experiencesDescription: 'Discover the magic that makes Paris the most visited city in the world',

    ctaTitle: 'Paris Escape',
    ctaDescription: 'Let our travel experts create your perfect Parisian adventure. From luxury hotels near the Champs-Élysées to intimate bistros in Le Marais, we craft unforgettable experiences in the City of Light.',
    ctaImages: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
    ],
    ctaRating: '4.9',
    ctaGradient: 'bg-gradient-to-br from-rose-900 via-rose-800 to-rose-900',
  };

  return <DestinationLayout {...destinationData} />;
};

export default Paris;
