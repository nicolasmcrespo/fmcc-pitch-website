'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'

export function VisionSection() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <FadeIn>
        <motion.div
          className="bg-vision-gradient rounded-3xl p-12"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Visión Integral del Proyecto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <FadeIn delay={0.2} direction="left">
              <div>
                <h3 className="text-xl font-semibold text-yellow mb-6">Objetivos Estratégicos</h3>
                <ul className="space-y-3 text-muted">
                  <li>• Posicionar a Mendoza como referente nacional de creación de contenido digital</li>
                  <li>• Crear un ecosistema sostenible que beneficie a creadores, marcas y la economía local</li>
                  <li>• Fomentar la innovación y el emprendimiento en el sector digital</li>
                  <li>• Generar oportunidades de empleo para jóvenes profesionales</li>
                  <li>• Conectar creadores de contenido con marcas de manera directa</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="right">
              <div>
                <h3 className="text-xl font-semibold text-pink mb-6">Componentes del Ecosistema</h3>
                <ul className="space-y-3 text-muted">
                  <li>• Festival anual con alcance nacional</li>
                  <li>• Hub de creadores para networking y colaboración</li>
                  <li>• Plataforma educativa para formación de nuevos talentos</li>
                  <li>• Red de colaboración con marcas y sponsors</li>
                  <li>• Creadores produciendo contenido para marcas del evento</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  )
}
