// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)


export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: { '@': resolve('./') },
  components: [
    { path: '@/components', prefix: 'Ui' }
  ],
  modules: [
    "@nuxt/devtools",
  ]
})
