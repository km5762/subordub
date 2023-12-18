import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pink: {
        100: "#FF4D6D",
        200: "#ff839b",
        300: "#ffedff",
      },
      rose: {
        100: "#FFAFCC",
        200: "#98516d",
      },
      white: {
        100: "#FFFFFF",
        200: "#e0e0e0",
      },
      gray: {
        100: "#1A1A1A",
        200: "#292929",
        300: "#404040",
      },
    },
  },
  plugins: [],
};
export default config;
