---
title: SVGとCSSだけで文字をクルクル回す
date: "2021-03-17T01:04:03+0900"
modified_date: '2021-03-17T01:04:03+0900'
template: "post"
draft: false
category: "blog"
description: JavaScriptを使わずにSVGとCSSだけで文字をクルクル回したいこと、ありますよね。僕はあるので自分用にメモです。
tags:
  - "CSS"
  - "SVG"
---

JavaScriptを使わずにSVGとCSSだけで文字をクルクル回したいこと、ありますよね。  
僕はあるので自分用にメモです。

<svg style="animation: spin 5s linear infinite; max-width:300px" viewBox="0 0 100 100" >
	<defs>
		<path id="Circle" d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" />
	</defs>
	<text>
		<textPath href="#Circle">文字がクルクル回ります。</textPath>
	</text>
</svg>

```html
<svg
	style="animation: spin 5s linear infinite; max-width:300px"
	viewBox="0 0 100 100"
>
	<defs>
		<path
			id="Circle"
			d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
		/>
	</defs>
	<text>
		<textPath href="#Circle">
			文字がクルクル回ります。
		</textPath>
	</text>
</svg>
```

SVGは大きさ50*50の円とその周囲を沿うようにテキストを記述しています。SVGのスタイルにはクルクル回るCSSを書いてます。  
これだけでクルクル回ったので楽しかったです。
