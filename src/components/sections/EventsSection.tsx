'use client'

import { Card } from '@/components/ui/Card'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'

export function EventsSection() {
  return (
    <section id="eventos" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionTitle gradient="green">Eventos y Actividades</SectionTitle>
      <SectionSubtitle>
        Una programación completa durante todo el año con eventos presenciales y virtuales que conectan creadores, marcas y audiencias.
      </SectionSubtitle>

      {/* Main Festival Card */}
      <div className="bg-card-bg rounded-2xl overflow-hidden border border-purple/30 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
            alt="Festival"
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">Festival Principal FMCC</h3>
            <p className="text-muted mb-6">
              El evento central del ecosistema: 3 días intensivos de contenido, networking y entretenimiento que reúne a los principales creadores de contenido de Latinoamérica en Mendoza.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-extrabold text-cyan">3 Días</div>
                <div className="text-muted-dark text-sm">Duración del evento</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-green-light">50+</div>
                <div className="text-muted-dark text-sm">Creadores invitados</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-cyan">25K+</div>
                <div className="text-muted-dark text-sm">Asistentes esperados</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-green-light">10M+</div>
                <div className="text-muted-dark text-sm">Alcance digital</div>
              </div>
            </div>
            <ul className="space-y-1 text-muted-dark text-sm">
              <li>• Shows en vivo y presentaciones exclusivas</li>
              <li>• Meet & greets con creadores destacados</li>
              <li>• Experiencias inmersivas y activaciones de marca</li>
              <li>• Transmisión en vivo multiplataforma</li>
              <li>• Zona de gaming y esports</li>
              <li>• Food court con gastronomía mendocina</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Secondary Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          borderColor="cyan"
          title="Workshops y Capacitaciones"
          description="Programas mensuales de formación especializada"
          imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
          imageAlt="Workshops"
          items={[
            'Masterclasses con expertos internacionales',
            'Talleres de producción audiovisual',
            'Seminarios de monetización y business',
            'Cursos de marketing digital y branding',
            'Workshops de nuevas tecnologías (AR/VR)',
          ]}
        />
        <Card
          borderColor="purple"
          title="Eventos de Networking"
          description="Conexiones estratégicas entre creadores y marcas"
          imageUrl="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600"
          imageAlt="Networking"
          items={[
            'Speed networking con marcas y sponsors',
            'Cenas exclusivas para creadores VIP',
            'Pitch sessions para nuevos proyectos',
            'Colaboraciones y partnerships',
            'Eventos temáticos por vertical de contenido',
          ]}
        />
      </div>
    </section>
  )
}
