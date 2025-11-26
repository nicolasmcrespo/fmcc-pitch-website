'use client'

const phases = [
  {
    title: 'Año 1-2: Establecimiento',
    color: 'text-yellow',
    items: [
      'Lanzamiento del festival principal',
      'Construcción del hub de creadores',
      'Radicación de 50+ creadores',
      '25K visitantes en el primer festival',
      '$1.2M impacto económico',
    ],
  },
  {
    title: 'Año 3-4: Consolidación',
    color: 'text-pink',
    items: [
      'Expansión a eventos regionales',
      '150+ creadores en el ecosistema',
      'Partnerships internacionales',
      '50K visitantes anuales',
      '$2.5M impacto económico',
    ],
  },
  {
    title: 'Año 5+: Liderazgo',
    color: 'text-orange',
    items: [
      'Referente latinoamericano',
      '300+ creadores establecidos',
      'Hub tecnológico consolidado',
      '100K+ visitantes anuales',
      '$5M+ impacto económico',
    ],
  },
]

export function GrowthProjections() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="bg-vision-gradient rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Proyecciones de Crecimiento (2025-2030)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {phases.map((phase) => (
            <div key={phase.title}>
              <h4 className={`text-lg font-semibold ${phase.color} mb-4`}>{phase.title}</h4>
              <ul className="space-y-2 text-muted">
                {phase.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
