/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{ts,tsx}', 
      './pages/**/*.{ts,tsx}', 
      './components/**/*.{ts,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          quicksand: ['var(--font-quicksand)'],
          mystery: ['var(--font-mystery)'],
          pixel: ['var(--font-pixel)'],
          geist: ['var(--font-geist-sans)'],
          mono: ['var(--font-geist-mono)'],
        },
      },
    },
    plugins: [],
  };
  