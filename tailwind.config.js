/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#07070d", 900: "#0b0b14", 800: "#11111d", 700: "#1a1a2b" },
        line: "#23233a",
        accent: { DEFAULT: "#6366f1", soft: "#818cf8", glow: "#a5b4fc" },
        mint: "#34d399",
      },
      fontFamily: {
        display: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
