/* Commo Fundamentals — offline service worker.
   Strategy: NETWORK-FIRST for the app document (so you always get the newest
   code when you have signal), CACHE-FIRST (stale-while-revalidate) for other
   assets. Falls back to cache when offline, so the app still works with no signal.
   Bump CACHE whenever you update index.html. */
const CACHE = 'commo-fundamentals-v39';
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

  // The app document (navigations / index.html): network-first so updates apply immediately.
  const isDoc = req.mode === 'navigate' || req.destination === 'document'
    || url.pathname === '/' || url.pathname.endsWith('/') || url.pathname.endsWith('index.html');
  if (isDoc) {
    e.respondWith(
      fetch(req).then(res => {
        if (res && res.status === 200) {
          const c1 = res.clone(), c2 = res.clone();
          caches.open(CACHE).then(c => { c.put(req, c1); c.put('./index.html', c2); }).catch(() => {});
        }
        return res;
      }).catch(() => caches.match(req).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  // Everything else: cache-first with background refresh.
  e.respondWith(
    caches.match(req).then(cached => {
      const net = fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
