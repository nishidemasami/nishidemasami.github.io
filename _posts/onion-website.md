---
title: "OnionドメインのウェブサイトをDockerで構築して公開する"
date: "2023-02-04T11:14:43+0900"
draft: false
template: "post"
category: "blog"
description: "OnionドメインのウェブサイトをDockerで構築して公開したいこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "Onion Service"
  - "Tor"
  - "Docker"
  - "Tor Hidden Service"
  - "Nginx"
---

OnionドメインのウェブサイトをDockerで構築して公開したいこと、ありますよね。  
僕はあるので自分用にメモです。

なお、この記事を書くにあたって<a target="_blank" href="https://www.amazon.co.jp/dp/4873117763?&linkCode=ll1&tag=nishidemasami-22&linkId=7b0a0e16eab9786a7b21bcf0d7c4e768&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >O'Reilly Docker</a>を参考にしました。

## 最小構成で作る

構築の土台となる部分を最小構成で作成します。  
最小構成で一旦動かしてみることで動きなども理解できます。

### Docker

まず`compose.yaml`を作ります。

<div class="preshiki">compose.yaml</div>

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    networks:
      - tor_network
    volumes:
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

ネットワークは、外部に接続するための`front`ネットワークと、外部とつながっていない内部だけで独立したネットワークの`tor_network`を作成します。  
`tor`コンテナだけ外部と接続し、`nginx`コンテナを外部と遮断し、そして`tor`コンテナと`nginx`コンテナを`tor_network`ネットワークでつなげることにします。  

ネットワーク図に表すと以下のようになります。

```plantuml
@startuml

!define ICONURL https://raw.githubusercontent.com/Roemer/plantuml-office/master/office2014
!includeurl ICONURL/Servers/database_server.puml
!includeurl ICONURL/Servers/application_server.puml
!includeurl ICONURL/Concepts/firewall_orange.puml

nwdiag {
	internet [ shape = cloud];
	internet -- 仮想ブリッジ;

	group {
    color = "#CCFFCC";
    description = "Docker\n内部\n ";

    nginx;
    tor;
  }
  network front {
      tor [description = "<&cog*4>\ntor"];
      仮想ブリッジ [description = "Docker\n仮想ブリッジ"];
  }
  network tor_network {
      nginx [address = "nginx",description = "<$application_server>\n nginx"];
      tor [description = "<&cog*4>\ntor"];
  }
}
@enduml
```

`nginx`コンテナは、余計なものが入っていない`nginx:alpine`を使用します。  
`tor`コンテナは、後述の`Dockerfile`を使用します。  

また、どちらも`restart: unless-stopped`で、落ちたら再起動するようにしています。不要だったかもしれません。

### Tor

`tor`コンテナのDockerfileは、`alpine:latest`にtorを追加して起動するだけのものです。

<div class="preshiki">tor/Dockerfile</div>

```text
FROM alpine:latest

RUN apk update
RUN apk add tor

CMD ["tor", "-f", "/etc/tor/torrc"]
```

torの設定ファイルである`torrc`で、80ポートへの接続を`nginx`コンテナに向けています。  
※Dockerネットワーク内ではコンテナ名で名前解決をすることができる

<div class="preshiki">tor/settings/torrc</div>

```text
SocksPort 0
HiddenServiceDir /var/lib/tor/hidden_service/
HiddenServicePort 80 nginx:80
```

誰かの踏み台にされるのだけは防ぐために`SocksPort 0`の設定をしていますが、自分でもTorプロクシとして利用したい場合はここを`SocksPort 0.0.0.0:9150`として、`Dockerfile`で`EXPOSE 9150`をしてから`compose.yaml`でtorのportsに`"9150:9150"`を追加することでSOCKSホストとして利用できます。

### Nginx

Nginxは`nginx:alpine`イメージをそのまま使います。  
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

### 起動確認(Onionドメインの疎通確認)

正常に起動すると、`data/hidden_service/hostname`に以下のようなファイルが出力されています。

<pre class="preshiki">data/hidden_service/hostname</pre>

```text
kxal3j4zblhjt4jinnbly6icciqbh2ihq4u2opsu4qhqyqazwsgaq3ad.onion
```

このアドレスにTorブラウザなどで接続し、作成したindex.htmlが表示されていることを確認します。

<div class="note alert">

<i class="fontawesome fa fa-times-circle" style="color:#d60a34;font-size:20px;" aria-hidden="true"></i> WindowsでDockerを立てている場合、ここで既に`data/hidden_service`が存在すると、以下のようなエラーメッセージが出て終了してしまいます。

```text example-bad
[notice] Tor 0.4.7.13 running on Linux with Libevent 2.1.12-stable, OpenSSL 3.0.7, Zlib 1.2.13, Liblzma 5.2.9, Libzstd 1.5.2 and Unknown N/A as libc.
[notice] Tor can't help you if you use it wrong! Learn how to be safe at https://support.torproject.org/faq/staying-anonymous/
[notice] Read configuration file "/etc/tor/torrc".
[warn] Permissions on directory /var/lib/tor/hidden_service/ are too permissive.
[warn] Failed to parse/validate config: Failed to configure rendezvous options. See logs for details.
[err] Reading config failed--see warnings above.
```

既にWindows側の既存のディレクトリをDockerでマウントするとディレクトリのパーミッションが777になります。  
そのためSSH接続時の証明書と同様に、パーミッションがあまりにもオープンすぎるとTorが判断するとエラーで止まるようです。  
なので既存の`hidden_service`を使用したい場合は、`tor/Dockerfile`内で`COPY`したり`chmod -R 700 /var/lib/tor/hidden_service/`を叩く必要がありそうですが、今回は最小構成だけ作りたいのでここでは説明を省きます。

</div>

<div><img srcset="/assets/images/tor-browser-preview.webp" alt="Torブラウザで表示できたところ"/><div class="photo-space-detail">Torブラウザで表示できたところ</div></div>

無事に動いていることが確認できました。

`nginx`コンテナは外部に接続できないようになっていますから、セキュリティは高いです。  
もし更にセキュリティを向上させるのであれば、`nginx`コンテナや`tor`コンテナを`distroless`や`scratch`でマルチステージビルドで組み立てると良いでしょう。その方法についてはまた後日投稿します。
