/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind 应用范围
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem']
      }
    },
    // 白色阴影
    boxShadow: {
      'l-white': '-10px 0 10px white'
    },
    height: {
      header: '72px',
      main: 'calc(100vh - 72px)'
    }
  },
  plugins: [],
}
