'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "96c8d8ae34227753ffc156f1832daa71",
".git/config": "2ad4717419cc3c0dc7500aefff189dde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ac9ea78d4439efae685d686f3598c27f",
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
".git/index": "98d57502333a9fa57ffded816c4154dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c3b4c617d8c933bb2102d9f9341bee7",
".git/logs/refs/heads/main": "1c3b4c617d8c933bb2102d9f9341bee7",
".git/logs/refs/remotes/origin/HEAD": "6924b08ebb6cc6be89543edec0c6ed29",
".git/logs/refs/remotes/origin/main": "ad3e046dfb7dab21c36ccf1ea5ef9dc4",
".git/objects/01/30b88f617664e3beee1356a72bd9c858786a5c": "9865964b6cc4af4343f7e0667e2a0274",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/a185cd7eed608ce175c92793939b16de67c322": "9ab42681e754148f1a442edef41d94c7",
".git/objects/06/33c8e057af1543c43679c3e7afcc443d0f3942": "f5db98f9652be2cb83a978a563517c3a",
".git/objects/0d/77f8e3f28852c040172897e7eff43fe632016b": "4580b271f08fedfbde2dc398152be4e9",
".git/objects/0d/9cb033985d71ef722d49cd9014340ef7780340": "a85a22aa05293e26b24c0e2efe67ec5e",
".git/objects/0e/28f097db212bef16e254590ca81189aa664e12": "92c7e8a2261f27fcb7de81d3c679d97e",
".git/objects/16/1bf32e92633277159c7846a10806fc877ee0a8": "e510f99ca26991571adf64b5a254dc06",
".git/objects/16/3e66ac12375b54e18de0e71ef48e9451db6196": "172ca53a63012e95aa0887314e362eb4",
".git/objects/1b/2662b70afb1bc52373a4578709cc6103325ff3": "16b7cc103650d2fad0508d94b5a95603",
".git/objects/22/1df1756a07e95b46347620e79ee62e54df74da": "e8c89a7d2a8d5d57081be1a65f4e384b",
".git/objects/22/4738909d9220040ce0bcb01daeb85743b941e1": "2ee0289a1aeb5b500d45bf2fa8f8d5f0",
".git/objects/25/223d77fd92ca3047a22d1cdeb2baf6eedd1c24": "ee5439995aa431447299df7b41a85814",
".git/objects/25/af4f4c8be96aee6bdc27b8d9dfd31030e22e77": "fd35d45290676b494c13ea1ae6a9ec90",
".git/objects/27/bd2ce4120f8f464e162ad4a2ec8565037b56d3": "047553b240b9007a453b502c21c70319",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/2e/d382a0d07a3b8696ad36d1107d1e8c271b23f2": "7a2bccb3d33db2ac4b1bcb60a99b5801",
".git/objects/2f/0692edecedf8f9d3f1fa3d891ac70c4a12b1fd": "4853183aa6969e896c04dca2a0275537",
".git/objects/33/f40d74d8c561ccd1200a2fa373235829534148": "62b99e47fdfb48a1548deaba7f38081d",
".git/objects/36/332238e8c12b1cd0bacb86db30a6e27a2fca48": "fd9acf0c84b4b0a3c09cb9d7df90e784",
".git/objects/37/a5eff479f251ffdb22c94ba16688e8a0d14ae0": "ea40942a7e97223d173b16e1783d5d90",
".git/objects/40/201ee1728c7e605b25b3afb7eb5003f16e5878": "dd753103d0074125c4f6f162a31a2165",
".git/objects/42/0d11278508a19785bc8df844bc57a840f232b3": "45184ab7d36db244929ad26a0e0c4b59",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4f8eeaca0d6a27cf25f9fb2721666b962c8ddd": "d54be67e4267e743ac602021fa24b911",
".git/objects/4c/7e71e050738f4e206edb29b7bde7873fce1a65": "bac85c65c636547568f4c75047a1ff1a",
".git/objects/50/bd59fba9b5a80845ca9d57186d6e308f70d8e8": "6440b0554813321130439e7a0de025be",
".git/objects/51/2158798112473fae023213dc73054b9a540acd": "eadb764b240e8656a60290c211f8eb61",
".git/objects/53/d73e3f98c7bcc28c5e10758ff2858e42fe4661": "f714dee87b2c134fa70e99d0d85c3ef5",
".git/objects/54/ee60438aeaca712ed2cc8614278ef996386648": "680c22ea7aad6d63d023f06cb514cc6d",
".git/objects/55/894749220dd76ef40138cdcf64e414ee193b65": "95a40160a2cf92d9e6a48c7843863e5e",
".git/objects/57/0849b9f49a1073ac5923a1ab8effd04ced11f9": "1a01fb46ff4d4244f76ce67b69d4a03a",
".git/objects/5b/5ace530bf1a6351fff7c602fbdc4806134f7d6": "1a59684dd0191be7b873e904f08aea75",
".git/objects/5c/fed524e70bbb9f926283717817641da37c54ff": "62048d83ed5e5b02da422d9682b12986",
".git/objects/60/bae5fecd3780b103110fa790c2ea591f930776": "b7ef69aada1803a89f73705d3376b295",
".git/objects/63/ae9808dfbaf8d6b657f225a7035da4d09ab5eb": "b610ed659941a888e3b7dd419456e6f1",
".git/objects/65/177106397cb3c0f82f88d048403e4e368cd178": "ef403172f1bd639c595c40252c64d9c0",
".git/objects/66/39067cabf4d7dcac55ec05efb9d84e01c97ac4": "a714acf1d64e38f5d0e0a20eb58e9177",
".git/objects/67/5d6b4e4d5137b47e549107635fc75ea72d7e82": "d34561085c711d57700d2b107d21bc18",
".git/objects/68/6fdf7b42fc2eda47676ca607ea7016d1399527": "fc7e0744d483b4285f40c54965f52a32",
".git/objects/6e/79893e32c9bc48c19654b18fa4643e359df12c": "43949f2c4cb979067660f57096a6220e",
".git/objects/70/d47b717d40b07227ee078fbcec4af9134be9f1": "3a82f2393c440b9b1b77f9361415c305",
".git/objects/74/f56d36b786990c154ef3474875a1d712b24049": "b370f5d1244e3ff0f90c0f6bd3f6f16d",
".git/objects/75/942f3bd6229904b7c6a4ed8316f2bb158ee7a2": "eacb10eb8e2144f38206e980f9041282",
".git/objects/78/ae939081c60626e22d03a510e30101ed866758": "6263098c0ccec1bed2754bb570c20814",
".git/objects/79/29b5b195d0885ae5980bffea4fe3f36023fc9f": "69684a5252e6755d2cc506b701407a10",
".git/objects/82/352564da42ba0077496b5c3cb5f4720e7c722e": "8e5bf62b2867127406b95a1e5b60813f",
".git/objects/82/4c6b5b2b8c1af8d76b2e334b7457b03ffad346": "860acc2090711c7cf2107369ba766206",
".git/objects/87/a309c1e1f452c74a3e5210620a0cf29b291d29": "b01c86a165020732e6d6492df1c933a3",
".git/objects/8b/0eee3fd04307e7fbb0f3445fa814acaa4a6388": "688e1b2ffe3ac3abe234235378a84957",
".git/objects/92/6d7fe98cd4eaead83ad4566ebacb86b49d934c": "fdcc26512f8018e12de6b4453d11b4b5",
".git/objects/94/4901738ff44800c2bff82a7d73311a53813280": "b4169124d4dcfb980f595e3e1423e128",
".git/objects/95/d5b18f0384a475eb8ee6a6efdb6da13fb046df": "40c10f983e7dda961baddff6c33e0826",
".git/objects/99/120fb3ac92c396fffea5c16ece421402548afe": "fc1cf1e6c5109e360e17d9bb2580aed6",
".git/objects/9c/91df3a7e11c26038075abf7160d56b630755cd": "6781562bbd86bfd4c75922c818dc6224",
".git/objects/9c/99635656340d9d664498942daabd14aea88c8f": "9b2029cb0f0b0d8f45c9e327801b0b3d",
".git/objects/9d/dc7283ac03bc78f209be8f785a8c578128d186": "f2fa6171a7bcee18c2975514fd6c74c0",
".git/objects/a3/b2545f1dfc04eba0b055dae805365e6aca20eb": "f47cbae876406af5a871acc4d1fb32d4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1d1f045b01328657152b2d8ca998be5cdaf72d": "5a988b8897d96cd7312bb8eb53f59487",
".git/objects/b8/1d329c43569a41d5c065358b14e48c777c7412": "b031135ecc944859268ac312f6ffc056",
".git/objects/bc/75e75667fc3727d37aef97d70b727945581b98": "783ee0a8436c3e047aaf1a0226ac8f88",
".git/objects/be/2acc06f05722751c0cbdbed849c372e3522d5c": "a69708b0615e731f93c84651b15007bf",
".git/objects/c1/4724cc17c4f21affbfa4a954ca772db7231144": "a0b58a39e4c6e12fac0c986544ca59e8",
".git/objects/c1/e1db9d9826a333aeac1ef444f9e35cd617ab06": "20ade9649f3c50f5342350f5afa49b02",
".git/objects/c2/bf02c721df6e7c722de3d4a4bde51f56bbc872": "2ecc5559c33ef17071ef00cab9287133",
".git/objects/c6/2fc90018311e14e380c6210244a932bf92f408": "21305b8b4b4aac9cc5dfb0e34cd18424",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/d4/2a83efb661d780f8fc8811be33797096cd2fc4": "4a195ee9965b1d711919f4efb3aed855",
".git/objects/d9/336721676fc8d1ef73f5e0a17400adf3583bb0": "cc6379a46dd81030a11485428f6da77d",
".git/objects/d9/abc84c5ba58b45a9e8bd3ba20e6e42331b492e": "e4926ec4cce6537b16c6d829ecc95602",
".git/objects/e6/8d99e49f61504071cc88e3dafcffa047d7efb8": "88710d95a6a2d1e680117c644e8f703a",
".git/objects/e8/4a27cebffe003efef8117fa83b6c91b9931aaa": "e2c9ef77948cdf8a0254d749e5f1c625",
".git/objects/ea/ac465a2184f39205d74cbe97f0b4aee5827bc4": "425b87d2bc4190cdfe76d34f712db9ff",
".git/objects/f0/b93684299e45125729b410628266d53336fd14": "92031efc0a5cfaaff80b55239868d626",
".git/objects/f3/04b5291190dabd07bcf0bd0f7f3c91f94e9593": "d03c526ab1338e230e757d1eadbafb8a",
".git/objects/f8/9ad45b325b2c6493663b4a97c0a6f323311a66": "4516c6b6012c06e1efb11e8d2ff90379",
".git/objects/f8/c97435dc57a86278c930f59272902d7b514179": "c0243e475c39829d34f6f286cf45df17",
".git/objects/pack/pack-37881a0ce991904f7e064197e764803072108113.idx": "73a85cdc9d30efb94de9b26afd50c8f1",
".git/objects/pack/pack-37881a0ce991904f7e064197e764803072108113.pack": "b66d24bddc9107c963a2a0ea7a531f80",
".git/ORIG_HEAD": "6ccc72691626ef7b2d08683ffb287108",
".git/packed-refs": "fd4af720cc0e5e100a5d87f0df09b5ce",
".git/refs/heads/main": "6f84387cd18e484bd85b71aecea8605f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6f84387cd18e484bd85b71aecea8605f",
"assets/AssetManifest.json": "521c8ec02c4f98a77004694562aead89",
"assets/assets/about.jpg": "db644f1fea4add2815519f418897f02a",
"assets/assets/caverneAuxJeux.jpg": "3b997b3e2123d62da43446cd90ed7816",
"assets/assets/gestionnaireBiblio.jpg": "417ed874fabc44a0e9166453ee9e4095",
"assets/assets/highschoolwebsite.jpg": "6c6dd3206d43ddf73c7c3c7c9819083f",
"assets/assets/picture.png": "fc6b5bbe8c6df1b7c07447a654b15d33",
"assets/assets/project1.jpg": "acb28abb725048a1abda78cbc7fab415",
"assets/assets/project2.jpg": "85dee06470fc86cd2dd8bc9da6d3fa5c",
"assets/assets/project3.jpg": "96ac83eea93dc210fa1d4c30044e7f87",
"assets/assets/siteCYJE.jpg": "674491f390cb86becd05a98864e36138",
"assets/FontManifest.json": "3b3ce76625f61b13e37a80bc65b9834e",
"assets/fonts/Barlow-Regular.otf": "8198537e317a22b04d6f47bcae94066a",
"assets/fonts/DMSerifDisplay-Regular.ttf": "359da22031d8335655a8cd93fc979eab",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "137fb34a689c3bcddab6df909d618adc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0b371bb69fc344c24c80f0bfaa6fae5",
"/": "f0b371bb69fc344c24c80f0bfaa6fae5",
"main.dart.js": "320e9a06e09b46813166b63452971c51",
"manifest.json": "0e77d1c73195f973b918e8c749eec777",
"version.json": "426313f2f3133c2f20415344c4a22df3"
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
