/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',  // Default padding for all screen sizes
        sm: '0.2rem',       // Padding for screens >= 640px (sm)
        md: '1.5rem',     // Padding for screens >= 768px (md)
        lg: '3rem',       // Padding for screens >= 1024px (lg)
        xl: '4rem',       // Padding for screens >= 1280px (xl)
        '2xl': '5rem',    // Padding for screens >= 1536px (2xl)
      },
    },
  },
  plugins: [],
};
