(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{97328:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/react-sound-test",function(){return s(76566)}])},72993:function(e,t,s){"use strict";s.d(t,{r:function(){return u}});var n=s(85893),r=s(67294),a=s(41103),i=s(56460),l=s(98456),c=s(86886),o=s(66178),d=s(83321);let u=()=>{let[e,t]=r.useState(25),[s,u]=r.useState(!1),[x,f]=r.useState(void 0),[h,p]=r.useState(void 0),[j,m]=r.useState(void 0);r.useEffect(()=>{let t=new(window.AudioContext||window.webkitAudioContext);f(t);let s=t.createGain();return s.gain.value=e/100,m(s),()=>{h&&(h.buffer=null),t&&t.close()}},[]),r.useEffect(()=>{j&&(j.gain.value=e/100)},[e]);let v=r.useCallback(()=>{if(x&&j){if(s)h&&(h.stop(),h.buffer=null);else{let e=2*x.sampleRate,t=x.createBuffer(1,e,x.sampleRate);for(let s=0;s<1;s+=1){let n=t.getChannelData(s);for(let t=0;t<e;t+=1)n[t]=2*Math.random()-1}let s=x.createBufferSource();p(s),s.buffer=t,s.loop=!0,s.connect(j).connect(x.destination),s.start()}u(!s)}},[s,x,j]);return x&&j?(0,n.jsxs)("div",{className:"text-center h-fit w-full",children:[(0,n.jsxs)(c.ZP,{container:!0,children:[(0,n.jsx)(c.ZP,{item:!0}),(0,n.jsx)(c.ZP,{item:!0,children:(0,n.jsx)(a.Z,{})}),(0,n.jsx)(c.ZP,{item:!0,xs:10,children:(0,n.jsx)(o.ZP,{min:0,max:100,defaultValue:50,value:e,onChange:(e,s)=>{"number"==typeof s&&t(s)},valueLabelDisplay:"auto","aria-labelledby":"continuous-slider"})}),(0,n.jsx)(c.ZP,{item:!0,children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(c.ZP,{item:!0})]}),(0,n.jsxs)(d.Z,{variant:"outlined",color:s?"info":"primary",onClick:v,children:["ホワイトノイズ",s?"停止":"再生"]})]}):(0,n.jsxs)(r.Fragment,{children:[(0,n.jsx)(l.Z,{}),"loading..."]})}},53737:function(e,t,s){"use strict";s.d(t,{V:function(){return r}});var n=s(85893);s(67294);let r=e=>(0,n.jsx)("div",{className:"markdown-content",children:e.children})},76566:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return f}});var n=s(85893);s(67294);var r=s(72167),a=s(41664),i=s.n(a),l=s(72993),c=s(53737),o=s(68192),d=s(37793),u=s(54039);let x=e=>(0,n.jsxs)(u.o,{recents:e.recents,tags:e.tags,meta:(0,n.jsx)(o.h,{title:"Reactでホワイトノイズを鳴らす",description:"React + TypeScript でホワイトノイズを鳴らしてみました"}),children:[(0,n.jsx)("h1",{className:"content-title",children:"Reactでホワイトノイズを鳴らす"}),(0,n.jsx)("div",{className:"content-date",children:(0,r.Z)(new Date("2021-03-14T01:04:03+0900"),"LLLL d, yyyy")}),(0,n.jsx)("ul",{className:"flex flex-row flex-wrap list-none p-0 m-2 justify-start",children:["TypeScript","React"].map(e=>(0,n.jsx)("li",{className:"px-2 py-1 m-1 rounded-full overflow-hidden shadow-md border-0 bg-white w-fit break-all",children:(0,n.jsxs)(i(),{href:"/tag/[tag]",as:"/tag/".concat(e),children:["#",e]})},e))}),(0,n.jsx)(c.V,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Reactでホワイトノイズを鳴らしたいこと、ありますよね。",(0,n.jsx)("br",{}),"僕はあるので自分用にメモです。"]}),(0,n.jsxs)("p",{children:["↓ React + TypeScript でホワイトノイズを鳴らしてみました。",(0,n.jsxs)("sup",{children:["[",(0,n.jsx)("a",{target:"_blank",href:"https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0TypeScript-%E2%80%95%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8BJavaScript%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-Boris-Cherny/dp/4873119049?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3Q7MI7KXY06BB&keywords=typescript&qid=1670505807&sprefix=typescript+%2Caps%2C224&sr=8-9&linkCode=ll1&tag=nishidemasami-22&linkId=48539012d76c58e8bc3549b5a9dc7a1f&language=ja_JP&ref_=as_li_ss_tl",rel:"noreferrer",children:"参考文献"}),"]"]}),(0,n.jsx)("br",{}),"※音が鳴ります"]}),(0,n.jsx)(l.r,{}),(0,n.jsx)("p",{children:"パソコンで音を鳴らすのはかんたんなんですけどスマホはガードが固いらしくて、ユーザのなんらかの動作をトリガーとして再生しないと再生されないみたいです。"}),(0,n.jsx)("p",{children:"なので今回は useCallback で宣言して onClick から呼びました。"}),(0,n.jsx)("p",{children:"↓ これが今回のコードです"}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.sorceCodeHTML}})]})}),(0,n.jsx)(d.w,{nextPost:e.nextPost,prevPost:e.prevPost})]});var f=!0;t.default=x},37793:function(e,t,s){"use strict";s.d(t,{w:function(){return i}});var n=s(85893);s(67294);var r=s(41664),a=s.n(r);let i=e=>(0,n.jsxs)("div",{className:"text-sm flex justify-between",children:[e.prevPost&&(0,n.jsxs)("div",{className:"w-1/2",children:["← 新しい記事",(0,n.jsx)("br",{}),(0,n.jsx)(a(),{href:e.prevPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.prevPost.slug),as:e.prevPost.slug.startsWith("posts/")?"/".concat(e.prevPost.slug):void 0,children:e.prevPost.title})]}),e.nextPost&&(0,n.jsxs)("div",{className:"text-right ml-auto w-1/2",children:["過去の記事 →",(0,n.jsx)("br",{}),(0,n.jsx)(a(),{href:e.nextPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.nextPost.slug),as:e.nextPost.slug.startsWith("posts/")?"/".concat(e.nextPost.slug):void 0,children:e.nextPost.title})]})]})}},function(e){e.O(0,[814,167,928,421,673,180,806,774,888,179],function(){return e(e.s=97328)}),_N_E=e.O()}]);