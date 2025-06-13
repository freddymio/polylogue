// tailwind.config.js
// ✅ Tailwind Configuration for Polylogue Project
// This configuration defines the design tokens used in your project
// including custom colors for background, foreground, surface, and neu effects.
// It ensures Tailwind generates usable utility classes like `bg-background`, `text-foreground`, etc.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // ✅ Colors used in utility classes like `bg-background` and `text-foreground`
    colors: {
      background: "#f9f9f9",      // Light background for layout
      foreground: "#1a1a1a",      // Dark text for readability
      surface: "#ffffff",         // Panel and card surfaces
      neu: "rgba(0, 0, 0, 0.08)", // Neumorphic soft shadow
      white: "#ffffff",           // Required by Tailwind default utilities
      black: "#000000",
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      red: {
        100: "#fee2e2",
        300: "#fca5a5",
        500: "#ef4444",
        600: "#dc2626",
      },
    },

    // ✅ Custom extensions for visual polish (shadows, spacing, etc.)
    extend: {
      boxShadow: {
        neu: "4px 4px 12px rgba(0, 0, 0, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.05)",
      },
    },
  },

  plugins: [], // Add Tailwind plugins here (e.g., typography, forms) if needed
};
