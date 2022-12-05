---
title: "ED25519の鍵を生成する"
date: "2022-12-02T23:02:43+0900"
draft: false
template: "post"
category: "blog"
description: "ED25519の鍵を生成したいこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "SSH"
  - "AWS"
  - "ED25519"
---

もう1年以上前にAWSでED25519の鍵が使えるようになっていた。  
当然のようにGitHubでも使える。  
どんどんED25519を使えない環境もかなり減ってきていて、ED25519の鍵を作る機会も増えてきた。

なのに、ED25519の鍵の作り方をいつもググって調べるので自分用にメモ。

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
