/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0f172a',
        pacific: '#1e293b',
        skyMist: '#cbd5e1',
        emerald: '#10b981',
        coolGray: '#94a3b8',
      },
    },
  },
  plugins: [],
};
