'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  ease?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 1,
  ease = 'power4.out',
  direction = 'up',
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current || !innerRef.current || hasAnimated.current) return

    const getInitialPosition = () => {
      switch (direction) {
        case 'up':
          return { y: '100%', x: 0 }
        case 'down':
          return { y: '-100%', x: 0 }
        case 'left':
          return { x: '100%', y: 0 }
        case 'right':
          return { x: '-100%', y: 0 }
      }
    }

    gsap.set(innerRef.current, getInitialPosition())

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            gsap.to(innerRef.current, {
              x: 0,
              y: 0,
              duration,
              delay,
              ease,
            })

            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [delay, direction, duration, ease])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef}>{children}</div>
    </div>
  )
}
