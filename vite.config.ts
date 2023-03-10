import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			pages: path.resolve('src/pages/'),
			components: path.resolve('src/components/'),
			assets: path.resolve('src/assets/'),
			templates: path.resolve('src/templates/'),
			core: path.resolve('src/core/'),
			contexts: path.resolve('src/contexts/'),
			store: path.resolve('src/store/'),
		},
	},
	plugins: [react()],
});
