---
title: "Next.jsで数式を書く"
date: "2022-12-04T04:58:43+0900"
socialImage: "photo.jpg"
draft: false
template: "post"
category: "blog"
description: "Next.jsで数式を書いてみたいと思うこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "Next.js"
  - "LaTeX"
  - "KaTeX"
  - "Markdown"
---

Next.jsで数式を書いてみたいと思うこと、ありますよね。  
僕はあるので自分用にメモです。

2次方程式の解の公式、懐かしいですね。

$$
x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

これを見ると学生時代を思い出しますね。  
こういう数式を、Next.jsでもMarkdownに$\LaTeX$で

```latex
x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}
```

こんな感じで書けたら便利です。

今回は$\LaTeX$をウェブブラウザで表示するためのライブラリである$\KaTeX$をNext.jsで使ってみたいと思います。

JavaScriptで動的にブラウザ上で数式を描画するのがよく見る$\KaTeX$の使い方ですが、Next.jsでSSGしている時にはビルド時に既に数式がHTMLにレンダリング済みだという挙動になるので少し仕組みが違います。  
ブラウザとしては$\LaTeX$形式の数式をHTMLへ変換する必要がなくなり描画が高速だという点がメリットです。ブラウザがJavaScriptを無効化していても見れるのもいいですね。

まず、必要なパッケージをインストールします。

```bash
npm install remark-math rehype-katex
```

このウェブサイトではMarkdownを読み込むのに _unified_ を使用しているので、 _remark-math_ と _rehype-katex_ を追加で _use_ します。

```typescript
import rehypePrism from '@mapbox/rehype-prism';
import rehypeKatex from 'rehype-katex';
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
      .use(rehypeKatex)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(markdown)
  )
    .toString();
```

あとは$\KaTeX$のCSSをCDNなどから読み込めば完成です。

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" crossOrigin="anonymous" />
```

では、実際に書いてみることにします。  
以下は任意の$x$と$y$の最大公約数を求める$gcd$関数の定義です。

```latex
\gcd(x, y) =
\begin{cases}
  y & (x = 0)\\
  x & (y = 0)\\
  \gcd(y, x \bmod y) & (\text{otherwize})
\end{cases}
```

$$
\gcd(x, y) =
\begin{cases}
  y & (x = 0)\\
  x & (y = 0)\\
  \gcd(y, x \bmod y) & (\text{otherwize})
\end{cases}
$$

上手に書けました！✨

以上です。  
<https://github.com/nishidemasami/nishidemasami.github.io>  
実際にNext.jsで動いているコードは👆ここから確認してください。
