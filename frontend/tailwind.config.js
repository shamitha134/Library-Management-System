/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "#10b981",
        background: "#f3f4f6",
        bhover: "#e5e7eb",
        text: "#52525b",
        error: "#ef4444",
      },
    },
  },
  plugins: [],
};
