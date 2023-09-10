---
title: "OnionドメインのウェブサイトをDockerでDistrolessコンテナで構築して安全に公開する"
date: "2023-09-10T11:14:43+0900"
draft: false
template: "post"
category: "blog"
description: "OnionドメインのウェブサイトをDockerでDistrolessコンテナで構築して安全に公開したいこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "Distroless"
  - "Onion Service"
  - "Tor"
  - "Docker"
  - "Tor Hidden Service"
  - "Nginx"
---

onionサービスはtorネットワークで公開する以上、強固なセキュリティが求められます。
今回は、Distrolessコンテナを利用して、torネットワークにWEBサイトを公開してみようと思います。

なお、この記事を書くにあたって<a target="_blank" href="https://www.amazon.co.jp/dp/4873117763?&linkCode=ll1&tag=nishidemasami-22&linkId=7b0a0e16eab9786a7b21bcf0d7c4e768&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >O'Reilly Docker</a>を参考にしました。

# TL;DR

https://github.com/nishidemasami/distroless-tor-nginx

ここで公開しています。

## 用語の説明

### torネットワークのonionサービスとは？

torネットワークは検閲されることなく通信するためのネットワークで、onionサービスはインターネット上に情報が出ることなく完全にtorネットワーク上だけで完結するWEBサイトを公開する仕組みです。
しばしば「ダークウェブ」と呼ばれることもあるtorネットワークですが、内部告発サイトや人権活動サイトなどを誰にも検閲されることなくインターネット上に公開できることからイギリスの公共放送BBCもonionサービスで全世界にニュースを公開しているなど活用が進んでいます。
たとえばあなたが内部告発Webシステムを開発する場合、この記事で紹介する知識が役に立つはずです。

### Distrolessコンテナとは？

Distrolessコンテナは、必要最小限の構成で作られたコンテナです。
aptどころか、viもshも、なんとbusyboxすら入っていません。gcr.io/distroless/base-nossl-debian12:latestでは、入っているのは主に

* CA証明書
* rootユーザの`/etc/passwd`
* `/tmp`ディレクトリ
* tzdata
* glibc

だけという徹底ぶりです。
セキュリティの観点からも不要なアプリケーションが入っていないことは(OSコマンドインジェクションを防げるなど)非常に好ましいです。
gcr.io/distroless/base-nossl-debian12:latestは現在14.79MBしかなく、非常に軽量なのも大きなメリットです。
これを土台にして、必要なファイルだけをマルチステージビルドで入れていきます。

## 実践

構築の土台となる部分を最小構成で作成します。  
最小構成で一旦動かしてみることで動きなども理解できます。

### Docker

まず`compose.yaml`を作ります。

<div class="preshiki">compose.yaml</div>

```yaml
version: '3.8'

services:
  nginx:
    build:
      dockerfile: ./nginx/Dockerfile
    networks:
      - tor_network
    volumes:
      - ./nginx/settings:/etc/nginx/sites-enabled:ro
      - ./htdocs:/usr/share/nginx/html:ro
    restart: unless-stopped
  tor:
    build:
      dockerfile: ./tor/Dockerfile
    networks:
      - tor_network
      - front
    volumes:
      - ./data:/var/lib/tor
      - ./tor/settings:/etc/tor
    restart: unless-stopped

networks:
  front:
  tor_network:
    internal: true
```

ネットワークは、外部に接続するための`front`ネットワークと、外部とつながっていない内部だけで独立したネットワークの`tor_network`を用意します。  
`tor`コンテナだけ外部と接続して、`nginx`コンテナは外部と遮断し、そして`tor`コンテナと`nginx`コンテナを`tor_network`ネットワークでつなげます。  

ネットワーク図に表すと以下のようになります。

```plantuml
@startuml

!define ICONURL https://raw.githubusercontent.com/Roemer/plantuml-office/master/office2014
!includeurl ICONURL/Servers/database_server.puml
!includeurl ICONURL/Servers/application_server.puml
!includeurl ICONURL/Concepts/firewall_orange.puml

nwdiag {
    torネットワーク [ shape = cloud];
    torネットワーク -- 仮想ブリッジ;
    
    network front {
        tor [description = "<&cog*4>\ntor"];
        仮想ブリッジ [description = "Docker\n仮想ブリッジ"];
    }
    network tor_network {
        nginx [address = "nginx",description = "<$application_server>\n nginx"];
        tor [description = "<&cog*4>\ntor"];
    }
    
    group {
        color = "#CCFFCC";
        description = "Docker\n内部\n ";
        
        nginx;
        tor;
    }
}
@enduml
```

