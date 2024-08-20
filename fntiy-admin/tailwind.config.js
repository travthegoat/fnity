/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            "sidebar-bg": "#1a2e35",
            "light-white": "rgba(255,255,255,0.17)",
            "body-bg": "#e3e0d7",
        }
      },
    },
    plugins: [],
  }