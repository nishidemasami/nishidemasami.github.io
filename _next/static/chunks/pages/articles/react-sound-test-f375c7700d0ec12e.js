(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{7328:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/react-sound-test",function(){return s(6838)}])},4765:function(e,t,s){"use strict";s.d(t,{r:function(){return x}});var n=s(5893),r=s(7294),i=s(1103),l=s(6460),a=s(8456),o=s(9162),c=s(4657),d=s(252);let x=()=>{let[e,t]=r.useState(25),[s,x]=r.useState(!1),[u,h]=r.useState(void 0),[p,f]=r.useState(void 0),[j,m]=r.useState(void 0);r.useEffect(()=>{let t=new(window.AudioContext||window.webkitAudioContext);h(t);let s=t.createGain();return s.gain.value=e/100,m(s),()=>{p&&(p.buffer=null),t&&t.close()}},[]),r.useEffect(()=>{j&&(j.gain.value=e/100)},[e]);let _=r.useCallback(()=>{if(u&&j){if(s)p&&(p.stop(),p.buffer=null);else{let e=2*u.sampleRate,t=u.createBuffer(1,e,u.sampleRate);for(let n=0;n<1;n+=1){let r=t.getChannelData(n);for(let i=0;i<e;i+=1)r[i]=2*Math.random()-1}let l=u.createBufferSource();f(l),l.buffer=t,l.loop=!0,l.connect(j).connect(u.destination),l.start()}x(!s)}},[s,u,j]);return u&&j?(0,n.jsxs)("div",{className:"text-center h-fit w-full",children:[(0,n.jsxs)(o.ZP,{container:!0,children:[(0,n.jsx)(o.ZP,{item:!0}),(0,n.jsx)(o.ZP,{item:!0,children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(o.ZP,{item:!0,xs:10,children:(0,n.jsx)(c.ZP,{min:0,max:100,defaultValue:50,value:e,onChange:(e,s)=>{"number"==typeof s&&t(s)},valueLabelDisplay:"auto","aria-labelledby":"continuous-slider"})}),(0,n.jsx)(o.ZP,{item:!0,children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)(o.ZP,{item:!0})]}),(0,n.jsxs)(d.Z,{variant:"outlined",color:s?"info":"primary",onClick:_,children:["ホワイトノイズ",s?"停止":"再生"]})]}):(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(a.Z,{}),"loading..."]})}},7726:function(e,t,s){"use strict";s.d(t,{V:function(){return l}});var n=s(5893),r=s(1857),i=s.n(r);s(7294);let l=e=>(0,n.jsxs)("div",{className:"jsx-4263912199e4d5dc content p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white [&_p]:my-6 [&_ul]:my-6 [&_*]:break-words [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-gray-700 [&_h1]:my-4 [&_h2]:border-b [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-700 [&_h2]:my-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-700 [&_h3]:my-4",children:[e.children,(0,n.jsx)(i(),{id:"4263912199e4d5dc",children:".content.jsx-4263912199e4d5dc h2{font-size:1.6em;border-bottom:1px solid#ddd;padding-bottom:.1em}.content.jsx-4263912199e4d5dc li{list-style:circle}.content.jsx-4263912199e4d5dc ul{-webkit-padding-start:40px;-moz-padding-start:40px;padding-inline-start:40px}.content.jsx-4263912199e4d5dc blockquote{font-style:italic;padding:0;text-align:center;font-size:smaller}.content.jsx-4263912199e4d5dc p code{background-color:#fafafa;font-style:italic;border-width:1px;border-color:#dedede;padding:.1rem}"})]})},6838:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return x}});var n=s(5893);s(7294);var r=s(2167),i=s(4765),l=s(7726),a=s(6185),o=s(3171),c=s(2891);let d=e=>(0,n.jsxs)(c.o,{recents:e.recents,tags:e.tags,meta:(0,n.jsx)(a.h,{title:"Reactでホワイトノイズを鳴らす",description:"React + TypeScript でホワイトノイズを鳴らしてみました"}),children:[(0,n.jsx)("h1",{className:"text-center font-bold text-3xl text-gray-900",children:"Reactでホワイトノイズを鳴らす"}),(0,n.jsx)("div",{className:"text-center text-sm mb-4",children:(0,r.Z)(new Date("2021-03-14T01:04:03+0900"),"LLLL d, yyyy")}),(0,n.jsx)(l.V,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Reactでホワイトノイズを鳴らしたいこと、ありますよね。",(0,n.jsx)("br",{}),"僕はあるので自分用にメモです。"]}),(0,n.jsxs)("p",{children:["↓ React + TypeScript でホワイトノイズを鳴らしてみました。",(0,n.jsxs)("sup",{children:["[",(0,n.jsx)("a",{target:"_blank",href:"https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0TypeScript-%E2%80%95%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8BJavaScript%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-Boris-Cherny/dp/4873119049?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3Q7MI7KXY06BB&keywords=typescript&qid=1670505807&sprefix=typescript+%2Caps%2C224&sr=8-9&linkCode=ll1&tag=nishidemasami-22&linkId=48539012d76c58e8bc3549b5a9dc7a1f&language=ja_JP&ref_=as_li_ss_tl",rel:"noreferrer",children:"参考文献"}),"]"]}),(0,n.jsx)("br",{}),"※音が鳴ります"]}),(0,n.jsx)(i.r,{}),(0,n.jsx)("p",{children:"パソコンで音を鳴らすのはかんたんなんですけどスマホはガードが固いらしくて、ユーザのなんらかの動作をトリガーとして再生しないと再生されないみたいです。"}),(0,n.jsx)("p",{children:"なので今回は useCallback で宣言して onClick から呼びました。"}),(0,n.jsx)("p",{children:"↓ これが今回のコードです"}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.sorceCodeHTML}})]})}),(0,n.jsx)(o.w,{nextPost:e.nextPost,prevPost:e.prevPost})]});var x=!0;t.default=d},3171:function(e,t,s){"use strict";s.d(t,{w:function(){return l}});var n=s(5893);s(7294);var r=s(1664),i=s.n(r);let l=e=>(0,n.jsxs)("div",{className:"text-sm flex justify-between",children:[e.prevPost&&(0,n.jsxs)("div",{className:"w-1/2",children:["← 新しい記事",(0,n.jsx)("br",{}),(0,n.jsx)(i(),{href:e.prevPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.prevPost.slug),as:e.prevPost.slug.startsWith("posts/")?"/".concat(e.prevPost.slug):void 0,children:e.prevPost.title})]}),e.nextPost&&(0,n.jsxs)("div",{className:"text-right ml-auto w-1/2",children:["過去の記事 →",(0,n.jsx)("br",{}),(0,n.jsx)(i(),{href:e.nextPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.nextPost.slug),as:e.nextPost.slug.startsWith("posts/")?"/".concat(e.nextPost.slug):void 0,children:e.nextPost.title})]})]})}},function(e){e.O(0,[814,167,857,496,185,774,888,179],function(){return e(e.s=7328)}),_N_E=e.O()}]);