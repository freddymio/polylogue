/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#e3edf7',    // Fondo general
        surface: '#f5f9fc',       // Elementos UI (tarjetas)
        shadowDark: '#c8d0e7',    // Sombra oscura
        shadowLight: '#ffffff',   // Sombra clara
        primary: '#4f46e5',       // Azul vibrante
        neutralBorder: '#dee3f0', // Bordes
        foreground: '#444444',    // Texto general
      },
      boxShadow: {
        neu: '8px 8px 16px #c8d0e7, -8px -8px 16px #ffffff',
        neuInset: 'inset 8px 8px 16px #c8d0e7, inset -8px -8px 16px #ffffff',
      },
    },
  },
  plugins: [],
}
