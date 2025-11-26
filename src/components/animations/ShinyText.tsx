'use client'

import { cn } from '@/lib/utils'

interface ShinyTextProps {
  text: string
  className?: string
  shimmerWidth?: number
  speed?: number
}

export function ShinyText({
  text,
  className = '',
  shimmerWidth = 100,
  speed = 3,
}: ShinyTextProps) {
  return (
    <span
      className={cn(
        'relative inline-block bg-clip-text text-transparent',
        'bg-[length:250%_100%]',
        'animate-shimmer',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(
          110deg,
          currentColor 35%,
          rgba(255,255,255,0.9) 50%,
          currentColor 65%
        )`,
        backgroundSize: `${shimmerWidth * 2.5}% 100%`,
        animationDuration: `${speed}s`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'inherit',
      }}
    >
      {text}
    </span>
  )
}
