require("dotenv").config();
export default {
  generate: {
    devtools: false //true
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | Know more your movie",
    title: process.env.SITE_NAME,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.SITE_DESCRIPTION
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Browse, Movies, TV Shows, Reviews, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast, Collection, Information, Crews, Director, Writer, Best, Top Rated, Upcoming, Popular"
      },
      {
        hid: "apple-mobile-web-app-capable",
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        hid: "mobile-web-app-capable",
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: `${process.env.SITE_NAME} | Know more your movie`
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "movie"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: process.env.SITE_URL
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/knowvie_bg.jpg"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: process.env.SITE_DESCRIPTION
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: process.env.SITE_NAME
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: `${process.env.SITE_NAME} | Know more your movie`
      },
      {
        hid: "twitter:site",
        property: "twitter:site",
        content: "@_christop_"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: process.env.SITE_DESCRIPTION
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "/knowvie_bg.jpg"
      },
      {
        hid: "itemprop:name",
        itemprop: "name",
        content: `${process.env.SITE_NAME} | Know more your movie`
      },
      {
        hid: "itemprop:name",
        itemprop: "description",
        content: process.env.SITE_DESCRIPTION
      },
      {
        hid: "itemprop:image",
        itemprop: "image",
        content: "/knowvie-logo.jpg"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,500i,600,600i,700,800|Open+Sans:300,300i,400,500,600,700&display=swap"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#1DF7F7" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/bootstrap-grid.min.css", "@/assets/sass/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vue-lazy",
    "~/plugins/vue-icon",
    "~/plugins/vue-paginator"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    ["vue-scrollto/nuxt", { duration: 1000, easing: "ease" }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: [/^vuetify/],
    analyze: false, //true
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
    }
  }
};
