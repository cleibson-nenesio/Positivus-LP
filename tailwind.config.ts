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
		},
	},
	plugins: [],
} satisfies Config;
