import React from 'react'
import GestionEventos from '../assets/images/GestionEventos.jpg'
import Dashboard from '../assets/images/Dashboard.png'
import AnalisisTendencias from '../assets/images/AnalisisTendencias.jpg'

function Software() {
  return (
    <section className="bg-gray-900 px-4 py-16 lg:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <h1 className="mb-12 text-center text-4xl font-bold lg:text-5xl p-5">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            NUESTRO SOFTWARE
          </span>
        </h1>

        {/* Grid Software */}
        <div className="grid gap-8">
          {/* Grid Container */}
          <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-2">
            {/* Dashboard Principal - Centrado arriba */}
            <div className="lg:col-span-2 max-w-3xl mx-auto w-full">
              <div className="rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                    <span className="text-5xl" role="img" aria-label="Dashboard">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Dashboard Principal</h3>
                </div>

                <p className="mb-6 text-gray-400 leading-relaxed">
                  Panel de control intuitivo con métricas clave y KPIs en tiempo real
                </p>

                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={Dashboard}
                    alt="Dashboard Principal"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Gestión de Eventos - Abajo izquierda */}
            <div className="rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                  <span className="text-5xl" role="img" aria-label="Calendario">📅</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Gestión de Eventos</h3>
              </div>

              <p className="mb-6 text-gray-400 leading-relaxed">
                Control detallado de cada evento con estado y seguimiento
              </p>
              
              {/* Imagen de Gestión de Eventos */}
              <div className="relative h-max w-full overflow-hidden rounded-xl">
                <img
                  src={GestionEventos}
                  alt="Sistema de Gestión de Eventos"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Análisis de Tendencias - Abajo derecha */}
            <div className="rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.75)]">
                  <span className="text-5xl" role="img" aria-label="Tendencias">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Análisis de Tendencias</h3>
              </div>

              <p className="mb-6 text-gray-400 leading-relaxed">
                Visualización de tendencias y predicciones basadas en datos históricos
              </p>

              {/* Imagen de Análisis de Tendencias */}
              <div className="relative h-max w-full overflow-hidden rounded-xl">
                <img
                  src={AnalisisTendencias}
                  alt="Análisis de Tendencias"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Software
