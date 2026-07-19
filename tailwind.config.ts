import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#05070d",
          900: "#0b0f1a",
        },
        ink: "#eef1f5",
        mute: "#a9b3c2",
        traveler: "#e8dcc0",
        cyan: {
          traveler: "#7ecbff",
        },
        darkness: "#5b3a86",
        exotic: "#ceae33",
        arc: "#4fc3f7",
        solar: "#ff9800",
        voidcolor: "#b388ff",
        stasis: "#6c7bff",
        strand: "#6bff9e",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "prismatic-gradient":
          "linear-gradient(90deg, #4fc3f7, #ff9800, #b388ff, #6c7bff, #6bff9e)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
