'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem, SplitText } from '@/components/animations'

const phases = [
  {
    title: 'Año 1-2: Establecimiento',
    color: 'text-yellow',
    bgGlow: 'bg-yellow/10',
    borderColor: 'border-yellow/30',
    items: [
      'Lanzamiento del festival principal',
      'Construcción del hub de creadores',
      '10K visitantes en el primer festival',
      '$1M impacto económico',
    ],
  },
  {
    title: 'Año 3-4: Consolidación',
    color: 'text-pink',
    bgGlow: 'bg-pink/10',
    borderColor: 'border-pink/30',
    items: [
      'Expansión a eventos regionales',
      'Partnerships nacionales consolidados',
      '25K visitantes anuales',
      '$2M impacto económico',
    ],
  },
  {
    title: 'Año 5+: Liderazgo',
    color: 'text-orange',
    bgGlow: 'bg-orange/10',
    borderColor: 'border-orange/30',
    items: [
      'Referente nacional en creación de contenido',
      'Hub de creadores consolidado',
      '50K visitantes anuales',
      '$3M impacto económico',
    ],
  },
]

export function GrowthProjections() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <motion.div
          className="bg-vision-gradient rounded-3xl p-12 relative overflow-hidden"
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple/10 via-transparent to-cyan/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
              <SplitText
                text="Proyecciones de Crecimiento"
                animationType="fadeUp"
                stagger={0.03}
                duration={0.6}
              />
            </h2>
            <p className="text-center text-muted mb-8 text-lg">(2025-2030)</p>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2}>
              {phases.map((phase) => (
                <StaggerItem key={phase.title}>
                  <motion.div
                    className={`${phase.bgGlow} rounded-xl p-6 border ${phase.borderColor} backdrop-blur-sm`}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className={`text-xl font-semibold ${phase.color} mb-4`}>
                      {phase.title}
                    </h4>
                    <ul className="space-y-3 text-muted">
                      {phase.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <span className={`${phase.color} mt-1`}>•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  )
}
