import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				dark: 'var(--dark)',
				gray: 'var(--gray)',
			},
			backgroundColor: {
				primary: 'var(--primary)',
				dark: 'var(--dark)',
				gray: 'var(--gray)',
			},
			width: {
				layout: '1440px',
			},
			maxWidth: {
				layout: '1440px',
			},
			fontSize: {
				h1: '60px',
				h2: '40px',
				h3: '30px',
			},
			boxShadow: {
				default: '0 5px 0 0 var(--dark)',
			},
		},
	},
	plugins: [],
} satisfies Config;
