(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},RBgx:function(e,t,n){e.exports={page:"Page-module--page--V2155",page__inner:"Page-module--page__inner--3xzwp",page__title:"Page-module--page__title--t1zKX",page__body:"Page-module--page__body--1A7TB","page__home-button":"Page-module--page__home-button--1neiy"}},RXmK:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n.n(r),c=n("Wbzz"),o=n("RBgx"),u=n.n(o),i=n("gGy4"),l=function(e){var t=e.title,n=e.children,o=Object(i.c)().title,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){l.current&&l.current.scrollIntoView()})),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{ref:l,className:u.a.page},a.a.createElement(c.Link,{className:u.a["page__home-button"],to:"/"},o),a.a.createElement("div",{className:u.a.page__inner},t&&a.a.createElement("h1",{className:u.a.page__title},t),a.a.createElement("div",{className:u.a.page__body},n))))}},X8hv:function(e,t,n){var r=n("sXyB"),a=n("RIqP"),c=n("lSNA"),o=n("8OQS");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n("q1tI"),p=n("7ljp").mdx,s=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,c=o(e,["scope","children"]),u=s(t),f=l.useMemo((function(){if(!n)return null;var e=i({React:l,mdx:p},u),t=Object.keys(e),c=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(c)))}),[n,t]);return l.createElement(f,i({},c))}},XZxg:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=n("Zttt"),o=n("/d1K"),u=n("RXmK"),i=n("gGy4"),l=n("A2+M"),p=n("kKAo");t.default=function(e){var t=e.data,n=Object(i.c)(),r=n.title,s=n.subtitle,f=t.mdx.body,m=t.mdx.frontmatter,d=m.title,g=m.description,b=(void 0===g?"":g)||s,y=m.socialImage;return a.a.createElement(c.a,{title:d+" - "+r,description:b,socialImage:y},a.a.createElement(u.a,{title:d},a.a.createElement(p.a,{style:{padding:"12px 20px"}},a.a.createElement(l.MDXRenderer,null,f))),a.a.createElement(o.a,null))}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},sXyB:function(e,t,n){var r=n("SksO"),a=n("b48C");function c(t,n,o){return a()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,n){var a=[null];a.push.apply(a,t);var c=new(Function.bind.apply(e,a));return n&&r(c,n.prototype),c},c.apply(null,arguments)}e.exports=c}}]);