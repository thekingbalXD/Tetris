importScripts("/public/serviceworker-cache-polyfill.js"),self.addEventListener("install",function(e){self.skipWaiting&&self.skipWaiting(),e.waitUntil(caches.open("simple-sw-v1").then(function(e){return e.addAll(["/public/ambience.ogg","/public/beep.ogg","/public/key1.ogg","/public/key2.ogg","/public/key3.ogg","/public/key4.ogg","/public/space.ogg","/public/DejaVuSansMono.ttf"]),e.addAll(["./","/manifest.json","/public/styles.css","/public/tetris.js","/public/play.js"])}))}),self.addEventListener("fetch",function(e){var t=fetch(e.request).then(function(t){var i=new RegExp(e.request.referrer+"(|.+\\..+)$");return i.test(t.url)?(caches.open("simple-sw-v1").then(function(i){i.put(e.request.url,t)}),t.clone()):t}).catch(function(){});e.respondWith(caches.match(e.request).then(function(e){return e||t}))});