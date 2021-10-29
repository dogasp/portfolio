'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cd818bf714d4eaaa495b359684862630",
".git/config": "2ad4717419cc3c0dc7500aefff189dde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "66aa99b66ca7f085cb97585ae8ed20d0",
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
".git/index": "0c79d4fc8c59946fe5fabfd9abc6d215",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aaa786720f71755e1b8342d7f782fcff",
".git/logs/refs/heads/main": "aaa786720f71755e1b8342d7f782fcff",
".git/logs/refs/remotes/origin/HEAD": "6924b08ebb6cc6be89543edec0c6ed29",
".git/logs/refs/remotes/origin/main": "d9495cbc76a249687f7a11a23f7fafc7",
".git/objects/60/bae5fecd3780b103110fa790c2ea591f930776": "b7ef69aada1803a89f73705d3376b295",
".git/objects/a3/aea94a27d5c7b160fa568136b12946a6aab8c2": "e4940ebb8efd90b1d5b2083890dd0b92",
".git/objects/a3/b2545f1dfc04eba0b055dae805365e6aca20eb": "f47cbae876406af5a871acc4d1fb32d4",
".git/objects/00/6c20d4156ecc0e581b8d36f71d737439154a36": "57f4e6b07a2ee4da9d57ec1757bc864a",
".git/objects/01/30b88f617664e3beee1356a72bd9c858786a5c": "9865964b6cc4af4343f7e0667e2a0274",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/a185cd7eed608ce175c92793939b16de67c322": "9ab42681e754148f1a442edef41d94c7",
".git/objects/04/abdc807d78040f65e0c0b09cf2a44a3b8edf27": "c09cd40a6fdb5ea5044cb8db1dd52477",
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
".git/objects/29/0a7e601837d5a4aae9e492e549caa9389681c3": "1b9e2a35a269c033bc1a74bb3c0e360e",
".git/objects/29/4e81140cde9c467f3e311e58b9856c462c3d7b": "49241fceb412590bd823fbcdc95fcbfc",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/2e/d382a0d07a3b8696ad36d1107d1e8c271b23f2": "7a2bccb3d33db2ac4b1bcb60a99b5801",
".git/objects/2f/0692edecedf8f9d3f1fa3d891ac70c4a12b1fd": "4853183aa6969e896c04dca2a0275537",
".git/objects/30/c177aa12fcf5df40a099b1f15c943ef980c204": "ad4c48e97703ba1651b62360d78d26d2",
".git/objects/33/f40d74d8c561ccd1200a2fa373235829534148": "62b99e47fdfb48a1548deaba7f38081d",
".git/objects/36/332238e8c12b1cd0bacb86db30a6e27a2fca48": "fd9acf0c84b4b0a3c09cb9d7df90e784",
".git/objects/37/a5eff479f251ffdb22c94ba16688e8a0d14ae0": "ea40942a7e97223d173b16e1783d5d90",
".git/objects/40/201ee1728c7e605b25b3afb7eb5003f16e5878": "dd753103d0074125c4f6f162a31a2165",
".git/objects/42/0d11278508a19785bc8df844bc57a840f232b3": "45184ab7d36db244929ad26a0e0c4b59",
".git/objects/43/758fc92998ef7903c570fe72b1f403a1ae596f": "550c960da55d12abb9eaf50854db78a8",
".git/objects/45/bdec8570c7d696d9a71cab4afdcb479ae4c81f": "86c80045b738a439825a7ca6feb1d470",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4f8eeaca0d6a27cf25f9fb2721666b962c8ddd": "d54be67e4267e743ac602021fa24b911",
".git/objects/47/819c3fc6464911abcf31690980c6759c909fe6": "67627c89c507f64847bc11995e8ebb53",
".git/objects/47/9620eb9afcbf5fa4fa7f5c352228bf650d8d62": "6dea97351754a02780b369a746b2939f",
".git/objects/4c/7e71e050738f4e206edb29b7bde7873fce1a65": "bac85c65c636547568f4c75047a1ff1a",
".git/objects/50/bd59fba9b5a80845ca9d57186d6e308f70d8e8": "6440b0554813321130439e7a0de025be",
".git/objects/51/0daa9df47325597688c9d96cd176592b86ce52": "88e19aaca590268f1b59ebf643680d6a",
".git/objects/51/2158798112473fae023213dc73054b9a540acd": "eadb764b240e8656a60290c211f8eb61",
".git/objects/53/d73e3f98c7bcc28c5e10758ff2858e42fe4661": "f714dee87b2c134fa70e99d0d85c3ef5",
".git/objects/54/ee60438aeaca712ed2cc8614278ef996386648": "680c22ea7aad6d63d023f06cb514cc6d",
".git/objects/55/894749220dd76ef40138cdcf64e414ee193b65": "95a40160a2cf92d9e6a48c7843863e5e",
".git/objects/57/0849b9f49a1073ac5923a1ab8effd04ced11f9": "1a01fb46ff4d4244f76ce67b69d4a03a",
".git/objects/59/8a06b0c2c6f23cd2495a39348317f4629f8087": "1a8b220fd2f43cc200fa4ac6e4352097",
".git/objects/5b/5ace530bf1a6351fff7c602fbdc4806134f7d6": "1a59684dd0191be7b873e904f08aea75",
".git/objects/5b/bdd8df639a299908fdd50716b95ba55d2c1550": "aa9d608afd77614cf39498a1d2447acf",
".git/objects/5c/fed524e70bbb9f926283717817641da37c54ff": "62048d83ed5e5b02da422d9682b12986",
".git/objects/61/626914cda70f78f53206114b2ec293d6af12ce": "801b0564b71e56c2561e29a6fb8ba1ce",
".git/objects/63/ae9808dfbaf8d6b657f225a7035da4d09ab5eb": "b610ed659941a888e3b7dd419456e6f1",
".git/objects/65/177106397cb3c0f82f88d048403e4e368cd178": "ef403172f1bd639c595c40252c64d9c0",
".git/objects/66/39067cabf4d7dcac55ec05efb9d84e01c97ac4": "a714acf1d64e38f5d0e0a20eb58e9177",
".git/objects/67/5d6b4e4d5137b47e549107635fc75ea72d7e82": "d34561085c711d57700d2b107d21bc18",
".git/objects/68/060be533f45534728c9e7e70c7c09a7f4403e7": "9f703954e9e0f2305fc3bfe3fd211650",
".git/objects/68/6fdf7b42fc2eda47676ca607ea7016d1399527": "fc7e0744d483b4285f40c54965f52a32",
".git/objects/6a/6ad0a8b05a437e3a1d4f37279eba7009d32bb4": "9e543263e4ca3b79c28811bb1d0f8ccb",
".git/objects/6d/58a4b626f1b6ce8e17437a5e78b41bc0eda9c8": "6f1ee20b8008000802f2deff5f594aa2",
".git/objects/6e/79893e32c9bc48c19654b18fa4643e359df12c": "43949f2c4cb979067660f57096a6220e",
".git/objects/6f/12b12ef2fb5092685808eb531a69b71f7b4328": "b51a0a2afe48ef2374ec39b78257b82a",
".git/objects/6f/ca97ba7f5952b366dc508a6a4fbd57999f116b": "aee83f7abbd18891559a0e74b6932958",
".git/objects/70/8a84871890790bbeb7262da14ae05c72968ff2": "80e20583c0c2295cdf4fba9f573608a2",
".git/objects/70/d47b717d40b07227ee078fbcec4af9134be9f1": "3a82f2393c440b9b1b77f9361415c305",
".git/objects/74/f56d36b786990c154ef3474875a1d712b24049": "b370f5d1244e3ff0f90c0f6bd3f6f16d",
".git/objects/75/942f3bd6229904b7c6a4ed8316f2bb158ee7a2": "eacb10eb8e2144f38206e980f9041282",
".git/objects/78/ae939081c60626e22d03a510e30101ed866758": "6263098c0ccec1bed2754bb570c20814",
".git/objects/79/29b5b195d0885ae5980bffea4fe3f36023fc9f": "69684a5252e6755d2cc506b701407a10",
".git/objects/82/352564da42ba0077496b5c3cb5f4720e7c722e": "8e5bf62b2867127406b95a1e5b60813f",
".git/objects/82/4c6b5b2b8c1af8d76b2e334b7457b03ffad346": "860acc2090711c7cf2107369ba766206",
".git/objects/82/b85978564f514bdb877ef66c710ba2b3d1a64c": "7f77d773c222be4172b249cc3cd2daa6",
".git/objects/82/ec31844ea545143129109db995e7606d4ca9d6": "245ddc4aca58b871e5265d16d34b4d99",
".git/objects/83/5b5c33e1d36ad43799c9955c4d007e2c94a73e": "6f04fb76f330de49913990860e32ca7b",
".git/objects/86/0a74fc7318e31f0d20a4b74e753a0c0aa7866e": "ceebc63898fe6b5ae7149111258f579d",
".git/objects/87/a309c1e1f452c74a3e5210620a0cf29b291d29": "b01c86a165020732e6d6492df1c933a3",
".git/objects/8b/0eee3fd04307e7fbb0f3445fa814acaa4a6388": "688e1b2ffe3ac3abe234235378a84957",
".git/objects/91/b092c5630bc8852c82e80fc14c42d0cedfc857": "fec529594b45eb0b71a23bdbd1640a56",
".git/objects/92/6d7fe98cd4eaead83ad4566ebacb86b49d934c": "fdcc26512f8018e12de6b4453d11b4b5",
".git/objects/93/5370847b5b4cc41312edd4122775431cba47a1": "aa709d0bfa4764307cb5835c0c5c7556",
".git/objects/94/4901738ff44800c2bff82a7d73311a53813280": "b4169124d4dcfb980f595e3e1423e128",
".git/objects/95/d5b18f0384a475eb8ee6a6efdb6da13fb046df": "40c10f983e7dda961baddff6c33e0826",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/99/120fb3ac92c396fffea5c16ece421402548afe": "fc1cf1e6c5109e360e17d9bb2580aed6",
".git/objects/9c/91df3a7e11c26038075abf7160d56b630755cd": "6781562bbd86bfd4c75922c818dc6224",
".git/objects/9c/99635656340d9d664498942daabd14aea88c8f": "9b2029cb0f0b0d8f45c9e327801b0b3d",
".git/objects/9d/dc7283ac03bc78f209be8f785a8c578128d186": "f2fa6171a7bcee18c2975514fd6c74c0",
".git/objects/a5/91ad4fee6320a2d5d8df2611deb6bf4b594fa7": "b64eecec151dbac7febdaa5229c7de83",
".git/objects/a7/f2c3f4fea96313051672b60ffd9b1bab610ead": "d898b222c9bc3e49deb196f69a49acea",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f2ab1bc893284450b12621d9f6f4e764c0ca12": "0091a931334cfebd542471b43898a12d",
".git/objects/ae/1d1f045b01328657152b2d8ca998be5cdaf72d": "5a988b8897d96cd7312bb8eb53f59487",
".git/objects/b7/c850022595b658e6fa6f9c0a0b7c291e41a3f4": "237af40f3a76d6d3514105d227662f1d",
".git/objects/b8/1d329c43569a41d5c065358b14e48c777c7412": "b031135ecc944859268ac312f6ffc056",
".git/objects/bc/75e75667fc3727d37aef97d70b727945581b98": "783ee0a8436c3e047aaf1a0226ac8f88",
".git/objects/be/2acc06f05722751c0cbdbed849c372e3522d5c": "a69708b0615e731f93c84651b15007bf",
".git/objects/bf/5ca9221a14a4e00c0ada9a3507d98ad6af4f6a": "36f886074e8e4c38676d8a7e32716659",
".git/objects/c1/4724cc17c4f21affbfa4a954ca772db7231144": "a0b58a39e4c6e12fac0c986544ca59e8",
".git/objects/c1/e1db9d9826a333aeac1ef444f9e35cd617ab06": "20ade9649f3c50f5342350f5afa49b02",
".git/objects/c2/bf02c721df6e7c722de3d4a4bde51f56bbc872": "2ecc5559c33ef17071ef00cab9287133",
".git/objects/c6/2fc90018311e14e380c6210244a932bf92f408": "21305b8b4b4aac9cc5dfb0e34cd18424",
".git/objects/c6/a2d0f660d2f54d563e1d8c1c5c556180b216fa": "9e392cd7ff165ddfe2ac6ee270ff86ca",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/cd/2e35744498cdd55555ef59af36a9775ad95736": "c5f6295c288d10258d9a830fc0f99852",
".git/objects/d4/2a83efb661d780f8fc8811be33797096cd2fc4": "4a195ee9965b1d711919f4efb3aed855",
".git/objects/d9/336721676fc8d1ef73f5e0a17400adf3583bb0": "cc6379a46dd81030a11485428f6da77d",
".git/objects/d9/abc84c5ba58b45a9e8bd3ba20e6e42331b492e": "e4926ec4cce6537b16c6d829ecc95602",
".git/objects/e6/8d99e49f61504071cc88e3dafcffa047d7efb8": "88710d95a6a2d1e680117c644e8f703a",
".git/objects/e8/4a27cebffe003efef8117fa83b6c91b9931aaa": "e2c9ef77948cdf8a0254d749e5f1c625",
".git/objects/e8/67f611ccce7cd2bd9854419e5d4a60280ee6da": "57484f5b75eb121dc83c4df33cfb6e52",
".git/objects/e8/72090958f54fea945dba658fb0a50e6e12bbae": "929dfde480ca72441d172bdfbff5a1ba",
".git/objects/ea/ac465a2184f39205d74cbe97f0b4aee5827bc4": "425b87d2bc4190cdfe76d34f712db9ff",
".git/objects/ed/4742a6b4aaa95ed5c9edd8bfa11940b701ec93": "ef3fd02fc19fd1890e28aad34f0bbf08",
".git/objects/f0/b93684299e45125729b410628266d53336fd14": "92031efc0a5cfaaff80b55239868d626",
".git/objects/f3/04b5291190dabd07bcf0bd0f7f3c91f94e9593": "d03c526ab1338e230e757d1eadbafb8a",
".git/objects/f6/d556fa67752654b95e9c6a32a9df9f0e22527c": "96e13e4b258c5d326d94c4afb3d1bbbe",
".git/objects/f7/4dc7756f53bdd33461f1fbf52c96bb72a1b16d": "3a05e41393c935a04a0373bf9260fa7d",
".git/objects/f8/9ad45b325b2c6493663b4a97c0a6f323311a66": "4516c6b6012c06e1efb11e8d2ff90379",
".git/objects/f8/a40bbf91f19b7fedc411b6e1a535351747ff07": "de9e7a2186f804995a6dd506c221d056",
".git/objects/f8/c97435dc57a86278c930f59272902d7b514179": "c0243e475c39829d34f6f286cf45df17",
".git/objects/f9/2bc4297f93f07f75ebfa04a841578197e0d687": "d89a38389cf60f0c6c5605377f8c2ddf",
".git/objects/pack/pack-37881a0ce991904f7e064197e764803072108113.idx": "73a85cdc9d30efb94de9b26afd50c8f1",
".git/objects/pack/pack-37881a0ce991904f7e064197e764803072108113.pack": "b66d24bddc9107c963a2a0ea7a531f80",
".git/ORIG_HEAD": "4df5de79411cb6610e37b7274c5fb002",
".git/packed-refs": "fd4af720cc0e5e100a5d87f0df09b5ce",
".git/refs/heads/main": "c11f546a6797e438eaa11e1661bf1a9c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c11f546a6797e438eaa11e1661bf1a9c",
"assets/AssetManifest.json": "ab5508fe2dd411a26c68e0e43ee9c268",
"assets/assets/2048.png": "f38d881ef351c2b20dc4f3120a729418",
"assets/assets/about.jpg": "db644f1fea4add2815519f418897f02a",
"assets/assets/caverneAuxJeux.jpg": "3b997b3e2123d62da43446cd90ed7816",
"assets/assets/gestionnaireBiblio.jpg": "417ed874fabc44a0e9166453ee9e4095",
"assets/assets/highschoolwebsite.jpg": "e91415d5b3db4f833e9ef82a298f646a",
"assets/assets/lsystems.jpg": "57107463a93a88c02c97e1d94f2e5629",
"assets/assets/picture.png": "fc6b5bbe8c6df1b7c07447a654b15d33",
"assets/assets/project1.jpg": "acb28abb725048a1abda78cbc7fab415",
"assets/assets/project2.jpg": "85dee06470fc86cd2dd8bc9da6d3fa5c",
"assets/assets/project3.jpg": "96ac83eea93dc210fa1d4c30044e7f87",
"assets/assets/siteBDS.jpg": "ec5e32f08c23b95984f3dc7e8964f5b2",
"assets/assets/siteCYJE.jpg": "674491f390cb86becd05a98864e36138",
"assets/assets/traverse.png": "f425e1cdee6a7fb1a8481825b1efbd9a",
"assets/assets/webscrapping.jpg": "d9622a22baebea9b03a39cdc81b31d0b",
"assets/FontManifest.json": "3b3ce76625f61b13e37a80bc65b9834e",
"assets/fonts/Barlow-Regular.otf": "8198537e317a22b04d6f47bcae94066a",
"assets/fonts/DMSerifDisplay-Regular.ttf": "359da22031d8335655a8cd93fc979eab",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c53bb9b3baf6e0d6648b714a347a3b84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f559cfe54fa627620aff11fa5b8cccec",
"/": "f559cfe54fa627620aff11fa5b8cccec",
"main.dart.js": "ddcbed5af9161249c77c1f81405d1e41",
"manifest.json": "0e77d1c73195f973b918e8c749eec777",
"README.md": "6b5f95946558f70c8cf132ab189b9957",
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
