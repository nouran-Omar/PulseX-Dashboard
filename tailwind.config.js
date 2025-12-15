/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // دي الألوان اللي في الصور بتاعتك بالظبط
        primary: '#2563EB',   // الأزرق الأساسي
        secondary: '#F8F9FE', // لون الخلفية الفاتح
        dark: '#1E293B',      // للكلام الغامق
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // فونت شيك جداً للمجال الطبي
      }
    },
  },
  plugins: [],
}

