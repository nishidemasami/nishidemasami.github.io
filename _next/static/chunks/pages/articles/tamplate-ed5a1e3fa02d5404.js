(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{4346:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/tamplate",function(){return i(6056)}])},4765:function(e,t,i){"use strict";i.d(t,{r:function(){return d}});var s=i(5893),n=i(7294),o=i(1103),r=i(6460),a=i(8456),l=i(6886),u=i(9844),c=i(3321);let d=()=>{let[e,t]=n.useState(25),[i,d]=n.useState(!1),[m,x]=n.useState(void 0),[p,f]=n.useState(void 0),[h,v]=n.useState(void 0);n.useEffect(()=>{let t=new(window.AudioContext||window.webkitAudioContext);x(t);let i=t.createGain();return i.gain.value=e/100,v(i),()=>{p&&(p.buffer=null),t&&t.close()}},[]),n.useEffect(()=>{h&&(h.gain.value=e/100)},[e]);let _=n.useCallback(()=>{if(m&&h){if(i)p&&(p.stop(),p.buffer=null);else{let e=2*m.sampleRate,t=m.createBuffer(1,e,m.sampleRate);for(let i=0;i<1;i+=1){let s=t.getChannelData(i);for(let t=0;t<e;t+=1)s[t]=2*Math.random()-1}let i=m.createBufferSource();f(i),i.buffer=t,i.loop=!0,i.connect(h).connect(m.destination),i.start()}d(!i)}},[i,m,h]);return m&&h?(0,s.jsxs)("div",{className:"text-center h-fit w-full",children:[(0,s.jsxs)(l.ZP,{container:!0,children:[(0,s.jsx)(l.ZP,{item:!0}),(0,s.jsx)(l.ZP,{item:!0,children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)(l.ZP,{item:!0,xs:10,children:(0,s.jsx)(u.ZP,{min:0,max:100,defaultValue:50,value:e,onChange:(e,i)=>{"number"==typeof i&&t(i)},valueLabelDisplay:"auto","aria-labelledby":"continuous-slider"})}),(0,s.jsx)(l.ZP,{item:!0,children:(0,s.jsx)(r.Z,{})}),(0,s.jsx)(l.ZP,{item:!0})]}),(0,s.jsxs)(c.Z,{variant:"outlined",color:i?"info":"primary",onClick:_,children:["ホワイトノイズ",i?"停止":"再生"]})]}):(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(a.Z,{}),"loading..."]})}},7726:function(e,t,i){"use strict";i.d(t,{V:function(){return n}});var s=i(5893);i(7294);let n=e=>(0,s.jsx)("div",{className:"markdown-content p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white [&_p]:my-6 [&_ul]:my-6 [&_*]:break-words [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-gray-700 [&_h1]:my-4 [&_h2]:border-b [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-700 [&_h2]:my-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-700 [&_h3]:my-4",children:e.children})},6056:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return c}});var s=i(5893);i(7294);var n=i(4765),o=i(7726),r=i(6185),a=i(3171),l=i(789);let u=e=>(0,s.jsxs)(l.o,{recents:e.recents,tags:e.tags,meta:(0,s.jsx)(r.h,{title:"Lorem ipsum",description:"Lorem ipsum"}),children:[(0,s.jsxs)(o.V,{children:[(0,s.jsx)(n.r,{}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),(0,s.jsx)(a.w,{nextPost:e.nextPost,prevPost:e.prevPost})]});var c=!0;t.default=u},3171:function(e,t,i){"use strict";i.d(t,{w:function(){return r}});var s=i(5893);i(7294);var n=i(1664),o=i.n(n);let r=e=>(0,s.jsxs)("div",{className:"text-sm flex justify-between",children:[e.prevPost&&(0,s.jsxs)("div",{className:"w-1/2",children:["← 新しい記事",(0,s.jsx)("br",{}),(0,s.jsx)(o(),{href:e.prevPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.prevPost.slug),as:e.prevPost.slug.startsWith("posts/")?"/".concat(e.prevPost.slug):void 0,children:e.prevPost.title})]}),e.nextPost&&(0,s.jsxs)("div",{className:"text-right ml-auto w-1/2",children:["過去の記事 →",(0,s.jsx)("br",{}),(0,s.jsx)(o(),{href:e.nextPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.nextPost.slug),as:e.nextPost.slug.startsWith("posts/")?"/".concat(e.nextPost.slug):void 0,children:e.nextPost.title})]})]})}},function(e){e.O(0,[814,106,440,877,180,647,774,888,179],function(){return e(e.s=4346)}),_N_E=e.O()}]);