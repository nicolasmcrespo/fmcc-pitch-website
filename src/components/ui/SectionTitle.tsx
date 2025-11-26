'use client'

import { cn } from '@/lib/utils'
import { SplitText } from '@/components/animations'

type GradientColor = 'purple' | 'green' | 'pink' | 'cyan' | 'white'

interface SectionTitleProps {
  gradient?: GradientColor
  children: React.ReactNode
  className?: string
  animated?: boolean
}

const gradientClasses: Record<GradientColor, string> = {
  purple: 'gradient-text-purple',
  green: 'gradient-text-green',
  pink: 'gradient-text-pink',
  cyan: 'gradient-text-cyan',
  white: 'text-white',
}

export function SectionTitle({ gradient = 'purple', children, className, animated = true }: SectionTitleProps) {
  const text = typeof children === 'string' ? children : ''

  return (
    <h2 className={cn('text-4xl md:text-5xl font-bold text-center mb-4', gradientClasses[gradient], className)}>
      {animated && text ? (
        <SplitText
          text={text}
          animationType="blur"
          stagger={0.04}
          duration={0.6}
        />
      ) : (
        children
      )}
    </h2>
  )
}

interface SectionSubtitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <p className={cn('text-center text-muted max-w-3xl mx-auto mb-12 text-lg', className)}>
      {children}
    </p>
  )
}
