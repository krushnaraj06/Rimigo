import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageCollage = () => {
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      if (!img) return;
      
      // Stagger entrance
      gsap.fromTo(img,
        {
          scale: 0,
          rotation: -15,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: img,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Floating animation
      gsap.to(img, {
        y: -20,
        duration: 3 + (index % 3),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  }, []);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
      alt: 'Airport departure',
      size: 'w-64 h-64',
      rotation: 'rotate-3',
    },
    {
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80',
      alt: 'Traveler with backpack',
      size: 'w-48 h-72',
      rotation: '-rotate-6',
    },
    {
      src: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&q=80',
      alt: 'Sunset beach',
      size: 'w-72 h-48',
      rotation: 'rotate-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
      alt: 'Mountain landscape',
      size: 'w-56 h-56',
      rotation: '-rotate-3',
    },
    {
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
      alt: 'City skyline',
      size: 'w-64 h-80',
      rotation: 'rotate-6',
    },
    {
      src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80',
      alt: 'Travel photography',
      size: 'w-60 h-60',
      rotation: '-rotate-2',
    },
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-travel-gray to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-travel-charcoal mb-4">
            Captured Moments
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into the adventures that await
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              className={`${image.size} ${image.rotation} hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl bg-white p-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
