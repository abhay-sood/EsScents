/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure Tailwind applies styles to your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
