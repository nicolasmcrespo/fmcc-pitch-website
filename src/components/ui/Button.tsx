'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'download' | 'contact'
  href?: string
  children: React.ReactNode
  className?: string
}

export function Button({ variant = 'primary', href, children, className }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold cursor-pointer rounded-lg'

  const variants = {
    primary: 'bg-gradient-primary text-white px-8 py-3 shadow-lg shadow-purple/25',
    secondary: 'bg-transparent text-cyan border border-cyan px-8 py-3',
    download: 'bg-gradient-purple text-white px-6 py-3 shadow-lg shadow-purple/25',
    contact: 'bg-gradient-purple text-white px-8 py-3.5 shadow-lg shadow-purple/25',
  }

  const classes = cn(baseStyles, variants[variant], className)

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      className={classes}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </MotionComponent>
  )
}
