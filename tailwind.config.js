/** @type {import('tailwindcss').Config} */
import kobalte from "@kobalte/tailwindcss";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Roboto Condensed", "sans-serif"],
			display: ["Indie Flower", "cursive"],
			number: ["Tiny5", "monospace"],
		},
	},
	plugins: [kobalte({ prefix: "kb" })],
};
