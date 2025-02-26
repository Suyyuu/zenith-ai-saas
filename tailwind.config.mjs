/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgb(8, 9, 10) 30%, transparent 100%), linear-gradient(to right, transparent 20%, rgb(8, 9, 10) 100%)',
        'productTab': 'url(/b4.png)'
      },
      backgroundSize: {
        'custom-gradient-size': '100% 100%, 100% 100%',
      },
      fontFamily: {
        'host-grotesk': ['Host Grotesk', 'sans-serif'],
        'Satoshi': ['Satoshi'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      objectPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
      },
      minWidth: {
        '810': '810px',
      },
      maxWidth: {
        '1199': '1199px',
      },
      screens: {
        'custom': { 'min': '810px', 'max': '1199px' },
        'custom2': { 'min': '300px', 'max': '426px' },
        'tab': { 'min': '426px', 'max': '808px' },
        'tabPlus': { 'min': '810px', 'max': '2048px' },
        'mobiles': { 'min': '300px', 'max': '809px' },
        '4k': { 'min': '2049px', 'max': '6000px' },
      },
    },
  },
  plugins: [],
};
