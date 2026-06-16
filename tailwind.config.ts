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
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        accent: {
          DEFAULT: "var(--color-accent)",
          2: "var(--color-accent-2)",
        },
        text: {
          1: "var(--color-text-1)",
          2: "var(--color-text-2)",
          3: "var(--color-text-3)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-cta": "var(--gradient-cta)",
      },
    },
  },
  plugins: [],
};
export default config;
