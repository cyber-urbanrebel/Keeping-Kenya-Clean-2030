import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canopy: "#14532d",
        moss: "#1d8348",
        limeMist: "#d7f5d1",
        lake: "#0f766e",
        ember: "#f97316",
        earth: "#6b4f2c",
        mist: "#eefbf4"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(10, 59, 33, 0.12)"
      },
      backgroundImage: {
        bloom: "radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.28), transparent 28%), radial-gradient(circle at 90% 10%, rgba(20, 184, 166, 0.22), transparent 24%), linear-gradient(180deg, #f8fff9 0%, #f4fff6 45%, #effdf4 100%)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(34,197,94,0.0)" },
          "50%": { boxShadow: "0 0 36px rgba(34,197,94,0.22)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
