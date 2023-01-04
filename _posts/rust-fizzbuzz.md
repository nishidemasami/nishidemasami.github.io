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

なお、この記事を書くにあたって<a target="_blank" href="https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0Rust-%E7%AC%AC2%E7%89%88-Jim-Blandy/dp/4873119782?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=16SB3SPXD9LVL&keywords=rust&qid=1672662058&sprefix=rust+%2Caps%2C261&sr=8-4&linkCode=ll1&tag=nishidemasami-22&linkId=5f2948f4e335959907e6a8b8e22b859d&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >プログラミングRust 第2版</a>を参考にしました。

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
            FizzBuzz::Number(x) => write!(f, "{}", x),
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

まず、愚直にFizzBuzzを書いたら以下のようになると思います。

```rust
fn main() {
    (1..=15).for_each(|x| {
        match ((x % 3) == 0, (x % 5) == 0) {
            (true, true) => println!("FizzBuzz"),
            (true, _) => println!("Fizz"),
            (_, true) => println!("Buzz"),
            _ => println!("{}", x),
        }
    })
}
```

しかし、Rustを使用する以上、当然以下のようなメリットを享受したいです。

* テスト可能
* 型安全
* ゼロコスト抽象化

そのため、まずテスト可能なようにメソッドに分けてからテストを書きます。

```rust
fn fizzbuzz(x: u128) -> String {
    match ((x % 3) == 0, (x % 5) == 0) {
        (true, true) => "FizzBuzz".to_string(),
        (true, _) => "Fizz".to_string(),
        (_, true) => "Buzz".to_string(),
        _ => x.to_string(),
    }
}

fn main() {
    (1..=15).map(fizzbuzz).for_each(|x| println!("{}", x))
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

次はこれをRustらしく、`enum`に`std::convert::From`トレイトと`fmt::Display`トレイトを実装した書き方にします。  
`std::convert::From`トレイトの`into()`メソッドを実装すれば`from()`メソッドが自動で実装され、`fmt::Display`トレイトの`fmt()`メソッドを実装すれば`to_string()`メソッドが自動で実装されます。

```rust
use std::fmt;

enum FizzBuzz {
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
            FizzBuzz::Number(x) => write!(f, "{}", x),
        }
    }
}

// 以下はテスト用

fn main() {
    (1..=15).map(|x| -> FizzBuzz {
        x.into()
    } ).map(|x| -> String {
        x.to_string()
    } ).for_each(|x| println!("{}", x))
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

ここで、u32では4294967295が最大値なのは心もとないので拡張可能にしたいと考えると思います。  
u32をu128にしたところで340282366920938463463374607431768211455が最大値です。  
これでは十分ではないので、もっと抽象的な数値を扱えるようにします。

fizzbuzz関数$f(x)$を定義してみます。

$
f(x) =
\begin{cases}
  \text{FizzBuzz} & (x \bmod 3 = 0 \land x \bmod 5 = 0)\\
  \text{Fizz} & (x \bmod 3 = 0 \land x \bmod 5 \neq 0)\\
  \text{Buzz} & (x \bmod 3 \neq 0 \land x \bmod 5 = 0)\\
  x & (\text{otherwize})\\
\end{cases}
$

冷静になって見てみると、$x$に対する操作は「3で割る」「5で割る」「割った結果を0と比較する」しかしていないことしかわかります。  
型で表すと以下のようなものです。

```rust
T: Rem<T, Output = U> + From<u8>,
U: Zero,
```

つまり、先述の`from`は以下のように書けるのです。

```rust
impl<T, U> From<T> for FizzBuzz
where
    T: ToString + Rem<T, Output = U> + Clone + From<u8>,
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

ただ、`.clone()`を何度もするのは躊躇われますし、所有権も必要としておらず借用で十分なので借用にすると、以下のようになります。

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
42 |     &T: Rem<T, Output = U> + ToString,
   |     ^ explicit lifetime name needed here
```

</div>

さらにシンプルに書くのなら、ライフタイム`'a`は高階トレイト境界を用いて以下のような書き方をすることができます。

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

この`T`は`num::BigUint`なども満たしているので、これで`u128`でも扱えないような大きな数字も以下のように扱うことができるようになりました。

```rust
use num::Zero;
use std::fmt;
use std::ops::Rem;

enum FizzBuzz {
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
            FizzBuzz::Number(x) => write!(f, "{}", x),
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

// 以下はmain用・テスト用

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
    .for_each(|x| println!("{}", x));
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

以上です。
