import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import reactNativeWeb from 'vite-plugin-react-native-web'

export default defineConfig({
	build: {
		rollupOptions: {
			input: './index.html',
		},
	},
	plugins: [react(), reactNativeWeb()],
})
