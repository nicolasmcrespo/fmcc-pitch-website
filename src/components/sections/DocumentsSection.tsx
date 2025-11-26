'use client'

import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'

export function DocumentsSection() {
  return (
    <section id="documentos" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionTitle gradient="cyan">Documentación</SectionTitle>
      <SectionSubtitle>
        Accede a toda la documentación oficial del proyecto FMCC.
      </SectionSubtitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card-bg rounded-2xl p-8 text-center border border-purple/30">
          <div className="text-5xl text-purple-light mb-4">📄</div>
          <h3 className="text-xl font-semibold mb-4">Propuesta Ejecutiva</h3>
          <p className="text-muted mb-6">
            Documento completo con análisis de mercado, proyecciones financieras y plan de implementación.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-purple text-white px-6 py-3 rounded-lg font-semibold">
            📥 Descargar PDF
          </button>
        </div>

        <div className="bg-card-bg rounded-2xl p-8 text-center border border-cyan/30">
          <div className="text-5xl text-cyan mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-4">Presentación Inversor</h3>
          <p className="text-muted mb-6">
            Deck de presentación con métricas clave, casos de éxito y oportunidades de inversión.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-cyan text-white px-6 py-3 rounded-lg font-semibold">
            📥 Descargar PDF
          </button>
        </div>
      </div>
    </section>
  )
}
