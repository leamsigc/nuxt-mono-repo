export default defineAppConfig({
  myLayer: {
    name: "Hello from Nuxt layer",
  },
  sharedIcons: {
    aliases: {
      "dark-mode": "ph:moon-bold",
      "light-mode": "ph:sun-bold",
    },
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
