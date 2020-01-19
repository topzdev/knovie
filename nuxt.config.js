require("dotenv").config();
const env = {
  TMDB_API_KEY_V3: process.env.TMDB_API_KEY_V3,
  OMDB_API_KEY: process.env.OMDB_API_KEY,
  SITE_NAME: process.env.SITE_NAME,
  SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
  SITE_KEYWORDS: process.env.SITE_KEYWORDS,
  SITE_URL: process.env.SITE_URL
};

export default {
  generate: {
    devtools: false, //true
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true
  },
  mode: "universal",

  env,

  head: {
    titleTemplate: "%s | Know more your movie",
    title: "Knowvie",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Browse and know more about your favorite movies, tv shows and actors"
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
        content: `${"Knowvie"} | Know more your movie`
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
        content:
          "Browse and know more about your favorite movies, tv shows and actors"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Knowvie"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: `${"Knowvie"} | Know more your movie`
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@_christop_"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Browse and know more about your favorite movies, tv shows and actors"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/knowvie_bg.jpg"
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@_christop_"
      },
      {
        hid: "itemprop:name",
        itemprop: "name",
        content: `${"Knowvie"} | Know more your movie`
      },
      {
        hid: "itemprop:name",
        itemprop: "description",
        content:
          "Browse and know more about your favorite movies, tv shows and actors"
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
  loading: {
    color: "#1DF7F7",
    height: "3px"
  },
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
    "nuxt-user-agent",
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
    env,
    transpile: [/^vuetify/],
    analyze: false, //true
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
    }
  }
};
