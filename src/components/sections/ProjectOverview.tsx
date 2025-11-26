'use client'

import { Card } from '@/components/ui/Card'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'

const projectCards = [
  {
    icon: '👥',
    title: 'Hub de Creadores',
    description: 'Centro de operaciones para creadores de contenido, conectando talento local con marcas y generando oportunidades de colaboración únicas.',
    items: [
      'Espacios de networking',
      'Conexión directa con marcas',
      'Oportunidades de colaboración',
      'Comunidad de creadores',
    ],
    borderColor: 'cyan' as const,
  },
  {
    icon: '📈',
    title: 'Impacto Económico',
    description: 'Generación de revenue para la economía local, creación de +50 empleos directos y desarrollo del ecosistema digital en Mendoza.',
    items: [
      '+50 empleos directos',
      'Revenue para economía local',
      'Impulso al sector digital',
      'Desarrollo de talento local',
    ],
    borderColor: 'blue' as const,
  },
  {
    icon: '📍',
    title: 'Turismo Digital',
    description: 'Atracción de visitantes locales y expansión a nivel nacional, posicionando a Mendoza como referente de eventos de creadores de contenido.',
    items: [
      'Visitantes locales y nacionales',
      'Expansión nacional',
      'Experiencias inmersivas únicas',
      'Proyección a nivel país',
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
