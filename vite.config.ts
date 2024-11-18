import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/assets/styles/variables.scss" as *;`,
      },
    },
  },
  server: {
    host: '0.0.0.0', // 配置为 0.0.0.0 以允许局域网设备访问
    port: 8080, // 指定开发服务器的端口，默认是 5173
    open: false, // 自动打开浏览器
    proxy: {
      // 配置代理
      '/api': {
        target: 'http://123.60.58.54:3000/', // 代理的目标地址
        changeOrigin: true, // 修改源头为目标地址
        rewrite: (path) => path.replace(/^\/api/, '/mock/11/v1/oac/portalcenter/'), // 重写路径
      },
    },
    cors: true, // 允许跨域
    strictPort: true, // 若端口被占用则中止
  },
})
