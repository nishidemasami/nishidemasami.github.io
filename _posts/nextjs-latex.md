---
title: "Next.jsで数式を書く"
date: "2022-11-26T04:58:43+0900"
draft: false
template: "post"
category: "blog"
description: "Next.jsで数式を書いてみたいと思うこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "Next.js"
  - "LaTeX"
  - "MathJax"
  - "Markdown"
---

Next.jsで数式を書いてみたいと思うこと、ありますよね。  
僕はあるので自分用にメモです。

2次方程式の解の公式、懐かしいですね。

$$$
x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$$

これを見ると学生時代を思い出しますね。  
こういう数式を、Next.jsでもMarkdownに$\LaTeX$で

```latex
x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}
```

こんな感じで書けたら便利です。

今回は$\LaTeX$をMathJaxでSVGにするようにしてNext.jsで使ってみました。<sup>[<a target="_blank" href="https://www.amazon.co.jp/React-js%EF%BC%86Next-js%E8%B6%85%E5%85%A5%E9%96%80-%E7%AC%AC2%E7%89%88-%E6%8E%8C%E7%94%B0%E6%B4%A5%E8%80%B6%E4%B9%83-ebook/dp/B08XBNGYVH?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1304MCUGBPN1M&keywords=next.js&qid=1670505884&sprefix=next.j%2Caps%2C195&sr=8-6&linkCode=ll1&tag=nishidemasami-22&linkId=1faf1c568d048e662fff7bffcc7794e3&language=ja_JP&ref_=as_li_ss_tl">参考文献</a>]</sup>

KaTeXなどでJavaScriptで動的にブラウザ上で数式を描画する方法はよく見ますが、Next.jsでSSGをしているならその時に数式をSVGにレンダリングした方がフォントを別途読み込んだりしなくてもいいので便利です。  
$\LaTeX$形式の数式をHTMLへ変換する処理をブラウザがする必要がなくなり描画が高速だという点がメリットです。JavaScriptを無効化していても見れるのもいいですね。

まず、必要なパッケージをインストールします。

```bash
npm install remark-math rehype-mathjax
```

このウェブサイトではMarkdownを読み込むのに _unified_ を使用しているので、 _remark-math_ と _rehype-mathjax_ を追加で _use_ します。

```typescript
import rehypePrism from '@mapbox/rehype-prism';
import rehypeMathJaxSvg from 'rehype-mathjax/svg';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export const markdownToHtml = async (markdown: string) =>
  (
    await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypePrism)
      .use(rehypeMathJaxSvg)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(markdown)
  )
    .toString();
```

では、実際に書いてみることにします。

### 任意の$x$と$y$の最大公約数を求める$gcd$関数

```latex
\gcd(x, y) =
\begin{cases}
  y & (x = 0)\\
  x & (y = 0)\\
  \gcd(y, x \bmod y) & (\text{otherwize})
\end{cases}
```

$$$
\gcd(x, y) =
\begin{cases}
  y & (x = 0)\\
  x & (y = 0)\\
  \gcd(y, x \bmod y) & (\text{otherwize})
\end{cases}
$$$

### クロネッカーのデルタ

```latex
\delta_{ij} =
\begin{cases}
  1 & \text{if }i = j\\
  0 & \text{if }i \ne j
\end{cases}
```

$$$
\delta_{ij} =
\begin{cases}
  1 & (i = j)\\
  0 & (i \ne j)
\end{cases}
$$$

上手に書けました！✨

以上です。  
<https://github.com/nishidemasami/nishidemasami.github.io>  
実際にNext.jsで動いているコードは👆ここから確認してください。
