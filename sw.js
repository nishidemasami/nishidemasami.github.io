if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/T9nbRnQE364ozr2bd93rM/_buildManifest.js",revision:"91cc1816a9ee4f5322580ea6f321f7eb"},{url:"/_next/static/T9nbRnQE364ozr2bd93rM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b7b90cd.3feb11dea4a37295.js",revision:"3feb11dea4a37295"},{url:"/_next/static/chunks/106-73ef347599afedef.js",revision:"73ef347599afedef"},{url:"/_next/static/chunks/167-dc4bcc2fb801564d.js",revision:"dc4bcc2fb801564d"},{url:"/_next/static/chunks/294-d5ce0acbfeb4222f.js",revision:"d5ce0acbfeb4222f"},{url:"/_next/static/chunks/374.0b24b6164414fa07.js",revision:"0b24b6164414fa07"},{url:"/_next/static/chunks/440-28e2a2352d8bfc9a.js",revision:"28e2a2352d8bfc9a"},{url:"/_next/static/chunks/494-c1a0f4e190fae380.js",revision:"c1a0f4e190fae380"},{url:"/_next/static/chunks/568-df6790b8cdd31c37.js",revision:"df6790b8cdd31c37"},{url:"/_next/static/chunks/647-2ab08471d2937132.js",revision:"2ab08471d2937132"},{url:"/_next/static/chunks/726-d81a5099ee20d3b7.js",revision:"d81a5099ee20d3b7"},{url:"/_next/static/chunks/814-5eaeb306d0817021.js",revision:"5eaeb306d0817021"},{url:"/_next/static/chunks/857-9d53dc4f6d813a36.js",revision:"9d53dc4f6d813a36"},{url:"/_next/static/chunks/fec483df-3db15443ea40abf1.js",revision:"3db15443ea40abf1"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-13fcbe11f8cf10ef.js",revision:"13fcbe11f8cf10ef"},{url:"/_next/static/chunks/pages/%5Bpage%5D-de711c50829573b2.js",revision:"de711c50829573b2"},{url:"/_next/static/chunks/pages/404-d7ceb7bc836325fa.js",revision:"d7ceb7bc836325fa"},{url:"/_next/static/chunks/pages/_app-d001a0c916934527.js",revision:"d001a0c916934527"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/about-b44254fb00215c80.js",revision:"b44254fb00215c80"},{url:"/_next/static/chunks/pages/articles/blog-remake-with-gatsby-757c64b875775152.js",revision:"757c64b875775152"},{url:"/_next/static/chunks/pages/articles/react-leaflet-ca996c7178cdb88d.js",revision:"ca996c7178cdb88d"},{url:"/_next/static/chunks/pages/articles/react-sound-test-e5d6b3438a52fce7.js",revision:"e5d6b3438a52fce7"},{url:"/_next/static/chunks/pages/articles/tamplate-4de8ea2378679885.js",revision:"4de8ea2378679885"},{url:"/_next/static/chunks/pages/articles/typescript-bitcoin-0586052c3495d730.js",revision:"0586052c3495d730"},{url:"/_next/static/chunks/pages/blog/%5Bpage%5D-4a224880fe8f2fc1.js",revision:"4a224880fe8f2fc1"},{url:"/_next/static/chunks/pages/feed/%5Bfeed%5D-ec24ba285f6abc75.js",revision:"ec24ba285f6abc75"},{url:"/_next/static/chunks/pages/index-c49da0dee3f9fe87.js",revision:"c49da0dee3f9fe87"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-2bae6335a21027de.js",revision:"2bae6335a21027de"},{url:"/_next/static/chunks/pages/tag/%5Btag%5D-a58665ccfc7657a6.js",revision:"a58665ccfc7657a6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f9bbf4d418c18c4b.js",revision:"f9bbf4d418c18c4b"},{url:"/_next/static/css/5d9bbb89bbb25bad.css",revision:"5d9bbb89bbb25bad"},{url:"/_next/static/css/68b817d4a1f462f4.css",revision:"68b817d4a1f462f4"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/logo.7f01b434.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/apple-touch-icon.png",revision:"86cb4bda7cc37d36dd276b45218249ee"},{url:"/assets/images/autheorsphoto1.webp",revision:"9fb744b9b006ab399d30337bc22bcf74"},{url:"/assets/images/author.jpg",revision:"f9878d222f9bf8aae512a65014798501"},{url:"/favicon-16x16.png",revision:"3874f7e8f9ecfeff91b68e4355ce47f3"},{url:"/favicon-32x32.png",revision:"95402474849a82250e3cf44db4bb6479"},{url:"/favicon.ico",revision:"401d773bd92ed39d6cb959c010c50f50"},{url:"/icon-192x192.png",revision:"5b6fe097ff405db2d24aeff9c6b3f97b"},{url:"/icon-256x256.png",revision:"a11eb9bba440ad679c2e16f32c4dedec"},{url:"/icon-384x384.png",revision:"09bcaa94618a8d0b6a8c79fdbd50788e"},{url:"/icon-512x512.png",revision:"0c8e89f398ae346e417bb4afe209e0ae"},{url:"/manifest.json",revision:"fd1b66629294eb38ae3c88f0e8e220b6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
