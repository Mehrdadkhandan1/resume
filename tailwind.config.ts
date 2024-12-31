import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    fontSize: {
      "8": '8px',
      "10": '10px',
      "12": '12px',
      "14": '14px',
      "16": '16px',
      "18": "18px",
      "20": "20px",
      "24": "24px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#FCFCFC',
        white: '#E7EAEC',
        red: '#B90F48'
      },
      
    },

  },
  plugins: [nextui()],
} satisfies Config;
