---
title: "ED25519の鍵を生成する"
date: "2022-11-19T23:02:43+0900"
draft: false
template: "post"
category: "blog"
description: "ED25519の鍵を生成したいこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "SSH"
  - "AWS"
  - "GitHub"
  - "ED25519"
---

もう1年以上前にAWSでED25519の鍵が使えるようになっていた。  
当然のようにGitHubでも使える。  
どんどんED25519を使えない環境もかなり減ってきていて、ED25519の鍵を作る機会も増えてきた。

なのに、ED25519の鍵の作り方をいつもググって調べるので自分用にメモ。

## そもそもなぜED25519なのか

鍵にはRSAやDSA、ECDSAなども選べるが、それらよりも安全性が高いED25519が推奨されている。  
かつては互換性の問題でED25519が使えないクライアントも存在したが、ED25519に対応したOpenSSH6.5のリリースからすでに何年も経過しており、前述の通りAWSやGitHubなどのサービスでもED25519が使用できるため、使用できるなら使用したほうがよい。

## 自分の鍵の確認方法(GitHub)

GitHubに登録している鍵は以下のURLから誰でも確認できる。  
`https://github.com/(ユーザーID).keys`

たとえば僕の鍵であれば  
<https://github.com/nishidemasami.keys>  
というURLで誰でも確認できる。

これが`ssh-ed25519`という文字列から始まっていればED25519である。

## ED25519鍵の生成方法

`ssh-keygen -t ed25519`  
で作成できる。  

```bash
$ ssh -V
OpenSSH_8.9p1 Ubuntu-3, OpenSSL 3.0.2 15 Mar 2022
$ ssh-keygen -t ed25519
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/nishidemasami/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/nishidemasami/.ssh/id_ed25519
Your public key has been saved in /home/nishidemasami/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:mObF7QvcCUg1/JQb9aF6hc2R6GCuu7UpYipZ03J6Xtw nishidemasami@desktop-nishidemasami
The key's randomart image is:
+--[ED25519 256]--+
|       .o  o..o. |
|       ...* .*.o |
|      .  = =o =  |
|     . = .+...   |
|     .= S.o .    |
|    +oo+.= o     |
|   o =. =.E      |
|  o . +.oo +     |
|   ..=...o+      |
+----[SHA256]-----+
```

参考
<https://aws.amazon.com/jp/about-aws/whats-new/2021/08/amazon-ec2-customers-ed25519-keys-authentication/>
