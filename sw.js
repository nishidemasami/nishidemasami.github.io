if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),f={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/677Kb9LsXGGdKHSYhP_LH/_buildManifest.js",revision:"be238b2503c2b94978a0b8c0271f2d2e"},{url:"/_next/static/677Kb9LsXGGdKHSYhP_LH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b7b90cd.d8db2d9dafed3812.js",revision:"d8db2d9dafed3812"},{url:"/_next/static/chunks/129-8cbf45d83ff804cf.js",revision:"8cbf45d83ff804cf"},{url:"/_next/static/chunks/136.f222adf1ec96abca.js",revision:"f222adf1ec96abca"},{url:"/_next/static/chunks/155-981be093fdf918df.js",revision:"981be093fdf918df"},{url:"/_next/static/chunks/229-6a26757254aaa89b.js",revision:"6a26757254aaa89b"},{url:"/_next/static/chunks/260-e9b07f57f9f93770.js",revision:"e9b07f57f9f93770"},{url:"/_next/static/chunks/288-abb62e4829edc426.js",revision:"abb62e4829edc426"},{url:"/_next/static/chunks/294-dd441365f6cc3efa.js",revision:"dd441365f6cc3efa"},{url:"/_next/static/chunks/356.06b841c332f37546.js",revision:"06b841c332f37546"},{url:"/_next/static/chunks/488-ce83b9a35ef5216f.js",revision:"ce83b9a35ef5216f"},{url:"/_next/static/chunks/500-06b5191cda80d3ce.js",revision:"06b5191cda80d3ce"},{url:"/_next/static/chunks/58.d77c7899ee68baf8.js",revision:"d77c7899ee68baf8"},{url:"/_next/static/chunks/664-e4f30f78390d2b8f.js",revision:"e4f30f78390d2b8f"},{url:"/_next/static/chunks/814-9c3f9bdd50199124.js",revision:"9c3f9bdd50199124"},{url:"/_next/static/chunks/842.0dd000f5779a0900.js",revision:"0dd000f5779a0900"},{url:"/_next/static/chunks/917-91d4ee75c1f591bf.js",revision:"91d4ee75c1f591bf"},{url:"/_next/static/chunks/997-49f1880c1656bcb8.js",revision:"49f1880c1656bcb8"},{url:"/_next/static/chunks/fec483df-e54d42533fbe6ec5.js",revision:"e54d42533fbe6ec5"},{url:"/_next/static/chunks/framework-467b11a89995b152.js",revision:"467b11a89995b152"},{url:"/_next/static/chunks/main-af386d3feafc4315.js",revision:"af386d3feafc4315"},{url:"/_next/static/chunks/pages/%5Bpage%5D-0ff56b9af143e0c5.js",revision:"0ff56b9af143e0c5"},{url:"/_next/static/chunks/pages/404-7404edde07615ca6.js",revision:"7404edde07615ca6"},{url:"/_next/static/chunks/pages/_app-6194c5e1da3c533a.js",revision:"6194c5e1da3c533a"},{url:"/_next/static/chunks/pages/_error-a59e2db023c5e431.js",revision:"a59e2db023c5e431"},{url:"/_next/static/chunks/pages/about-48c7be511e7fffe0.js",revision:"48c7be511e7fffe0"},{url:"/_next/static/chunks/pages/articles/blog-remake-with-gatsby-2b3a9e155aa92f64.js",revision:"2b3a9e155aa92f64"},{url:"/_next/static/chunks/pages/articles/react-leaflet-ef5c9a0249123d54.js",revision:"ef5c9a0249123d54"},{url:"/_next/static/chunks/pages/articles/react-leaflet-egnlish-e168e6439cff6ac7.js",revision:"e168e6439cff6ac7"},{url:"/_next/static/chunks/pages/articles/react-sound-test-5ba9b5b2bbada3f6.js",revision:"5ba9b5b2bbada3f6"},{url:"/_next/static/chunks/pages/articles/typescript-bitcoin-9c5164cb305cf22c.js",revision:"9c5164cb305cf22c"},{url:"/_next/static/chunks/pages/blog/%5Bpage%5D-50a53da048e4e63f.js",revision:"50a53da048e4e63f"},{url:"/_next/static/chunks/pages/contact-eeaedff33ca42cce.js",revision:"eeaedff33ca42cce"},{url:"/_next/static/chunks/pages/feed/%5Bfeed%5D-76da3e72946d92a9.js",revision:"76da3e72946d92a9"},{url:"/_next/static/chunks/pages/index-f70491f2701bbd35.js",revision:"f70491f2701bbd35"},{url:"/_next/static/chunks/pages/portfolio-349e8e12fd0e87e0.js",revision:"349e8e12fd0e87e0"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-77648dd69bcee693.js",revision:"77648dd69bcee693"},{url:"/_next/static/chunks/pages/tag/%5Btag%5D-8175aff80a77a9a7.js",revision:"8175aff80a77a9a7"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-71b1862c7d062e85.js",revision:"71b1862c7d062e85"},{url:"/_next/static/css/125f7fd5a55ee7ca.css",revision:"125f7fd5a55ee7ca"},{url:"/_next/static/css/f27001abe2a3fd13.css",revision:"f27001abe2a3fd13"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/logo.7f01b434.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/apple-touch-icon.png",revision:"86cb4bda7cc37d36dd276b45218249ee"},{url:"/assets/images/autheorsphoto1.webp",revision:"9fb744b9b006ab399d30337bc22bcf74"},{url:"/assets/images/author.jpg",revision:"f9878d222f9bf8aae512a65014798501"},{url:"/assets/images/tor-browser-preview.webp",revision:"16360409e562fae98d006760779f697e"},{url:"/assets/svgs/lambda.svg",revision:"f608206d4d7f4137474ccf5d442f44be"},{url:"/favicon-16x16.png",revision:"3874f7e8f9ecfeff91b68e4355ce47f3"},{url:"/favicon-32x32.png",revision:"95402474849a82250e3cf44db4bb6479"},{url:"/favicon.ico",revision:"401d773bd92ed39d6cb959c010c50f50"},{url:"/icon-192x192.png",revision:"5b6fe097ff405db2d24aeff9c6b3f97b"},{url:"/icon-256x256.png",revision:"a11eb9bba440ad679c2e16f32c4dedec"},{url:"/icon-384x384.png",revision:"09bcaa94618a8d0b6a8c79fdbd50788e"},{url:"/icon-512x512.png",revision:"0c8e89f398ae346e417bb4afe209e0ae"},{url:"/manifest.json",revision:"6bfcb0b7ed82bd10218f73f8d06dc0ee"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
