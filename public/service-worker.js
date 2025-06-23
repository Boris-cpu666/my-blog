const CACHE_NAME = 'ai-blogger-cache-v1';
const urlsToCache = [
  '/',
  '/projects',
  '/blog',
  '/contact',
  '/globals.css',
  '/vercel.svg',
  '/next.svg',
  '/globe.svg',
  '/file.svg',
  '/window.svg',
  // 可根据实际情况添加更多静态资源
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
}); 