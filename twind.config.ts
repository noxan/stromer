import type { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Palanquin", "system-ui", "sans-serif"],
      },
    },
  },
} as Options;
