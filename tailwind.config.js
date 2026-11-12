/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./INDEX.HTML', './**/*.html', './**/*.js'],
  theme: {
    extend: {
      colors: {
        tarpPurple: '#8131d9',
        tarpDeepPurple: '#4A148C',
        tarpDarkPurple: '#2d0859',
        tarpYellow: '#ffea38',
        tarpBlue: '#1b3b8c',
        tarpCyan: '#00f0ff',
      },
      fontFamily: {
        fredoka: ['"Fredoka One"', 'cursive', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

