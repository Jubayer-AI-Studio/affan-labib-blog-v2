/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#FAF8F5',
          surface: '#FFFFFF',
          text: '#111827', // Deep crisp black for crystal clear readability
          muted: '#4B5563', // High contrast slate for readable subtext
          border: '#E5E7EB',
          borderLight: '#F3F4F6',
          accent: '#9A3412', // Warm Terracotta / পোড়ামাটি
          accentHover: '#7C2D12',
          tagBg: '#F3F4F6',
        },
        sepia: {
          bg: '#FBF0D9',
          surface: '#F5E6CA',
          text: '#2D241E',
          muted: '#5C4A3A',
          border: '#E2CEAA',
          borderLight: '#EFE1C8',
          accent: '#8C4E1A',
          accentHover: '#703D12',
          tagBg: '#EDE0C4',
        },
        night: {
          bg: '#141416',
          surface: '#1D1D21',
          text: '#EDE8E1',
          muted: '#9CA3AF',
          border: '#2C2C33',
          borderLight: '#24242A',
          accent: '#FB923C',
          accentHover: '#F97316',
          tagBg: '#27272E',
        },
      },
      fontFamily: {
        serif: ['"Hind Siliguri"', 'Kalpurush', '"Noto Serif Bengali"', 'SolaimanLipi', 'Georgia', 'serif'],
        sans: ['"Hind Siliguri"', 'Inter', 'system-ui', 'sans-serif'],
        brand: ['"Hind Siliguri"', 'Kalpurush', 'serif'],
        arabic: ['Amiri', '"Scheherazade New"', '"Traditional Arabic"', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            color: '#2C2825',
            lineHeight: '1.85',
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '1.125rem',
            p: {
              marginTop: '1.4em',
              marginBottom: '1.4em',
              textAlign: 'justify',
            },
            h1: {
              color: '#1C1917',
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '700',
              lineHeight: '1.3',
            },
            h2: {
              color: '#1C1917',
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              marginTop: '2em',
              marginBottom: '0.8em',
            },
            h3: {
              color: '#292524',
              fontFamily: theme('fontFamily.serif').join(', '),
              fontWeight: '600',
              marginTop: '1.6em',
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftColor: '#9A3412',
              borderLeftWidth: '3px',
              backgroundColor: '#F5EFE6',
              padding: '1rem 1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              color: '#44403C',
            },
          },
        },
        invert: {
          css: {
            color: '#EDE8E1',
            p: {
              color: '#EDE8E1',
            },
            h1: { color: '#FAFAF9' },
            h2: { color: '#F5F5F4' },
            h3: { color: '#E7E5E4' },
            blockquote: {
              borderLeftColor: '#FB923C',
              backgroundColor: '#23232A',
              color: '#D6D3D1',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
