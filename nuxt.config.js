import webpack from 'webpack'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: { 
    environment: process.env.NODE_ENV
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/general.css',
    '~/assets/styles/colors.css',
    '~/assets/styles/animations.css',
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
    ['@nuxtjs/dotenv', { systemvars: true }],
  ],
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
