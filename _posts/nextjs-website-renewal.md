---
title: Next.jsでこのウェブサイトをリニューアルしました！✨
date: "2022-11-30T01:04:03+0900"
template: "post"
draft: false
category: "blog"
description: Next.jsでこのウェブサイトをリニューアルしました！✨
tags:
  - "Next.js"
---

Next.jsでこのウェブサイトをリニューアルしました！✨

T3 Stackの6つの技術のうち、フロントエンド側の以下の3つの技術をフル活用しています。

* TypeScript<sup>[<a target="_blank" href="https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0TypeScript-%E2%80%95%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8BJavaScript%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-Boris-Cherny/dp/4873119049?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3Q7MI7KXY06BB&keywords=typescript&qid=1670505807&sprefix=typescript+%2Caps%2C224&sr=8-9&linkCode=ll1&tag=nishidemasami-22&linkId=48539012d76c58e8bc3549b5a9dc7a1f&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >参考文献</a>]</sup>  
ほぼ全てTypeScriptで書いています。
* Next.js  
SSGフレームワークに使用しています。
* Tailwind CSS  
スタイルを書くのに使用しています。CSSもSCSSもstyled-componentsもどうしても必要な箇所を除けば使っていません。

また、リニューアル後も引き続きGitHub ActionsでCI/CDを継続しています。

今のところこのウェブサイトはNext.jsになる前には、

Hexo  
🔽  
Gatsby.js  
🔽  
Next.js

という偏移を経ています。

Hexoは純粋な時代の古き良きSSGでした。しかしパフォーマンスを追い求めると限界がありました。  
Gatsby.jsは _Blazing fast🔥_ ではあったもののちょっとカスタマイズしようとするとすぐgatsby-pluginが必要になりました。  
その点Next.jsは、何もかも自分でコントロールできるような確かな手触りを感じています。  
それにNext.jsも十分速い。とにかくウェブサイトのなにをクリックしても速いです。普通の使い方をするならGatsby.jsと違いがわからないほど速いです。  

Next.jsをもっと良く知るためにも、引き続きこのウェブサイトでいろいろなことをやってみようと思っています。
