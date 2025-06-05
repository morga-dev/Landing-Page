import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error cuando el usuario empiece a escribir
    if (error) setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    try {
      // Crear FormData para envío a FormSubmit
      const form = e.target
      const formDataToSend = new FormData(form)
      
      // Método listo para enviar el formulario, agregar el email de destino
      const response = await fetch('https://formsubmit.co/email.com', {
        method: 'POST',
        body: formDataToSend
      })
      
      if (response.ok) {
        setSubmitted(true)
        console.log("Formulario enviado:", formData)
        // Reset form
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        })
      } else {
        throw new Error('Error en el envío')
      }
    } catch (error) {
      setError('Error al enviar el mensaje. Por favor, intenta de nuevo.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Mostrar mensaje de confirmación
  if (submitted) {
    return (
      <section className="px-4 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center p-8 rounded-2xl bg-gray-800 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mx-auto">
                <Mail className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">¡Mensaje Enviado!</h2>
              <p className="text-gray-300 mb-6">
                Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-blue hover:bg-opacity-90 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h1 className="mb-12 text-center text-4xl font-bold lg:text-5xl p-5">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            CONTÁCTANOS
          </span>
        </h1>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
              <h3 className="mb-6 text-2xl font-bold text-blue-400">Información de Contacto</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                    <Mail className="h-6 w-6 text-red-400" />
                  </div>
                  <span className="text-gray-300">contacto@huubie.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                    <Phone className="h-6 w-6 text-red-400" />
                  </div>
                  <span className="text-gray-300">+52 (123) 456-7890</span>
                </div>

                {/* Location */}
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                    <MapPin className="h-6 w-6 text-red-400" />
                  </div>
                  <span className="text-gray-300">Ciudad de México, México</span>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
              <h3 className="mb-6 text-2xl font-bold text-blue-400">Horario de Atención</h3>
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <span className="text-gray-300">Lunes a Viernes: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl bg-gray-800 p-8 transform hover:scale-105 shadow-[0_0_50px_rgba(113,82,236,0.2)] hover:shadow-[0_0_50px_rgba(113,82,236,.5)] transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              {/* Error message */}
              {error && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue focus:ring-brand-blue p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue focus:ring-brand-blue p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  name="asunto"
                  placeholder="Asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue focus:ring-brand-blue p-3 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue focus:ring-brand-blue p-3 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-blue hover:bg-opacity-90 text-white py-3 text-lg rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact