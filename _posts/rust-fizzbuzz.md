---
title: "RustでFizzBuzzを書く"
date: "2022-12-31T04:58:43+0900"
draft: false
template: "post"
category: "blog"
description: "RustでFizzBuzzを書いてみたいと思うこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "Rust"
  - "FizzBuzz"
---

RustでFizzBuzzを書いてみたいと思うこと、ありますよね。  
僕はあるので自分用にメモです。

なお、このレポートを書くにあたって<a target="_blank" href="https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Rust-%E7%AC%AC2%E7%89%88-Jim-Blandy/dp/4873119782?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=16SB3SPXD9LVL&keywords=rust&qid=1672662058&sprefix=rust+%2Caps%2C261&sr=8-4&linkCode=ll1&tag=nishidemasami-22&linkId=5f2948f4e335959907e6a8b8e22b859d&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >プログラミングRust 第2版</a>を参考にしました。

とりあえず最初に結論を書いておきます。

```rust
use num::Zero;
use std::fmt;
use std::ops::Rem;

pub enum FizzBuzz {
  Fizz,
  Buzz,
  FizzBuzz,
  Number(String),
}

impl fmt::Display for FizzBuzz {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
    match self {
      FizzBuzz::Fizz => write!(f, "Fizz"),
      FizzBuzz::Buzz => write!(f, "Buzz"),
      FizzBuzz::FizzBuzz => write!(f, "FizzBuzz"),
      FizzBuzz::Number(x) => write!(f, "{x}"),
    }
  }
}

impl<T, U> From<&T> for FizzBuzz
where
  T: From<u8>,
  for<'a> &'a T: Rem<T, Output = U> + ToString,
  U: Zero,
{
  fn from(x: &T) -> FizzBuzz {
    match ((x % T::from(3)).is_zero(), (x % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(x.to_string()),
    }
  }
}
```

以上のようになると思います。

以下、解説です。

まず、何も考えずにRustでFizzBuzzを書くと以下のようになると思います。

<div class="preshiki">main.rs</div>

```rust
fn main() {
  (1..=15).for_each(|x| {
    match ((x % 3) == 0, (x % 5) == 0) {
      (true, true) => println!("FizzBuzz"),
      (true, _) => println!("Fizz"),
      (_, true) => println!("Buzz"),
      _ => println!("{x}"),
    }
  })
}
```

<div class="preshiki">Cargo.toml</div>

```toml
[package]
name = "fizzbuzz"
version = "0.1.0"
edition = "2021"

[dependencies]
```

ここからスタートしてゆきます。

最終的に、以下のようにすることをゴールとします。

* テスト可能
* 汎用的
* ゼロコスト抽象化

まずメソッドに分けてからテストを書きます。

<div class="preshiki">main.rs</div>

```rust
fn fizzbuzz(x: u32) -> String {
  match ((x % 3) == 0, (x % 5) == 0) {
    (true, true) => "FizzBuzz".to_string(),
    (true, _) => "Fizz".to_string(),
    (_, true) => "Buzz".to_string(),
    _ => x.to_string(),
  }
}

fn main() {
  (1..=15).map(fizzbuzz).for_each(|x| println!("{x}"))
}

#[test]
fn test() {
  let test_target: Vec<String> = (1..=15)
    .map(fizzbuzz)
    .collect();

  assert_eq!(
    test_target,
    vec![
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13",
      "14", "FizzBuzz",
    ]
  );
}
```

