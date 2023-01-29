(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{7328:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/react-sound-test",function(){return s(6838)}])},4765:function(e,t,s){"use strict";s.d(t,{r:function(){return u}});var r=s(5893),n=s(7294),l=s(1103),a=s(6460),i=s(8456),o=s(6886),c=s(9844),d=s(3321);let u=()=>{let[e,t]=n.useState(25),[s,u]=n.useState(!1),[x,h]=n.useState(void 0),[f,p]=n.useState(void 0),[j,m]=n.useState(void 0);n.useEffect(()=>{let t=new(window.AudioContext||window.webkitAudioContext);h(t);let s=t.createGain();return s.gain.value=e/100,m(s),()=>{f&&(f.buffer=null),t&&t.close()}},[]),n.useEffect(()=>{j&&(j.gain.value=e/100)},[e]);let _=n.useCallback(()=>{if(x&&j){if(s)f&&(f.stop(),f.buffer=null);else{let e=2*x.sampleRate,t=x.createBuffer(1,e,x.sampleRate);for(let s=0;s<1;s+=1){let r=t.getChannelData(s);for(let t=0;t<e;t+=1)r[t]=2*Math.random()-1}let s=x.createBufferSource();p(s),s.buffer=t,s.loop=!0,s.connect(j).connect(x.destination),s.start()}u(!s)}},[s,x,j]);return x&&j?(0,r.jsxs)("div",{className:"text-center h-fit w-full",children:[(0,r.jsxs)(o.ZP,{container:!0,children:[(0,r.jsx)(o.ZP,{item:!0}),(0,r.jsx)(o.ZP,{item:!0,children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(o.ZP,{item:!0,xs:10,children:(0,r.jsx)(c.ZP,{min:0,max:100,defaultValue:50,value:e,onChange:(e,s)=>{"number"==typeof s&&t(s)},valueLabelDisplay:"auto","aria-labelledby":"continuous-slider"})}),(0,r.jsx)(o.ZP,{item:!0,children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)(o.ZP,{item:!0})]}),(0,r.jsxs)(d.Z,{variant:"outlined",color:s?"info":"primary",onClick:_,children:["ホワイトノイズ",s?"停止":"再生"]})]}):(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(i.Z,{}),"loading..."]})}},7726:function(e,t,s){"use strict";s.d(t,{V:function(){return n}});var r=s(5893);s(7294);let n=e=>(0,r.jsx)("div",{className:"markdown-content p-4 m-2 rounded-lg overflow-hidden shadow-md border-0 bg-white [&_p]:my-6 [&_ul]:my-6 [&_*]:break-words [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-gray-700 [&_h1]:my-4 [&_h2]:border-b [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-700 [&_h2]:my-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-700 [&_h3]:my-4",children:e.children})},6838:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return h}});var r=s(5893);s(7294);var n=s(2167),l=s(1664),a=s.n(l),i=s(4765),o=s(7726),c=s(6185),d=s(3171),u=s(789);let x=e=>(0,r.jsxs)(u.o,{recents:e.recents,tags:e.tags,meta:(0,r.jsx)(c.h,{title:"Reactでホワイトノイズを鳴らす",description:"React + TypeScript でホワイトノイズを鳴らしてみました"}),children:[(0,r.jsx)("h1",{className:"content-title",children:"Reactでホワイトノイズを鳴らす"}),(0,r.jsx)("div",{className:"content-date",children:(0,n.Z)(new Date("2021-03-14T01:04:03+0900"),"LLLL d, yyyy")}),(0,r.jsx)("ul",{className:"flex flex-row flex-wrap list-none p-0 m-2 justify-start",children:["TypeScript","React"].map(e=>(0,r.jsx)("li",{className:"px-2 py-1 m-1 rounded-full overflow-hidden shadow-md border-0 bg-white w-fit break-all",children:(0,r.jsxs)(a(),{href:"/tag/[tag]",as:"/tag/".concat(e),children:["#",e]})},e))}),(0,r.jsx)(o.V,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Reactでホワイトノイズを鳴らしたいこと、ありますよね。",(0,r.jsx)("br",{}),"僕はあるので自分用にメモです。"]}),(0,r.jsxs)("p",{children:["↓ React + TypeScript でホワイトノイズを鳴らしてみました。",(0,r.jsxs)("sup",{children:["[",(0,r.jsx)("a",{target:"_blank",href:"https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0TypeScript-%E2%80%95%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8BJavaScript%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-Boris-Cherny/dp/4873119049?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3Q7MI7KXY06BB&keywords=typescript&qid=1670505807&sprefix=typescript+%2Caps%2C224&sr=8-9&linkCode=ll1&tag=nishidemasami-22&linkId=48539012d76c58e8bc3549b5a9dc7a1f&language=ja_JP&ref_=as_li_ss_tl",rel:"noreferrer",children:"参考文献"}),"]"]}),(0,r.jsx)("br",{}),"※音が鳴ります"]}),(0,r.jsx)(i.r,{}),(0,r.jsx)("p",{children:"パソコンで音を鳴らすのはかんたんなんですけどスマホはガードが固いらしくて、ユーザのなんらかの動作をトリガーとして再生しないと再生されないみたいです。"}),(0,r.jsx)("p",{children:"なので今回は useCallback で宣言して onClick から呼びました。"}),(0,r.jsx)("p",{children:"↓ これが今回のコードです"}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.sorceCodeHTML}})]})}),(0,r.jsx)(d.w,{nextPost:e.nextPost,prevPost:e.prevPost})]});var h=!0;t.default=x},3171:function(e,t,s){"use strict";s.d(t,{w:function(){return a}});var r=s(5893);s(7294);var n=s(1664),l=s.n(n);let a=e=>(0,r.jsxs)("div",{className:"text-sm flex justify-between",children:[e.prevPost&&(0,r.jsxs)("div",{className:"w-1/2",children:["← 新しい記事",(0,r.jsx)("br",{}),(0,r.jsx)(l(),{href:e.prevPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.prevPost.slug),as:e.prevPost.slug.startsWith("posts/")?"/".concat(e.prevPost.slug):void 0,children:e.prevPost.title})]}),e.nextPost&&(0,r.jsxs)("div",{className:"text-right ml-auto w-1/2",children:["過去の記事 →",(0,r.jsx)("br",{}),(0,r.jsx)(l(),{href:e.nextPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.nextPost.slug),as:e.nextPost.slug.startsWith("posts/")?"/".concat(e.nextPost.slug):void 0,children:e.nextPost.title})]})]})}},function(e){e.O(0,[814,167,106,440,877,180,647,774,888,179],function(){return e(e.s=7328)}),_N_E=e.O()}]);