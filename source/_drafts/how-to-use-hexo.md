---
title: hexoをGitHub Pageで使う
date: 2016-12-11 23:04:03
tags:
- "hexo"
---
このブログは[Hexo](https://hexo.io/)にて構築し、[GitHub Pages](https://pages.github.com/)にて公開しています。

非常にイージーでタイヘンおすすめなので、それから自分自身困ったところもあったのでメモとして、hexoの使い方をここで書いてみようと思います。
その前に、node

* 前提
ここでは、既にnode.jsとnpmをインストール済みのものとします。
Macではnodebrewで、Ubuntuではyumで、FreeBSDではportsで、WindowsではMinGWで、それぞれインストールできます。

* ディレクトリを作る
まずは、hexo用のディレクトリを作ります。
僕はDropbox上に作成しています。

```bash
mkdir ~/Dropbox/hexodir
```

* hexoを初期化する
hexo initコマンドでそのブログ用のディレクトリが作られます。
名前はなんでもいいんですが、僕はわかりやすくURLを名前にしています。

```bash
hexo init nishidemasami.github.io
```

これで、以下のようにファイルが作成されます。

```
$ tree -L 2 ~/Dropbox/hexodir/nishidemasami.github.io
.
├── _config.yml
├── node_modules
│   └── (省略)
├── package.json
├── scaffolds
│   └── (省略)
├── source
│   └── _posts
└── themes
    └── landscape
```

*

```
$ tree -L 2 ~/Dropbox/hexodir/nishidemasami.github.io
.
├── _config.yml
├── node_modules
│   └── (省略)
├── package.json
├── scaffolds
│   └── (省略)
├── source
│   └── _posts
└── themes
    └── landscape
```


```
Host nishidemasami-ssh-github
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_id_rsa_nishidemasami
```
