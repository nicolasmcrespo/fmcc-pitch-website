'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CountUp } from '@/components/animations'

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

const glowColors: Record<StatColor, string> = {
  yellow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]',
  purple: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]',
  pink: 'hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]',
  green: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]',
  cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  orange: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
}

function parseValue(value: string): { number: number; prefix: string; suffix: string } {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (match) {
    return {
      prefix: match[1],
      number: parseFloat(match[2]),
      suffix: match[3],
    }
  }
  return { prefix: '', number: 0, suffix: value }
}

export function StatCard({ value, label, description, color, className }: StatCardProps) {
  const { number, prefix, suffix } = parseValue(value)

  return (
    <motion.div
      className={cn(
        'bg-card-bg rounded-xl p-8 text-center transition-shadow duration-300',
        glowColors[color],
        className
      )}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <CountUp
        value={number}
        prefix={prefix}
        suffix={suffix}
        className={cn('text-4xl font-extrabold', colorClasses[color])}
      />
      <div className="text-white font-semibold mt-2">{label}</div>
      <div className="text-muted-dark text-sm mt-1">{description}</div>
    </motion.div>
  )
}
