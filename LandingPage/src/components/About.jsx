import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const mainCardRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Animación para la tarjeta principal
    gsap.fromTo(
      mainCardRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: mainCardRef.current,
          start: 'top 80%',
        }
      }
    )

    // Animación para las tarjetas pequeñas
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

  return (
    <section className="px-4 lg:px-6">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 rounded-xl">
        {/* Title */}
        <h1 className="mb-12 text-center text-4xl font-bold lg:text-5xl p-5">
          <span className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            ACERCA DE HUUBIE
          </span>
        </h1>

        {/* Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Main Description Card */}
          <div className="lg:col-span-1" ref={mainCardRef}>
            <div className="content-center h-full rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
              <p className="text-lg leading-relaxed text-gray-300">
                Innovación en la Gestión Gastronómica. Huubie es una empresa líder especializada en la administración
                integral de restaurantes. Transformamos la manera en que los establecimientos operan y crecen en el
                competitivo sector gastronómico a través de soluciones tecnológicas y procesos optimizados.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Gestión',
                  subtitle: 'Operativa',
                  description: 'Optimizamos cada aspecto de la operación diaria',
                  emoji: '⚙️'
                },
                {
                  title: 'Control',
                  subtitle: 'Financiero',
                  description: 'Maximizamos la rentabilidad de tu negocio',
                  emoji: '📊'
                },
                {
                  title: 'Optimización',
                  subtitle: 'de Procesos',
                  description: 'Mejoramos la eficiencia operativa',
                  emoji: '🔄'
                },
                {
                  title: 'Desarrollo',
                  subtitle: 'Estratégico',
                  description: 'Planificamos el crecimiento sostenible',
                  emoji: '🎯'
                }
              ].map((card, index) => (
                <div
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className="rounded-2xl bg-gray-800 p-6 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                    <span className="text-5xl" role="img" aria-label={card.title}>
                      {card.emoji}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {card.title} <span className="text-brand-blue">{card.subtitle}</span>
                  </h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About