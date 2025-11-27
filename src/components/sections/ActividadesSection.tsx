'use client'

import { motion } from 'framer-motion'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'
import { FadeIn } from '@/components/animations'

const actividades = [
  {
    id: 1,
    title: 'Celebridades',
    description: 'Creadores de Contenido que compartan sus historias personales de éxito y consejos útiles para seguir sus pasos.',
    icon: '⭐',
    color: 'cyan',
  },
  {
    id: 2,
    title: 'Curso Completo',
    description: 'Cursado 360°. Desde la planificación y producción hasta la edición y monetización.',
    icon: '🎓',
    color: 'pink',
  },
  {
    id: 3,
    title: 'Stands Cursado',
    description: 'Posibilidad de interactuar directamente con profesores en stands dedicados, donde recibirán asesoramiento personalizado y actividades prácticas.',
    icon: '🎯',
    color: 'purple',
  },
  {
    id: 4,
    title: 'Stands Feria',
    description: 'Presencia de marcas relacionadas a la creación de contenido digital, productos y servicios que ayuden a los aspirantes a mejorar su trabajo.',
    icon: '🏪',
    color: 'yellow',
  },
  {
    id: 5,
    title: 'Zona Creación de Contenido',
    description: 'Espacio equipado con sets de grabación, producción y accesorios donde podrán crear y grabar sus propios videos. Se proporcionará temas sugeridos, escenografías temáticas y apoyo técnico.',
    icon: '🎬',
    color: 'green',
  },
  {
    id: 6,
    title: 'Exhibiciones',
    description: 'Empresas y marcas relacionadas con la industria audiovisual realizan exhibiciones y demostraciones de productos y servicios relevantes para los creadores de contenido.',
    icon: '📺',
    color: 'cyan',
  },
  {
    id: 7,
    title: 'Entretenimiento',
    description: 'Actividades musicales, comedias, concurso de talentos. Descansos divertidos entre sesiones educativas.',
    icon: '🎭',
    color: 'pink',
  },
  {
    id: 8,
    title: 'Premios',
    description: 'Premios y sorteos para aumentar la emoción y la participación de los asistentes, así como proporcionarles incentivos adicionales para interactuar con el contenido y las actividades del evento.',
    icon: '🏆',
    color: 'yellow',
  },
  {
    id: 9,
    title: 'Zona Recarga',
    description: 'Área del evento para que los asistentes puedan recargar energías y socializar de manera más informal. Incluimos juegos de mesa y consolas de videojuegos para hacer del momento incluso más entretenido.',
    icon: '🎮',
    color: 'purple',
  },
  {
    id: 10,
    title: 'Patio Comida',
    description: 'Dispondremos de food trucks que ofrezcan una variedad de opciones de comida, desde comidas rápidas hasta platos elaborados.',
    icon: '🍔',
    color: 'green',
  },
]

const colorStyles: Record<string, { gradient: string; border: string; shadow: string }> = {
  cyan: {
    gradient: 'from-cyan/20 to-cyan/5',
    border: 'border-cyan/40',
    shadow: 'shadow-cyan/20',
  },
  pink: {
    gradient: 'from-pink/20 to-pink/5',
    border: 'border-pink/40',
    shadow: 'shadow-pink/20',
  },
  purple: {
    gradient: 'from-purple/20 to-purple/5',
    border: 'border-purple/40',
    shadow: 'shadow-purple/20',
  },
  yellow: {
    gradient: 'from-yellow/20 to-yellow/5',
    border: 'border-yellow/40',
    shadow: 'shadow-yellow/20',
  },
  green: {
    gradient: 'from-green/20 to-green/5',
    border: 'border-green/40',
    shadow: 'shadow-green/20',
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export function ActividadesSection() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle gradient="pink">Actividades del Evento</SectionTitle>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionSubtitle>
          Una experiencia completa con actividades diseñadas para educar, entretener y conectar a todos los asistentes.
        </SectionSubtitle>
      </FadeIn>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{ perspective: '1000px' }}
      >
        {actividades.map((actividad, index) => {
          const style = colorStyles[actividad.color]

          return (
            <motion.div
              key={actividad.id}
              variants={itemVariants}
              className={`
                relative group
                bg-gradient-to-br ${style.gradient}
                border ${style.border}
                rounded-2xl p-6
                backdrop-blur-sm
                hover:shadow-2xl hover:${style.shadow}
                transition-shadow duration-500
                overflow-hidden
              `}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${actividad.color === 'cyan' ? 'rgba(6,182,212,0.3)' : actividad.color === 'pink' ? 'rgba(236,72,153,0.3)' : actividad.color === 'purple' ? 'rgba(168,85,247,0.3)' : actividad.color === 'yellow' ? 'rgba(251,191,36,0.3)' : 'rgba(34,197,94,0.3)'}, transparent)`,
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '200% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Floating icon */}
              <motion.div
                className="absolute -top-2 -right-2 text-5xl opacity-20 group-hover:opacity-40 transition-opacity"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
              >
                {actividad.icon}
              </motion.div>

              <div className="relative z-10 flex items-start gap-4">
                {/* Icon badge */}
                <motion.div
                  className={`
                    flex-shrink-0 w-14 h-14 rounded-xl
                    bg-gradient-to-br ${style.gradient}
                    border ${style.border}
                    flex items-center justify-center text-2xl
                    shadow-lg
                  `}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {actividad.icon}
                </motion.div>

                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-white/90"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {actividad.title}
                  </motion.h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {actividad.description}
                  </p>
                </div>
              </div>

              {/* Bottom glow line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${style.gradient} opacity-0 group-hover:opacity-100`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Gaming House badge */}
      <FadeIn delay={0.5}>
        <div className="flex justify-center mt-12">
          <motion.div
            className="bg-gradient-to-r from-cyan/20 via-purple/20 to-pink/20 rounded-xl px-8 py-4 border border-cyan/30"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white font-black tracking-wider text-lg">GAMING HOUSE</span>
          </motion.div>
        </div>
      </FadeIn>
    </section>
  )
}
