const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const { blackA, mauve, violet, indigo, purple } = require("@radix-ui/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "IBM Plex Sans",
          "IBM Plex Sans Fallback",
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          "IBM Plex Mono",
          "IBM Plex Mono Fallback",
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        ...colors,
        ...blackA,
        ...mauve,
        ...violet,
        ...indigo,
        ...purple,
        transparentWhite: "rgba(255, 255, 255, 0.08)",
        navigationHeight: "var(--navigation-height)",
        containerSize: "var(--container-size)",
      },
      spacing: {
        "navigation-height": "var(--navigation-height)",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.5s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.5s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.5s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-shadow": {
          textShadow: "rgb(0 0 0 / 56%) 0px 3px 12px",
        },
        ".slide-center": {
          transform:
            "translateX(calc(max(var(--container-size), 100vw) / 2 - calc(var(--container-size) / 2)))",
        },
        ".text-gradient": {
          background:
            "linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))",
          backgroundClip: "text",
          color: "transparent",
        },
        ".bg-page-gradient": {
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 15%), transparent)",
        },
        ".bg-hero-gradient": {
          background:
            "radial-gradient(ellipse 50% 80% at 50% -20%, hsl(var(--primary) / 15%), transparent)",
        },
        ".bg-hero-glow": {
          background:
            "radial-gradient(ellipse 50% 80% at 50% -20%, hsl(var(--primary) / 25%), transparent)",
        },
        ".bg-primary-gradient": {
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
        },
      });
    }),
  ],
};


