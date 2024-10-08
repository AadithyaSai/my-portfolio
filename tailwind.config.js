/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#020817",
        foreground: "#f8fafc",
        card: "#020817",
        "card-foreground": "#f8fafc",
        primary: "#0ea5e9",
        secondary: "#1e293b",
        "secondary-foreground": "#f8fafc",
        muted: "#1e293b",
        "muted-foreground": "#94a3b8",
        accent: "#1e293b",
        "accent-foreground": "#f8fafc",
        border: "#1e293b",
        input: "#1e293b",
        ring: "#cbd5e1",
        "pill-background": "#0284c7",

        "code-keyword": "#c678dd",
        "code-string": "#98c379",
        "code-comment": "#6a737d",
        "code-number": "#d19a66",
        "code-variable": "#DF6A73",
        "code-brace": "#abb2bf",
        "code-operator": "#56b6c2",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      mono: ["Fira Mono", "monospace"],
    },
  },
  plugins: [],
};
