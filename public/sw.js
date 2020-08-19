let CACHE_NAME = "admin panel";
let urlsToCache = ["/", "/completed"];

// Install/set a service worker
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/index.html",
        "/",
        "/product",
        "/account",
      ]);
    })
  );
});

// Cache/get requests
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log(response);
          return response;
        }
      })
    );
  }
});

// // Update a service worker
// self.addEventListener("activate", (event) => {
//   let cacheWhitelist = ["your-app-name"];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
