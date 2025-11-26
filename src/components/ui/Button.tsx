'use client'

import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'download' | 'contact'
  href?: string
  children: React.ReactNode
  className?: string
}

export function Button({ variant = 'primary', href, children, className }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold cursor-pointer transition-all duration-300 rounded-lg'

  const variants = {
    primary: 'bg-gradient-primary text-white px-8 py-3 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)]',
    secondary: 'bg-transparent text-cyan border border-cyan px-8 py-3 hover:bg-cyan/10',
    download: 'bg-gradient-purple text-white px-6 py-3',
    contact: 'bg-gradient-purple text-white px-8 py-3.5',
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes}>
      {children}
    </button>
  )
}