`nginx`コンテナと`tor`コンテナは、後述の`tor/Dockerfile`と`nginx/Dockerfile`で記述しています。 

また、どちらも`restart: unless-stopped`で、落ちたら再起動するようにしています。

### Tor

`debian:12`にtorをインストールして、動作に必要なファイルだけを`gcr.io/distroless/base-nossl-debian12:latest`に移動しています。

<div class="preshiki">tor/Dockerfile</div>

```text
FROM debian:12 as build

RUN apt update && \
  apt install tor -y --no-install-recommends && \
  cp -a --parents /usr/bin/tor /opt && \
  cp -a --parents /usr/sbin/tor /opt && \
  cp -a --parents /etc/tor /opt && \
  cp -aL --parents /usr/share/tor /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libz.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libm.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libevent-2.1.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libssl.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libcrypto.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libsystemd.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/liblzma.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libzstd.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libseccomp.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libcap.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libc.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libgcrypt.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/liblz4.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libgpg-error.so.* /opt

FROM gcr.io/distroless/base-nossl-debian12:latest
COPY --from=build /opt /

ENTRYPOINT  ["/usr/bin/tor"]
```

torの設定ファイルである`torrc`で、80ポートへの接続を`nginx`コンテナに向けています。  
※Dockerネットワーク内ではコンテナ名で名前解決をすることができます

<div class="preshiki">tor/settings/torrc</div>

```text
SocksPort 0
HiddenServiceDir /var/lib/tor/hidden_service/
HiddenServicePort 80 nginx:80
```

誰かの踏み台にされるのだけは防ぐために`SocksPort 0`の設定をしています。

### Nginx

これも`debian:12`にnginxをインストールして、動作に必要なファイルだけを`gcr.io/distroless/base-nossl-debian12:latest`に移動しています。  

<div class="preshiki">nginx/Dockerfile</div>

```text
FROM debian:12 as build

RUN apt update && \
  apt install nginx -y --no-install-recommends && \
  cp -a --parents /usr/share/nginx /opt && \
  cp -a --parents /var/log/nginx /opt && \
  cp -a --parents /var/lib/nginx /opt && \
  cp -aL --parents /var/run /opt && \
  cp -a --parents /etc/nginx /opt && \
  cp -a --parents /etc/passwd /opt && \
  cp -a --parents /etc/group /opt && \
  cp -a --parents /usr/sbin/nginx /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libcrypt.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libpcre2-8.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libssl.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libcrypto.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libz.so.* /opt && \
  cp -a --parents /lib/x86_64-linux-gnu/libc.so.* /opt

FROM gcr.io/distroless/base-nossl-debian12:latest
COPY --from=build /opt /

EXPOSE 80

ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
```

nginxの設定ファイルを配置します。

<div class="preshiki">nginx\settings\tor.conf</div>

```text
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

なにも表示されないと動いているかどうかわかりにくいので`index.html`を配置しておきます。

<div class="preshiki">htdocs/index.html</div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>docker hidden service test title</title>
  </head>
  <body>
    <div>docker hidden service test body div</div>
  </body>
</html>
```

以上で最小構成は作成完了です。

## 起動する

Dockerは普通に`docker-compose up -d`コマンドで起動します。

### 起動確認(onionサービスとの疎通確認)

正常に起動すると、`data/hidden_service/hostname`に以下のようなファイルが出力されています。

<div class="preshiki">data/hidden_service/hostname</div>

```text
kxal3j4zblhjt4jinnbly6icciqbh2ihq4u2opsu4qhqyqazwsgaq3ad.onion
```

このアドレスにtorブラウザなどで接続し、作成したindex.htmlが表示されていることを確認します。

<div><img srcset="/assets/images/tor-browser-preview.webp" alt="Torブラウザで表示できたところ"/><div class="photo-space-detail">Torブラウザで表示できたところ</div></div>

無事に動いていることが確認できました。

このように、Distrolessを使えばセキュリティが非常に強固なサービスを簡単に立ち上げることができます！
セキュリティの強固さが求められる場合、ぜひDistrolessを使ってください！
