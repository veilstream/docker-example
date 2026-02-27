import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow all subdomains like foo.env.veilstreamapp.com
    allowedHosts: [
      '.env.veilstreamapp.com',
      '.env.veilstreamdev.com',
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '::1',
      '::',
      '::ffff:127.0.0.1',
      '::ffff:0.0.0.0',
    ],
  },
})
