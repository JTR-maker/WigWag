/* Commo Fundamentals — offline service worker.
   Strategy: stale-while-revalidate. Serves instantly from cache (works with
   no signal), and quietly refreshes the cache from the network when online.
   Bump CACHE (e.g. ...-v2) whenever you update index.html to force everyone
   onto the new version immediately. */
const CACHE = 'commo-fundamentals-v36';
const ASSETS = ['./', './index.html'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', e => {
  e.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k.indexOf('fbf-tiles') !== 0).map(k => caches.delete(k))))
  ]));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;           // only our own files
  e.respondWith(
    caches.match(req).then(cached => {
      const net = fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached || caches.match('./index.html'));
      return cached || net;                                   // cache first, network fallback
    })
  );
});
