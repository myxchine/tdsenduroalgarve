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
        //tdsRed: "#AB1400", // Add your custom color hex code here
        //tdsRed: "#A30B1D",
        tdsRed: "#F21C00",

        primary: "#F21C00",
        secondary: "#F21C00",
        accent: "#F4C430",
        background: "#fff",
        foreground: "#000",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        tds: ["var(--font-tds)"],
      },
    },
  },
  plugins: [],
};
export default config;
