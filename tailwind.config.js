/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}

