'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type BorderColor = 'cyan' | 'blue' | 'yellow' | 'purple' | 'pink' | 'green'

interface CardProps {
  borderColor: BorderColor
  icon?: string
  title: string
  description?: string
  items?: string[]
  children?: React.ReactNode
  className?: string
  imageUrl?: string
  imageAlt?: string
}

const glowColors: Record<BorderColor, string> = {
  cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
  blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
  yellow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]',
  purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]',
  pink: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
  green: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
}

export function Card({
  borderColor,
  icon,
  title,
  description,
  items,
  children,
  className,
  imageUrl,
  imageAlt,
}: CardProps) {
  const borderClass = `card-border-${borderColor}`

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-card-bg p-8 transition-shadow duration-300',
        borderClass,
        glowColors[borderColor],
        className
      )}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || title}
          className="w-full h-[200px] object-cover rounded-lg mb-4"
        />
      )}
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {description && <p className="text-muted text-[0.95rem] mb-4">{description}</p>}
      {items && items.length > 0 && (
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-muted-dark text-sm before:content-['•'] before:mr-2 before:text-muted-darker">
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </motion.div>
  )
}
