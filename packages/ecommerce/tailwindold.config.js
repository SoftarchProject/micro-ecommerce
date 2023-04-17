/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/App.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      container: false,
      fontFamily: {
        basier: ['basier'],
        chistoso: ['chistoso'],
      }
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffff',
      'red': '#ff0000',
      'blue-dark': '#1C3D5A',
    },
    fontFamily: {
      sans: ['Prompt', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      prompt: ['"Prompt"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}


