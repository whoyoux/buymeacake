export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  devtools: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'buymeacakeNuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css'}
    ],
    script: [
      {
        type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //'~/assets/style/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  firebase: {
    config: {
      apiKey: "AIzaSyAeTaywo05lyaAaJsL2s8rI5rKejll2Qdo",
      authDomain: "buy-me-a-cake.firebaseapp.com",
      projectId: "buy-me-a-cake",
      storageBucket: "buy-me-a-cake.appspot.com",
      messagingSenderId: "46752259335",
      appId: "1:46752259335:web:b4b241b41951d6ef7039a2",
      measurementId: "G-JJ9B49ET9Z"
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'users/fetchUser',
        },
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
