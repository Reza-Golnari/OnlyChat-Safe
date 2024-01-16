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
        favicon32: "./logo-512.png",
        favicon16: "./logo-192.png",
        appleTouchIcon: null,
        msTileImage: null,
      },
      // configure the workbox plugin
      workboxPluginMode: "GenerateSW",
    },
  },
};
