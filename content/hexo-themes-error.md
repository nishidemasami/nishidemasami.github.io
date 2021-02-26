---
title: hexoのテーマを変更した時に、テーマだけデプロイされない
date: "2016-12-11T23:04:03+0900"
socialImage: "/photo.jpg"
draft: false
template: "post"
slug: "/2016/12/11/hexo-themes-error"
category: "ブログ"
description: "このブログはHexoにて構築し、GitHub Pagesにて公開しています。先日、テーマを変更した際にテーマが正しく反映されず困ったので、今どうやって動いているかを覚え書きしておきます。…"
tags:
  - "hexo"
---

このブログは[Hexo](https://hexo.io/)にて構築し、[GitHub Pages](https://pages.github.com/)にて公開しています。

先日、テーマを変更した際にテーマが正しく反映されず困ったので、今どうやって動いているかを覚え書きしておきます。

今回、ingenuous というテーマを利用したのですが、「hexo server」では正しく表示されるのに、確認後「hexo deploy -g」で GitHub Pages へデプロイするとレイアウトが崩れるという現象に見舞われました。

```
$ tree -L 2
.
├── _config.yml
├── node_modules
│   └── (省略)
├── package.json
├── public
│   ├── 2016
│   ├── about-me
│   ├── archives
│   ├── atom.xml
│   ├── css
│   ├── fancybox
│   ├── index.html
│   ├── js
│   └── tags
├── scaffolds
│   └── (省略)
├── source
│   └── _posts
└── themes
    ├── ingenuous
    └── landscape
```

この、css らへんがブラウザから取得できておらず、どうやら記事ファイルだけ書き換わってデプロイされ、css はデプロイされず放置されている現象が置きてるっぽかったです。
hexo deploy が public 内の更新を取得できていないのなら、全部消してしまえばいいじゃないということで、

```
hexo clean
hexo deploy -g
```

で無事にレイアウトも含めてデプロイすることができました。
ちょっとネットで検索しても出てこなかったのでみなさまの助けになればという意味も含め覚え書きでした。
