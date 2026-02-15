/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {
      colors: {
        navy: {
          950: '#020617',
          900: '#0A2540',
          800: '#0f172a',
          700: '#1E3A5F',
          600: '#1e293b',
          500: '#2E4A6F',
          400: '#334155',
          100: '#e2e8f0',
        },
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
        'gradient-brand-subtle': 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(16, 185, 129, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(5, 150, 105, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(4, 120, 87, 0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(16, 185, 129, 0.15)',
        'glass-lg': '0 12px 48px 0 rgba(16, 185, 129, 0.2)',
        'brand': '0 10px 30px -5px rgba(16, 185, 129, 0.3)',
        'brand-lg': '0 20px 50px -10px rgba(16, 185, 129, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1e293b',
            a: {
              color: '#059669',
              '&:hover': {
                color: '#047857',
              },
            },
          },
        },
        invert: {
          css: {
            color: '#cbd5e1',
            a: {
              color: '#34d399',
              '&:hover': {
                color: '#6ee7b7',
              },
            },
            h1: {
              color: '#f1f5f9',
            },
            h2: {
              color: '#f1f5f9',
            },
            h3: {
              color: '#f1f5f9',
            },
            h4: {
              color: '#f1f5f9',
            },
            strong: {
              color: '#e2e8f0',
            },
            code: {
              color: '#34d399',
            },
            blockquote: {
              color: '#cbd5e1',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
