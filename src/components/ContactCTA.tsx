import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !imageRef.current) return;

    gsap.fromTo(contentRef.current,
      {
        x: -80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(imageRef.current,
      {
        x: 80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <h2 className="text-6xl font-display font-bold text-travel-charcoal mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let us craft the perfect adventure tailored just for you. Our travel experts are ready to turn your dream destination into reality.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 rounded-full bg-travel-sky/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-travel-sky" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-gray-500">hello@rimigo.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 rounded-full bg-travel-sky/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-travel-sky" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-travel-sky to-travel-ocean text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                alt="Traveler with map"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-travel-ocean/30 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 animate-float">
              <p className="text-4xl font-bold text-travel-sky mb-1">4000+</p>
              <p className="text-sm text-gray-600">Happy Travelers</p>
            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 animate-float-delayed">
              <p className="text-4xl font-bold text-travel-coral mb-1">125+</p>
              <p className="text-sm text-gray-600">Destinations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
