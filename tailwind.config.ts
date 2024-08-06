import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{png,jpg,svg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "done": "url('/done.png')",
        "photo": "url('/photo.png')",
        "notifications": "url('/bell.png')",
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.25) 0px 2px 10px',
      },
    },
  },
  plugins: [],
};
export default config;
