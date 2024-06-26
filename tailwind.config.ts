import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'bounce-delayed': 'bounce 4s linear infinite',
        'bounce-veryslow': 'bounce 5s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
  daisyui: {
    themes: [],
  }
};
export default config;
