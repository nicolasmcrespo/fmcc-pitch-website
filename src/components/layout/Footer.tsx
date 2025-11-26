'use client'

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] px-8 py-8 flex justify-between items-center border-t border-white/10">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-xs font-bold">
          FMCC
        </div>
        <span className="font-bold text-xl text-cyan">FMCC</span>
      </div>
      <div className="text-right text-muted-dark text-sm">
        <p>&copy; 2025 FMCC - Festival Mendozino de Creadores de Contenido</p>
        <p>Mendoza, Argentina</p>
      </div>
    </footer>
  )
}
