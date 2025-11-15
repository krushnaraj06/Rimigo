import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'Rimigo made our honeymoon in Santorini absolutely magical. Every detail was perfect, from the sunset views to the luxury villa. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'The Swiss Alps package exceeded all expectations. Professional guides, stunning locations, and seamless organization. Worth every penny!',
    },
    {
      name: 'Emma Williams',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      text: 'Bali was a dream come true! Rimigo\'s attention to detail and local expertise made this trip unforgettable. Already planning our next adventure!',
    },
    {
      name: 'David Martinez',
      location: 'Barcelona, Spain',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
      text: 'The Maldives package was pure luxury. Crystal clear waters, amazing service, and memories that will last a lifetime. Thank you Rimigo!',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const isActive = index === activeIndex;
      
      gsap.to(card, {
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.5,
        x: (index - activeIndex) * 380,
        zIndex: isActive ? 10 : 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    });
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-24 px-8 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-travel-gray via-white to-travel-gray" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-travel-charcoal mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real adventures
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="absolute left-1/2 -translate-x-1/2 w-[350px]"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-travel-sky/20"
                    />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <h4 className="text-xl font-bold text-travel-charcoal">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-travel-sky hover:text-white transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-travel-sky hover:text-white transition-all duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-travel-sky w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
