import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|form|input|modal|navbar|ripple|spinner).js"
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
      "28": "28px",
      "32": "32px",
      "36": "36px",
    },
    container: {
      center: true,
    },
    
    extend: {
      boxShadow : {
        'custom' : "0px 0px 15px -6px rgba(0,0,0,0.75)",
        'blub' : "1px -1px 200px 200px #a855f7",
      },
      colors: {
        primary: '#FCFCFC',
        white: '#E7EAEC',
        red: '#B90F48'
      },
      
    },

  },
  plugins: [nextui()],
} satisfies Config;
