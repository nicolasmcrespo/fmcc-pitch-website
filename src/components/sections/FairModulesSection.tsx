'use client'

import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'
import { motion } from 'framer-motion'

const modules = [
  {
    icon: '💰',
    title: 'Monetización',
    description: 'Estrategias para generar ingresos como creador de contenido',
    color: 'yellow',
  },
  {
    icon: '📝',
    title: 'Guionado',
    description: 'Técnicas de storytelling y estructura de contenido',
    color: 'cyan',
  },
  {
    icon: '💡',
    title: 'Iluminación',
    description: 'Setup profesional de luces para videos y streams',
    color: 'pink',
  },
  {
    icon: '🎬',
    title: 'Edición',
    description: 'Herramientas y flujos de trabajo para post-producción',
    color: 'purple',
  },
  {
    icon: '🎤',
    title: 'Audio',
    description: 'Captación y procesamiento de sonido profesional',
    color: 'green',
  },
  {
    icon: '📱',
    title: 'Redes Sociales',
    description: 'Algoritmos, tendencias y crecimiento orgánico',
    color: 'orange',
  },
]

const colorClasses: Record<string, { border: string; text: string; glow: string }> = {
  yellow: {
    border: 'border-yellow/30',
    text: 'text-yellow',
    glow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]',
  },
  cyan: {
    border: 'border-cyan/30',
    text: 'text-cyan',
    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  },
  pink: {
    border: 'border-pink/30',
    text: 'text-pink',
    glow: 'hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]',
  },
  purple: {
    border: 'border-purple/30',
    text: 'text-purple-light',
    glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]',
  },
  green: {
    border: 'border-green/30',
    text: 'text-green-light',
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]',
  },
  orange: {
    border: 'border-orange/30',
    text: 'text-orange',
    glow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
  },
}

export function FairModulesSection() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle gradient="cyan">Feria de Módulos Educativos</SectionTitle>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionSubtitle>
          Espacios temáticos dentro del festival donde los asistentes pueden aprender de expertos en cada área de la creación de contenido.
        </SectionSubtitle>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" staggerDelay={0.1}>
        {modules.map((module) => (
          <StaggerItem key={module.title}>
            <motion.div
              className={`bg-card-bg rounded-xl p-6 border ${colorClasses[module.color].border} ${colorClasses[module.color].glow} transition-shadow duration-300`}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className={`text-xl font-semibold ${colorClasses[module.color].text} mb-2`}>
                {module.title}
              </h3>
              <p className="text-muted-dark text-sm">{module.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Creators for Brands Info */}
      <FadeIn delay={0.4}>
        <div className="mt-12 bg-gradient-to-r from-purple/20 via-pink/20 to-cyan/20 rounded-2xl p-8 border border-purple/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Creadores + Marcas = Contenido Auténtico
            </h3>
            <p className="text-muted max-w-3xl mx-auto mb-6">
              Como parte del paquete de sponsorship, las marcas del evento reciben contenido promocional creado por nuestros creadores de contenido. Reels, historias y publicaciones auténticas que conectan directamente con sus audiencias.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card-bg rounded-lg px-6 py-3">
                <span className="text-yellow font-semibold">Reels Promocionales</span>
              </div>
              <div className="bg-card-bg rounded-lg px-6 py-3">
                <span className="text-pink font-semibold">Historias de Instagram</span>
              </div>
              <div className="bg-card-bg rounded-lg px-6 py-3">
                <span className="text-cyan font-semibold">TikToks Virales</span>
              </div>
              <div className="bg-card-bg rounded-lg px-6 py-3">
                <span className="text-green-light font-semibold">Posts Patrocinados</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
