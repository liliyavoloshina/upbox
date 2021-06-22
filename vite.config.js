import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: './',
	css: {
		rootpath: "http://localhost:3000/assets"
    // preprocessorOptions: {
    //   less: {
    //     rootpath: "http://localhost:3000/src",
    //   },
    // },
  },
})
