(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{2286:function(e,t,n){"use strict";n.d(t,{T:function(){return o}}),n(7294);var s=n(2167),r=n(1664),i=n.n(r),a=n(5893),c=function(e){return(0,a.jsxs)("div",{className:"text-sm flex justify-between",children:[e.previous&&(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(i(),{href:e.previous,children:"← 新しい投稿"})}),e.next&&(0,a.jsx)("div",{className:"text-right ml-auto w-1/2",children:(0,a.jsx)(i(),{href:e.next,children:"過去の投稿 →"})})]})},o=function(e){var t,n;return(0,a.jsxs)(a.Fragment,{children:[e.posts.map(function(e){var t=e.slug.startsWith("posts/");return(0,a.jsxs)("div",{className:"mb-3 break-all justify-between clear-both border-b p-4 m-2 rounded-lg overflow-hidden shadow-md border border-gray-400 bg-white",children:[(0,a.jsx)(i(),{href:t?"/posts/[slug]":"/".concat(e.slug),as:t?"/".concat(e.slug):void 0,children:(0,a.jsx)("p",{className:"text-left text-2xl ",children:e.title})}),(0,a.jsx)("div",{className:"text-left clear-both",children:e.description}),(0,a.jsx)("p",{className:"text-left text-sm ",children:(0,s.Z)(new Date(e.date),"LLL d, yyyy")})]},e.slug)}),(0,a.jsx)(c,{previous:null===(t=e.pagination)||void 0===t?void 0:t.previous,next:null===(n=e.pagination)||void 0===n?void 0:n.next})]})}},5234:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}}),n(7294);var s=n(2286),r=n(5265),i=n(1658),a=n(5893),c=!0;t.default=function(e){return(0,a.jsxs)(i.o,{recents:e.recents,tags:e.tags,meta:(0,a.jsx)(r.h,{title:"ブログ投稿一覧 ".concat(e.page,"ページ目"),description:"ブログ投稿一覧 ".concat(e.page,"ページ目")}),children:[(0,a.jsxs)("h1",{className:"text-center font-bold text-3xl text-gray-900",children:["ブログ投稿一覧 ",e.page,"ページ目"]}),(0,a.jsx)(s.T,{posts:e.posts,pagination:e.pagination})]})}},4840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[page]",function(){return n(5234)}])}},function(e){e.O(0,[481,167,764,774,888,179],function(){return e(e.s=4840)}),_N_E=e.O()}]);