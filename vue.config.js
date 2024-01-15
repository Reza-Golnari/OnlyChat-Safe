module.exports = {
  pwa: {
    manifestOptions: {
      name: "My App",
      themeColor: "#4DBA87",
      msTileColor: "#000000",
      appleMobileWebAppCapable: "yes",
      appleMobileWebAppStatusBarStyle: "black",
      manifestPath: "/manifest.json",

      workboxPluginMode: "InjectManifest",
      workboxOptions: {
        swSrc: true,
      },

      themeColor: "#4DBA87",
      msTileColor: "#000000",
      appleMobileWebAppCapable: "yes",
      appleMobileWebAppStatusBarStyle: "black",
      iconPaths: {
        maskicon: null,
        favicon32: "./logo-color-sm.jpg",
        favicon16: "./logo-rounded.jpg",
        appleTouchIcon: null,
        msTileImage: null,
      },
      // configure the workbox plugin
      workboxPluginMode: "GenerateSW",
    },
  },
};