次はこれをRustらしく、`enum`に[`std::convert::From`](https://doc.rust-lang.org/std/convert/trait.From.html)トレイトと[`fmt::Display`](https://doc.rust-lang.org/std/fmt/trait.Display.html)トレイトを実装した書き方にします。  
[`std::convert::From`](https://doc.rust-lang.org/std/convert/trait.From.html)トレイトの[`from()`](https://doc.rust-lang.org/std/convert/trait.From.html#tymethod.from)メソッドを実装すれば[`std::convert::Into`](https://doc.rust-lang.org/std/convert/trait.Into.html)トレイトの[`into()`](https://doc.rust-lang.org/std/convert/trait.Into.html#tymethod.into)メソッドが自動で実装され、[`fmt::Display`](https://doc.rust-lang.org/std/fmt/trait.Display.html)トレイトの[`fmt()`](https://doc.rust-lang.org/std/fmt/trait.Display.html#tymethod.fmt)メソッドを実装すれば[`std::string::ToString`](https://doc.rust-lang.org/std/string/trait.ToString.html)トレイトの[`to_string()`](https://doc.rust-lang.org/std/string/trait.ToString.html#tymethod.to_string)メソッドが自動で実装されます。  
ついでにファイルも分けます。

<div class="preshiki">src/fizzbuzz.rs</div>

```rust
use std::fmt;

pub enum FizzBuzz {
  Fizz,
  Buzz,
  FizzBuzz,
  Number(String),
}

impl From<u32> for FizzBuzz {
  fn from(x: u32) -> FizzBuzz {
    match ((x % 3) == 0, (x % 5) == 0) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(x.to_string()),
    }
  }
}

impl fmt::Display for FizzBuzz {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
    match self {
      FizzBuzz::Fizz => write!(f, "Fizz"),
      FizzBuzz::Buzz => write!(f, "Buzz"),
      FizzBuzz::FizzBuzz => write!(f, "FizzBuzz"),
      FizzBuzz::Number(x) => write!(f, "{x}"),
    }
  }
}
```

<div class="preshiki">src/main.rs</div>

```rust
fn main() {
  (1..=15).map(|x| -> FizzBuzz {
    x.into()
  } ).map(|x| -> String {
    x.to_string()
  } ).for_each(|x| println!("{x}"))
}

#[test]
fn test() {
  let test_target: Vec<String> = (1..=15)
    .map(|x| -> FizzBuzz {
      x.into()
    } )
    .map(|x| -> String {
      x.to_string()
    } )
    .collect();

  assert_eq!(
    test_target,
    vec![
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13",
      "14", "FizzBuzz",
    ]
  );
}
```

さて、`u32`では`4294967295`が最大値なのは心もとないので拡張可能にしたいと考えると思います。  
しかし、たとえ`u32`を`u128`にしたところで`340282366920938463463374607431768211455`が最大値です。  
これでは十分ではないので、もっと「抽象的な数値」を扱えるようにします。

fizzbuzz関数$f(x)$を定義してみます。

$$$
f(x) =
\begin{cases}
  \text{FizzBuzz} & (x \bmod 3 = 0 \land x \bmod 5 = 0)\\
  \text{Fizz} & (x \bmod 3 = 0 \land x \bmod 5 \neq 0)\\
  \text{Buzz} & (x \bmod 3 \neq 0 \land x \bmod 5 = 0)\\
  x & (\text{otherwize})\\
\end{cases}
$$$

ここで定義を冷静になって見てみると、$x$に対する操作は「3で割る」 「5で割る」 「割った結果を0と比較する」 「文字列に変換する」しかしていないことがわかります。  
型で表すと以下のようなものです。

```rust
T: Rem<T, Output = U> + From<u8> + ToString,
U: Zero,
```

つまり、`u8`で割ることができて0と比較できて文字列に変換できる値なら、どんな値でもFizzBuzzをすることができるのです。  
Cloneも合わせて先述の`from`は以下のように書けるのです。

```rust
impl<T, U> From<T> for FizzBuzz
where
  T: Rem<T, Output = U> + Clone + From<u8> + ToString,
  U: Zero,
{
  fn from(x: T) -> FizzBuzz {
    match ((x.clone() % T::from(3)).is_zero(), (x.clone() % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(x.to_string()),
    }
  }
}
```

`.clone()`を何度もするのはパフォーマンス上の観点から躊躇われますし処理上特に所有権も必要としておらず借用で十分なのでこれを借用に修正すると以下のようになります。

```rust
impl<'a, T, U> From<&'a T> for FizzBuzz
where
  T: From<u8>,
  &'a T: Rem<T, Output = U> + ToString,
  U: Zero,
{
  fn from(x: &'a T) -> FizzBuzz {
    match ((x % T::from(3)).is_zero(), (x % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(x.to_string()),
    }
  }
}
```

<div class="note alert">

<i class="fontawesome fa fa-times-circle" style="color:#d60a34;font-size:20px;" aria-hidden="true"></i>もしここで以下のようにライフタイム`'a`の記述を書かないと…

```rust example-bad
impl<'a, T, U> From<&'a T> for FizzBuzz
where
  T: From<u8>,
  &T: Rem<T, Output = U> + ToString,
  U: Zero,
{
  fn from(x: &'a T) -> FizzBuzz {
    match ((x % T::from(3)).is_zero(), (x % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(x.to_string()),
    }
  }
}
```

以下のようなエラーメッセージが出てしまいます。

```text example-bad
error[E0637]: `&` without an explicit lifetime name cannot be used here
  --> src\main.rs:42:5
   |
42 |   &T: Rem<T, Output = U> + ToString,
   |   ^ explicit lifetime name needed here
```

where句で`&`を使う必要があるならライフタイムを明示的に示さないといけないのです。

</div>

シンプルに書くのなら、ライフタイム`'a`は高階トレイト境界を用いて以下のような書き方をすることができます。

```rust
impl<T, U> From<&T> for FizzBuzz
where
  T: From<u8>,
  for<'a> &'a T: Rem<T, Output = U> + ToString,
  U: Zero,
{
  fn from(x: &T) -> FizzBuzz {
    match ((x % T::from(3)).is_zero(), (x % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(x.to_string()),
    }
  }
}
```

これで完成です。

`num::BigUint`などもこの`T`を満たすので、これで`u128`でも扱えないような大きな数字も以下のように扱うことができるようになりました。

<div class="preshiki">src/fizzbuzz.rs</div>

```rust
use num::Zero;
use std::fmt;
use std::ops::Rem;

pub enum FizzBuzz {
  Fizz,
  Buzz,
  FizzBuzz,
  Number(String),
}

impl fmt::Display for FizzBuzz {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
    match self {
      FizzBuzz::Fizz => write!(f, "Fizz"),
      FizzBuzz::Buzz => write!(f, "Buzz"),
      FizzBuzz::FizzBuzz => write!(f, "FizzBuzz"),
      FizzBuzz::Number(x) => write!(f, "{x}"),
    }
  }
}

impl<T, U> From<&T> for FizzBuzz
where
  T: From<u8>,
  for<'a> &'a T: Rem<T, Output = U> + ToString,
  U: Zero,
{
  fn from(x: &T) -> FizzBuzz {
    match ((x % T::from(3)).is_zero(), (x % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(x.to_string()),
    }
  }
}
```

<div class="preshiki">src/main.rs</div>

```rust
mod fizzbuzz;

use fizzbuzz::FizzBuzz;
use num::{BigUint, Num};

fn main() {
  num_iter::range_inclusive(
    BigUint::from_str_radix("340282366920938463463374607431768211471", 10).unwrap(),
    BigUint::from_str_radix("340282366920938463463374607431768211485", 10).unwrap(),
  )
  .map(|x: BigUint| -> String {
    let fizzbuzz: FizzBuzz = (&x).into();
    fizzbuzz.to_string()
  })
  .for_each(|x| println!("{x}"));
}

#[test]
fn test_bigint() {
  let test_target: Vec<String> = num_iter::range_inclusive(
    BigUint::from_str_radix("340282366920938463463374607431768211471", 10).unwrap(),
    BigUint::from_str_radix("340282366920938463463374607431768211485", 10).unwrap(),
  )
  .map(|x| {
    let buffer: FizzBuzz = (&x).into();
    let buffer: String = buffer.to_string();
    buffer.to_string()
  })
  .collect();

  assert_eq!(
    test_target,
    vec![
      "340282366920938463463374607431768211471",
      "340282366920938463463374607431768211472",
      "Fizz",
      "340282366920938463463374607431768211474",
      "Buzz",
      "Fizz",
      "340282366920938463463374607431768211477",
      "340282366920938463463374607431768211478",
      "Fizz",
      "Buzz",
      "340282366920938463463374607431768211481",
      "Fizz",
      "340282366920938463463374607431768211483",
      "340282366920938463463374607431768211484",
      "FizzBuzz",
    ]
  );
}

#[test]
fn test() {
  let test_target: Vec<String> = (1..=15)
    .map(|x| {
      let buffer: FizzBuzz = (&x).into();
      let buffer: String = buffer.to_string();
      buffer.to_string()
    })
    .collect();

  assert_eq!(
    test_target,
    vec![
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13",
      "14", "FizzBuzz",
    ]
  );
}
```

<div class="preshiki">Cargo.toml</div>

```toml
[package]
name = "fizzbuzz"
version = "0.1.0"
edition = "2021"

[dependencies]
num = "0.4.0"
num-iter = "0.1.43"
```

<div class="note warn">

<i class="fontawesome fa fa-exclamation-circle" style="color:#f7a535;font-size:20px;" aria-hidden="true"></i> ここで「そうだ！FizzBuzzのenumにString型ではなく`Box<dyn 'a + ToString>`型で動的な型の値を持たせればゼロコスト抽象化の恩恵も得られながらよりコンパイル時に最適化されるのでは？」と思うかもしれませんが…

```rust example-bad
use num::Zero;
use std::fmt;
use std::ops::Rem;

pub enum FizzBuzz<'a> {
  Fizz,
  Buzz,
  FizzBuzz,
  Number(Box<dyn 'a + ToString>),
}

impl<'a> fmt::Display for FizzBuzz<'a> {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
    match self {
      FizzBuzz::Fizz => write!(f, "Fizz"),
      FizzBuzz::Buzz => write!(f, "Buzz"),
      FizzBuzz::FizzBuzz => write!(f, "FizzBuzz"),
      FizzBuzz::Number(x) => write!(f, "{x}"),
    }
  }
}

impl<'a, T, U> From<&'a T> for FizzBuzz<'a>
where
  T: 'a + From<u8>,
  &'a T: Rem<T, Output = U> + ToString,
  U: Zero,
{
  fn from(x: &'a T) -> FizzBuzz<'a> {
    let three = T::from(3);
    match ((x % three).is_zero(), (x % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(Box::new(x)),
    }
  }
}
```

しかし、実際にはBoxによるメモリ操作や動的ディスパッチによるオーバーヘッドもありますし、最終的に`to_string()`で文字列を生成しているのには変わりありませんから、メリットはあまりありません。

また、これを以下のような利用をしようとすると…

```rust example-bad
fn main() {
  (1..=15)
    .map(|x| (&x).into())
    .for_each(|x: FizzBuzz| println!("{}", x));
}
```

以下のようなエラーメッセージが出てしまいます。

```text example-bad
error[E0515]: cannot return value referencing function parameter `x`
 --> src\main.rs:7:18
  |
7 | .map(|x| (&x).into())
  |          ----^^^^^^^
  |          |
  |          returns a value referencing data owned by the current function
  |          `x` is borrowed here
```

クロージャ外から出た後までライフタイムを必要とするような処理はできないということです。  
これは、以下のようにクロージャ内で変数のライフタイムが尽きた後に参照しないように修正しなければなりません。

```rust
fn main() {
  (1..=15)
    .for_each(|x| println!("{}", Into::<FizzBuzz>::into(&x)));
}
```

もしくは所有権を要求してしまうという手もあります。所有権を得た後はライフタイムが伸びるのでこれは問題ありません。

```rust
use num::Zero;
use std::fmt::{Display, Formatter, Result};
use std::ops::Rem;

pub enum FizzBuzz {
  Fizz,
  Buzz,
  FizzBuzz,
  Number(Box<dyn Display>),
}

impl Display for FizzBuzz {
  fn fmt(&self, f: &mut Formatter) -> Result {
    match self {
      FizzBuzz::Fizz => write!(f, "Fizz"),
      FizzBuzz::Buzz => write!(f, "Buzz"),
      FizzBuzz::FizzBuzz => write!(f, "FizzBuzz"),
      FizzBuzz::Number(x) => write!(f, "{x}"),
    }
  }
}

impl<T, U> From<T> for FizzBuzz
where
  for<'a> T: 'a + Display + From<u8>,
  for<'a> &'a T: Rem<T, Output = U>,
  U: Zero,
{
  fn from(x: T) -> FizzBuzz {
    match ((&x % T::from(3)).is_zero(), (&x % T::from(5)).is_zero()) {
      (true, true) => FizzBuzz::FizzBuzz,
      (true, _) => FizzBuzz::Fizz,
      (_, true) => FizzBuzz::Buzz,
      _ => FizzBuzz::Number(Box::new(x)),
    }
  }
}
```

以上のように書けますが、どちらにせよBoxによるメモリ操作や動的ディスパッチによる実行時オーバーヘッドがあることには変わりありません。※静的ディスパッチであればビルド後のサイズは多少膨らむものの実行時のオーバーヘッドは無い。

このように、過大なライフタイムを要求すると、後々取り回しに苦労してしまうので、パフォーマンスや汎用性を天秤にかけて判断するようにしましょう。

</div>

RustでFizzBuzzを実装してみましたという話でした。
