import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(50 25% 98%)",
        foreground: "hsl(160 8% 18%)",
        card: "hsl(50 17% 99%)",
        border: "hsl(160 12% 88%)",
        muted: "hsl(160 10% 95%)",
        "muted-foreground": "hsl(160 8% 46%)",
        primary: "hsl(173 23% 38%)",
        "primary-foreground": "hsl(0 0% 100%)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17, 24, 39, 0.03), 0 10px 30px rgba(17, 24, 39, 0.04)"
      }
    }
  },
  plugins: []
} satisfies Config;
