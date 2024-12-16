/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': 'linear-gradient(to top, #5ea8c2, #6db9bd, #8cc7b7, #b0d3b4, #d4ddb9, #dad7b3, #dfd0b0, #e2caaf, #cdb398, #b89c83, #a4866d, #907159)',
      },
      colors: {
        'l-blue': '#5EA8C2',
        'l-brown': '#7C3000',
        'l-beige': '#FFEACE',
        'ls-brown': '#907159',
      },
    },
  },
  plugins: [],
}

