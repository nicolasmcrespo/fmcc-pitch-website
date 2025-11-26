'use client'

import { cn } from '@/lib/utils'

type StatColor = 'yellow' | 'purple' | 'pink' | 'green' | 'cyan' | 'orange'

interface StatCardProps {
  value: string
  label: string
  description: string
  color: StatColor
  className?: string
}

const colorClasses: Record<StatColor, string> = {
  yellow: 'text-yellow',
  purple: 'text-purple-light',
  pink: 'text-pink-light',
  green: 'text-green-light',
  cyan: 'text-cyan',
  orange: 'text-orange',
}

export function StatCard({ value, label, description, color, className }: StatCardProps) {
  return (
    <div className={cn('bg-card-bg rounded-xl p-8 text-center', className)}>
      <div className={cn('text-4xl font-extrabold', colorClasses[color])}>{value}</div>
      <div className="text-white font-semibold mt-2">{label}</div>
      <div className="text-muted-dark text-sm mt-1">{description}</div>
    </div>
  )
}
