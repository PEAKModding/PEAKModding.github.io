// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
import starlightThemeObsidian from 'starlight-theme-obsidian'

// https://astro.build/config
export default defineConfig({
	site: "https://peakmodding.github.io",
	integrations: [
		starlight({
			title: 'PEAK Modding Wiki',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/PEAKModding' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/SAw86z24rB' }
			],
			editLink: {
				baseUrl: "https://github.com/PEAKModding/PEAKModding.github.io/edit/main/"
			},
			customCss: ['./src/styles/global.css'],
			expressiveCode: {
				themes: ['dracula', 'one-light'],
			},
			plugins: [
				starlightLinksValidator(),
				starlightThemeObsidian({
					debug: false,
					sitemapConfig: {},
					graphConfig: {},
					backlinksConfig: {},
					graph: false,
					backlinks: false
				}),
			],
			sidebar: [
				{
					label: "Getting Started",
					autogenerate: { directory: "getting-started" },
				},
				{
					label: "Creating a Mod",
					autogenerate: { directory: "creating-a-mod" },
				},
			],
		}),
	],
});
