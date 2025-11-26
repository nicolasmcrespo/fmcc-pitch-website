'use client'

import { StatCard } from '@/components/ui/StatCard'
import { Card } from '@/components/ui/Card'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'

const stats = [
  { value: '$100K+', label: 'Impacto Económico Anual', description: 'Generación directa e indirecta de ingresos', color: 'yellow' as const },
  { value: '500+', label: 'Empleos Generados', description: 'Directos e indirectos', color: 'purple' as const },
  { value: '50M', label: 'Alcance Digital', description: 'Impresiones en redes sociales', color: 'pink' as const },
  { value: '100K', label: 'Visitantes Anuales', description: 'Proyección a 5 años', color: 'green' as const },
]

export function ImpactStats() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle gradient="pink">Impacto Proyectado</SectionTitle>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionSubtitle>
          Análisis del impacto económico, social y digital que generará el ecosistema FMCC en Mendoza, con proyecciones a 5 años.
        </SectionSubtitle>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12" staggerDelay={0.1}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <StatCard {...stat} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.2}>
        <StaggerItem>
          <Card borderColor="cyan" title="">
            <h3 className="text-xl font-semibold text-cyan mb-4">Impacto Económico Detallado</h3>
            <h4 className="font-semibold text-white mb-2">Ingresos Directos</h4>
            <ul className="space-y-1 text-muted-dark text-sm mb-4">
              <li>• Sponsorships y partners: $100K USD</li>
              <li>• Venta de entradas: $250K USD</li>
            </ul>
            <h4 className="font-semibold text-white mb-2">Impacto Indirecto</h4>
            <ul className="space-y-1 text-muted-dark text-sm">
              <li>• Turismo y hospitalidad: $50K USD</li>
              <li>• Comercio local: $50K USD</li>
            </ul>
          </Card>
        </StaggerItem>

        <StaggerItem>
          <Card borderColor="green" title="">
            <h3 className="text-xl font-semibold text-green-light mb-4">Generación de Empleo</h3>
            <h4 className="font-semibold text-white mb-2">Empleos Directos (350+)</h4>
            <ul className="space-y-1 text-muted-dark text-sm mb-4">
              <li>• Equipo organizativo y gestión: 25 personas</li>
              <li>• Técnicos y producción: 30 personas</li>
              <li>• Marketing y comunicación: 35 personas</li>
              <li>• Servicios de apoyo: 30 personas</li>
              <li>• Creadores residentes: 30 personas</li>
              <li>• Creadores de contenido externos: 200 personas</li>
            </ul>
            <h4 className="font-semibold text-white mb-2">Empleos Indirectos (500+)</h4>
            <ul className="space-y-1 text-muted-dark text-sm">
              <li>• Sector hotelero y gastronómico</li>
              <li>• Transporte y logística</li>
              <li>• Servicios profesionales</li>
              <li>• Proveedores tecnológicos</li>
            </ul>
          </Card>
        </StaggerItem>
      </StaggerContainer>
    </section>
  )
}
