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
    "revision": "f09e059a4a998f9dfb7976204362e8ae"
  },
  {
    "url": "assets/css/0.styles.4123baaf.css",
    "revision": "ccd4454be8e05e7fddc044372f9ff052"
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
    "url": "assets/js/1.2743d3a9.js",
    "revision": "615e3e8636472b6587c7082e8b51c795"
  },
  {
    "url": "assets/js/10.6a0c6a60.js",
    "revision": "3a8ad2e8090b7d236e13238def9c3600"
  },
  {
    "url": "assets/js/11.8eb9cc9e.js",
    "revision": "16951689cb8d6407951243acdac48762"
  },
  {
    "url": "assets/js/12.efd9e855.js",
    "revision": "e4100caa387217aced8f8ffd0d59fdea"
  },
  {
    "url": "assets/js/13.77f4b0be.js",
    "revision": "5688c1a64dd20ca779adc3127d5b9d5c"
  },
  {
    "url": "assets/js/14.3499ba66.js",
    "revision": "9a932648a156f31f387d7b54b7204bdb"
  },
  {
    "url": "assets/js/15.2b9b9781.js",
    "revision": "8e6468aa33baca20a184c12eacb15be9"
  },
  {
    "url": "assets/js/16.00aca14b.js",
    "revision": "4a84a36129cebb61cad4f92fda8e9265"
  },
  {
    "url": "assets/js/17.165bd8bf.js",
    "revision": "ddd978fa7fd460fd0ada5790975e423a"
  },
  {
    "url": "assets/js/18.6ddccc86.js",
    "revision": "c813bc1b54e29734f7f5819f1fe990c3"
  },
  {
    "url": "assets/js/19.9c62ef56.js",
    "revision": "ff3c607c5f9cf58a5d59e0f55efdf590"
  },
  {
    "url": "assets/js/20.af1ed9e5.js",
    "revision": "4e71414ee6441c1a10dcac458072dd4b"
  },
  {
    "url": "assets/js/21.f8a2759f.js",
    "revision": "46f050d0695d15f220f886104430779e"
  },
  {
    "url": "assets/js/22.f4c3545d.js",
    "revision": "837f77e909384c84744589526336bb70"
  },
  {
    "url": "assets/js/23.fb4c1115.js",
    "revision": "51d2632e494d05de34af6fbc279bad3d"
  },
  {
    "url": "assets/js/24.e8659f12.js",
    "revision": "2917fa9835a3b5c14cf7afd6b5e25801"
  },
  {
    "url": "assets/js/25.4401edbf.js",
    "revision": "584c4cba96874502829280bb8807b324"
  },
  {
    "url": "assets/js/26.51c97df9.js",
    "revision": "1c16fc5adfcf88cba6daa51ea791c199"
  },
  {
    "url": "assets/js/27.20031cb8.js",
    "revision": "8c45f6945dd95614e93fe16288b56f7a"
  },
  {
    "url": "assets/js/28.a6d46429.js",
    "revision": "b3ceb415ad07416d036d5e4f94edfe02"
  },
  {
    "url": "assets/js/29.b5736a4f.js",
    "revision": "a1bfa9517a1b023c71929af9f7e7b7d1"
  },
  {
    "url": "assets/js/3.db593f0c.js",
    "revision": "1781dfa6b4b8648379a38b4f8a9ad98d"
  },
  {
    "url": "assets/js/30.1fd31b24.js",
    "revision": "5c03a77fb6877fd647811d441ffc5c2e"
  },
  {
    "url": "assets/js/31.2518b44f.js",
    "revision": "3671ca141d6ff287ea0e99e375b918a4"
  },
  {
    "url": "assets/js/32.8e755a32.js",
    "revision": "c59deae5e94663df777cd45505d6985c"
  },
  {
    "url": "assets/js/33.710a7066.js",
    "revision": "ea3c48099d40f2f39fd6249a47650cd2"
  },
  {
    "url": "assets/js/34.63736891.js",
    "revision": "ead6d97d60206b80165e400863b80f53"
  },
  {
    "url": "assets/js/35.cac4c0d5.js",
    "revision": "c8a557acb94af6de73b00cbd6282ad5b"
  },
  {
    "url": "assets/js/36.35337087.js",
    "revision": "b2f621861e93473e6e91f905b6614c22"
  },
  {
    "url": "assets/js/37.8673f748.js",
    "revision": "6aae01a4c19fdfb5affb79b5f1e57a85"
  },
  {
    "url": "assets/js/38.b33ac22e.js",
    "revision": "c32caf1ed033c3aac6c2fa9ca90197a3"
  },
  {
    "url": "assets/js/4.282e8e37.js",
    "revision": "3f82a3a32edd67323f61128bcabe0d44"
  },
  {
    "url": "assets/js/5.4341e77e.js",
    "revision": "e384ca6dc63a474d83bca9aefaf1cef0"
  },
  {
    "url": "assets/js/6.b7ba3f57.js",
    "revision": "445299c3ae5f2675dae64c328b0d90c6"
  },
  {
    "url": "assets/js/7.cf7eb837.js",
    "revision": "3dc461d3629d7e34b63cf9c884d89020"
  },
  {
    "url": "assets/js/8.821bd667.js",
    "revision": "8b88bb0553a98917641a3d1d9844a516"
  },
  {
    "url": "assets/js/9.addaf399.js",
    "revision": "5cd0fbf2f926e05e0ee87a359c0a4365"
  },
  {
    "url": "assets/js/app.72a6aef1.js",
    "revision": "b4d3401f9eb3569c8622f60a81587d80"
  },
  {
    "url": "bg.png",
    "revision": "9e2d977d490c2ba946bc947021562d99"
  },
  {
    "url": "categories/index.html",
    "revision": "7e6ebf010c5e4d9f1ec04cc619cd8f59"
  },
  {
    "url": "have-fun/111.html",
    "revision": "75be2ecc09e423f23a1bcbf45e1cefa2"
  },
  {
    "url": "have-fun/222.html",
    "revision": "37cb3c53eafa62f5d1511089593bc8a6"
  },
  {
    "url": "index.html",
    "revision": "2aa68b12e485db4fb8deec215a408855"
  },
  {
    "url": "life/di-yi-ci-mian-shi.html",
    "revision": "e9efff21e639247732964066aa77ab9b"
  },
  {
    "url": "life/index.html",
    "revision": "c4235600219d34b212a6eedc7dd2fd81"
  },
  {
    "url": "life/xuan-qian-duan-huan-shi-hou-duan.html",
    "revision": "5dae42ff6bd487a3954bbfbe23c4daf7"
  },
  {
    "url": "log/index.html",
    "revision": "bf0b065960aef578d459c225be229c62"
  },
  {
    "url": "log/vuepress-update.html",
    "revision": "e0ef109efec868ce5dc6ae95457a013a"
  },
  {
    "url": "log/xunyou/xunyou01.html",
    "revision": "c2977ce4e926ec8b1dedb0414fda4d79"
  },
  {
    "url": "notes/cet6/words.html",
    "revision": "cbe0d3286aae339ea5bf17ee8f4ad2e1"
  },
  {
    "url": "notes/index.html",
    "revision": "f905b6f8676a2afe9f91fd0039c1e394"
  },
  {
    "url": "notes/java/10.html",
    "revision": "536d05fc5bad69b700c7cd077300498e"
  },
  {
    "url": "notes/mysql/1.html",
    "revision": "61719e17d84149da5bb95bede0ddd54c"
  },
  {
    "url": "notes/mysql/2.html",
    "revision": "3899a16c45d0398e010f2392006af22d"
  },
  {
    "url": "notes/mysql/3.html",
    "revision": "2998566f71660fcb773d04d25b0f8fda"
  },
  {
    "url": "notes/mysql/4.html",
    "revision": "82055fb1b7cb2e1fc36194809ed38624"
  },
  {
    "url": "notes/mysql/5.html",
    "revision": "9a0524cc5ff6dac70b575272f79a8fa1"
  },
  {
    "url": "notes/mysql/6.html",
    "revision": "bfc7ada90fa807f0aa043ab3b5ba16a8"
  },
  {
    "url": "notes/mysql/7.html",
    "revision": "929fc30d403410805ab070cacca42fbd"
  },
  {
    "url": "notes/ssm/er-spring.html",
    "revision": "f3c9b7b05af2c41a7658bd6e0934000b"
  },
  {
    "url": "notes/ssm/san-springmvc.html",
    "revision": "b5c78f36f10912fefad1a9c847f5c572"
  },
  {
    "url": "notes/ssm/yi-mybatis.html",
    "revision": "aa30326ac02f440de0861419ab2e2a36"
  },
  {
    "url": "notes/vue/1.html",
    "revision": "36aa583ad8f68558338eafd854c47257"
  },
  {
    "url": "notes/vue/2.html",
    "revision": "4aadc4af72aac71e03f26281bce2bcb4"
  },
  {
    "url": "notes/vue/3.html",
    "revision": "f8a010c394914f18de0b0205fbb3687e"
  },
  {
    "url": "notes/vue/4.html",
    "revision": "93c935d9788d5c4b128edf14c003d747"
  },
  {
    "url": "notes/vue/5.html",
    "revision": "5800057e65d3e9e65bf78423a43347f1"
  },
  {
    "url": "notes/vue/6.html",
    "revision": "69a1940142054665285afb382bb2384a"
  },
  {
    "url": "tag/“寻友”开发日志/index.html",
    "revision": "2499ab6fe48c6488e23ceeeb962a01ac"
  },
  {
    "url": "tag/index.html",
    "revision": "883e9c5bb71f15a51b74d3b25ecf24b8"
  },
  {
    "url": "tag/Java笔记/index.html",
    "revision": "840aa2be54e02e48a1970b4a12f5fc27"
  },
  {
    "url": "tag/mysql笔记/index.html",
    "revision": "39eeec0ef739fa84087007b13271ac69"
  },
  {
    "url": "tag/vuepress优化/index.html",
    "revision": "a8c912f6a100d9c018171319980c4617"
  },
  {
    "url": "tag/Vue笔记/index.html",
    "revision": "a2a0971d53c4a7c022b429d715265080"
  },
  {
    "url": "timeline/index.html",
    "revision": "b85c60c1de7a17f6fb7b0d97b7ca6fb9"
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
