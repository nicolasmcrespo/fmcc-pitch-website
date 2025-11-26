'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  ease?: string
  animationType?: 'fadeUp' | 'fadeIn' | 'slideIn' | 'scale' | 'blur'
}

export function SplitText({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  stagger = 0.03,
  ease = 'power3.out',
  animationType = 'fadeUp',
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return

    const chars = containerRef.current.querySelectorAll('.char')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            const animationProps: gsap.TweenVars = {
              duration,
              stagger,
              ease,
              delay,
            }

            switch (animationType) {
              case 'fadeUp':
                gsap.fromTo(
                  chars,
                  { opacity: 0, y: 40, rotateX: -90 },
                  { opacity: 1, y: 0, rotateX: 0, ...animationProps }
                )
                break
              case 'fadeIn':
                gsap.fromTo(
                  chars,
                  { opacity: 0 },
                  { opacity: 1, ...animationProps }
                )
                break
              case 'slideIn':
                gsap.fromTo(
                  chars,
                  { opacity: 0, x: -20 },
                  { opacity: 1, x: 0, ...animationProps }
                )
                break
              case 'scale':
                gsap.fromTo(
                  chars,
                  { opacity: 0, scale: 0 },
                  { opacity: 1, scale: 1, ...animationProps }
                )
                break
              case 'blur':
                gsap.fromTo(
                  chars,
                  { opacity: 0, filter: 'blur(10px)' },
                  { opacity: 1, filter: 'blur(0px)', ...animationProps }
                )
                break
            }

            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [animationType, delay, duration, ease, stagger])

  const words = text.split(' ')

  return (
    <span ref={containerRef} className={`inline-block ${className}`} style={{ perspective: '1000px' }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="char inline-block"
              style={{ opacity: 0, transformStyle: 'preserve-3d' }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}
