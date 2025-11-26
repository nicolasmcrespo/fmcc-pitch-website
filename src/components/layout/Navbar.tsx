'use client'

const navLinks = [
  { href: '#', label: 'Inicio', active: true },
  { href: '#proyecto', label: 'Proyecto' },
  { href: '#eventos', label: 'Eventos' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md px-8 py-4 flex justify-between items-center z-50 border-b border-white/10">
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-xs font-bold">
          FMCC
        </div>
        <span className="font-bold text-xl text-cyan">FMCC</span>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                link.active ? 'text-cyan' : 'text-muted hover:text-cyan'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
