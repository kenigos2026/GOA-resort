import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Biophilic Luxury Palette
        ivory: "#FDFAF4",
        "forest-mist": "#F2F5F0",
        "deep-forest": "#1A2518",
        "warm-stone": "#6B6856",
        verdant: "#3D7A5C",
        "verdant-dark": "#2D5E44",
        "warm-gold": "#C9A84C",
        "warm-gold-light": "#D4B85C",
        terracotta: "#D4845A",
        "terracotta-light": "#E09A72",
        sage: "#A8B5A0",
        "sage-light": "#C5CFC0",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        lora: ["var(--font-lora)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(3rem, 5vw, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.5rem, 4vw, 4.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(2rem, 3vw, 3rem)", { lineHeight: "1.2" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-left": "slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right": "slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ken-burns": "kenBurns 8s ease-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "scroll-indicator": "scrollIndicator 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        scrollIndicator: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.5" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        600: "600ms",
        800: "800ms",
        1000: "1000ms",
        1200: "1200ms",
      },
    },
  },
  plugins: [],
};
export default config;
