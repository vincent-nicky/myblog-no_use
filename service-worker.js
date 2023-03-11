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
    "revision": "f30cb96695271cd585e9ac4eebb5ede4"
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
    "url": "assets/js/1.4d1ff72d.js",
    "revision": "d61dcf29c689f04082cb86660204de30"
  },
  {
    "url": "assets/js/10.70372093.js",
    "revision": "d160c4b18ff6f951c50fd3260d294aef"
  },
  {
    "url": "assets/js/11.729f035f.js",
    "revision": "c4101cd038a75a2ee0600ccf7108ac09"
  },
  {
    "url": "assets/js/12.8c0bcc98.js",
    "revision": "e969431d8f18989951ce66f0415d11b4"
  },
  {
    "url": "assets/js/13.cc64b13f.js",
    "revision": "5e52d668722fb9979a2ec9ef5a83efa2"
  },
  {
    "url": "assets/js/14.aa54826b.js",
    "revision": "48b7f763d344443666098ec67dd1cc25"
  },
  {
    "url": "assets/js/15.f7763d3c.js",
    "revision": "8e27eda5a039cd4069d4c58462129108"
  },
  {
    "url": "assets/js/16.2d0a89d8.js",
    "revision": "e23d7bca3471e18a704ca836374ca8d7"
  },
  {
    "url": "assets/js/17.caad7c67.js",
    "revision": "88ec6bcd5ec6e3ea4ae3b70c33852179"
  },
  {
    "url": "assets/js/18.3e8d8bf4.js",
    "revision": "2bcfcac6aa64f43e832bb038b1a0c623"
  },
  {
    "url": "assets/js/19.6a63d06c.js",
    "revision": "cd16942a8cc910d576e1493422d12151"
  },
  {
    "url": "assets/js/20.cee43040.js",
    "revision": "e31f21f427dbc5e6972ff2956c4f0ece"
  },
  {
    "url": "assets/js/21.cb99df9f.js",
    "revision": "dfc4de3acf1aff32a31cb3eb2a3ab07b"
  },
  {
    "url": "assets/js/3.699841e9.js",
    "revision": "95ad996752fd3a4c539eb45fd0d8c161"
  },
  {
    "url": "assets/js/4.04783e8a.js",
    "revision": "36a0666de44bb1c19498c5f4803448fe"
  },
  {
    "url": "assets/js/5.8723eda9.js",
    "revision": "733475686e36744720da0b20cc17638d"
  },
  {
    "url": "assets/js/6.8b217462.js",
    "revision": "ed2e42d5b3dab3676e32ac21b4d11d8b"
  },
  {
    "url": "assets/js/7.7a7c12f7.js",
    "revision": "57c26a5908f5fa4ed2e66025bc8c3cb7"
  },
  {
    "url": "assets/js/8.d0a01a0f.js",
    "revision": "3c2f830fc9f5174ab897d1e351fa776b"
  },
  {
    "url": "assets/js/9.312571e9.js",
    "revision": "8fc21375ff5b860a40ada0f0b70f0949"
  },
  {
    "url": "assets/js/app.ba1d9b44.js",
    "revision": "8ba8e23ad951b808b8f7c2b52bae57e2"
  },
  {
    "url": "bg.png",
    "revision": "9e2d977d490c2ba946bc947021562d99"
  },
  {
    "url": "categories/index.html",
    "revision": "f1c5b9ea1ee0e5f8bf80ce7d4bc7c459"
  },
  {
    "url": "have-fun/111.html",
    "revision": "05d0000030128fb218ce61455d9f2576"
  },
  {
    "url": "have-fun/222.html",
    "revision": "693b609635b032060641d2c7e6902175"
  },
  {
    "url": "index.html",
    "revision": "8bf1d8af62acf6c195d6284f6af0e504"
  },
  {
    "url": "log/index.html",
    "revision": "c3c74395e75e180ab1ade4a859bde4a0"
  },
  {
    "url": "log/vuepress-update.html",
    "revision": "48d52baf7099e6360e83b651030bfef2"
  },
  {
    "url": "notes/index.html",
    "revision": "12c9fafddabcc66292d9714dac95012d"
  },
  {
    "url": "notes/java-itheima/javase/day07.html",
    "revision": "bd34660796cc26d361e55339a08edaa0"
  },
  {
    "url": "notes/java-itheima/javase/day08.html",
    "revision": "eb82963c4a092535dc9fa6d01a41f37f"
  },
  {
    "url": "notes/java-itheima/javase/day09.html",
    "revision": "b16a83ac57c885395561ab1d6bc2e587"
  },
  {
    "url": "notes/java-itheima/javase/day10.html",
    "revision": "152826a403834f701753a2756aaa6e10"
  },
  {
    "url": "notes/java-itheima/javase/day11.html",
    "revision": "213bf41e78d771736e1c5f6e28377dd8"
  },
  {
    "url": "tag/index.html",
    "revision": "28650cf4cb4c69fe615af191343296a1"
  },
  {
    "url": "tag/JavaSE/index.html",
    "revision": "de3c8a98db87bb4c037e6768b75d2f6b"
  },
  {
    "url": "tag/vuepress优化/index.html",
    "revision": "e8819177a0d3a66bbe2c8ce48ae4f402"
  },
  {
    "url": "timeline/index.html",
    "revision": "d51a09fb6d6cf47289fb7306f2d53d38"
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
