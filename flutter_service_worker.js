'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5945e9b391f7982d62c1c5d62de1f786",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "ac1bf517232a0b6120a000723d2372c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17211d88de15a02fcb68d54352818262",
".git/logs/refs/heads/master": "17211d88de15a02fcb68d54352818262",
".git/logs/refs/remotes/origin/master": "79357f07e4afa4b8072dcd6c0f0535cc",
".git/objects/0b/fe5fb771a6872439c8807ff00f12844777a36e": "663684d7597349adf2e1900d11acd5dc",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/da8d963253cbca9c312c640acebbeb0d1b18e6": "cd7c6adec037e2a9d54f7f048116b45a",
".git/objects/2a/575b4823159b4bcb959e5285d65577ec6becfa": "5cd234894ce6620dec4c5cd73d8c7bb7",
".git/objects/2d/4db74192a1bd5ca3cbe0a33bbcc8046a4f7a1e": "23b197d3fbbb64e070f6ad585b0d7293",
".git/objects/3a/3df5b77ecc35731cfb40fa402828a15ac94476": "3451d6266bd673cf6e2b4634b5469870",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/90fa8ddf5a9c636a4fc37325311deb036eb4a3": "2c1b7e946420942accdc94e42d1955ec",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/1b0b4f7268fd6e199c3f6c158330f77a5c1f0d": "02b676d7678dffdedb7690529061b920",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/55/d0948980d1df080691f088fc8cdc707839cd95": "5a9c735045375b82d1cd529bcecef48f",
".git/objects/62/2e6253c1931552cafe36ebe9be89bebad8630f": "ca45f09144271e2470497413e56f5aff",
".git/objects/64/254098de81c6cb3cd7226d8e5e02c890f0a23d": "570504478477b2ac8db4822cce5410ed",
".git/objects/66/57838d927343e6deee3ae5a9ce8cd57a9c0a28": "df794f4ebf24f1325fec4ddae2f4239d",
".git/objects/69/7567e748bb33329ebcaba8491f7659f938861e": "9a1db730d7a76c8a86af0d966f403a6d",
".git/objects/6e/9d06d1df8862da24309f5851b77d55e25825d8": "f952e9da93c6efd1adc291595001e8f2",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/85/b739474e15809443592206f5ea6ad00f402397": "33816601c9070e04b1f9e0e6b92e56f6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/195752329da12a11eae2b23e4dff286b280391": "c1da5259b060ef4cb94de302924a405e",
".git/objects/94/e7db1c18a9d3cc21f197cca9edf0f60b69f3cf": "9de176c008fcb9259401e96e57b8ddc7",
".git/objects/9f/1d7bb59c0cc78fb8c391c97e22c7dd61eb6c4f": "fd6431c228b1c7b4c3b6732cdf87ffbb",
".git/objects/a8/fa1c36bf40919b9cda1e6d323ae32b88774692": "b6600ec4e13ffb236067747723cc9198",
".git/objects/ae/4397199876259da026b35e64c39818d53cca5f": "1fedc01a8b283c1fb2b364bc33cc3007",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/63ea5b714a467f24080bd5f0cbac94e603f069": "4cbb9e4de677febb4d5befa68dbe319a",
".git/objects/c7/5704969786193a27bed7ee378dabe77d74bef8": "6e4c408945990441f87c2b9a0b1ff050",
".git/objects/e3/5a998d484870c76bbb9b99fb496eca88737d88": "f173ed8ca350c2fe3f2e1745a725e3ca",
".git/objects/eb/5893481b3164efb3502471af11dfc6eb4d8e48": "bf072718726e0f9e8996af46a922d352",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "9e09ab9fda9b963254c1bd30b456593d",
".git/refs/remotes/origin/master": "9e09ab9fda9b963254c1bd30b456593d",
"assets/AssetManifest.json": "1f9cf6915aef84cdadee0e98c086acef",
"assets/assets/1.png": "23664bc3b1704da6509236d758b1c310",
"assets/assets/10.png": "20b04167f8914bebbcce9d5b14a16a28",
"assets/assets/11.png": "5d42ff7a6f147aff35b1806bdba59dd6",
"assets/assets/2.png": "36944eb716875a5f40887c2d46c72f54",
"assets/assets/3.png": "5bce35dfa4f24dc0c33bfea3dc5a2341",
"assets/assets/31.png": "8681881fce9e941fe5c61cfb95e508ab",
"assets/assets/5.png": "d667f4e738303696b16d513bbfd2b275",
"assets/assets/6.png": "2dc12f913467989c5249e928256c6a65",
"assets/assets/7.png": "e9e0e69100ff4170665dd2927e591b4f",
"assets/assets/8.png": "cc35482e581c6acbdd51508cea3a2205",
"assets/assets/9.png": "33d1f61aa09dbc6e426ae898892ceda6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "00f303700da4d974f384bfe26dd5797d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "8681881fce9e941fe5c61cfb95e508ab",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "460a0cf3ff613ae60062968fa8f8d816",
"/": "460a0cf3ff613ae60062968fa8f8d816",
"main.dart.js": "2a0f26e2e8e78d8af580006e8fe35e8b",
"manifest.json": "bb1790e8370b7a52e74796b9fb84f125"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
