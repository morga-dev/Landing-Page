import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/images/Logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "Acerca de", color: '#1C64F1' },
    { href: "#services", label: "Servicios", color: '#7152EC' },
    { href: "#software", label: "Software", color: '#FE6F00' },
    { href: "#pricing", label: "Planes", color: '#0E9E6E' },
    { href: "#contact", label: "Contacto", color: '#E60001' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-primary backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      {/* Efectos Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(28,100,241,0.1)_1px,_transparent_1px)] bg-[length:30px_30px] opacity-40" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1C64F1]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center transform hover:translate-y-[-5px] transition-transform duration-300"
          >
            <img 
              src={Logo} 
              alt="Huubie Logo" 
              className="h-12 w-auto drop-shadow-[0_0_15px_rgba(113,82,236,0.5)]"
            />
          </a>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 transition-all duration-300 flex items-center group"
                style={{ ['--hover-color']: link.color }}
              >
                <span className="transform group-hover:translate-x-2 transition-transform duration-300 hover:text-[var(--hover-color)]">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Botón de menú móvil */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-auto h-auto rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(113,82,236,0.1), rgba(113,82,236,0.2))',
              border: '1px solid rgba(113,82,236,0.3)'
            }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Menú móvil */}
      <div className={`md:hidden transition-all duration-300 fixed w-full ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-400 transition-all duration-300 px-4 py-2.5 rounded-lg hover:bg-gray-700/50 flex items-center group"
              style={{ ['--hover-color']: link.color }}
            >
              <span className="transform group-hover:translate-x-2 transition-transform duration-300 hover:text-[var(--hover-color)]">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
