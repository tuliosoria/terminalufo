/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          green: "var(--accent-green)",
          amber: "var(--accent-amber)",
          red: "var(--accent-red)",
          text: "var(--text-primary)",
          muted: "var(--text-secondary)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        heading: ["var(--font-heading)", "monospace"],
        body: ["var(--font-body)", "monospace"],
        ui: ["var(--font-ui)", "monospace"],
        stamp: ["var(--font-stamp)", "monospace"]
      },
      boxShadow: {
        terminal: "var(--glow-green)"
      }
    }
  },
  plugins: []
};

export default config;
