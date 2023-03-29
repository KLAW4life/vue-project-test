// Our last bit of configuration. This is where we tell Nuxt how to properly find and build Vuetify's sass.

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
      transpile: ['vuetify']
    },
    env: {
      DEBUG: false
    }
  })


