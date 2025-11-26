'use client'

import { StatCard } from '@/components/ui/StatCard'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'

const benefits = [
  {
    value: '0%',
    label: 'Impuesto a las Ganancias',
    description: 'Exención total por 3 años para creadores que se radiquen en Mendoza',
    color: 'yellow' as const,
  },
  {
    value: '$50K',
    label: 'Subsidio de Radicación',
    description: 'Apoyo económico inicial para mudanza y establecimiento',
    color: 'purple' as const,
  },
  {
    value: '100%',
    label: 'Acceso a Estudios',
    description: 'Uso gratuito de instalaciones y equipamiento profesional',
    color: 'pink' as const,
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionTitle gradient="pink">Beneficios para Creadores</SectionTitle>
      <SectionSubtitle>
        Un programa integral de incentivos y apoyo diseñado para atraer y retener el mejor talento de creación de contenido en Mendoza.
      </SectionSubtitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <StatCard key={benefit.label} {...benefit} />
        ))}
      </div>
    </section>
  )
}
