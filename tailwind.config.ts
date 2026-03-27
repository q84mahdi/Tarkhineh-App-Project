/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindFormPlugin from "@tailwindcss/forms";

function withOpacity(variableName:string) {
  return ({ opacityValue }:{opacityValue:string}) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: ["selector", '[class="dark-mode"]'],

  theme: {
    extend: {
      colors: {
        tint: {
          700: withOpacity("--color-tint-700"),
          600: withOpacity("--color-tint-600"),
          500: withOpacity("--color-tint-500"),
          400: withOpacity("--color-tint-400"),
          300: withOpacity("--color-tint-300"),
          200: withOpacity("--color-tint-200"),
          100: withOpacity("--color-tint-100"),
        },

        shade: {
          600: withOpacity("--color-shade-600"),
          500: withOpacity("--color-shade-500"),
          400: withOpacity("--color-shade-400"),
          300: withOpacity("--color-shade-300"),
          200: withOpacity("--color-shade-200"),
          100: withOpacity("--color-shade-100"),
        },

        gray: {
          800: withOpacity("--color-gray-800"),
          700: withOpacity("--color-gray-700"),
          600: withOpacity("--color-gray-600"),
          500: withOpacity("--color-gray-500"),
          400: withOpacity("--color-gray-400"),
          300: withOpacity("--color-gray-300"),
          200: withOpacity("--color-gray-200"),
          100: withOpacity("--color-gray-100"),
        },

        error: {
          300: withOpacity("--color-error-300"),
          200: withOpacity("--color-error-200"),
          100: withOpacity("--color-error-100"),
        },

        success: {
          300: withOpacity("--color-success-300"),
          200: withOpacity("--color-success-200"),
          100: withOpacity("--color-success-100"),
        },

        warning: {
          300: withOpacity("--color-warning-300"),
          200: withOpacity("--color-warning-200"),
          100: withOpacity("--color-warning-100"),
        },

        primary: withOpacity("--color-primary"),
        white: withOpacity("--color-white"),
        black: withOpacity("--color-black"),
      },

      container: {
        center: true,
        padding: "1rem",
      },

      fontFamily: {
        sans: ["Estedad", ...fontFamily.sans],
      },
    },
  },

  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};
