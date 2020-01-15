export default {
  generate: {
    devtools: true
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | Know more your movie",
    title: "Knovie",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Browse and know more about your favorite movies, tv shows and actors. "
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Browse, Movies, TV Shows, Reviews, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
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
  plugins: ["~/plugins/vue-lazy", "~/plugins/vue-icon"],
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
    analyze: true,
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
    }
  }
};
