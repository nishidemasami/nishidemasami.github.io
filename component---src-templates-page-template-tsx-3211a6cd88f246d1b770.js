(self.webpackChunknishidemasami_github_io=self.webpackChunknishidemasami_github_io||[]).push([[791],{9100:function(e,t,r){var n=r(9489),o=r(7067);function c(t,r,a){return o()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},9170:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(1872),c=r(7644),a=r(8331),u=r(6569),l=r(1274),i=r(8063);t.default=function(e){var t=e.data,r=(0,u.$W)(),s=r.title,p=r.subtitle,f=t.mdx.body,d=t.mdx.frontmatter,m=d.title,x=d.description,y=(void 0===x?"":x)||p,v=d.socialImage;return n.createElement(o.Z,{title:m+" - "+s,description:y,socialImage:v},n.createElement(a.Z,{title:m},n.createElement(i.Z,{style:{padding:"12px 20px"}},n.createElement(l.MDXRenderer,null,f))),n.createElement(c.Z,null))}},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),c=r(9713),a=r(7316);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),s=r(4983).mdx,p=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=a(e,["scope","children"]),u=p(t),f=i.useMemo((function(){if(!r)return null;var e=l({React:i,mdx:s},u),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return i.createElement(f,l({},c))}},8331:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294),o=r(5444);var c=r(6569);var a=function(e){var t=e.title,r=e.children,a=(0,c.$W)().title,u=(0,n.useRef)(null);return(0,n.useEffect)((function(){u.current&&u.current.scrollIntoView()})),n.createElement("div",{className:"Page-module--page--2Y5e7",ref:u},n.createElement(o.Link,{className:"Page-module--pageHomeButton--1_LYa",to:"/"},a),n.createElement("div",{className:"Page-module--pageInner--fr7Bu"},t&&n.createElement("h1",{className:"Page-module--pageTitle--3fOa3"},t),n.createElement("div",{className:"Page-module--pageBody--3_EP5"},r)))}}}]);