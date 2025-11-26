'use client'

import { Button } from '@/components/ui/Button'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'

const radioStats = [
  { value: '24/7', label: 'Transmisión continua', color: 'text-cyan' },
  { value: '50K+', label: 'Oyentes mensuales', color: 'text-purple-light' },
  { value: '100+', label: 'Programas exclusivos', color: 'text-yellow' },
]

export function RadioSection() {
  return (
    <section id="radio" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionTitle gradient="purple">FMCC Radio</SectionTitle>
      <SectionSubtitle>
        La estación oficial del ecosistema de creadores con contenido exclusivo las 24 horas.
      </SectionSubtitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="relative h-72 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600"
            alt="Radio Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-2xl font-bold mb-2">Estudio Principal</h3>
            <p className="text-muted">Transmisiones en vivo desde Mendoza</p>
          </div>
        </div>
        <div className="relative h-72 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
            alt="Podcast Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-2xl font-bold mb-2">Estudio Podcast</h3>
            <p className="text-muted">Grabaciones profesionales para creadores</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-16 my-8">
        {radioStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-muted text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="primary">Escuchar en Vivo</Button>
        <Button variant="secondary">Ver Programación</Button>
      </div>
    </section>
  )
}
