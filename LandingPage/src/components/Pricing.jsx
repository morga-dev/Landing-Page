import React, { useEffect, useRef } from 'react'
import { Play, Star, Heart, Check } from "lucide-react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Pricing() {
  const cardsRef = useRef([])
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Usar la instancia global de Lenis
      window.lenis.scrollTo(element, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const planes = [
    {
      nombre: "Básico",
      precio: "$29.99",
      emoji: "🚀",
      popular: false,
      caracteristicas: ["Hasta 100 usuarios", "Soporte básico", "Actualizaciones incluidas", "Almacenamiento 10GB"],
      botonEstilo: "bg-gray-700 hover:bg-gray-600 text-white transform hover:scale-105",
    },
    {
      nombre: "Profesional",
      precio: "$59.99",
      emoji: "⭐",
      popular: true,
      caracteristicas: [
        "Hasta 500 usuarios",
        "Soporte prioritario",
        "Actualizaciones incluidas",
        "Almacenamiento 50GB",
        "API access",
      ],
      botonEstilo: "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105",
    },
    {
      nombre: "Empresarial",
      precio: "$99.99",
      emoji: "👑",
      popular: false,
      caracteristicas: [
        "Usuarios ilimitados",
        "Soporte 24/7",
        "Actualizaciones incluidas",
        "Almacenamiento 100GB",
        "API access",
        "Personalización completa",
      ],
      botonEstilo: "bg-gray-700 hover:bg-gray-600 text-white transform hover:scale-105",
    },
  ]

  return (
    <section className="px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h1 className="mb-12 text-center text-4xl font-bold lg:text-5xl p-5">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            PLANES Y PRECIOS
          </span>
        </h1>

        {/* Cards Precios */}
        <div className="grid gap-8 lg:grid-cols-3">
          {planes.map((plan, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="relative rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500"
            >
              {/* Destacado/Popular */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Icono */}
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)] ${plan.iconoBg}`}>
                <span className="text-5xl">
                  {plan.emoji}
                </span>
              </div>

              {/* Nombre Plan */}
              <h3 className="mb-4 text-2xl font-bold text-white">{plan.nombre}</h3>

              {/* Precio */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-blue-400">{plan.precio}</span>
                <span className="text-gray-400">/mes</span>
              </div>

              {/* Características */}
              <ul className="mb-8 space-y-4">
                {plan.caracteristicas.map((caracteristica, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="mr-3 h-5 w-5 text-green-400" />
                    {caracteristica}
                  </li>
                ))}
              </ul>

              {/* Botón seleccionar */}
              <button className={`w-full py-3 text-lg rounded-md bg-brand-purple ${plan.botonEstilo}`}
              onClick={() => scrollToSection('contact')}
              >Seleccionar Plan</button>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Pricing
