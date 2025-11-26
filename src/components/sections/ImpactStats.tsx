'use client'

import { StatCard } from '@/components/ui/StatCard'
import { Card } from '@/components/ui/Card'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'

const stats = [
  { value: '$2.5M', label: 'Impacto Económico Anual', description: 'Generación directa e indirecta de ingresos', color: 'yellow' as const },
  { value: '750+', label: 'Empleos Generados', description: 'Directos, indirectos e inducidos', color: 'purple' as const },
  { value: '50M+', label: 'Alcance Digital', description: 'Impresiones anuales en redes sociales', color: 'pink' as const },
  { value: '75K+', label: 'Visitantes Anuales', description: 'Turismo nacional e internacional', color: 'green' as const },
]

export function ImpactStats() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <SectionTitle gradient="pink">Impacto Proyectado</SectionTitle>
      <SectionSubtitle>
        Análisis detallado del impacto económico, social y tecnológico que generará el ecosistema FMCC en Mendoza y Argentina, con proyecciones a 5 años basadas en estudios de mercado y benchmarks internacionales.
      </SectionSubtitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card borderColor="cyan" title="">
          <h3 className="text-xl font-semibold text-cyan mb-4">Impacto Económico Detallado</h3>
          <h4 className="font-semibold text-white mb-2">Ingresos Directos (Año 1-3)</h4>
          <ul className="space-y-1 text-muted-dark text-sm mb-4">
            <li>• Sponsorships y partnerships: $800K USD</li>
            <li>• Venta de entradas y merchandising: $400K USD</li>
            <li>• Servicios de producción y estudio: $300K USD</li>
            <li>• Programas de capacitación: $150K USD</li>
            <li>• Licenciamiento y contenido: $200K USD</li>
          </ul>
          <h4 className="font-semibold text-white mb-2">Impacto Indirecto</h4>
          <ul className="space-y-1 text-muted-dark text-sm">
            <li>• Turismo y hospitalidad: $650K USD</li>
            <li>• Servicios profesionales: $300K USD</li>
            <li>• Comercio local: $200K USD</li>
          </ul>
        </Card>

        <Card borderColor="green" title="">
          <h3 className="text-xl font-semibold text-green-light mb-4">Generación de Empleo</h3>
          <h4 className="font-semibold text-white mb-2">Empleos Directos (250+)</h4>
          <ul className="space-y-1 text-muted-dark text-sm mb-4">
            <li>• Equipo organizativo y gestión: 45 personas</li>
            <li>• Técnicos y producción: 80 personas</li>
            <li>• Marketing y comunicación: 35 personas</li>
            <li>• Servicios de apoyo: 60 personas</li>
            <li>• Creadores residentes: 30 personas</li>
          </ul>
          <h4 className="font-semibold text-white mb-2">Empleos Indirectos (500+)</h4>
          <ul className="space-y-1 text-muted-dark text-sm">
            <li>• Sector hotelero y gastronómico</li>
            <li>• Transporte y logística</li>
            <li>• Servicios profesionales</li>
            <li>• Proveedores tecnológicos</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
