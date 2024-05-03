"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{25220:function(n,e,a){a.r(e),a.d(e,{default:function(){return v}});var t=a(85893),l=a(67294),r=a(22435),o=a(95416),m=a(83683),p=a(8878),g=a(45243),i=a(39153),s=a(5715),u=a(52013),c=a(81591),d=a(27999),h=a(1410);let f=(0,c.dW)(function({position:n,...e},a){let t=new g.Marker(n,e);return(0,d.O)(t,(0,h.sj)(a,{overlayContainer:t}))},function(n,e,a){e.position!==a.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==a.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==a.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==a.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==a.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())}),b=(0,c.SO)(function(n,e){let a=new g.Popup(n,e.overlayContainer);return(0,d.O)(a,e)},function(n,e,{position:a},t){(0,l.useEffect)(function(){let{instance:l}=n;function r(n){n.popup===l&&(l.update(),t(!0))}function o(n){n.popup===l&&t(!1)}return e.map.on({popupopen:r,popupclose:o}),null==e.overlayContainer?(null!=a&&l.setLatLng(a),l.openOn(e.map)):e.overlayContainer.bindPopup(l),function(){e.map.off({popupopen:r,popupclose:o}),e.overlayContainer?.unbindPopup(),e.map.removeLayer(l)}},[n,e,t,a])});a(91720);let x=new g.Icon({iconUrl:"/_next/static/media/marker-icon.d577052a.png",iconAnchor:[13,41]}),y=[{name:"OpenStreetMap",url:"https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png",attribution:'Daten von <a href="https://www.openstreetmap.org/">OpenStreetMap</a> - Ver\xf6ffentlicht unter <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>'},{name:"国土地理院地図",url:"https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",attribution:'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'},{name:"OpenStreetMap(日本語版)",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'},{name:"Stamen Maps(Terrain)",url:"//stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",attribution:'\xa9 Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>.'},{name:"Stamen Maps(Toner)",url:"//stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",attribution:'\xa9 Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>.'},{name:"OpenTopoMap",url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributions, <a href="http://viewfinderpanoramas.org/">SRTM</a> | map style: \xa9 <a href="https://opentopomap.org/#map=15/35.68374/139.75330">OpenTopoMap</a>'}],O=[{name:"日本橋",latlng:[35.6836111111111,139.774444444444]},{name:"品川宿",latlng:[35.6219444444444,139.739166666667]},{name:"川崎宿",latlng:[35.5355555555556,139.707777777778]},{name:"神奈川宿",latlng:[35.4727777777778,139.632277777778]},{name:"保ヶ谷宿",latlng:[35.4440277777778,139.595555555556]},{name:"戸塚宿",latlng:[35.3950277777778,139.529861111111]},{name:"藤沢宿",latlng:[35.3456666666667,139.486305555556]},{name:"平塚宿",latlng:[35.3272777777778,139.337805555556]},{name:"大磯宿",latlng:[35.309,139.315305555556]},{name:"小田原宿",latlng:[35.2487222222222,139.161027777778]},{name:"箱根宿",latlng:[35.1904166666667,139.026361111111]},{name:"三島宿",latlng:[35.11925,138.914472222222]},{name:"沼津宿",latlng:[35.1001111111111,138.857416666667]},{name:"原宿",latlng:[35.1255277777778,138.797333333333]},{name:"吉原宿",latlng:[35.1627777777778,138.685638888889]},{name:"蒲原宿",latlng:[35.1199722222222,138.605472222222]},{name:"由比宿",latlng:[35.1076111111111,138.567472222222]},{name:"興津宿",latlng:[35.0498333333333,138.519555555556]},{name:"江尻宿",latlng:[35.0198888888889,138.480861111111]},{name:"府中宿",latlng:[34.9749166666667,138.387638888889]},{name:"鞠子宿",latlng:[34.9494166666667,138.342444444444]},{name:"岡部宿",latlng:[34.9188333333333,138.282666666667]},{name:"藤枝宿",latlng:[34.8698055555556,138.252722222222]},{name:"島田宿",latlng:[34.8328055555556,138.175861111111]},{name:"金谷宿",latlng:[34.8228611111111,138.129277777778]},{name:"日坂宿",latlng:[34.8041388888889,138.075361111111]},{name:"掛川宿",latlng:[34.7729166666667,138.015888888889]},{name:"袋井宿",latlng:[34.7474722222222,137.923222222222]},{name:"見附宿",latlng:[34.7268055555556,137.857027777778]},{name:"浜松宿",latlng:[34.7051111111111,137.731916666667]},{name:"舞阪宿",latlng:[34.6843888888889,137.608944444444]},{name:"新居宿",latlng:[34.6941388888889,137.560777777778]},{name:"白須賀宿",latlng:[34.6885555555556,137.500833333333]},{name:"二川宿",latlng:[34.7230555555556,137.464527777778]},{name:"吉田宿",latlng:[34.7666388888889,137.389722222222]},{name:"御油宿",latlng:[34.8448888888889,137.317333333333]},{name:"赤坂宿",latlng:[34.8557222222222,137.308222222222]},{name:"藤川宿",latlng:[34.9110555555556,137.222194444444]},{name:"岡崎宿",latlng:[34.9579166666667,137.169194444444]},{name:"池鯉鮒宿",latlng:[35.0081111111111,137.040944444444]},{name:"鳴海宿",latlng:[35.0796666666667,136.949805555556]},{name:"宮宿",latlng:[35.1204166666667,136.906722222222]},{name:"桑名宿",latlng:[35.0687222222222,136.6955]},{name:"四日市宿",latlng:[34.9695277777778,136.625277777778]},{name:"石薬師宿",latlng:[34.9043333333333,136.548]},{name:"庄野宿",latlng:[34.8833888888889,136.524833333333]},{name:"亀山宿",latlng:[34.8543055555556,136.454111111111]},{name:"関宿",latlng:[34.8524722222222,136.392083333333]},{name:"坂下宿",latlng:[34.8885555555556,136.354083333333]},{name:"土山宿",latlng:[34.9344166666667,136.283833333333]},{name:"水口宿",latlng:[34.9655555555556,136.1835]},{name:"石部宿",latlng:[35.0100555555556,136.054638888889]},{name:"草津宿",latlng:[35.0174444444444,135.960638888889]},{name:"大津宿",latlng:[35.0059722222222,135.861416666667]},{name:"三条大橋",latlng:[35.0103333333333,135.774361111111]}],j=n=>{let{center:e}=n,a=(0,i.Sx)();return l.useEffect(()=>{e&&a.setView(e,13,{animate:!0})},[e,a]),null};var v=()=>{let[n,e]=l.useState(),[a,g]=l.useState(y[0].name),[i,c]=l.useState(""),d=l.useMemo(()=>y.find(n=>n.name===a),[a]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Z,{margin:"normal",children:[(0,t.jsx)(o.Z,{children:"地図選択"}),(0,t.jsx)(m.Z,{value:a,label:"地図選択",onChange:n=>{g(n.target.value)},children:y.map(n=>{let{name:e}=n;return(0,t.jsx)(p.Z,{value:e,children:e},e)})})]}),(0,t.jsxs)(r.Z,{margin:"normal",children:[(0,t.jsx)(o.Z,{children:"場所選択"}),(0,t.jsx)(m.Z,{className:"w-28",value:i,label:"場所選択",onChange:n=>{let a=O.find(e=>e.name===n.target.value);a&&(c(a.name),e(a.latlng))},children:O.map(n=>{let{name:e}=n;return(0,t.jsx)(p.Z,{value:e,children:e},e)})})]}),(0,t.jsxs)(s.h,{center:[35.0585904,137.5191176],zoom:7,maxZoom:18,scrollWheelZoom:!0,style:{height:400,width:"100%"},children:[(0,t.jsx)(j,{center:n}),(0,t.jsx)(u.I,{attribution:d.attribution,url:d.url}),O.map(n=>(0,t.jsx)(f,{position:n.latlng,icon:x,children:(0,t.jsx)(b,{children:n.name})},n.name))]})]})}}}]);