import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Your custom colors
        container: "hsl(var(--container))",
        "left-panel": "hsl(var(--left-panel))",
        "blue-primary": "hsl(var(--blue-primary))",
        "blue-secondary": "hsl(var(--blue-secondary))",
        "blue-tertiary": "hsl(var(--blue-tertiary))",
        "chat-hover": "hsl(var(--chat-hover))",
        "violet-primary": "hsl(var(--violet-primary))",
        "violet-secondary": "hsl(var(--violet-secondary))",
        "violet-chat": "hsl(var(--violet-chat))",
      },
      backgroundColor: {
        container: "hsl(var(--container))",
        "blue-primary": "hsl(var(--blue-primary))",
        "blue-secondary": "hsl(var(--blue-secondary))",
        "blue-tertiary": "hsl(var(--blue-tertiary))",
        "left-panel": "hsl(var(--left-panel))",
        "chat-hover": "hsl(var(--chat-hover))",
        "green-primary": "hsl(var(--violet-primary))",
        "green-secondary": "hsl(var(--violet-secondary))",
        "green-chat": "hsl(var(--violet-chat))",
      },
      backgroundImage: {
        "chat-tile-light": "url('/bg-light.png')",
        "chat-tile-dark": "url('/bg-dark.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config 