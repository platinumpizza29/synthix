import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {

            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {

            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {

            transform: "translate(0px, 0px) scale(1)"
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
