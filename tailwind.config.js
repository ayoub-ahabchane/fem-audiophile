/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/storybook/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/storybook/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        input: [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1em",
            letterSpacing: "-0.0178em",
          },
        ],
        label: [
          "0.75rem",
          {
            lineHeight: "1em",
            letterSpacing: "-0.0175em",
            fontWeight: "700",
          },
        ],
        controls: [
          "0.8125rem",
          {
            lineHeight: "1.36em",
            letterSpacing: "0.0769em",
            fontWeight: "700",
          },
        ],
        navLink: [
          "0.8125rem",
          {
            lineHeight: "1.36em",
            letterSpacing: "0.1538em",
            fontWeight: "700",
          },
        ],
        subtitle: [
          "0.8125rem",
          {
            lineHeight: "1.923em",
            letterSpacing: "0.0769em",
            fontWeight: "700",
          },
        ],
        overline: [
          "0.875rem",
          {
            lineHeight: "1.357em",
            letterSpacing: "0.714em",
            fontWeight: "400",
          },
        ],
        body: [
          "0.9375rem",
          {
            lineHeight: "1.66em",
            fontWeight: "500",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.33em",
            letterSpacing: "0.072em",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "0.072em",
            fontWeight: "700",
          },
        ],
        h4: [
          "1.75rem",
          {
            lineHeight: "1.357em",
            letterSpacing: "0.071em",
            fontWeight: "700",
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "1.125em",
            letterSpacing: "0.0359em",
            fontWeight: "700",
          },
        ],

        h2: [
          "2.5rem",
          {
            lineHeight: "1.1em",
            letterSpacing: "0.0375em",
            fontWeight: "700",
          },
        ],
        h1: [
          "3.5rem",
          {
            lineHeight: "1.0357em",
            letterSpacing: "0.0357em",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        "adp-tangerine-400": "#D87D4A",
        "adp-tangerine-300": "#fbaf85",
        "adp-slate-200": "#FAFAFA",
        "adp-slate-300": "#F1F1F1",
        "adp-slate-400": "#CFCFCF",
        "adp-slate-500": "#979797",
        "adp-slate-800": "#101010",
        "adp-copy-black": "#000000",
        "adp-copy-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
