/*! For license information please see component---src-templates-index-template-tsx-de3bba8d34a9f53f847e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--Bm0MP","feed__item-title":"Feed-module--feed__item-title--34sOw","feed__item-title-link":"Feed-module--feed__item-title-link--2qfTF","feed__item-description":"Feed-module--feed__item-description--2_Zuy","feed__item-meta-time":"Feed-module--feed__item-meta-time--3hc6b","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--2GeAw","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--lAu1I","feed__item-readmore":"Feed-module--feed__item-readmore--rMfbv"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a("N1om"),i=a.n(n),r=a("q1tI"),o=a.n(r),l=a("Wbzz"),m=a("1xLx"),d=a.n(m),_=function(e){var t=e.edges;return o.a.createElement("div",{className:d.a.feed},t.map((function(e){var t=e.node.frontmatter.slug;return o.a.createElement("div",{className:d.a.feed__item,key:e.node.frontmatter.slug},o.a.createElement("div",{className:d.a["feed__item-meta"]},o.a.createElement("time",{className:d.a["feed__item-meta-time"],dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("ja-JP",{year:"numeric",month:"long"})),o.a.createElement("span",{className:d.a["feed__item-meta-divider"]}),o.a.createElement("span",{className:d.a["feed__item-meta-category"]},o.a.createElement(l.Link,{to:"/category/"+i()(e.node.frontmatter.category),className:d.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),o.a.createElement("h2",{className:d.a["feed__item-title"]},o.a.createElement(l.Link,{className:d.a["feed__item-title-link"],to:t},e.node.frontmatter.title)),o.a.createElement("p",{className:d.a["feed__item-description"]},e.node.frontmatter.description),o.a.createElement(l.Link,{className:d.a["feed__item-readmore"],to:t},"続きを読む"))})))}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--V2155",page__inner:"Page-module--page__inner--3xzwp",page__title:"Page-module--page__title--t1zKX",page__body:"Page-module--page__body--1A7TB","page__home-button":"Page-module--page__home-button--1neiy"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),o=a("RBgx"),l=a.n(o),m=a("gGy4"),d=function(e){var t=e.title,a=e.children,o=Object(m.c)().title,d=Object(n.useRef)(null);return Object(n.useEffect)((function(){d.current&&d.current.scrollIntoView()})),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:d,className:l.a.page},i.a.createElement(r.Link,{className:l.a["page__home-button"],to:"/"},o),i.a.createElement("div",{className:l.a.page__inner},t&&i.a.createElement("h1",{className:l.a.page__title},t),i.a.createElement("div",{className:l.a.page__body},a))))}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--3T_m0",pagination__prev:"Pagination-module--pagination__prev--3tRFv","pagination__prev-link":"Pagination-module--pagination__prev-link--2vesn","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--1Fxw2",pagination__next:"Pagination-module--pagination__next--19bJd","pagination__next-link":"Pagination-module--pagination__next-link--3ln7y","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--AsM50"}},UbMB:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},Xs3w:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Zttt"),o=a("/d1K"),l=a("6V6j"),m=a("RXmK"),d=a("v0M6"),_=a("gGy4");t.default=function(e){var t=e.data,a=e.pageContext,n=Object(_.c)(),s=n.title,c=n.subtitle,g=a.currentPage,u=a.hasNextPage,p=a.hasPrevPage,f=a.prevPagePath,v=a.nextPagePath,P=t.allMdx.edges,x=g>0?"Posts - Page "+g+" - "+s:s;return i.a.createElement(r.a,{title:x,description:c},i.a.createElement(m.a,null,i.a.createElement(l.a,{edges:P}),i.a.createElement(d.a,{prevPagePath:f,nextPagePath:v,hasPrevPage:p,hasNextPage:u})),i.a.createElement(o.a,{isIndex:!0}))}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=a("UbMB"),o=a.n(r),l=a("Wbzz"),m=a("WlAH"),d=a("U4DU"),_=a.n(d),s=o.a.bind(_.a),c=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,o=s({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),d=s({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:_.a.pagination},i.a.createElement("div",{className:_.a.pagination__prev},i.a.createElement(l.Link,{rel:"prev",to:r?t:"/",className:o},m.b.PREV_PAGE)),i.a.createElement("div",{className:_.a.pagination__next},i.a.createElement(l.Link,{rel:"next",to:n?a:"/",className:d},m.b.NEXT_PAGE)))}}}]);