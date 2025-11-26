'use client'

import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-16 px-8 bg-hero-radial">
      <h1 className="text-6xl md:text-8xl font-extrabold gradient-text-hero mb-4">
        FMCC 2025
      </h1>
      <p className="text-xl md:text-2xl text-muted max-w-2xl mb-8">
        Festival Mendozino de Creadores de Contenido - El ecosistema más innovador para creadores digitales de Latinoamérica
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Button variant="primary" href="#proyecto">Conocer Más</Button>
        <Button variant="secondary" href="#documentos">Ver Proyecto</Button>
      </div>
    </section>
  )
}
