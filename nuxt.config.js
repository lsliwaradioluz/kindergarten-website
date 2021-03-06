import webpack from 'webpack'

export default {
  mode: 'universal',
  target: "static",
  /*
  ** Headers of the page
  */
  head: {
    title: 'Akuku | Nowy niepubliczny żłobek we Wrocławiu',
    htmlAttrs: {
      lang: 'pl-PL',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        name: 'description', 
        content: 'Mieszkasz w zachodniej części Wrocławia i szukasz opieki dla swojego malucha? W naszym żłobku zadbamy o jego harmonijny rozwój!' 
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/general.css',
    '~/assets/styles/animations.css',
    '~/assets/styles/layouts.css',
    '~/assets/styles/elements.css',
    '~/assets/styles/colors.css',
    '~/assets/icons/primary/flaticon.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://www.zlobekakuku.pl/sitemap.xml',
  },
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NODE_ENV == 'development' ? 'http://localhost:1337/graphql' : 'https://akuku-backend.herokuapp.com/graphql'
      }
    }
  },
  markdownit: {
    preset: 'default',
    html: true,
    linkify: true,
    breaks: true,
    injected: true, 
    typographer: true
  },
  sitemap: {
    hostname: 'https://zlobekakuku.pl'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   plugins: [
    new webpack.ProvidePlugin({
      '_': 'lodash'
    })
    ],
    extend (config, ctx) {
    }
  }
}
