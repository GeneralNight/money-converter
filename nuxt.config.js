export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Money Converter',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {hid: 'keywords',name: 'keywords',content: `Ecoder, money converter, currency, exchange, money exchange, conversor de moedas, Dólar, Real, Euro`},
      {hid: 'author',name: 'author',content: `Ecoder`},
      {hid: 'description',name: 'description',content: `Converta o preço das moedas facilmente!`},

      {hid: 'og:locale',name: 'og:locale',content: `pt_br`},
      {hid: 'og:site_name',name: 'og:site_name',content: `Ecoder`},
      {hid: 'og:title',name: 'og:title',content: `Money Converter`},
      {hid: 'og:type',name: 'og:type',content: `website`},
      {hid: 'og:image',name: 'og:image',content: `https://money-coverter.ecoder.com.br/cover.png`},
      {hid: 'og:url',name: 'og:url',content: `https://money-coverter.ecoder.com.br/`},
      {hid: 'og:description',name: 'og:description',content: `Converta o preço das moedas facilmente!`},
      {hid: 'og:image:width',name: 'og:image:width',content: `1920`},
      {hid: 'og:image:height',name: 'og:image:height',content: `1080`},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ],
    script: [
      {
        src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8044622463024834", crossorigin:"anonymous"
      }, 
      {
        src:"https://kit.fontawesome.com/3b5310efad.js", crossorigin:"anonymous"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/responsive.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-adsense',
  ],

  styleResources: {
    scss: [
        '~/assets/scss/responsive.scss',
    ]
},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'G-V181239LE6'
  },

  'google-gtag': {
    // id: 'UA-240578233-1', // required
    id: 'G-V181239LE6', // required
    config:{
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP 
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
      linker:{
        domains:['ecoder.com.br']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: true, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
    additionalAccounts:[]
  },

  'google-adsense': {
    id: 'ca-pub-#########'
  },
}
