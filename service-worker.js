// Simple service worker for Bharat Soya Chap PWA

const CACHE_NAME = "bharat-soya-chap-cache-v1";
const urlsToCache = [
  "/bharat-soya-chap/",
  "/bharat-soya-chap/index.html",
  "/bharat-soya-chap/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
