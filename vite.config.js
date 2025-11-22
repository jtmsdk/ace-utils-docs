import path from 'path';
import {paths} from '../ace-utils/importmap.js';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      // 'vue': 'vue/dist/vue.esm-bundler.js',
      // 'vue-router': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.esm-bundler.js'),
      ...paths
    },
  },
})
