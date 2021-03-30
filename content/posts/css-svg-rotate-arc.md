---
title: CSSとSVGで円弧をクルクルさせる
date: "2021-03-17T01:04:03+0900"
socialImage: "photo.jpg"
template: "post"
draft: true
slug: "/2021/03/17/css-svg-rotate-arc"
category: "ブログ"
description: "test"
tags:
  - "CSS"
  - "SVG"
---

test

<svg className="arc" viewBox="20 20 100 100" style="width:100%">
    <defs>
        <path id="MyPath"
                d="M 25, 50
            a 25,25 0 1,1 50,0
            a 25,25 0 1,1 -50,0" />
    </defs>
    <circle cx="40" cy="40" r="10" />
    <text>
        <textPath href="#MyPath"></textPath>
    </text>
</svg>
