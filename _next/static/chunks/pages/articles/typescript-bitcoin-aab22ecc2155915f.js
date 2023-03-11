(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{79113:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/typescript-bitcoin",function(){return s(3044)}])},53737:function(e,t,s){"use strict";s.d(t,{V:function(){return r}});var n=s(85893);s(67294);let r=e=>(0,n.jsx)("div",{className:"markdown-content",children:e.children})},3044:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return C},default:function(){return I}});var n=s(85893),r=s(67294),i=s(72167),l=s(41664),a=s.n(l),o=s(42474),c=s(83321),u=s(61903),d=s(27715),p=s(77191),f=s(79785),h=s.n(f),x=s(17221),g=s(48764).Buffer;let m=/^[0-9a-fA-F]{64}$/,v=e=>g.from(e,"hex"),y=e=>e.toString("hex"),j=e=>(0,o.createHash)("sha256").update(e).digest(),P=e=>new(h())().update(e).digest(),w=e=>j(j(e)).subarray(0,4),_=e=>(0,p.encode)([...e,...w(e)]),b=e=>_(Uint8Array.from([0,...P(j(e))])),N=e=>d.gW.encode("bc",[0,...d.gW.toWords(e)]),W=e=>N(P(j(e))),T=e=>_(Uint8Array.from([128,...e])),S=()=>{let[e,t]=(0,r.useState)(y((0,o.randomBytes)(32))),s=(0,r.useMemo)(()=>m.test(e)?v(e):"秘密鍵が32バイトの16進数ではない",[e]),i=(0,r.useMemo)(()=>"string"==typeof s?s:(0,x.privateKeyVerify)(s)?(0,x.publicKeyCreate)(s,!1):"秘密鍵が不適切",[s]),l=(0,r.useMemo)(()=>"string"==typeof s?s:"string"==typeof i?i:W(i),[s,i]),a=(0,r.useMemo)(()=>"string"==typeof s?s:"string"==typeof i?i:b(i),[s,i]),d=(0,r.useCallback)(()=>t(y((0,o.randomBytes)(32))),[]),p=(0,r.useMemo)(()=>T(v(e)),[e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{onClick:d,variant:"outlined",children:"秘密鍵をランダムに生成"}),(0,n.jsx)(u.Z,{error:!m.test(e),fullWidth:!0,label:"秘密鍵(32バイトの16進数)",margin:"dense",value:e,onChange:e=>{t(e.currentTarget.value)}}),(0,n.jsx)(u.Z,{fullWidth:!0,label:"秘密鍵(WIF形式)",margin:"dense",value:p,InputProps:{readOnly:!0}}),(0,n.jsx)(u.Z,{fullWidth:!0,label:"ビットコインアドレス(BASE58(P2PKH)形式)",margin:"dense",InputProps:{readOnly:!0},value:a}),(0,n.jsx)(u.Z,{fullWidth:!0,label:"ビットコインアドレス(BASE32(Bech32)形式)",margin:"dense",InputProps:{readOnly:!0},value:l})]})};var k=s(53737),A=s(68192),B=s(37793),E=s(54039);let M=e=>(0,n.jsxs)(E.o,{recents:e.recents,tags:e.tags,meta:(0,n.jsx)(A.h,{title:"Typescriptでビットコインアドレスを生成する",description:"Typescriptでビットコインアドレスを生成したいこと、ありますよね。僕はあるので自分用にメモです。"}),children:[(0,n.jsx)("h1",{className:"content-title",children:"Typescriptでビットコインアドレスを生成する"}),(0,n.jsx)("div",{className:"content-date",children:(0,i.Z)(new Date("2022-12-10T01:04:03+0900"),"LLLL d, yyyy")}),(0,n.jsx)("ul",{className:"flex flex-row flex-wrap list-none p-0 m-2 justify-start",children:["TypeScript","React","Bitcoin"].map(e=>(0,n.jsx)("li",{className:"px-2 py-1 m-1 rounded-full overflow-hidden shadow-md border-0 bg-white w-fit break-all",children:(0,n.jsxs)(a(),{href:"/tag/[tag]",as:"/tag/".concat(e),children:["#",e]})},e))}),(0,n.jsx)(k.V,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.firstArticle}}),(0,n.jsx)(S,{}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.secondArticle}})]})}),(0,n.jsx)(B.w,{nextPost:e.nextPost,prevPost:e.prevPost})]});var C=!0,I=M},37793:function(e,t,s){"use strict";s.d(t,{w:function(){return l}});var n=s(85893);s(67294);var r=s(41664),i=s.n(r);let l=e=>(0,n.jsxs)("div",{className:"text-sm flex justify-between",children:[e.prevPost&&(0,n.jsxs)("div",{className:"w-1/2",children:["← 新しい記事",(0,n.jsx)("br",{}),(0,n.jsx)(i(),{href:e.prevPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.prevPost.slug),as:e.prevPost.slug.startsWith("posts/")?"/".concat(e.prevPost.slug):void 0,children:e.prevPost.title})]}),e.nextPost&&(0,n.jsxs)("div",{className:"text-right ml-auto w-1/2",children:["過去の記事 →",(0,n.jsx)("br",{}),(0,n.jsx)(i(),{href:e.nextPost.slug.startsWith("posts/")?"/posts/[slug]":"/".concat(e.nextPost.slug),as:e.nextPost.slug.startsWith("posts/")?"/".concat(e.nextPost.slug):void 0,children:e.nextPost.title})]})]})},46601:function(){},89214:function(){},52361:function(){},94616:function(){}},function(e){e.O(0,[714,814,167,928,421,901,72,488,806,774,888,179],function(){return e(e.s=79113)}),_N_E=e.O()}]);