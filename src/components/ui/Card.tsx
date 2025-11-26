'use client'

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
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-card-bg p-8',
        borderClass,
        className
      )}
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
    </div>
  )
}
