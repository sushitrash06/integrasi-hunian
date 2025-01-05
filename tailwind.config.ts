import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "maroon-dark": "#A90003", 
        maroon: {
          100: "#FBEDEC",
          300: "#D59A9A",
          600: "#8C2D35",
          700: "#6B2026",
          800: "#501618",
        },
      },
    },
  },
  plugins: [],
};
export default config;
