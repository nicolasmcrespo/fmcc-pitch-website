'use client'

import { Card } from '@/components/ui/Card'
import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations'

export function EventsSection() {
  return (
    <section id="eventos" className="py-20 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <SectionTitle gradient="green">Eventos y Actividades</SectionTitle>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionSubtitle>
          Una programación completa durante todo el año con eventos presenciales que conectan creadores, marcas y audiencias.
        </SectionSubtitle>
      </FadeIn>

      {/* Main Festival Card */}
      <FadeIn delay={0.2}>
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
                El evento central del ecosistema: 1 día intensivo de contenido, networking y entretenimiento que reúne a los principales creadores de contenido de Argentina en Mendoza.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-extrabold text-cyan">1 Día</div>
                  <div className="text-muted-dark text-sm">Duración del evento</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-green-light">300+</div>
                  <div className="text-muted-dark text-sm">Creadores invitados</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-cyan">10K+</div>
                  <div className="text-muted-dark text-sm">Asistentes esperados</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-green-light">10M+</div>
                  <div className="text-muted-dark text-sm">Alcance digital</div>
                </div>
              </div>
              <ul className="space-y-1 text-muted-dark text-sm">
                <li>• Shows en vivo y presentaciones exclusivas</li>
                <li>• Paneles de charlas con creadores destacados</li>
                <li>• Meet & greets con creadores destacados</li>
                <li>• Experiencias inmersivas y activaciones de marca</li>
                <li>• Contenido filmográfico del evento</li>
                <li>• Zona recreativa y diversión</li>
                <li>• Food court con gastronomía mendocina</li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Secondary Events */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" staggerDelay={0.15}>
        <StaggerItem>
          <Card
            borderColor="cyan"
            title="Workshops y Capacitaciones"
            description="Programas de formación especializada"
            imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"
            imageAlt="Workshops"
            items={[
              'Masterclasses con expertos nacionales',
              'Talleres de producción audiovisual',
              'Seminarios de monetización y business',
              'Cursos de marketing digital y branding',
            ]}
          />
        </StaggerItem>
        <StaggerItem>
          <Card
            borderColor="purple"
            title="Eventos de Networking"
            description="Conexiones estratégicas entre creadores y marcas"
            imageUrl="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600"
            imageAlt="Networking"
            items={[
              'Speed networking con marcas y sponsors',
              'Pitch sessions para nuevos proyectos',
              'Colaboraciones y partnerships',
              'Eventos temáticos por vertical de contenido',
            ]}
          />
        </StaggerItem>
      </StaggerContainer>

      {/* Annual Calendar */}
      <FadeIn delay={0.3}>
        <div className="bg-card-bg rounded-2xl p-8 border border-cyan/30">
          <h3 className="text-2xl font-bold text-center mb-8">Calendario Anual de Eventos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-dark-lighter rounded-xl">
              <div className="text-3xl font-extrabold text-yellow mb-2">Febrero</div>
              <div className="text-white font-semibold mb-2">Evento Principal</div>
              <p className="text-muted-dark text-sm">Festival FMCC con creadores, marcas y experiencias inmersivas</p>
            </div>
            <div className="text-center p-6 bg-dark-lighter rounded-xl">
              <div className="text-3xl font-extrabold text-pink mb-2">Abril - Mayo</div>
              <div className="text-white font-semibold mb-2">Workshops Especializados</div>
              <p className="text-muted-dark text-sm">Capacitaciones intensivas en creación de contenido y monetización</p>
            </div>
            <div className="text-center p-6 bg-dark-lighter rounded-xl">
              <div className="text-3xl font-extrabold text-cyan mb-2">Sept - Oct</div>
              <div className="text-white font-semibold mb-2">Conferencias y Meetups</div>
              <p className="text-muted-dark text-sm">Encuentros dedicados para networking y colaboración</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
