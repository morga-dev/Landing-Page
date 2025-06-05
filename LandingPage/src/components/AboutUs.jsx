import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutUs() {
  const mainCardRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Animación para la tarjeta principal
    gsap.fromTo(
      mainCardRef.current,
      { 
        opacity: 0,
        x: -50 
      },
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
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2, // Efecto cascada
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
    <section className="px-4 py-12 lg:px-6 lg:py-24"> {/* Ajustado el padding vertical */}
      <div className="flex flex-col items-center justify-center text-center px-2 sm:px-6 lg:px-8 rounded-xl"> {/* Reducido padding horizontal en móvil */}
        {/* Title */}
        <h1 className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl font-bold lg:text-5xl p-3 sm:p-5"> {/* Ajustado tamaños y espaciados */}
          <span className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-600 bg-clip-text text-transparent">  
            QUIÉNES SOMOS
          </span>
        </h1>

        {/* Content Grid */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8"> {/* Reducido gap en móvil */}
          {/* Main Description Card */}
          <div className="lg:col-span-1" ref={mainCardRef}>
            <div className="content-center h-full rounded-2xl bg-gray-800 p-6 sm:p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300"> {/* Ajustado tamaño de texto */}
                Innovación y Experiencia. Somos un equipo apasionado por revolucionar la gestión empresarial a través de
                soluciones tecnológicas innovadoras. Con años de experiencia en el desarrollo de software empresarial,
                entendemos los desafíos únicos que enfrentan las empresas en la actualidad.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2"> {/* Reducido gap en móvil */}
              {/* Misión Card */}
              <div 
                className="rounded-2xl bg-gray-800 p-6 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500"
                ref={el => cardsRef.current[0] = el}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                  <span className="text-5xl" role="img" aria-label="Target">🎯</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Misión</h3>
                <p className="text-gray-400 font-semibold">Simplificar la gestión empresarial</p>
              </div>

              {/* Equipo Card */}
              <div 
                className="rounded-2xl bg-gray-800 p-6 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500"
                ref={el => cardsRef.current[1] = el}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                  <span className="text-5xl" role="img" aria-label="Team">👥</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Equipo</h3>
                <p className="text-gray-400 ">Expertos comprometidos</p>
              </div>

              {/* Innovación Card */}
              <div 
                className="rounded-2xl bg-gray-800 p-6 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500"
                ref={el => cardsRef.current[2] = el}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                  <span className="text-5xl" role="img" aria-label="Innovation">💡</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Innovación</h3>
                <p className="text-gray-400 ">Soluciones creativas</p>
              </div>

              {/* Valores Card */}
              <div 
                className="rounded-2xl bg-gray-800 p-6 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500"
                ref={el => cardsRef.current[3] = el}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                  <span className="text-5xl" role="img" aria-label="Values">🤝</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Valores</h3>
                <p className="text-gray-400 ">Compromiso y calidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
