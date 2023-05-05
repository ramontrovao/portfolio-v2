/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        typescript: "url('/assets/typescript.svg')",
        "next-js": "url('/assets/next-js.svg')",
        react: "url('/assets/react.svg')",
        tailwind: "url('/assets/tailwind.svg')",
        nodejs: "url('/assets/nodejs.svg')",
      },
    },
  },
};
