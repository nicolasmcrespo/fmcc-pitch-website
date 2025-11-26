'use client'

import { SectionTitle } from '@/components/ui/SectionTitle'

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionTitle gradient="purple">Contacto</SectionTitle>

      <div className="max-w-xl mx-auto bg-gradient-to-br from-purple/20 to-card-bg rounded-3xl p-12 text-center mt-8">
        <div className="text-6xl text-purple-light mb-6">👤</div>
        <h3 className="text-2xl font-bold mb-2">Nicolás Crespo</h3>
        <p className="text-purple-light mb-6">Director del Proyecto FMCC</p>
        <p className="text-muted mb-8">
          ¿Interesado en ser parte del ecosistema de creadores más innovador de Latinoamérica? Contáctanos para explorar oportunidades de colaboración.
        </p>
        <a
          href="mailto:contacto@fmcc.com.ar"
          className="inline-flex items-center gap-2 bg-gradient-purple text-white px-8 py-4 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
        >
          ✉️ Enviar Mensaje
        </a>
      </div>
    </section>
  )
}
