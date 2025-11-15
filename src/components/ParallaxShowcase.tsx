import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !backgroundRef.current) return;

    // Background parallax
    gsap.to(backgroundRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    // Panels slide in
    panelsRef.current.forEach((panel, index) => {
      if (!panel) return;
      
      gsap.fromTo(panel,
        {
          y: 150,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const panels = [
    {
      title: 'Adventure',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      alt: 'Mountain climbing adventure',
    },
    {
      title: 'Relax',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
      alt: 'Beach relaxation',
    },
    {
      title: 'Explore',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      alt: 'City exploration',
    },
  ];

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Panels */}
      <div className="relative z-10 h-full flex items-center justify-center gap-8 px-8">
        {panels.map((panel, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) panelsRef.current[index] = el;
            }}
            className="relative w-80 h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img
              src={panel.image}
              alt={panel.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <h3 className="absolute bottom-8 left-8 text-5xl font-display font-bold text-white">
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxShowcase;
