/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(230 15% 8%)",
        foreground: "hsl(0 0% 98%)",
        muted: "hsl(230 10% 18%)",
        accent: "hsl(252 92% 62%)",
        accent2: "hsl(200 98% 61%)"
      },
      boxShadow: {
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "glow-radial": "radial-gradient(600px 400px at var(--glow-x, 70%) -10%, rgba(99,102,241,0.25), rgba(99,102,241,0) 60%)",
        "grid": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "24px 24px, 24px 24px"
      }
    }
  },
  plugins: [],
}
