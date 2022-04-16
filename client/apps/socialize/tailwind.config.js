module.exports = {
  content: [
    "apps/socialize/pages/**/*.{js,ts,jsx,tsx}",
    "apps/socialize/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}