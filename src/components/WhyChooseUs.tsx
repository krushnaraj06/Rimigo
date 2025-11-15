import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Shield, Users, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card,
        {
          x: index % 2 === 0 ? -80 : 80,
          opacity: 0,
          y: 30,
        },
        {
          x: 0,
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: MapPin,
      title: 'Handpicked Destinations',
      description: 'Carefully curated locations that offer unforgettable experiences',
    },
    {
      icon: Shield,
      title: 'Premium Comfort Travel',
      description: 'Luxury accommodations and first-class travel arrangements',
    },
    {
      icon: Users,
      title: 'Experienced Guides',
      description: 'Local experts who bring destinations to life with their knowledge',
    },
    {
      icon: Clock,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance for a worry-free journey',
    },
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-white to-travel-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-travel-charcoal mb-4">
            Why Choose Rimigo
          </h2>
          <p className="text-xl text-gray-600">
            Experience travel like never before
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-travel-sky to-travel-ocean flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-travel-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
