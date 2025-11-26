'use client'

import { useEffect, useRef } from 'react'

interface BlobCursorProps {
  blobColor?: string
  blobSize?: number
  trailLength?: number
}

export function BlobCursor({
  blobColor = 'rgba(6, 182, 212, 0.4)',
  blobSize = 40,
  trailLength = 15,
}: BlobCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const pointsRef = useRef<{ x: number; y: number }[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    for (let i = 0; i < trailLength; i++) {
      pointsRef.current.push({ x: 0, y: 0 })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pointsRef.current[0] = {
        x: pointsRef.current[0].x + (mouseRef.current.x - pointsRef.current[0].x) * 0.3,
        y: pointsRef.current[0].y + (mouseRef.current.y - pointsRef.current[0].y) * 0.3,
      }

      for (let i = 1; i < pointsRef.current.length; i++) {
        pointsRef.current[i] = {
          x: pointsRef.current[i].x + (pointsRef.current[i - 1].x - pointsRef.current[i].x) * 0.3,
          y: pointsRef.current[i].y + (pointsRef.current[i - 1].y - pointsRef.current[i].y) * 0.3,
        }
      }

      ctx.beginPath()
      ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y)

      for (let i = 1; i < pointsRef.current.length - 2; i++) {
        const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2
        const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2
        ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc)
      }

      const gradient = ctx.createRadialGradient(
        pointsRef.current[0].x,
        pointsRef.current[0].y,
        0,
        pointsRef.current[0].x,
        pointsRef.current[0].y,
        blobSize * 2
      )
      gradient.addColorStop(0, blobColor)
      gradient.addColorStop(1, 'transparent')

      ctx.strokeStyle = blobColor
      ctx.lineWidth = blobSize / 2
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(pointsRef.current[0].x, pointsRef.current[0].y, blobSize, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [blobColor, blobSize, trailLength])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'lighten' }}
    />
  )
}
