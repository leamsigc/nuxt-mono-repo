export default defineNuxtSchema({
  appConfig: {
    /** Default OG image path */
    cover: "/cover.jpg",
    /**
     * Social media icons displayed in the navbar
     */
    socials: {
      /**
       * Twitter handle
       *
       * @example 'leamsigc'
       * @studioIcon simple-icons:twitter
       * */
      twitter: "leamsigc",
      /**
       * Github repository name
       * @example 'shared-ui'
       * @studioIcon simple-icons:github
       * */
      github: "leamsigc",
    },
  },
});
