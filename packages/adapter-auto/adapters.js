// List of adapters to check for. `version` is used to pin the installed adapter version and should point
// to the latest version of the adapter that is compatible with adapter-auto's current peerDependency version of SvelteKit.
export const adapters = [
	{
		name: 'Vercel',
		test: () => !!process.env.VERCEL,
		module: '@sveltejs/adapter-vercel',
		version: '1'
	},
	{
		name: 'Cloudflare Pages',
		test: () => !!process.env.CF_PAGES,
		module: '@sveltejs/adapter-cloudflare',
		version: '2'
	},
	{
		name: 'Netlify',
		test: () => !!process.env.NETLIFY,
		module: '@sveltejs/adapter-netlify',
		version: '1'
	},
	{
		name: 'Azure Static Web Apps',
		test: () => process.env.GITHUB_ACTION_REPOSITORY === 'Azure/static-web-apps-deploy',
		module: 'svelte-adapter-azure-swa',
		version: '0.13'
	}
];
