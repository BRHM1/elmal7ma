/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kufam: ["Kufam", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        gmono: ["Geist Mono", "monospace"],
        square: ["Nova Square", "serif"],
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

