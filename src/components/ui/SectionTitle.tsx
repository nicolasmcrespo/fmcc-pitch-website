'use client'

import { cn } from '@/lib/utils'

type GradientColor = 'purple' | 'green' | 'pink' | 'cyan' | 'white'

interface SectionTitleProps {
  gradient?: GradientColor
  children: React.ReactNode
  className?: string
}

const gradientClasses: Record<GradientColor, string> = {
  purple: 'gradient-text-purple',
  green: 'gradient-text-green',
  pink: 'gradient-text-pink',
  cyan: 'gradient-text-cyan',
  white: 'text-white',
}

export function SectionTitle({ gradient = 'purple', children, className }: SectionTitleProps) {
  return (
    <h2 className={cn('text-4xl font-bold text-center mb-4', gradientClasses[gradient], className)}>
      {children}
    </h2>
  )
}

interface SectionSubtitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <p className={cn('text-center text-muted max-w-3xl mx-auto mb-12', className)}>
      {children}
    </p>
  )
}
