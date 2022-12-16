---
title: JAVAで組み合わせ
date: "2016-11-26T09:04:03+0900"
socialImage: "/photo.jpg"
draft: false
template: "post"
category: "blog"
description: "JAVAで組み合わせを作成したいと思うこと、ありますよね。僕はあるので自分用にメモです。Ruby では組み合わせを作成することができるArray#combinationが用意されています。これを使えば、例えば下記のように…"
tags:
  - "Java"
  - "Ruby"
---

JAVAで組み合わせを作成したいと思うこと、ありますよね。  
僕はあるので自分用にメモです。

Ruby では組み合わせを作成することができる[Array#combination](https://docs.ruby-lang.org/ja/latest/method/Array/i/combination.html)が用意されています。  
これを使えば、例えば下記のように

```ruby
require 'json'

jsonstr = <<JSON
[
  {
    "price": 432,
    "name": "hoge"
  },
  {
    "price": 531,
    "name": "fuga"
  },
  {
    "price": 568,
    "name": "piyo"
  }
]
JSON

p JSON.load(jsonstr)
    .combination(2)
    .to_a
    .select(&->x{x.reduce(&->x,y{x["price"] + y["price"]}) == 1000})
```

こうすれば、JSON の商品リストから price の合計が 1000 になるもの(hoge と piyo)を抜き出してくれます。

```ruby
[[{"price"=>432, "name"=>"hoge"}, {"price"=>568, "name"=>"piyo"}]]
```

非常にイージー。

ところが、combination は Java には無いんですよね。  
これを Java で書きたい時、どうすればいいのか悩みました。  
今回は再帰的なやりかたでやってみました。

```java
/**
 * 組み合わせを返す
 *
 * @param parameter 組み合わせを作成するリスト
 * @param combinationCount 組み合わせの個数
 * @return 組み合わせのリスト
 */
private static final <E> List<List<E>> combination(
  final List<E> parameter,
  final long combinationCount) {

  final int parameterSize = parameter.size();

  if (parameterSize < combinationCount) {
    throw new IllegalArgumentException("リストの要素数が組み合わせ個数より少ないです。");
  } else if (combinationCount <= 0) {
    throw new IllegalArgumentException("組み合わせ個数が不正です。");
  } else if (combinationCount == 1) {
    List<List<E>> result = new LinkedList<List<E>>();
    parameter.forEach(x -> {
      List<E> resultWork = new LinkedList<E>();
      resultWork.add(x);
      result.add(resultWork);
    });
    return result;
  } else {
    List<List<E>> result = new LinkedList<List<E>>();
    for (int i = 0; i < parameterSize - combinationCount + 1; i++) {
      List<List<E>> resultWork = combination(
        parameter.subList(1 + i, parameterSize),
        combinationCount - 1);
      for (List<E> resultWorkForEach : resultWork) {
        resultWorkForEach.add(0, parameter.get(i));
      }
      result.addAll(resultWork);
    }
    return result;
  }
}
```

LinkedList を使っているのは先頭追加があるためです。  
ちょっと見た目がヘビーですが、使えます。  
こんな感じです。

```java
class Item {
  public Item(int price, String name){
    this.price = price;
    this.name = name;
  }
  int price;
  String name;

  @Override
  public String toString() {
    return name + ":" + price + "円";
  }
}

class Main {
  public static void main(String[] args) {
    List<Item> itemList = Arrays.asList(new Item[]{
      new Item(432, "hoge"),
      new Item(531, "fuga"),
      new Item(568, "piyo"),
      new Item(999, "meta")
    });

    combination(itemList,3)
      .stream()
      .forEach(x->{System.out.println(Arrays.toString(x.toArray()));});
  }
}
```

こうなります。

```json
[hoge:432円, fuga:531円, piyo:568円]
[hoge:432円, fuga:531円, meta:999円]
[hoge:432円, piyo:568円, meta:999円]
[fuga:531円, piyo:568円, meta:999円]
```

Ruby の例題と同じようにこうすると、

```java
combination(itemList,2)
  .stream()
  .filter(x-> x.stream().map(y -> y.price).reduce((y, z)-> y + z).get() == 1000)
  .forEach(x->{System.out.println(Arrays.toString(x.toArray()));});
```

こうなります。

```json
[hoge:432円, piyo:568円]
```

java8 の stream なのに遅延評価が役に立たないのは、Ruby も combination を[Enumerator::Lazy](https://docs.ruby-lang.org/ja/latest/class/Enumerator=3a=3aLazy.html)で使えないのと一緒ですね。  
java8 は遅延評価がデフォルトとなっているので、気軽に limit(1)などで一瞬で返ってくるつもりでいたら combination 部分が延々返ってこない…なんてことが発生しないようになのかもしれません。

Ruby で使えた combination が無くて困った話でした。
