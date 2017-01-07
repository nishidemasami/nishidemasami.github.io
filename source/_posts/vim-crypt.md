---
title: Vimで暗号化
date: 2016-12-05 09:04:03
tags:
- "Vim"
- "lightyield"
---
Vimで暗号化を行うには、次の方法が用意されています。
```
:set cryptmethod=blowfish
```
このblowfishの他にzipや、環境によってはblowfish2が用意されています。使えるならばセキュリティの面から考えてblowfish2を使うべきでしょう。
しかしです。本当にセキュリティの面から考えると、blowfishの発展型であるTwofish[※注：blowfish2はTwofishではありません](http://vim.1045645.n5.nabble.com/Blowfish2-td5726043.html)やAES等の方がより良い選択肢なはずです。
今回、Vimの暗号化機能に頼らず、自前でopensslを用いてAESにて暗号化・復号をしてみたいと思います。

通常vimで文章を保存するのには
```
:w
```
を行いますが、出力先を標準入力としてコマンドを実行することもできます。
すなわち、opensslへ以下のように渡せば良いわけです。
```
:w !openssl aes-256-cbc -out ~/vim_enc_test_file
```
2回パスワードを聞かれるため、それを入力すれば指定した場所(この場合は~/vim_enc_test_file)へ書き込まれます。

復号する際は、Vimから
```
:r !openssl aes-256-cbc -d -in ~/vim_enc_test_file
```
とするか、もしくはコマンドラインから
```
$ cat ~/vim_enc_test_file | openssl aes-256-cbc -d | vim -
```
とします。

ただ、非常にイケてないことにこの書き込まれたファイルをhexdumpして見てみると、
```
00000000  53 61 6c 74 65 64 5f 5f  04 12 0d 0c 9e e8 74 aa  |Salted__......t.|
00000010  f6 60 00 e7 d1 60 7b 64  19 23 a5 ad 7f 4d 62 19  |.`...`{d.#...Mb.|

```
このように、ファイルの頭に「Salted__」の文字列が入るため、opensslにて暗号化したことはわかる人にはバレバレです。
もっとも、Vimの暗号化機能でも以下のように、
```
00000000  56 69 6d 43 72 79 70 74  7e 30 32 21 de 8b b9 db  |VimCrypt~02!....|
00000010  03 c7 6b 23 86 e1 25 79  e7 ee 6c 5e 27 9d eb 58  |..k#..%y..l^'..X|
00000020  f8                                                |.|
```
「VimCrypt~02!」という文字列が入るのでバレバレなのですが。

このバレバレなのをどうにかしたい時も、opensslでやる場合は簡単です。
以下のようにddで8バイトスキップすれば「Salted__」の文字列を消すことができます。
```
:w !openssl aes-256-cbc | dd ibs=8 skip=1 of=~/vim_enc_test_file
```
そうすると、以下のようなファイルが出力されます。
```
00000000  92 3a 22 ce 3e 26 5a cf  26 6c da e5 3c ec e9 c6  |.:".>&Z.&l..<...|
00000010  ad 3b c1 47 13 d6 e9 d2                           |.;.G....|
```
当然、一見ランダムですから、ただの乱数ファイルにも見えますし、たとえ暗号化されたファイルだとわかったとしてもいったいなんのソフトで暗号化されたのかもわかりません。

読み込みは以下のように行います。
```
:r !cat <(echo -ne Salted__) ~/vim_enc_test_file | openssl aes-256-cbc -d
```
```
$ cat <(echo -ne Salted__) ~/vim_enc_test_file | openssl aes-256-cbc -d | vim -
```

ちなみに圧縮もしてみましょう。書き込みは以下の通りです。
```
:w !bzip2 | openssl aes-256-cbc | dd ibs=8 skip=1 of=~/vim_enc_test_file
```
読み込みは以下の通りです。
```
:r !cat <(echo -ne Salted__) ~/vim_enc_test_file | openssl aes-256-cbc -d | bzcat
```
```
$ cat <(echo -ne Salted__) ~/vim_enc_test_file | openssl aes-256-cbc -d | bzcat | vim -
```

さて、最後にあとひと押しです。
「aes-256-cbc」はパスワードが間違っている場合にエラーを出します。CentOS6.8の場合は以下のエラーとなります。
```
digital envelope routines:EVP_DecryptFinal_ex:wrong final block length
```
これは、総当りで復号化を試みるクラッカーにとっては助けにもなってしまいます。なぜなら、パスワードが間違っていることがわかるためです。
Mac等では使えませんが、「aes-256-cbc」の代わりに「aes-256-ofb」を使うことで解決されます。
「aes-256-ofb」なら、パスワードが合っているのか間違っているのすらわかりません。
書き込みは以下の通りです。
```
:w !bzip2 | openssl aes-256-ofb | dd ibs=8 skip=1 of=~/vim_enc_test_file
```
読み込みは以下の通りです。
```
:r !cat <(echo -ne Salted__) ~/vim_enc_test_file | openssl aes-256-ofb -d | bzcat
```
```
$ cat <(echo -ne Salted__) ~/vim_enc_test_file | openssl aes-256-ofb -d | bzcat | vim -
```
パスワードが合っているのか間違っているのすらわからないというのは、つまりあなたのパスワードを突破しようとしても、パスワード1つ1つを確認しなければならないということです。
人間には不可能ですし、機械的に判定しようにも非常に手をこまねくはずです。
環境が許せばぜひやってみて下さい。

Vimとopensslで暗号化・復号をしようというお話でした。
みなさんもぜひやってみて下さい。
