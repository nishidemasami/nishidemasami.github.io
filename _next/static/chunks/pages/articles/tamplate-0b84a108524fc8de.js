(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{7822:function(t,e,n){"use strict";n.d(e,{r:function(){return m}});var i=n(2640),o=n(7294),r=n(1103),s=n(6460),a=n(754),u=n(4560),c=n(9623),l=n(2472),d=n(5893),m=function(){var t=o.useState(25),e=(0,i.Z)(t,2),n=e[0],m=e[1],p=o.useState(!1),x=(0,i.Z)(p,2),f=x[0],g=x[1],h=o.useState(void 0),v=(0,i.Z)(h,2),j=v[0],b=v[1],w=o.useState(void 0),P=(0,i.Z)(w,2),Z=P[0],_=P[1],y=o.useState(void 0),k=(0,i.Z)(y,2),q=k[0],N=k[1];o.useEffect(function(){var t=new(window.AudioContext||window.webkitAudioContext);b(t);var e=t.createGain();return e.gain.value=n/100,N(e),function(){Z&&(Z.buffer=null),t&&t.close()}},[]),o.useEffect(function(){q&&(q.gain.value=n/100)},[n]);var E=o.useCallback(function(){if(j&&q){if(f)Z&&(Z.stop(),Z.buffer=null);else{for(var t=2*j.sampleRate,e=j.createBuffer(1,t,j.sampleRate),n=0;n<1;n+=1)for(var i=e.getChannelData(n),o=0;o<t;o+=1)i[o]=2*Math.random()-1;var r=j.createBufferSource();_(r),r.buffer=e,r.loop=!0,r.connect(q).connect(j.destination),r.start()}g(!f)}},[f,j,q]);return j&&q?(0,d.jsxs)("div",{className:"text-center h-fit w-full",children:[(0,d.jsxs)(u.ZP,{container:!0,children:[(0,d.jsx)(u.ZP,{item:!0}),(0,d.jsx)(u.ZP,{item:!0,children:(0,d.jsx)(r.Z,{})}),(0,d.jsx)(u.ZP,{item:!0,xs:10,children:(0,d.jsx)(c.ZP,{min:0,max:100,defaultValue:50,value:n,onChange:function(t,e){"number"==typeof e&&m(e)},valueLabelDisplay:"auto","aria-labelledby":"continuous-slider"})}),(0,d.jsx)(u.ZP,{item:!0,children:(0,d.jsx)(s.Z,{})}),(0,d.jsx)(u.ZP,{item:!0})]}),(0,d.jsxs)(l.Z,{variant:"outlined",color:f?"info":"primary",onClick:E,children:["ホワイトノイズ",f?"停止":"再生"]})]}):(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)(a.Z,{}),"loading..."]})}},2916:function(t,e,n){"use strict";n.d(e,{V:function(){return s}});var i=n(7521),o=n.n(i);n(7294);var r=n(5893),s=function(t){return(0,r.jsxs)("div",{className:"jsx-2181521509 content p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white",children:[t.children,(0,r.jsx)(o(),{id:"2181521509",children:[".content.jsx-2181521509 *{overflow-wrap:break-word;}",".content.jsx-2181521509 p{margin-bottom:1.5rem;margin-top:1.5rem;}",".content.jsx-2181521509 ul{margin-bottom:1.5rem;margin-top:1.5rem;}",".content.jsx-2181521509 h1{--tw-text-opacity:1;color:rgb(74 85 104/var(--tw-text-opacity));font-size:1.875rem;font-weight:600;margin-bottom:1rem;margin-top:1rem;}",".content.jsx-2181521509 h2{--tw-text-opacity:1;color:rgb(74 85 104/var(--tw-text-opacity));font-size:1.5rem;font-weight:600;margin-bottom:1rem;margin-top:1rem;}",".content.jsx-2181521509 h3{--tw-text-opacity:1;color:rgb(74 85 104/var(--tw-text-opacity));font-size:1.25rem;font-weight:600;margin-bottom:1rem;margin-top:1rem;}",".content.jsx-2181521509 li{list-style:circle;}",".content.jsx-2181521509 ul{-webkit-padding-start:40px;padding-inline-start:40px;}",".content.jsx-2181521509 blockquote{font-size:smaller;font-style:italic;padding:0;text-align:center;}",".content.jsx-2181521509 p code{background-color:#fdf6e3;color:#657b83;}"]})]})}},7178:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c}}),n(7294);var i=n(7822),o=n(2916),r=n(5265),s=n(2832),a=n(5677),u=n(5893),c=!0;e.default=function(t){return(0,u.jsxs)(a.o,{recents:t.recents,tags:t.tags,meta:(0,u.jsx)(r.h,{title:"Lorem ipsum",description:"Lorem ipsum"}),children:[(0,u.jsxs)(o.V,{children:[(0,u.jsx)(i.r,{}),(0,u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),(0,u.jsx)(s.w,{nextPost:t.nextPost,prevPost:t.prevPost})]})}},2832:function(t,e,n){"use strict";n.d(e,{w:function(){return s}}),n(7294);var i=n(1664),o=n.n(i),r=n(5893),s=function(t){return(0,r.jsxs)("div",{className:"text-sm flex justify-between",children:[t.prevPost&&(0,r.jsxs)("div",{className:"w-1/2",children:["← 新しい記事",(0,r.jsx)("br",{}),(0,r.jsx)(o(),{href:t.prevPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(t.prevPost.slug),as:t.prevPost.slug.startsWith("posts/")?"/".concat(t.prevPost.slug):void 0,children:t.prevPost.title})]}),t.nextPost&&(0,r.jsxs)("div",{className:"text-right ml-auto w-1/2",children:["過去の記事 →",(0,r.jsx)("br",{}),(0,r.jsx)(o(),{href:t.nextPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(t.nextPost.slug),as:t.nextPost.slug.startsWith("posts/")?"/".concat(t.nextPost.slug):void 0,children:t.nextPost.title})]})]})}},4346:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/tamplate",function(){return n(7178)}])}},function(t){t.O(0,[481,433,291,774,888,179],function(){return t(t.s=4346)}),_N_E=t.O()}]);