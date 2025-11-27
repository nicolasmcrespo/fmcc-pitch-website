'use client'

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] px-8 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-xs font-bold">
            FMCC
          </div>
          <span className="font-bold text-xl text-cyan">FMCC</span>
        </div>

        <div className="text-center md:text-right">
          <p className="text-white font-semibold mb-2">Neyen Arjona</p>
          <p className="text-muted-dark text-sm">
            <a href="tel:+542616785052" className="hover:text-cyan transition-colors">
              2616 785052
            </a>
          </p>
          <p className="text-muted-dark text-sm">
            <a href="mailto:neyenarjona@gmail.com" className="hover:text-cyan transition-colors">
              neyenarjona@gmail.com
            </a>
          </p>
        </div>

        <div className="text-center md:text-right text-muted-dark text-sm">
          <p>&copy; 2025 FMCC - Festival Mendozino de Creadores de Contenido</p>
          <p>Mendoza, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
