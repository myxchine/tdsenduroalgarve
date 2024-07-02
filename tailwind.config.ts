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
        tdsRed: "#F21C00", // Add your custom color hex code here
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
