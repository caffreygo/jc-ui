/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

// https://vitejs.dev/config/

const rollupOptions = {
  external: ['vue'],
  output: {
    // for umd/iffe
    globals: {
      vue: 'Vue',
    },
  },
}

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    reportCompressedSize: true,
    lib: {
      entry: './src/entry.ts',
      name: 'JcUI',
      fileName: 'jc-ui',
      formats: ['es', 'umd', 'iife'], // 导出模块类型
    },
  },
})
