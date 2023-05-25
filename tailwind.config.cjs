const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // ...
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
};
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brightOrange: "#FF470A",
        mildOrange: "#D14836",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', ...defaultTheme.fontFamily.sans],
        body: ['"Josefin Sans Variable"', '"Josefin Sans"'],
      },
    },
  },
  plugins: [],
};
