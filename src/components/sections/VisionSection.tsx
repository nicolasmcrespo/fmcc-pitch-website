'use client'

export function VisionSection() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="bg-vision-gradient rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Visión Integral del Proyecto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-yellow mb-6">Objetivos Estratégicos</h3>
            <ul className="space-y-3 text-muted">
              <li>• Posicionar a Mendoza como capital latinoamericana de creación de contenido digital</li>
              <li>• Crear un ecosistema sostenible que beneficie a creadores, marcas y la economía local</li>
              <li>• Desarrollar infraestructura tecnológica de vanguardia para la industria del entretenimiento</li>
              <li>• Fomentar la innovación y el emprendimiento en el sector digital</li>
              <li>• Generar oportunidades de empleo calificado para jóvenes profesionales</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-pink mb-6">Componentes del Ecosistema</h3>
            <ul className="space-y-3 text-muted">
              <li>• Festival anual con alcance internacional y transmisión global</li>
              <li>• Hub permanente de creadores con facilidades de primer nivel</li>
              <li>• Programa de radicación con incentivos fiscales y económicos</li>
              <li>• Plataforma educativa para formación de nuevos talentos</li>
              <li>• Red de colaboración con marcas, sponsors y medios internacionales</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
