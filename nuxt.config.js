export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `DynamoRed Website`,
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'description', name: 'description', content: `DynamoRed Website` },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `DynamoRed Website` },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/dynamored-favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/fonts.css',
    '~/assets/css/common.css',
    '~/assets/css/keyframes.css',
  ],

  server: {
    port: 9999,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/client/header.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js' },
      { code: 'es', iso: 'es-ES', file: 'es-ES.js' },
      { code: 'fr', iso: 'fr-FR', file: 'fr-FR.js' },
      { code: 'fi', iso: 'fi-FI', file: 'fi-FI.js' },
      { code: 'de', iso: 'de-DE', file: 'de-DE.js' },
    ],
    defaultLocale: 'en',
    defaultDirection: 'ltr',
    sortRoutes: true,
    strategy: 'prefix_except_default',
    langDir: 'lang/',
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://dynamored.com',
    // browserBaseURL: 'https://dynamored.com:9999',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fr'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: '#660708',
    height: '5px'
  },
}
