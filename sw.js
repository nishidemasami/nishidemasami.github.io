if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),d={module:{uri:t},exports:i,require:r};s[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9bZzroeQGaVf_2N3AUVnh/_buildManifest.js",revision:"1ccb94907da74189d9b3a1d5483eb8ca"},{url:"/_next/static/9bZzroeQGaVf_2N3AUVnh/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b7b90cd.980a42d700821c9e.js",revision:"980a42d700821c9e"},{url:"/_next/static/chunks/160.08cbfd82527659a3.js",revision:"08cbfd82527659a3"},{url:"/_next/static/chunks/167-a0c5ec71b9d13ffb.js",revision:"a0c5ec71b9d13ffb"},{url:"/_next/static/chunks/180-df3ef8a9a15cdbc6.js",revision:"df3ef8a9a15cdbc6"},{url:"/_next/static/chunks/228-7c12ae5a1df33b85.js",revision:"7c12ae5a1df33b85"},{url:"/_next/static/chunks/294-9797df6f3fca2db2.js",revision:"9797df6f3fca2db2"},{url:"/_next/static/chunks/421-d2f49daad13d6287.js",revision:"d2f49daad13d6287"},{url:"/_next/static/chunks/481.db90c1eb4fb7f715.js",revision:"db90c1eb4fb7f715"},{url:"/_next/static/chunks/488-46c7ae8272dc0218.js",revision:"46c7ae8272dc0218"},{url:"/_next/static/chunks/673-dec65fbcf10eb7b3.js",revision:"dec65fbcf10eb7b3"},{url:"/_next/static/chunks/72-faafd1e66a2fd8bb.js",revision:"faafd1e66a2fd8bb"},{url:"/_next/static/chunks/806-e181566f126f700f.js",revision:"e181566f126f700f"},{url:"/_next/static/chunks/814-09858d55d6448830.js",revision:"09858d55d6448830"},{url:"/_next/static/chunks/882.68f79dd46839e5af.js",revision:"68f79dd46839e5af"},{url:"/_next/static/chunks/901-c73a82bca76e467d.js",revision:"c73a82bca76e467d"},{url:"/_next/static/chunks/903.16583b17a69d109d.js",revision:"16583b17a69d109d"},{url:"/_next/static/chunks/928-adb46c74ed7f4e98.js",revision:"adb46c74ed7f4e98"},{url:"/_next/static/chunks/fec483df-22a673cbe2ade4ab.js",revision:"22a673cbe2ade4ab"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-0df980b3767216f4.js",revision:"0df980b3767216f4"},{url:"/_next/static/chunks/pages/%5Bpage%5D-57a1920929979e9d.js",revision:"57a1920929979e9d"},{url:"/_next/static/chunks/pages/404-13e7db30c8186b0e.js",revision:"13e7db30c8186b0e"},{url:"/_next/static/chunks/pages/_app-95bb101882f22b26.js",revision:"95bb101882f22b26"},{url:"/_next/static/chunks/pages/_error-a51993fe870ec2c8.js",revision:"a51993fe870ec2c8"},{url:"/_next/static/chunks/pages/about-35e3920e5ec573aa.js",revision:"35e3920e5ec573aa"},{url:"/_next/static/chunks/pages/articles/blog-remake-with-gatsby-26ab601efea1f32b.js",revision:"26ab601efea1f32b"},{url:"/_next/static/chunks/pages/articles/react-leaflet-c95cc92b1c92f344.js",revision:"c95cc92b1c92f344"},{url:"/_next/static/chunks/pages/articles/react-leaflet-egnlish-862942c3169b195b.js",revision:"862942c3169b195b"},{url:"/_next/static/chunks/pages/articles/react-sound-test-a12414718212e90f.js",revision:"a12414718212e90f"},{url:"/_next/static/chunks/pages/articles/tamplate-10b4e8902f70d482.js",revision:"10b4e8902f70d482"},{url:"/_next/static/chunks/pages/articles/typescript-bitcoin-aab22ecc2155915f.js",revision:"aab22ecc2155915f"},{url:"/_next/static/chunks/pages/blog/%5Bpage%5D-97f30ade8bbb7de6.js",revision:"97f30ade8bbb7de6"},{url:"/_next/static/chunks/pages/contact-4e5cdc77dc1c31cf.js",revision:"4e5cdc77dc1c31cf"},{url:"/_next/static/chunks/pages/feed/%5Bfeed%5D-2067f32869dd7acf.js",revision:"2067f32869dd7acf"},{url:"/_next/static/chunks/pages/index-b289d91ddaabe6bb.js",revision:"b289d91ddaabe6bb"},{url:"/_next/static/chunks/pages/portfolio-e88ff6eb2b368c6e.js",revision:"e88ff6eb2b368c6e"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-afcf2e92eb1ae255.js",revision:"afcf2e92eb1ae255"},{url:"/_next/static/chunks/pages/tag/%5Btag%5D-6f66b1e70efd0e0f.js",revision:"6f66b1e70efd0e0f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-04516dabebc9b7ad.js",revision:"04516dabebc9b7ad"},{url:"/_next/static/css/3eece04036967ae1.css",revision:"3eece04036967ae1"},{url:"/_next/static/css/68b817d4a1f462f4.css",revision:"68b817d4a1f462f4"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/logo.7f01b434.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/apple-touch-icon.png",revision:"86cb4bda7cc37d36dd276b45218249ee"},{url:"/assets/images/autheorsphoto1.webp",revision:"9fb744b9b006ab399d30337bc22bcf74"},{url:"/assets/images/author.jpg",revision:"f9878d222f9bf8aae512a65014798501"},{url:"/assets/images/tor-browser-preview.webp",revision:"16360409e562fae98d006760779f697e"},{url:"/assets/svgs/lambda.svg",revision:"f608206d4d7f4137474ccf5d442f44be"},{url:"/favicon-16x16.png",revision:"3874f7e8f9ecfeff91b68e4355ce47f3"},{url:"/favicon-32x32.png",revision:"95402474849a82250e3cf44db4bb6479"},{url:"/favicon.ico",revision:"401d773bd92ed39d6cb959c010c50f50"},{url:"/icon-192x192.png",revision:"5b6fe097ff405db2d24aeff9c6b3f97b"},{url:"/icon-256x256.png",revision:"a11eb9bba440ad679c2e16f32c4dedec"},{url:"/icon-384x384.png",revision:"09bcaa94618a8d0b6a8c79fdbd50788e"},{url:"/icon-512x512.png",revision:"0c8e89f398ae346e417bb4afe209e0ae"},{url:"/manifest.json",revision:"6bfcb0b7ed82bd10218f73f8d06dc0ee"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
