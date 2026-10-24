import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  // Use the repository path only for GitHub Pages. Local preview must resolve
  // media from the site root so http://127.0.0.1:4173/ works as expected.
  base: mode === 'production' ? '/Yangyang/' : '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
