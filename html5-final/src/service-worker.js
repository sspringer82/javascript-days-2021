importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js',
);

// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Note: Ignore the error that Glitch raises about workbox being undefined.
workbox.setConfig({
  debug: true,
});

// Demonstrates using default cache
workbox.routing.registerRoute(
  new RegExp('.*\\.(?:js)'),
  new workbox.strategies.StaleWhileRevalidate(),
);

// Demonstrates a custom cache name for a route.
workbox.routing.registerRoute(
  new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif)'),
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  }),
);
