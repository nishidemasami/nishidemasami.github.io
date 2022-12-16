---
title: SVGだけで作ったSVGマニ車をCSSでクルクル回して自動で徳を積む
date: "2022-12-07T01:04:03+0900"
modified_date: '2022-12-07T01:04:03+0900'
template: "post"
draft: false
category: "blog"
description: 徳、積みたいですよね。JavaScriptを使わずにSVGとCSSだけでマニ車をクルクル回して自動で徳を積みたいこと、ありますよね。僕はあるので自分用にメモです。
tags:
  - "SVG"
  - "CSS"
---

<style>
	#Text1{animation: spin 11s linear infinite; transform-origin: center;}
	#Text2{animation: spin 10s linear infinite; transform-origin: center;}
	#Text3{animation: spin 9s linear infinite; transform-origin: center;}
	#Text4{animation: spin 8s linear infinite; transform-origin: center;}
	#Text5{animation: spin 7s linear infinite; transform-origin: center;}
	#Text6{animation: spin 6s linear infinite; transform-origin: center;}
	#Text7{animation: spin 5s linear infinite; transform-origin: center;}
	#Text8{animation: spin 4s linear infinite; transform-origin: center;}
	#Text9{animation: spin 3s linear infinite; transform-origin: center;}
</style>
<svg style="max-width:400px" viewBox="0 0 400 400" >
	<defs>
		<path id="Circle1" d="M 25, 200 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0" />
		<path id="Circle2" d="M 50, 200 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" />
		<path id="Circle3" d="M 75, 200 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0" />
		<path id="Circle4" d="M 100, 200 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
		<path id="Circle5" d="M 125, 200 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
		<path id="Circle6" d="M 150, 200 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
		<path id="Circle7" d="M 175, 200 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" />
	</defs>
	<text id="Text1">
		<textPath href="#Circle1">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text2">
		<textPath href="#Circle2">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text3">
		<textPath href="#Circle3">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text4">
		<textPath href="#Circle4">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text5">
		<textPath href="#Circle5">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text6">
		<textPath href="#Circle6">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text7">
		<textPath href="#Circle7">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text8">
		<textPath href="#Circle8">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text9">
		<textPath href="#Circle9">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
</svg>

徳、積みたいですよね。

ご存知マニ車。お寺とかにたまにある、周囲にマントラが書いてあって手で回すと1回転毎に1回お経を読んだのと同じ徳を積めるスピリチュアルグッズです。<sup>[<a target="_blank" href="https://www.amazon.co.jp/gp/search?ie=UTF8&tag=nishidemasami-22&linkCode=ur2&linkId=d1ba0bb31ef3d317b4a5c8ad6af3095d&camp=247&creative=1211&index=aps&keywords=マニ車">参考</a>]</sup>  
チベット仏教が国教であるブータンでは、水力マニ車や風力マニ車、ソーラーマニ車<sup>[<a target="_blank" href="https://www.amazon.co.jp/gp/search?ie=UTF8&tag=nishidemasami-22&linkCode=ur2&linkId=d1ba0bb31ef3d317b4a5c8ad6af3095d&camp=247&creative=1211&index=aps&keywords=ソーラーマニ車">参考</a>]</sup>などもあり、マニ車も進化しているということがわかります。[^1]

[^1]: 日本風力エネルギー学会誌 Vol.44, No.4

ならば、SVGとCSSでマントラを回しても徳が積めるのでは…？  
そう思ったので自分用にメモです。

```html
<style>
	#Text1{animation: spin 11s linear infinite; transform-origin: center;}
	#Text2{animation: spin 10s linear infinite; transform-origin: center;}
	#Text3{animation: spin 9s linear infinite; transform-origin: center;}
	#Text4{animation: spin 8s linear infinite; transform-origin: center;}
	#Text5{animation: spin 7s linear infinite; transform-origin: center;}
	#Text6{animation: spin 6s linear infinite; transform-origin: center;}
	#Text7{animation: spin 5s linear infinite; transform-origin: center;}
	#Text8{animation: spin 4s linear infinite; transform-origin: center;}
	#Text9{animation: spin 3s linear infinite; transform-origin: center;}
</style>
<svg style="max-width:400px" viewBox="0 0 400 400" >
	<defs>
		<path id="Circle1" d="M 25, 200 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0" />
		<path id="Circle2" d="M 50, 200 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" />
		<path id="Circle3" d="M 75, 200 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0" />
		<path id="Circle4" d="M 100, 200 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
		<path id="Circle5" d="M 125, 200 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
		<path id="Circle6" d="M 150, 200 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
		<path id="Circle7" d="M 175, 200 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" />
	</defs>
	<text id="Text1">
		<textPath href="#Circle1">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text2">
		<textPath href="#Circle2">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text3">
		<textPath href="#Circle3">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text4">
		<textPath href="#Circle4">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text5">
		<textPath href="#Circle5">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text6">
		<textPath href="#Circle6">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text7">
		<textPath href="#Circle7">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text8">
		<textPath href="#Circle8">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
	<text id="Text9">
		<textPath href="#Circle9">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
	</text>
</svg>
```

このような感じで円のパスを複数個作って、それぞれを違う速さで回しています。

なお、以下のようにSVGのanimateTransformで回転させることもできます。  
しかし、CPUレンダリングになってしまうのでちょっとカクカクするので今回はこの方法は使いませんでした。

```xml
<svg style="max-width:400px" viewBox="0 0 400 400" >
	<defs>
		<path id="Circle1" d="M 25, 200 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0" />
		<path id="Circle2" d="M 50, 200 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" />
		<path id="Circle3" d="M 75, 200 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0" />
		<path id="Circle4" d="M 100, 200 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
		<path id="Circle5" d="M 125, 200 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
		<path id="Circle6" d="M 150, 200 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
		<path id="Circle7" d="M 175, 200 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" />
	</defs>
	<text>
		<textPath href="#Circle1">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="11s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle2">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="10s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle3">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="9s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle4">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="8s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle5">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="7s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle6">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="6s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle7">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="5s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle8">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="4s" repeatCount="indefinite" />
	</text>
	<text>
		<textPath href="#Circle9">ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ ॐ मणिपद्मे हूँ</textPath>
		<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 200,200" to="360 200,200" dur="3s" repeatCount="indefinite" />
	</text>
</svg>
```

SVG単体でanimateTransformを利用してマニ車を回すより、CSSのanimationで回した方がスムーズな動作で回せました。

これでパソコンでもスマホでも、いつでもどこでも誰でも自動でスマートに徳を積めますね。  
以上、SVGで徳を積んだという話でした。
