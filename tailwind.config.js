/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      // Lägger in egna färger och typsnitt
      colors: {
        primary: {
          'dark': '#0A3231',
          'mid': '#1D6D67',
          'light': '#B5DAD7',
        },
        cta: {
          'dark': '#3DC3A0',
          'mid': '#83FFD3',
        },
        'light-grey': '#F7FAF4'
      }, 
      fontFamily: {
      'display': ['Archivo', 'sans'],
      'body': ['Inter', 'sans'],
      },
      // Anpassar borderRadius efter mina önskemål
      borderRadius: {
        'image-lg': '60px',
        'image-md': '40px'
      }
    },
  },
  plugins: [],
}

