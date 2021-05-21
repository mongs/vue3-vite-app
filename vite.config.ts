import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 找不到模块“path”或其相应的类型声明。 安装@types/node yarn add @types/node -D
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, 'src'),
      'assets': resolve(__dirname, 'src/assets'),
      'comp': resolve(__dirname, 'src/components'),
      'stores': resolve(__dirname, 'src/stores'),
      'routers': resolve(__dirname, 'src/routers'),
      'utils': resolve(__dirname, 'src/utils'),
      'apis': resolve(__dirname, 'src/apis'),
      'hosts': resolve(__dirname, 'src/hosts'),
      'icons': resolve(__dirname, 'src/icons'),
      'views': resolve(__dirname, 'src/views'),
    }
  },
  base: './',
  server: {
    open: true,
    cors: true,
  }
})
