self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('hive-pos-v1').then(function(cache) {
      return cache.addAll([
        'pos.html',
        'manifest.json',
        'images/sweetplace logo.png',
        'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
