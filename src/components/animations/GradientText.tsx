'use client'

import { cn } from '@/lib/utils'

interface GradientTextProps {
  text: string
  className?: string
  colors?: string[]
  animationSpeed?: number
  animate?: boolean
}

export function GradientText({
  text,
  className = '',
  colors = ['#06b6d4', '#a855f7', '#ec4899', '#f59e0b'],
  animationSpeed = 8,
  animate = true,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(
      90deg,
      ${colors.join(', ')},
      ${colors[0]}
    )`,
    backgroundSize: animate ? '200% 100%' : '100% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: animate ? `gradient-shift ${animationSpeed}s ease infinite` : 'none',
  }

  return (
    <span className={cn('inline-block', className)} style={gradientStyle}>
      {text}
    </span>
  )
}
