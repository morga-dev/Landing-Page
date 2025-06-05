import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../assets/images/Logo.png';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de los elementos del footer
      gsap.from(footerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animación de la línea divisoria
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 90%'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-dark-primary py-20 px-4 overflow-hidden">
      {/* Efectos Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(28,100,241,0.1)_1px,_transparent_1px)] bg-[length:30px_30px] opacity-40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1C64F1]/20 to-transparent" />
      </div>

      <div ref={footerRef} className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo y descripción */}
          <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
            <a href="#" className="inline-block">
              <img 
                src={Logo} 
                alt="Huubie Logo" 
                className="h-20 w-auto drop-shadow-[0_0_15px_rgba(113,82,236,0.5)]"
              />
            </a>
            <p className="mt-4 text-gray-400">
              Transformando la gestión empresarial a través de soluciones tecnológicas innovadoras.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: 'Acerca de', color: '#1C64F1', href: '#about' },
                { name: 'Servicios', color: '#7152EC', href: '#services' },
                { name: 'Software', color: '#FE6F00', href: '#software' },
                { name: 'Planes', color: '#0E9E6E', href: '#pricing' }
              ].map(({ name, color, href }) => (
                <li key={name}>
                  <a 
                    href={href}
                    className="text-gray-400 transition-colors duration-300 flex items-center group"
                    style={{ ['--hover-color']: color }}
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300 hover:text-[var(--hover-color)]">
                      {name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-400 hover:text-[#1C64F1] transition-colors duration-300 flex items-center space-x-3">
                <span className="w-8 h-8 rounded-lg bg-[#1C64F1]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1C64F1]" />
                </span>
                <span>contacto@huubie.com</span>
              </li>
              <li className="text-gray-400 hover:text-[#FE6F00] transition-colors duration-300 flex items-center space-x-3">
                <span className="w-8 h-8 rounded-lg bg-[#FE6F00]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FE6F00]" />
                </span>
                <span>+52 (123) 456-7890</span>
              </li>
              <li className="text-gray-400 hover:text-[#0E9E6E] transition-colors duration-300 flex items-center space-x-3">
                <span className="w-8 h-8 rounded-lg bg-[#0E9E6E]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0E9E6E]" />
                </span>
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white">Síguenos</h3>
            <div className="mt-4 flex space-x-4">
              {[
                { Icon: Facebook, color: '#1C64F1' },
                { Icon: Twitter, color: '#7152EC' },
                { Icon: Instagram, color: '#E60001' },
                { Icon: Linkedin, color: '#FE6F00' }
              ].map(({ Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-xl flex items-center justify-center transform transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${color}10, ${color}20)`,
                    border: `1px solid ${color}30`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 15px ${color}40`;
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div 
          ref={lineRef}
          className="h-px my-12" 
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #1C64F1 20%, 
              #7152EC 40%, 
              #E60001 60%, 
              #FE6F00 80%, 
              #0E9E6E 100%
            )`,
            opacity: 0.5
          }}
        />

        {/* Copyright */}
        <div className="mt-8 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-center text-gray-400 transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#1C64F1] hover:via-[#7152EC] hover:to-[#FE6F00] hover:bg-clip-text hover:text-transparent">
              © {new Date().getFullYear()} Huubie. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
