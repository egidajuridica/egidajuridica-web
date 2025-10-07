// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import node from '@astrojs/node'

export default defineConfig({
  site: 'https://egidajuridica.com',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api': 'https://egidajuridica.com',
      },
    },
  },

  preview: {
    port: 4324,
  },
})
