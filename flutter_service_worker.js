'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "69e5833754a84e4745084b67a9526eb3",
".git/config": "51ac2ccc8d47d3a41fc008fd1781015a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0247fa0d0ff74dda211de46ea39ff93a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b30f109724b24e05f0551a4cd8db468c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbc074cb0274edc090f95682081f349a",
".git/logs/refs/heads/main": "45406f39d527d2fd269411cdee9db13f",
".git/logs/refs/remotes/origin/main": "53c2aac1f13c19cb1363f447c6e8171a",
".git/objects/02/ed007e2a7ebd5ea059f8987b67475cb5742b5c": "6a342e187a0174742a697bddb1d3600f",
".git/objects/04/b68868afbd1ca9f36eba9b852ac1a82dedcfbb": "df450474d8b0a5c1296c854477e89226",
".git/objects/0d/cef7d673b2162ee759fcccdfe024155fb6a578": "ebb555c2271edd90b8c37bd7ead482fb",
".git/objects/11/972035697512151d98578dc0a5bd20e87bc361": "4fc7d8fe4a2a6004b6ebec4f04cbb786",
".git/objects/26/4e58227cd5ce4c4a0a5d1cb90a28581659cd0f": "ce2a19fcfeea940c1dc4ca236a8f4806",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/47/e72146dcea92f43c35bf8b53ae9a06b59aaac0": "2a6b839e550fe6932bc447112163b286",
".git/objects/4a/205b41647079fbabeb8c28aa312547d502cbb7": "6f495c3c8d2bbbb70465fafcfe95d72f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/e414be0da0f7148820af81998920afec30613c": "7160ef51bee363bcb0ff2bb521535075",
".git/objects/59/b556195a0e151fdc7ee36aa9313e72fb343877": "96c15b140ba27d5b57b149efc28db7a0",
".git/objects/60/068b7da23cd0ce594c8852e4071a4607786f07": "7ad8988d38ca9762a895c6ba72ec3878",
".git/objects/69/325321ce7864c15ef2fd50f0cb9819d4f4d7d7": "38dfc61da9f87fd52c1d2bd470bdc6f5",
".git/objects/72/1ee04093c49e28194731606e5224261ea6c246": "9a5d8e1b368dd4f3e9c73b32cc01a010",
".git/objects/73/e2d8d7f5277fc6b4a38560337a92785d86cb79": "de9892bc6057708ce8c55c157c9b789e",
".git/objects/85/48ac5600c9f10e4ff77f730ed98bbf04a60376": "ae0c850be26fec3cabf546bb7e8d3d42",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1f1d634f8f47dd108a26c0266939e9683887d8": "65c2ef799baec97450bd80206f2cde9a",
".git/objects/99/c5b55046c8bcdc4af2c335f81023ed45e45f01": "83334026e82f220b4d9e1a4fce99538c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/afba8b086aaf02af65dba542acd04ab745f37f": "043f8fb7bae1a84810a898b3df468a11",
".git/objects/b6/a01f6d7ce12c04e5add7c1a1fbdfd32b3f98f6": "d0e2d95dc0c8825b0774f180d7df04ca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/3164cdbde759104624ada858d75c16c66fa5aa": "9027468f4ac15786957a432d170616a2",
".git/objects/bf/1fd1a298a1136a0e20d7b53cad82c001db31ed": "309a9405ef69f09c55777038469db493",
".git/objects/cd/4edff397cf13b565b95b12cbee9817fe202829": "030ff18ab54eba7d407da3ff29b6258c",
".git/objects/d2/7112cb4af458cf9efbe03f9284fc686328e3f5": "610410aead416b57fd067ab46b08cd1b",
".git/objects/d5/36b7f01c3778ffe7d6215db178dc6965b42675": "779be0d940e1cb479f0cc5b53cd8adb2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f31cfe951f68958dc275995139975c50438300": "16ab07986149ba12f2f67dceae5e5fb1",
".git/objects/dc/118fc8a5df14fde4d26fb83fb70e6f77db1a1c": "d83d7f468f1eeac77c423499498bb53b",
".git/objects/dd/dd6850d1b34cd5676de7b16b55a1c7a28f235c": "afc7471e043220cb9e30f38e234474c3",
".git/objects/e0/3b6e34c12418b6099e3c2382d1330e0a231ee2": "fc084fc09e61f201f65d8a9948a298c2",
".git/objects/e3/06d9fc71c505027cf94b6f283b524c2a154f99": "40ded39fc133108d9bebb73ee2be6ff4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/80e134e882b9bb5c55a2ae7c623c69091d01a0": "dcbe942711d2936652c1bc1a68a55485",
".git/objects/f8/7c68444ee3772467e086b27fdb9c54c504f6ab": "3326f0465b0b4daa4eefda68b1ee3fe9",
".git/objects/f9/c2d859a3398d2265898b8ca8e004cc27ce0e40": "7ab2b50c81c1985fe38b1f7651517704",
".git/refs/heads/main": "d5c3ad73130072069f9ec0f54b483f91",
".git/refs/remotes/origin/main": "d5c3ad73130072069f9ec0f54b483f91",
"assets/AssetManifest.json": "2a65c973ad0c0a311d83be408826d24c",
"assets/assets/svg/ifpa_vertical.svg": "479a82f99853b20c54b92337cd87b333",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "eeab11319903f7e08e7bc013fc009cb4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e24e05f7cebc8514d70e2819b6dff768",
"/": "e24e05f7cebc8514d70e2819b6dff768",
"main.dart.js": "f23c5f15353986d77d9aa30c6b64d564",
"manifest.json": "6b66279e65f648855800ba2191f958c8",
"version.json": "74ba07d82d06e3b5d41d25dba103987f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
