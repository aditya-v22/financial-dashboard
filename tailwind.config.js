/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        primary: {
          50: '#DFE5EE',
          100: '#DFEAF2',
          200: '#E6EFF5',
          900: '#343C6A',
        },
        gray: {
          50: '#F3F3F5',
          100: '#F4F5F7',
        },
      },
      ringColor: {
        primary: {
          50: '#DFE5EE',
          100: '#DFEAF2',
          200: '#E6EFF5',
          600: '#396AFF',
          900: '#343C6A',
        },
        gray: {
          50: '#F3F3F5',
          100: '#F4F5F7',
        },
        error: {
          500: '#FF4B4A',
        },
      },
      textColor: {
        light: '#FFFFFF',
        primary: {
          50: '#8BA3CB',
          100: '#718EBF',
          600: '#396AFF',
          900: '#343C6A',
        },
        gray: {
          200: '#B1B1B1',
          950: '#232323',
        },
      },
      backgroundColor: {
        light: '#FFFFFF',
        gray: {
          50: '#F5F7FA',
          100: '#F3F3F5',
          200: '#EDF1F7',
          600: '#9199AF',
          950: '#232323',
        },
      },
      colors: {
        light: '#FFFFFF',
        primary: {
          100: '#E7EDFF',
          600: '#396AFF',
          900: '#343C6A',
        },
        secondary: {
          50: '#DCFAF8',
          300: '#16DBCC',
        },
        gray: {
          950: '#232323',
        },
        error: {
          500: '#FF4B4A',
        },
        warning: {
          50: '#FFF5D9',
          300: '#FFBB38',
          500: '#FC7900',
        },
        success: {
          400: '#41D4A8',
        },
      },
      caretColor: {
        primary: {
          100: '#718EBF',
        },
      },

      // border radius
      borderRadius: {
        small: '10px',
        medium: '15px',
        large: '25px',
      },

      // font family
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        'credit-card': 'linear-gradient(to right, #5B5A6F, #000000)',
        'credit-card-footer': 'linear-gradient(to bottom right, #FFFFFF26, #FFFFFF00)',
      },

      boxShadow: {
        'shadow-1': '4px 4px 18px -2px rgba(231, 228, 232, 0.8)',
      },
    },
  },
  plugins: [],
};
