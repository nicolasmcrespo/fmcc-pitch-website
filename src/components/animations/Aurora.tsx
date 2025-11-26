'use client'

import { useEffect, useRef } from 'react'

interface AuroraProps {
  colorStops?: string[]
  speed?: number
  blur?: number
  opacity?: number
  className?: string
}

export function Aurora({
  colorStops = ['#06b6d4', '#a855f7', '#ec4899', '#f59e0b'],
  speed = 4,
  blur = 150,
  opacity = 0.3,
  className = '',
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const blobs = colorStops.map((color, i) => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      radius: Math.min(canvas.offsetWidth, canvas.offsetHeight) * (0.3 + Math.random() * 0.3),
      color,
      phase: (i / colorStops.length) * Math.PI * 2,
    }))

    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      blobs.forEach((blob) => {
        blob.x += blob.vx + Math.sin(time + blob.phase) * 0.5
        blob.y += blob.vy + Math.cos(time + blob.phase) * 0.5

        if (blob.x < -blob.radius) blob.x = canvas.offsetWidth + blob.radius
        if (blob.x > canvas.offsetWidth + blob.radius) blob.x = -blob.radius
        if (blob.y < -blob.radius) blob.y = canvas.offsetHeight + blob.radius
        if (blob.y > canvas.offsetHeight + blob.radius) blob.y = -blob.radius

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        )
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(1, 'transparent')

        ctx.globalAlpha = opacity
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [colorStops, speed, opacity])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ filter: `blur(${blur}px)` }}
    />
  )
}
