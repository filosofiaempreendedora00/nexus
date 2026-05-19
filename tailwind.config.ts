import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#06070A",
          900: "#0A0B0F",
          800: "#0F1116",
          700: "#15171F",
          600: "#1C1F28",
          500: "#262934",
          400: "#3A3D49",
        },
        accent: {
          violet: "#7C5CFF",
          indigo: "#5B6CFF",
          cyan: "#5EE7FF",
          mint: "#7BFFB0",
          amber: "#FFB86B",
          rose: "#FF6B9D",
        },
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(124,92,255,0.18) 0%, rgba(10,11,15,0) 60%)",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.6)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -20px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "150% 0" },
          "100%": { backgroundPosition: "-150% 0" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "scan": "scan 6s linear infinite",
        "drift": "drift 12s ease-in-out infinite",
        "shimmer": "shimmer 4.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
