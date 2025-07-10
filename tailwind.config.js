/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          light: '#7F9CF5',
          DEFAULT: '#5A67D8',
          dark: '#434190',
        },
        accent: {
          light: '#F687B3',
          DEFAULT: '#ED64A6',
          dark: '#B83280',
        },
        gradientFrom: '#6366F1', // Indigo-500
        gradientTo: '#A78BFA',   // Purple-400
      },
    },
  },
  plugins: [],
};
