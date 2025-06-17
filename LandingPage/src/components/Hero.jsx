import React from 'react'

function Hero() {
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

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-35 rounded-xl">
      {/* Título */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Soluciones Empresariales
          <br />
          Inteligentes
        </span>
      </h1>
      {/* Descripción */}
      <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mb-8">
        Transformamos la gestión empresarial con tecnología innovadora para optimizar
        procesos y maximizar resultados.
      </p>
      
      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => scrollToSection('contact')}
          className="btn-primary text-lg px-8 py-3"
        >
          Solicitar Demo
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className="bg-dark-secondary border border-gray-700 text-gray-300 hover:text-white text-lg px-8 py-3 rounded-lg transition-colors"
        >
          Conocer Más
        </button>
      </div>
    </div>
  )
}

export default Hero
