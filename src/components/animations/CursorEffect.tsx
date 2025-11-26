'use client'

import { useEffect, useState } from 'react'
import { BlobCursor } from './BlobCursor'

export function CursorEffect() {
  const [isMounted, setIsMounted] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 768 && !('ontouchstart' in window))
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  if (!isMounted || !isDesktop) return null

  return <BlobCursor blobColor="rgba(6, 182, 212, 0.35)" blobSize={35} trailLength={12} />
}
