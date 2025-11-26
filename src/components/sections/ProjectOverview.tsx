'use client'

import { Card } from '@/components/ui/Card'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'

const projectCards = [
  {
    icon: '👥',
    title: 'Hub de Creadores',
    description: 'Centro de operaciones para más de 250 creadores de contenido, con espacios de trabajo, estudios profesionales y programas de mentoría especializada.',
    items: [
      'Estudios de grabación profesionales',
      'Espacios de coworking 24/7',
      'Programas de capacitación',
      'Red de mentores expertos',
    ],
    borderColor: 'cyan' as const,
  },
  {
    icon: '📈',
    title: 'Impacto Económico',
    description: 'Generación de más de $2M USD en impacto económico directo, creación de 500+ empleos y atracción de inversión tecnológica internacional.',
    items: [
      '$2M+ impacto económico anual',
      '500+ empleos directos e indirectos',
      'Atracción de inversión extranjera',
      'Desarrollo del sector tech',
    ],
    borderColor: 'blue' as const,
  },
  {
    icon: '📍',
    title: 'Turismo Digital',
    description: 'Atracción de 50,000+ visitantes anuales, posicionando a Mendoza como destino turístico tecnológico y de entretenimiento digital de clase mundial.',
    items: [
      '50K+ visitantes anuales',
      'Turismo tecnológico pionero',
      'Experiencias inmersivas únicas',
      'Proyección internacional',
    ],
    borderColor: 'yellow' as const,
  },
]

export function ProjectOverview() {
  return (
    <section id="proyecto" className="py-20 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle gradient="purple">El Proyecto FMCC</SectionTitle>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionSubtitle>
          Un ecosistema integral que conecta creadores, marcas y audiencias en el corazón de Argentina
        </SectionSubtitle>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8" staggerDelay={0.15}>
        {projectCards.map((card) => (
          <StaggerItem key={card.title}>
            <Card {...card} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
