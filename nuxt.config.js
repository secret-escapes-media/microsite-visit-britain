module.exports = {
  mode: "spa",

  router: {
    base: "/visitbritain/"
  },

  /*
   ** Headers of the page
   */
  head: {
    title: "Secret Escapes Visit Britain",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Take a look at our handpicked selection of unmissable microgap experiences from coast, to country, to city. Pick your perfect hotel offer from across the UK and begin your very own microgap adventure today."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#1a1a1a" },

  /*
   ** Global CSS
   */
  css: ["@/assets/scss/app.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/typekit.js", ssr: false },
    { src: "~/plugins/ScrollView.js", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
