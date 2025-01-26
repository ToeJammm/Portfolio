import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', // Bind to all IPs on the local machine
		port: 5173 // Optional: Specify the port, defaults to 5173
	}
});
