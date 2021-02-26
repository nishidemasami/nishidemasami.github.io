---
title: Gatsbyでブログをリニューアルしてみました
date: "2021-02-26T22:04:03+0900"
socialImage: "photo.jpg"
template: "post"
draft: false
slug: "/2021/02/26/blog-renewal-with-gatsby"
category: "ブログ"
description: "このブログをリニューアルしてみました。このブログのソースはここ ↓ で公開しています。https://github.com/nishidemasami/nishidemasami.github.io/tree/gatsby見てみた感じどうですか？すごくないですか！？…"
tags:
  - "JavaScript"
  - "TypeScript"
  - "React"
  - "Gatsby"
---

このブログをリニューアルしてみました。  
ちなみにこのブログのソースはここ ↓ で公開しています。  
[https://github.com/nishidemasami/nishidemasami.github.io/tree/gatsby](https://github.com/nishidemasami/nishidemasami.github.io/tree/gatsby)

見てみた感じどうですか？すごくないですか！？

- React が動いている・生で React が書ける
- ページ間の遷移の速度が速い(React の仮想 DOM 操作に由来している)
- ちょっとがんばれば Typescript でも書ける(使用する Gatsby のテンプレートによっては最初から Typescript を使っているらしい)

<ReactHelloWorld>
  こんな感じで普通にReact が<br />
  Typescript で書けて動きます！✨
</ReactHelloWorld>

Gatsby は、HEXO や Hugo、Jekyll みたいに静的ジェネレータなので、こうやって Github Pages にも乗せられるので便利！  
AWS S3 とかに乗せればスケールしますし！✨

あと、ページを高速化するための細かなテクニックを最初から使ってくれています。

- 静的プレレンダリング・静的プリフェッチ(速い)
- いわゆる PRPL パターンに準拠する PWA サポート  
  **_Push_** critical resources for the initial URL route using `<link preload>` and HTTP/2.  
  **_Render_** initial route.  
  **_Pre-cache_** remaining routes.  
  **_Lazy-load_** and create remaining routes on demand. S  
  [https://www.gatsbyjs.com/docs/prpl-pattern/](https://www.gatsbyjs.com/docs/prpl-pattern/)
- GraphQL(ビルド時には json になっている)によるデータアクセスや画面遷移(これまた速い)

Gatsby で Markdown ファイルとかいい感じにしてくれますし、普通に React の仮想 DOM による高速化の恩恵も受けることできてます！  
かなりいい感じになってると思います！✨
