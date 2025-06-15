import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@database": "/src/assets/database",
      "@fetch": "/src/assets/fetch",
      "@icons": "/src/assets/icons",
      "@navigation": "/src/assets/navigation",
      "@query-client": "/src/assets/query-client",
      "@validations": "/src/assets/validations",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@routes": "/src/routes",
      "@state": "/src/state",
      "@styles": "/src/styles",
      "@interfaces": "/src/interfaces",
    },
  },
})