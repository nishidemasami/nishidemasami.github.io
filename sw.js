if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ILu97a9SvA9pE4iTx-rWu/_buildManifest.js",revision:"faf9f522f8c491c4dbefc89feb6829cc"},{url:"/_next/static/ILu97a9SvA9pE4iTx-rWu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/167-dc4bcc2fb801564d.js",revision:"dc4bcc2fb801564d"},{url:"/_next/static/chunks/185-80027419834563f4.js",revision:"80027419834563f4"},{url:"/_next/static/chunks/322-23f24296ef674a1c.js",revision:"23f24296ef674a1c"},{url:"/_next/static/chunks/732-43e41e6b4ea342c1.js",revision:"43e41e6b4ea342c1"},{url:"/_next/static/chunks/814-f83b2571d190bfbd.js",revision:"f83b2571d190bfbd"},{url:"/_next/static/chunks/857-b47e4468e46433a5.js",revision:"b47e4468e46433a5"},{url:"/_next/static/chunks/885-aa7409af9326ca5e.js",revision:"aa7409af9326ca5e"},{url:"/_next/static/chunks/fec483df-3532d1cfbe5589c4.js",revision:"3532d1cfbe5589c4"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-b338f50018fba703.js",revision:"b338f50018fba703"},{url:"/_next/static/chunks/pages/%5Bpage%5D-1ad1df64bc6ba2d6.js",revision:"1ad1df64bc6ba2d6"},{url:"/_next/static/chunks/pages/404-3278b3d99968989f.js",revision:"3278b3d99968989f"},{url:"/_next/static/chunks/pages/_app-d001a0c916934527.js",revision:"d001a0c916934527"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/about-dae516e0f7e317d9.js",revision:"dae516e0f7e317d9"},{url:"/_next/static/chunks/pages/articles/blog-remake-with-gatsby-925e685d6ce57118.js",revision:"925e685d6ce57118"},{url:"/_next/static/chunks/pages/articles/react-sound-test-efaea479469c700e.js",revision:"efaea479469c700e"},{url:"/_next/static/chunks/pages/articles/tamplate-0ffbe3013b5b1b0c.js",revision:"0ffbe3013b5b1b0c"},{url:"/_next/static/chunks/pages/articles/typescript-bitcoin-368b9432cf05a05e.js",revision:"368b9432cf05a05e"},{url:"/_next/static/chunks/pages/blog/%5Bpage%5D-877296a7788e0cfc.js",revision:"877296a7788e0cfc"},{url:"/_next/static/chunks/pages/feed/%5Bfeed%5D-ec24ba285f6abc75.js",revision:"ec24ba285f6abc75"},{url:"/_next/static/chunks/pages/index-a52cab5174da2573.js",revision:"a52cab5174da2573"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-f3f6fcf1b72779fe.js",revision:"f3f6fcf1b72779fe"},{url:"/_next/static/chunks/pages/tag/%5Btag%5D-362f31d09825b720.js",revision:"362f31d09825b720"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36d12a75f0098f30.js",revision:"36d12a75f0098f30"},{url:"/_next/static/css/5c255d7bd8d406fd.css",revision:"5c255d7bd8d406fd"},{url:"/apple-touch-icon.png",revision:"86cb4bda7cc37d36dd276b45218249ee"},{url:"/assets/images/author.jpg",revision:"f9878d222f9bf8aae512a65014798501"},{url:"/favicon-16x16.png",revision:"3874f7e8f9ecfeff91b68e4355ce47f3"},{url:"/favicon-32x32.png",revision:"95402474849a82250e3cf44db4bb6479"},{url:"/favicon.ico",revision:"401d773bd92ed39d6cb959c010c50f50"},{url:"/icon-192x192.png",revision:"5b6fe097ff405db2d24aeff9c6b3f97b"},{url:"/icon-256x256.png",revision:"a11eb9bba440ad679c2e16f32c4dedec"},{url:"/icon-384x384.png",revision:"09bcaa94618a8d0b6a8c79fdbd50788e"},{url:"/icon-512x512.png",revision:"0c8e89f398ae346e417bb4afe209e0ae"},{url:"/manifest.json",revision:"fd1b66629294eb38ae3c88f0e8e220b6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
