import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			pages: path.resolve('src/pages/'),
			components: path.resolve('src/components/'),
		},
	},
	plugins: [react()],
});
