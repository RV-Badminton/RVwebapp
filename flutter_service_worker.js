'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c53785344e8e072517494bfdb77e657",
"version.json": "e10d5dba5296e1ce2e83f1edb5a65a36",
"index.html": "c3db2c95b331d29ee2d948d367d73631",
"/": "c3db2c95b331d29ee2d948d367d73631",
"main.dart.js": "6dc37fac9aac2cd7e80d16d633fbad43",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "34d032a0089ad15c7ad3ad194034bf8d",
"icons/Icon-192.png": "d6b0a3686302180a4255900e5c77eccb",
"icons/Icon-maskable-192.png": "d6b0a3686302180a4255900e5c77eccb",
"icons/Icon-maskable-512.png": "64e72e5c8acf40fce11cd20f6c5fd83b",
"icons/Icon-512.png": "64e72e5c8acf40fce11cd20f6c5fd83b",
"manifest.json": "e9d10c911ef722474f7937e486156690",
"assets/AssetManifest.json": "774bf12d6d8493af40c34c81cdbeedcd",
"assets/NOTICES": "7e8dd4e8283e34e8ec0fa876a8a5fe90",
"assets/FontManifest.json": "d27eb82c4cea8112c449664ba240ca6f",
"assets/AssetManifest.bin.json": "020dcd053f3a826463103e0d6aab2d05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1b5634953f2674404ac41a77135a0357",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0e33f849ad9a42bb426decc1d76db4e0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "53754c92f78fd4fcedad5a47e1a75cff",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5c271b9ba64df2b68292259ad77cdb28",
"assets/fonts/MaterialIcons-Regular.otf": "b0f8b4de7f10528253cb69ad9ebb83de",
"assets/assets/images/court_images/court_theme0.png": "0fa64467aad25611d16fd5ae74ab8055",
"assets/assets/images/court_images/court_theme1.png": "77c2aa6ca856127ec1261a16fd2e6282",
"assets/assets/images/court_images/court_theme3.png": "0fe76e122ce89bbfc5c9a15797caef4b",
"assets/assets/images/court_images/court_theme2.png": "bd1a070e87d36e8d6458cf6fea38195f",
"assets/assets/images/court_images/court_theme6.png": "0f161cb2b63a3827377963256616b9c8",
"assets/assets/images/court_images/court_theme7.png": "d741257f4d856e8467fe7e6bbf012fed",
"assets/assets/images/court_images/court_theme5.png": "48514eacb776b0a2fad04c37f5944960",
"assets/assets/images/court_images/court_theme4.png": "8a4922386225f3bfe6b9c5dbfffb9c9a",
"assets/assets/images/202501-schedule.png": "1b3cda550608d980d0faf21f6ecde27e",
"assets/assets/images/leaderboard/leaderboard_MD.png": "6bbe054bcccedf2b8f53ebc402e18fd0",
"assets/assets/images/leaderboard/leaderboard_XD.png": "efa23472254b9e2c4a8207839f05ebf6",
"assets/assets/images/leaderboard/leaderboard_FD.png": "a0f165f4fbf090baa9ea06261441e85e",
"assets/assets/images/leaderboard/leaderboard_GP.png": "b9c92f9c1df71876cd9338aa5cdcdf81",
"assets/assets/images/RV-logo.png": "8afc699891fb6512a604f1fa24238e16",
"assets/assets/content/dev_notes.txt": "2bd9127d1ef4a34cafb3f14a19c72b4b",
"assets/assets/content/rulebook.md": "ad88c65b7cf6bad03e63564bc23861be",
"assets/assets/certificates/cert.pem": "e003bc5da19cef69c03732e252328bac",
"assets/assets/icons/app_icon.png": "21547fa5ef721587a4b7306b2cd4c868",
"assets/assets/icons/instagram.svg": "17293cea6e5f0f66011ea850ddb5fe24",
"assets/assets/icons/kakaotalk-icon.svg": "34f14dc269f4db22bb46f41dbf7927cf",
"assets/assets/icons/youtube.svg": "41e83c54822a91a096715094084f27da",
"assets/assets/icons/app_icon_old.jpg": "3de916f7441b42aa3e58db24a79d2c0f",
"assets/assets/fonts/CookieRun_Regular.ttf": "b6c8137dd2e215ed1aba2ebfc45c93c4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
