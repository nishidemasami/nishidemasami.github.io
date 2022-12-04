---
title: "GitHubのレポジトリサイズを確認する"
date: "2022-12-01T23:02:43+0900"
draft: false
template: "post"
category: "blog"
description: "GitHubのレポジトリサイズを確認する"
tags:
  - "GitHub"
---

リポジトリのサイズがいつも気になるので自分用にメモ。

`https://api.github.com/repos/アカウント名/リポジトリ名`  
にアクセスするとjsonで詳細が取得できる。  
その`size`にKB単位でサイズが入っている。

たとえば`github.com:nishidemasami/nishidemasami.github.io.git`の場合、  
<https://api.github.com/repos/nishidemasami/nishidemasami.github.io>  
このURLで取得できる。
