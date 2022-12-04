---
title: SVGで文字をクルクル回す
date: "2021-03-17T01:04:03+0900"
modified_date: '2021-03-17T01:04:03+0900'
template: "post"
draft: false
category: "blog"
description: SVGで文字をクルクル回す
tags:
  - "CSS"
  - "SVG"
---

SVGとCSSだけで文字をクルクル回したかったので自分用にメモ。

<svg style="animation: spin 5s linear infinite; width:100%" viewBox="0 0 100 100">
    <defs>
        <path id="Circle"
                d="M 25, 50
            a 25,25 0 1,1 50,0
            a 25,25 0 1,1 -50,0" />
    </defs>
    <text>
        <textPath href="#Circle">文字がクルクル回ります。</textPath>
    </text>
</svg>

```html
<svg style="animation: spin 5s linear infinite" viewBox="0 0 100 100" style="width:100%">
    <defs>
        <path id="Circle"
                d="M 25, 50
            a 25,25 0 1,1 50,0
            a 25,25 0 1,1 -50,0" />
    </defs>
    <text>
        <textPath href="#Circle">文字がクルクル回ります。</textPath>
    </text>
</svg>
```

SVGは大きさ50*50の円とその周囲を沿うようにテキストを記述しています。SVGのスタイルにはクルクル回るCSSを書いてます。  
これだけでクルクル回ったので楽しかったです。
