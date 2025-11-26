'use client'

import { SectionTitle, SectionSubtitle } from '@/components/ui/SectionTitle'

const videos = [
  { title: 'FMCC Highlights', duration: '12:34', creator: 'FMCC Official', isLive: false },
  { title: 'Entrevista Exclusiva', duration: '', creator: 'FMCC Media', isLive: true },
  { title: 'Behind the Scenes', duration: '8:45', creator: 'FMCC Docs', isLive: false },
  { title: 'Panel de Expertos', duration: '45:20', creator: 'FMCC Events', isLive: false },
]

export function MultimediaSection() {
  return (
    <section id="multimedia" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionTitle gradient="cyan">Contenido Multimedia</SectionTitle>
      <SectionSubtitle>
        Explora nuestro contenido exclusivo, entrevistas y documentales sobre el ecosistema de creadores.
      </SectionSubtitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-purple/20"
          >
            <div className="relative h-44 bg-gradient-to-br from-[#2d1f4e] to-[#1a1a2e]">
              {video.isLive ? (
                <span className="absolute top-2.5 left-2.5 bg-red px-2.5 py-1 rounded text-xs font-semibold">
                  EN VIVO
                </span>
              ) : (
                <span className="absolute bottom-2.5 left-2.5 bg-black/80 px-2 py-1 rounded text-xs">
                  {video.duration}
                </span>
              )}
            </div>
            <div className="p-4">
              <h4 className="font-semibold mb-1">{video.title}</h4>
              <span className="text-muted-dark text-sm">{video.creator}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
