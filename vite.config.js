import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { getAliases } from 'vite-aliases';
const aliases = getAliases();
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA()],
  resolve: {
		alias: aliases
	}
})
