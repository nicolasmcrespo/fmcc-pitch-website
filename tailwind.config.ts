import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        muted: {
          DEFAULT: '#a1a1aa',
          dark: '#71717a',
          darker: '#52525b',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#00d4ff',
        },
        purple: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
        },
        pink: {
          DEFAULT: '#ec4899',
          light: '#f472b6',
        },
        green: {
          DEFAULT: '#10b981',
          light: '#34d399',
        },
        yellow: {
          DEFAULT: '#fbbf24',
          dark: '#f59e0b',
        },
        orange: {
          DEFAULT: '#f97316',
        },
        blue: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
        },
        red: {
          DEFAULT: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
        'gradient-purple': 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
        'gradient-green': 'linear-gradient(135deg, #d4fc79, #96e6a1)',
        'gradient-pink': 'linear-gradient(135deg, #f093fb, #f5576c)',
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4, #00d4ff)',
        'gradient-yellow': 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        'gradient-blue': 'linear-gradient(90deg, #3b82f6, #60a5fa)',
        'card-bg': 'linear-gradient(135deg, rgba(30, 30, 40, 0.8), rgba(20, 20, 30, 0.9))',
        'hero-radial': 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        'vision-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.05))',
      },
    },
  },
  plugins: [],
}

export default config
