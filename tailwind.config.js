/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: " rgba(157, 255, 80, 1)",
        inherit: "rgba(0, 0, 0, 0.397)",
        backImg: "rgba(255, 255, 255, 1)",
        italy: "rgb(30, 30, 30)",
        foggy: "rgba(255, 255, 255, 0.418)",
        blacc: "rgba(34, 34, 34, 1)",
        ingrey: "rgba(130, 130, 130, 1)",
        lights:"rgba(0, 0, 0, 0.63)",

      },
      boxShadow: {
        custom: "-4px -6px 0px 0px rgba(0, 0, 0, 0.3) inset",
        customInset: "-5px -10px 20px 0px rgba(0, 0, 0, 0.25) inset",
      },
    },
  },
  plugins: [],
};
