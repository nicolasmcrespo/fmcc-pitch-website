'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'
import { FadeIn } from '@/components/animations'

const cursadoModules = [
  {
    id: 1,
    title: 'Guionado',
    description: 'Esencial para mantener un flujo claro y coherente. Desde la creación de ideas hasta su estructura, incluyendo retención del espectador.',
    size: 'large',
    color: 'cyan',
  },
  {
    id: 2,
    title: 'Producción',
    description: 'Planificación y ejecución de la filmación. Desde selección de equipo hasta gestión del tiempo y recursos.',
    size: 'large',
    color: 'pink',
  },
  {
    id: 3,
    title: 'Uso de Cámaras',
    description: 'Como sacar el máximo provecho de las cámaras y mejorar la calidad de imagen.',
    size: 'medium',
    color: 'purple',
  },
  {
    id: 4,
    title: 'Iluminación',
    description: 'Técnicas básicas y avanzadas de iluminación explicando su importancia en la calidad visual.',
    size: 'medium',
    color: 'yellow',
  },
  {
    id: 5,
    title: 'Escenografía',
    description: 'Crear un ambiente que complemente el contenido del video y mantenga el interés del espectador.',
    size: 'medium',
    color: 'green',
  },
  {
    id: 6,
    title: 'Maquillaje',
    description: 'Como el maquillaje puede influir en la apariencia y confianza frente a la cámara, técnicas para lograr un aspecto natural.',
    size: 'medium',
    color: 'pink',
  },
  {
    id: 7,
    title: 'Actuación',
    description: 'Como comunicarse efectivamente frente a la cámara y transmitir emociones y mensajes de manera auténtica.',
    size: 'medium',
    color: 'cyan',
  },
  {
    id: 8,
    title: 'Edición y Postproducción',
    description: 'Técnicas de edición básicas y avanzadas, manejo de software de edición.',
    size: 'medium',
    color: 'purple',
  },
  {
    id: 9,
    title: 'Monetización',
    description: 'Información y comprensión sobre todas las diferentes formas de monetización.',
    size: 'large',
    color: 'yellow',
  },
  {
    id: 10,
    title: 'Gestión de Redes',
    description: 'Técnicas de configuración y estrategias de posicionamiento de cada red social para optimizar videos y algoritmos. Mantener un compromiso con la audiencia.',
    size: 'large',
    color: 'green',
  },
]

const colorStyles: Record<string, { bg: string; border: string; glow: string; text: string }> = {
  cyan: {
    bg: 'bg-cyan/10',
    border: 'border-cyan/30',
    glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]',
    text: 'text-cyan',
  },
  pink: {
    bg: 'bg-pink/10',
    border: 'border-pink/30',
    glow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]',
    text: 'text-pink',
  },
  purple: {
    bg: 'bg-purple/10',
    border: 'border-purple/30',
    glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]',
    text: 'text-purple-light',
  },
  yellow: {
    bg: 'bg-yellow/10',
    border: 'border-yellow/30',
    glow: 'hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]',
    text: 'text-yellow',
  },
  green: {
    bg: 'bg-green/10',
    border: 'border-green/30',
    glow: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]',
    text: 'text-green-light',
  },
}

export function CursadoSection() {
  return (
    <section className="relative py-20 px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mendoza-vineyard.jpg"
          alt="Viñedos de Mendoza"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle gradient="purple">Contenido del Cursado</SectionTitle>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionSubtitle>
          Módulos educativos especializados para formar a la próxima generación de creadores de contenido profesionales.
        </SectionSubtitle>
      </FadeIn>

      {/* Magic Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {cursadoModules.map((module, index) => {
          const style = colorStyles[module.color]
          const isLarge = module.size === 'large'

          return (
            <motion.div
              key={module.id}
              className={`
                relative overflow-hidden rounded-2xl p-6
                ${style.bg} ${style.border} ${style.glow}
                border backdrop-blur-sm
                transition-all duration-500
                ${isLarge ? 'lg:col-span-2' : ''}
              `}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${module.color === 'cyan' ? 'rgba(6,182,212,0.15)' : module.color === 'pink' ? 'rgba(236,72,153,0.15)' : module.color === 'purple' ? 'rgba(168,85,247,0.15)' : module.color === 'yellow' ? 'rgba(251,191,36,0.15)' : 'rgba(34,197,94,0.15)'}, transparent 70%)`,
                }}
              />

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-30"
                style={{
                  background: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
                  backgroundSize: '200% 100%',
                }}
                whileHover={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.h3
                  className={`text-xl font-bold mb-3 ${style.text}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                >
                  {module.title}
                </motion.h3>
                <p className="text-muted text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 ${style.bg} rounded-bl-full opacity-50`}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Gaming badge */}
      <FadeIn delay={0.5}>
        <div className="flex justify-center mt-12">
          <motion.div
            className="bg-gradient-to-r from-purple/20 via-pink/20 to-cyan/20 rounded-full px-8 py-3 border border-purple/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white font-bold tracking-widest text-sm">GAMING & STREAMING</span>
          </motion.div>
        </div>
      </FadeIn>
      </div>
    </section>
  )
}
