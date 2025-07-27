// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
        saira: ["var(--font-saira-condensed)"],
        bebas: ["var(--font-bebas-neue)"],
        pixel: ["var(--font-pixelify-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
