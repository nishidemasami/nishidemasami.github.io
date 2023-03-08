"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{72167:function(t,e,n){function r(t,e){if(e.length<t)throw TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===o(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):(("string"==typeof t||"[object String]"===e)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function d(t){r(1,arguments);var e=i(t),n=e.getUTCDay();return e.setUTCDate(e.getUTCDate()-((n<1?7:0)+n-1)),e.setUTCHours(0,0,0,0),e}function s(t){r(1,arguments);var e=i(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var o=d(a),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=d(u);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}n.d(e,{Z:function(){return z}});var l,c={};function h(t,e){r(1,arguments);var n,a,o,d,s,l,h,f,m=u(null!==(n=null!==(a=null!==(o=null!==(d=null==e?void 0:e.weekStartsOn)&&void 0!==d?d:null==e?void 0:null===(s=e.locale)||void 0===s?void 0:null===(l=s.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:c.weekStartsOn)&&void 0!==a?a:null===(h=c.locale)||void 0===h?void 0:null===(f=h.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==n?n:0);if(!(m>=0&&m<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=i(t),v=g.getUTCDay();return g.setUTCDate(g.getUTCDate()-((v<m?7:0)+v-m)),g.setUTCHours(0,0,0,0),g}function f(t,e){r(1,arguments);var n,a,o,d,s,l,f,m,g=i(t),v=g.getUTCFullYear(),w=u(null!==(n=null!==(a=null!==(o=null!==(d=null==e?void 0:e.firstWeekContainsDate)&&void 0!==d?d:null==e?void 0:null===(s=e.locale)||void 0===s?void 0:null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:c.firstWeekContainsDate)&&void 0!==a?a:null===(f=c.locale)||void 0===f?void 0:null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(w>=1&&w<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,w),b.setUTCHours(0,0,0,0);var y=h(b,e),p=new Date(0);p.setUTCFullYear(v,0,w),p.setUTCHours(0,0,0,0);var T=h(p,e);return g.getTime()>=y.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}function m(t,e){for(var n=Math.abs(t).toString();n.length<e;)n="0"+n;return(t<0?"-":"")+n}var g={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return m("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):m(n+1,2)},d:function(t,e){return m(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return m(t.getUTCHours()%12||12,e.length)},H:function(t,e){return m(t.getUTCHours(),e.length)},m:function(t,e){return m(t.getUTCMinutes(),e.length)},s:function(t,e){return m(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length;return m(Math.floor(t.getUTCMilliseconds()*Math.pow(10,n-3)),e.length)}},v={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"};function w(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+(e||"")+m(o,2)}function b(t,e){return t%60==0?(t>0?"-":"+")+m(Math.abs(t)/60,2):y(t,e)}function y(t,e){var n=Math.abs(t);return(t>0?"-":"+")+m(Math.floor(n/60),2)+(e||"")+m(n%60,2)}var p={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear();return n.ordinalNumber(r>0?r:1-r,{unit:"year"})}return g.y(t,e)},Y:function(t,e,n,r){var a=f(t,r),o=a>0?a:1-a;return"YY"===e?m(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):m(o,e.length)},R:function(t,e){return m(s(t),e.length)},u:function(t,e){return m(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return m(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return m(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return g.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return m(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var o=function(t,e){r(1,arguments);var n=i(t);return Math.round((h(n,e).getTime()-(function(t,e){r(1,arguments);var n,a,o,i,d,s,l,m,g=u(null!==(n=null!==(a=null!==(o=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e?void 0:null===(d=e.locale)||void 0===d?void 0:null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==o?o:c.firstWeekContainsDate)&&void 0!==a?a:null===(l=c.locale)||void 0===l?void 0:null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1),v=f(t,e),w=new Date(0);return w.setUTCFullYear(v,0,g),w.setUTCHours(0,0,0,0),h(w,e)})(n,e).getTime())/6048e5)+1}(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):m(o,e.length)},I:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t);return Math.round((d(e).getTime()-(function(t){r(1,arguments);var e=s(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),d(n)})(e).getTime())/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):m(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):g.d(t,e)},D:function(t,e,n){var a=function(t){r(1,arguments);var e=i(t),n=e.getTime();return e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0),Math.floor((n-e.getTime())/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):m(a,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return m(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return m(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return m(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?v.noon:0===a?v.midnight:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?v.evening:a>=12?v.afternoon:a>=4?v.morning:v.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):g.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):m(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return(0===r&&(r=24),"ko"===e)?n.ordinalNumber(r,{unit:"hour"}):m(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):g.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):g.s(t,e)},S:function(t,e){return g.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return b(a);case"XXXX":case"XX":return y(a);default:return y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return b(a);case"xxxx":case"xx":return y(a);default:return y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+w(a,":");default:return"GMT"+y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+w(a,":");default:return"GMT"+y(a,":")}},t:function(t,e,n,r){return m(Math.floor((r._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,n,r){return m((r._originalDate||t).getTime(),e.length)}},T=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},C=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},M={p:C,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return T(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",T(a,e)).replace("{{time}}",C(o,e))}},D=["D","DD"],k=["YY","YYYY"];function S(t,e,n){if("YYYY"===t)throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function x(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var P={date:x({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:x({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:x({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},W={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Y(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function E(t){return function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(o);if(!i)return null;var u=i[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,function(t){return t.test(u)}):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,function(t){return t.test(u)});return n=t.valueCallback?t.valueCallback(s):s,{value:n=r.valueCallback?r.valueCallback(n):n,rest:e.slice(u.length)}}}var N={code:"en-US",formatDistance:function(t,e,n){var r,a=U[t];return(r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:P,formatRelative:function(t,e,n,r){return W[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(l.matchPattern);if(!n)return null;var r=n[0],a=t.match(l.parsePattern);if(!a)return null;var o=l.valueCallback?l.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:E({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:E({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:E({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:E({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},O=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,H=/^'([^]*?)'?$/,F=/''/g,j=/[a-zA-Z]/;function z(t,e,n){r(2,arguments);var o,d,s,l,h,f,m,g,v,w,b,y,T,C,U,x,P,W,Y,E=String(e),z=null!==(d=null!==(s=null==n?void 0:n.locale)&&void 0!==s?s:c.locale)&&void 0!==d?d:N,L=u(null!==(l=null!==(h=null!==(f=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n?void 0:null===(g=n.locale)||void 0===g?void 0:null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==f?f:c.firstWeekContainsDate)&&void 0!==h?h:null===(w=c.locale)||void 0===w?void 0:null===(b=w.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==l?l:1);if(!(L>=1&&L<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Q=u(null!==(y=null!==(T=null!==(C=null!==(U=null==n?void 0:n.weekStartsOn)&&void 0!==U?U:null==n?void 0:null===(x=n.locale)||void 0===x?void 0:null===(P=x.options)||void 0===P?void 0:P.weekStartsOn)&&void 0!==C?C:c.weekStartsOn)&&void 0!==T?T:null===(W=c.locale)||void 0===W?void 0:null===(Y=W.options)||void 0===Y?void 0:Y.weekStartsOn)&&void 0!==y?y:0);if(!(Q>=0&&Q<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!z.localize)throw RangeError("locale must contain localize property");if(!z.formatLong)throw RangeError("locale must contain formatLong property");var A=i(t);if(!function(t){return r(1,arguments),(!!function(t){return r(1,arguments),t instanceof Date||"object"===a(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)||"number"==typeof t)&&!isNaN(Number(i(t)))}(A))throw RangeError("Invalid time value");var G=((o=new Date(Date.UTC(A.getFullYear(),A.getMonth(),A.getDate(),A.getHours(),A.getMinutes(),A.getSeconds(),A.getMilliseconds()))).setUTCFullYear(A.getFullYear()),A.getTime()-o.getTime()),X=function(t,e){return r(2,arguments),function(t,e){r(2,arguments);var n=i(t).getTime(),a=u(e);return new Date(n+a)}(t,-u(e))}(A,G),B={firstWeekContainsDate:L,weekStartsOn:Q,locale:z,_originalDate:A};return E.match(q).map(function(t){var e=t[0];return"p"===e||"P"===e?(0,M[e])(t,z.formatLong):t}).join("").match(O).map(function(r){if("''"===r)return"'";var a,o=r[0];if("'"===o)return(a=r.match(H))?a[1].replace(F,"'"):r;var i=p[o];if(i)return null!=n&&n.useAdditionalWeekYearTokens||-1===k.indexOf(r)||S(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||-1===D.indexOf(r)||S(r,e,String(t)),i(X,r,z.localize,B);if(o.match(j))throw RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r}).join("")}}}]);