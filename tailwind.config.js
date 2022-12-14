module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      "theme-f1": ['"Oswald"', "sans-serif"],
      "theme-f2": ['"Lora"', "serif"],
      "theme-f3": ['"Bebas Kai"', "sans-serif"],
      "theme-f4": ['"Open Sans"', "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [],
};
