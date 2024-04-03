import type { Config } from "tailwindcss";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Palanquin", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;
