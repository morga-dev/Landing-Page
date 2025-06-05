import React, { useEffect, useRef } from 'react'
import { FileText, Users, BarChart3 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Services() {
  const cardsRef = useRef([])

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

  return (
    <section className="px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h1 className="mb-12 text-center text-4xl font-bold lg:text-5xl p-5">
          <span className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            NUESTROS SERVICIOS
          </span>
        </h1>

        {/* Grid Servicios */}
        <div className="grid gap-8 lg:grid-cols-3">
          {['ERP', 'RRHH', 'Finanzas'].map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                {service === 'ERP' && <span className="text-5xl">📊</span>}
                {service === 'RRHH' && <span className="text-5xl">👥</span>}
                {service === 'Finanzas' && <span className="text-5xl">💰</span>}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">{service === 'ERP' ? 'ERP' : service === 'RRHH' ? 'MÓDULO DE RECURSOS HUMANOS' : 'MÓDULO DE FINANZAS'}</h3>
              <p className="mb-6 text-gray-400 leading-relaxed">
                {service === 'ERP' && 'Sistema integral de gestión empresarial que optimiza todos los procesos de tu restaurante'}
                {service === 'RRHH' && 'Gestión completa del personal y optimización de procesos de RRHH'}
                {service === 'Finanzas' && 'Control total de las finanzas y análisis detallado de la rentabilidad'}
              </p>
              <ul className="space-y-3">
                {service === 'ERP' && (
                  <>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Control de inventario
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Gestión de pedidos
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Reportes en tiempo real
                    </li>
                  </>
                )}
                {service === 'RRHH' && (
                  <>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Gestión de personal
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Control de asistencia
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Nómina automatizada
                    </li>
                  </>
                )}
                {service === 'Finanzas' && (
                  <>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Contabilidad integrada
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Control de gastos
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="mr-3 h-2 w-2 rounded-full bg-blue-400"></div>
                      Análisis financiero
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
