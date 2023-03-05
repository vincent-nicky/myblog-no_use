/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd0171c0cd30e9309b6245c31300cff0"
  },
  {
    "url": "assets/css/0.styles.3b4ab068.css",
    "revision": "f965655ee9efd065d085fcc5233401d8"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.09b561d0.js",
    "revision": "5cd345eae77e55e6c028f9ca2389d4c3"
  },
  {
    "url": "assets/js/10.aeb54dcb.js",
    "revision": "53e54d0ff49a7361676c4117b9c1276b"
  },
  {
    "url": "assets/js/11.8536f58d.js",
    "revision": "77f04cce11d31d02aad0835fc1ec3427"
  },
  {
    "url": "assets/js/12.fe050615.js",
    "revision": "fcf553739e3ba629c35fee648d256819"
  },
  {
    "url": "assets/js/13.0b2bf458.js",
    "revision": "4ca8f99d1e919e25e9399543b95b94a5"
  },
  {
    "url": "assets/js/14.f8eb6b49.js",
    "revision": "126c79309f7fc523dc3ff5719a5b12f2"
  },
  {
    "url": "assets/js/15.72598dc3.js",
    "revision": "efae5b02b30a4887d9d9b90181179534"
  },
  {
    "url": "assets/js/16.50f1b5eb.js",
    "revision": "839df486606acdc9247b52b56a622d6b"
  },
  {
    "url": "assets/js/17.bded563a.js",
    "revision": "c661ab413c3f790132c52299f29fe3e8"
  },
  {
    "url": "assets/js/3.ec8cd37e.js",
    "revision": "9ffb3de231435f6227764187e5e16cdd"
  },
  {
    "url": "assets/js/4.dbc45f48.js",
    "revision": "cc40b4659d3e46541096a9a91a77ac38"
  },
  {
    "url": "assets/js/5.f23ee82b.js",
    "revision": "73611cc4b0bd28aa76f06fcb1e7e2df4"
  },
  {
    "url": "assets/js/6.c73320b3.js",
    "revision": "80499eca5412fc2fe519cbcdf1a931b8"
  },
  {
    "url": "assets/js/7.aad6228c.js",
    "revision": "0f579ede11876ca9ff74324e17d9cf8c"
  },
  {
    "url": "assets/js/8.99a4c4e6.js",
    "revision": "cc91d21147754ab242f8bb6dfa4ee175"
  },
  {
    "url": "assets/js/9.7de9b9b3.js",
    "revision": "47ae68ee0d173d4f1f558fb6ddfd5c9c"
  },
  {
    "url": "assets/js/app.04734d12.js",
    "revision": "0cf7cc217e28b11a3e29e383304b42e9"
  },
  {
    "url": "bg.png",
    "revision": "9e2d977d490c2ba946bc947021562d99"
  },
  {
    "url": "categories/index.html",
    "revision": "11b04138da3e94a40d5d0c74e685b11f"
  },
  {
    "url": "have-fun/111.html",
    "revision": "13a71b5e1f4a2c22cdb383d4f440f489"
  },
  {
    "url": "have-fun/222.html",
    "revision": "a6dec784cb3fc29243af85cc8fcc560e"
  },
  {
    "url": "index.html",
    "revision": "75cc47c07744e418c08107f02be030aa"
  },
  {
    "url": "log/index.html",
    "revision": "ef41c84de8c88b9755d4a0bdc92bbb99"
  },
  {
    "url": "log/vuepress-update.html",
    "revision": "9a9e233486396b947b9b3f172cf5a37c"
  },
  {
    "url": "notes/index.html",
    "revision": "6bc64ef379fe024264d1207289779c7f"
  },
  {
    "url": "notes/java-itheima/javase/day07.html",
    "revision": "ac64653ee0d6f367c133ea3c1bba8cad"
  },
  {
    "url": "tag/index.html",
    "revision": "fcc46bf959b1eb46b7679e3b02ae388c"
  },
  {
    "url": "tag/vuepress优化/index.html",
    "revision": "fded4d698fa781bf5f3825d852f197f1"
  },
  {
    "url": "timeline/index.html",
    "revision": "0851fc486c8f9311a3e3b0d816415b71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
