import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Heart, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const ImageCollage = () => {
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Items stagger animation
    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        {
          scale: 0.95,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
      alt: 'Mountain Adventure',
      likes: '2.4k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
      alt: 'Beach Sunset',
      likes: '1.8k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      alt: 'Paris Eiffel Tower',
      likes: '3.2k',
    },
    {
      type: 'video',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
      alt: 'Desert Safari',
      likes: '1.5k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      alt: 'Mountain Hiking',
      likes: '2.1k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      alt: 'Tropical Beach',
      likes: '2.9k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80',
      alt: 'City Lights',
      likes: '1.7k',
    },
    {
      type: 'video',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      poster: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
      alt: 'Road Trip',
      likes: '2.6k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
      alt: 'Maldives Paradise',
      likes: '1.9k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&q=80',
      alt: 'Northern Lights',
      likes: '3.5k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80',
      alt: 'Iceland Landscape',
      likes: '4.1k',
    },
    {
      type: 'video',
      src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      poster: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
      alt: 'Beach Waves',
      likes: '2.3k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
      alt: 'Paris Streets',
      likes: '2.8k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80',
      alt: 'Santorini',
      likes: '3.1k',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
      alt: 'Bali Temple',
      likes: '2.7k',
    },
  ];

  return (
    <section className="relative py- bg-white overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-12 text-center px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-travel-sky" />
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Follow Our Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-travel-charcoal mb-4 leading-none">
            <span className="italic font-light">Captured</span>{' '}
            <span className="bg-gradient-to-r from-travel-sky via-purple-600 to-travel-coral bg-clip-text text-transparent">
              Moments
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real adventures from real travelers • Tag #RimigoTravel to be featured
          </p>
        </div>

        {/* Instagram-Style Grid - Perfect Squares */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 mb-8">
          {mediaItems.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-100"
              >
                {/* Media Content */}
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover"
                      poster={item.poster}
                      loop
                      muted
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    {/* Play Icon */}
                    <div className="absolute top-3 right-3 z-10">
                      <Play className="w-5 h-5 text-white drop-shadow-lg fill-current" />
                    </div>
                  </div>
                )}

                {/* Hover Overlay - Instagram Style */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center text-white">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="w-6 h-6 fill-current" />
                      <span className="text-lg font-bold">{item.likes}</span>
                    </div>
                    <p className="text-sm font-medium px-4">{item.alt}</p>
                  </div>
                </div>

                {/* Instagram Corner Icon */}
                <div className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-5 h-5 text-white drop-shadow-lg" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
