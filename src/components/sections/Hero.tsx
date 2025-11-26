'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Aurora, SplitText, GradientText, TextReveal, MagneticButton } from '@/components/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-16 px-8 overflow-hidden">
      {/* Background image of Mendoza */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mendoza-hero.jpg"
          alt="Mendoza, Argentina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Aurora background on top of image */}
      <Aurora
        colorStops={['#06b6d4', '#a855f7', '#ec4899', '#8b5cf6']}
        speed={2}
        blur={180}
        opacity={0.2}
      />

      {/* Animated gradient orbs on top */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink/15 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <TextReveal className="mb-4" duration={1.2}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tight">
            <SplitText
              text="FMCC"
              className="text-white"
              animationType="fadeUp"
              stagger={0.08}
              duration={0.8}
              delay={0.3}
            />
            <span className="ml-4">
              <GradientText
                text="2025"
                colors={['#06b6d4', '#a855f7', '#ec4899', '#f59e0b', '#06b6d4']}
                animationSpeed={6}
              />
            </span>
          </h1>
        </TextReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl font-medium text-white/90 mb-2">
            Festival Mendozino de Creadores de Contenido
          </p>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            El ecosistema más innovador para creadores digitales de Argentina
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <MagneticButton strength={0.4} radius={150}>
            <Button variant="primary" href="#proyecto">Conocer Más</Button>
          </MagneticButton>
          <MagneticButton strength={0.4} radius={150}>
            <Button variant="secondary" href="#eventos">Ver Eventos</Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-cyan rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
