import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		}
		// prerender: {
		// 	handleHttpError: ({ status, path, referrer, referenceType }) => {
		// 		if (status === 404) {
		// 			console.warn(`404 encountered at ${path}, referrer: ${referrer}`);
		// 			return; // Suppress the error
		// 		}
		// 		throw new Error(`${status} at ${path}`);
		// 	}
	}
};

export default config;
