(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{44346:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/tamplate",function(){return i(4123)}])},17917:function(e,t,i){"use strict";i.d(t,{r:function(){return d}});var s=i(85893),n=i(67294),a=i(41103),o=i(56460),r=i(98456),u=i(86886),l=i(66178),c=i(83321);let d=()=>{let[e,t]=n.useState(25),[i,d]=n.useState(!1),[m,p]=n.useState(void 0),[x,f]=n.useState(void 0),[h,v]=n.useState(void 0);n.useEffect(()=>{let t=new(window.AudioContext||window.webkitAudioContext);p(t);let i=t.createGain();return i.gain.value=e/100,v(i),()=>{x&&(x.buffer=null),t&&t.close()}},[]),n.useEffect(()=>{h&&(h.gain.value=e/100)},[e]);let j=n.useCallback(()=>{if(m&&h){if(i)x&&(x.stop(),x.buffer=null);else{let e=2*m.sampleRate,t=m.createBuffer(1,e,m.sampleRate);for(let i=0;i<1;i+=1){let s=t.getChannelData(i);for(let t=0;t<e;t+=1)s[t]=2*Math.random()-1}let i=m.createBufferSource();f(i),i.buffer=t,i.loop=!0,i.connect(h).connect(m.destination),i.start()}d(!i)}},[i,m,h]);return m&&h?(0,s.jsxs)("div",{className:"text-center h-fit w-full",children:[(0,s.jsxs)(u.ZP,{container:!0,children:[(0,s.jsx)(u.ZP,{item:!0}),(0,s.jsx)(u.ZP,{item:!0,children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)(u.ZP,{item:!0,xs:10,children:(0,s.jsx)(l.ZP,{min:0,max:100,defaultValue:50,value:e,onChange:(e,i)=>{"number"==typeof i&&t(i)},valueLabelDisplay:"auto","aria-labelledby":"continuous-slider"})}),(0,s.jsx)(u.ZP,{item:!0,children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)(u.ZP,{item:!0})]}),(0,s.jsxs)(c.Z,{variant:"outlined",color:i?"info":"primary",onClick:j,children:["ホワイトノイズ",i?"停止":"再生"]})]}):(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(r.Z,{}),"loading..."]})}},31431:function(e,t,i){"use strict";i.d(t,{V:function(){return n}});var s=i(85893);i(67294);let n=e=>(0,s.jsx)("div",{className:"markdown-content",children:e.children})},4123:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return c}});var s=i(85893);i(67294);var n=i(17917),a=i(31431),o=i(57120),r=i(57597),u=i(51052);let l=e=>(0,s.jsxs)(u.o,{recents:e.recents,tags:e.tags,meta:(0,s.jsx)(o.h,{title:"Lorem ipsum",description:"Lorem ipsum"}),children:[(0,s.jsxs)(a.V,{children:[(0,s.jsx)(n.r,{}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),(0,s.jsx)(r.w,{nextPost:e.nextPost,prevPost:e.prevPost})]});var c=!0;t.default=l},57597:function(e,t,i){"use strict";i.d(t,{w:function(){return o}});var s=i(85893);i(67294);var n=i(41664),a=i.n(n);let o=e=>(0,s.jsxs)("div",{className:"text-sm flex justify-between",children:[e.prevPost&&(0,s.jsxs)("div",{className:"w-1/2",children:["← 新しい記事",(0,s.jsx)("br",{}),(0,s.jsx)(a(),{href:e.prevPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.prevPost.slug),as:e.prevPost.slug.startsWith("posts/")?"/".concat(e.prevPost.slug):void 0,children:e.prevPost.title})]}),e.nextPost&&(0,s.jsxs)("div",{className:"text-right ml-auto w-1/2",children:["過去の記事 →",(0,s.jsx)("br",{}),(0,s.jsx)(a(),{href:e.nextPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.nextPost.slug),as:e.nextPost.slug.startsWith("posts/")?"/".concat(e.nextPost.slug):void 0,children:e.nextPost.title})]})]})}},function(e){e.O(0,[814,928,421,673,180,24,774,888,179],function(){return e(e.s=44346)}),_N_E=e.O()}]);