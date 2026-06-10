import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
    // For GitHub Pages project sites set base to '/<repo-name>/'.
    // You can override at build time: `VITE_BASE=/my-repo/ npm run build`.
    base: process.env.VITE_BASE || '/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        target: 'es2020',
        outDir: 'dist',
        sourcemap: false,
        cssCodeSplit: true,
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom'],
                    motion: ['framer-motion'],
                    icons: ['react-icons'],
                },
            },
        },
    },
    server: {
        port: 5173,
        open: true,
    },
    preview: {
        port: 4173,
    },
});
