---
title: 関数型プログラミング
date: 2016-11-22 23:04:03
tags:
---
関数型プログラミングが流行し始めてからもうだいぶん経ちました！
あのJava8からもう2年以上経ってるんですよ！時の流れは速いですね！
そろそろ他人の関数型プログラムとかを見ることも増えてきたのではないでしょうか。
でもラムダ文とかを見ても、使わないとすぐ忘れちゃうので、備忘録的なものを書いてみようと思います！

今回はRubyとJavaで比較しながら見てゆきます。

### 操作処理
| 処理 | Ruby | Java |
|:-|:-:|:-:|
| 各項目を変更 | map(collect) | map |
| 条件にあったものを抽出 | select | filter |
| 上と逆 | reject | - |
| ソート | sort_by | sorted |


### 終端処理
| 処理 | Ruby | Java |
|:-|:-:|:-:|
| 全てをまとめる | inject(reduce) | reduce |
| 条件にあったものを1つ抜き出す | find(detect) | -(filterとlimit(1)などで代用) |
| 各項目を操作(変更されない) | each | forEach |
| 合計| -(inject(:+)などで代用) | sum |
| カウント| count | count |

まずはRubyです。
ラムダ文を作る前に、まずはラムダ文がどう使われるのかを見なければなりません。
例えば、selectです。
selectは「配列の各要素に対して判定を行う」ラムダ文を受け取ります。でもって、trueのもののみ抽出します。
こんな感じにすると…
```ruby
is_odd = ->x{x % 2 == 1}
p (0..10).to_a.select(&is_odd)
```
奇数だけ抽出された配列になります。
```
[1, 3, 5, 7, 9]
```
ちなみに以下もやってることは等しいです。lambdaで作ったProcオブジェクトを渡すか、それともブロックを渡すかの違いです。参考に。
```ruby
is_odd = lambda {|x| x % 2 == 1}
p (0..10).to_a.select(&is_odd)
```
```ruby
p (0..10).to_a.select(&->x{x % 2 == 1})
```
```ruby
p (0..10).to_a.select{|x| x % 2 == 1}
```

例えばJSONで値段と商品名の配列が渡されて、合計金額がちょうど1000円になる2つの商品の組み合わせを抜き出そうとするとこんな感じです。
```ruby
require 'json'

jsonstr = <<JSON
[{ "price":432, "name":"hoge" }, { "price":531, "name":"fuga" }, { "price":568, "name":"piyo" }]
JSON

p JSON.load(jsonstr)
    .combination(2)
    .to_a
    .select(&->x{x.reduce(&->x,y{x["price"] + y["price"]}) == 1000})
```
hogeとpiyoの組み合わせを抜き出してくれます。
```
[[{"price"=>432, "name"=>"hoge"}, {"price"=>568, "name"=>"piyo"}]]
```

例えば、今日以降で、12月25日が土曜日になる日を5つリストアップしなければならない時は
```ruby
require 'date'

p (Date::today..Date.new(2**100))
    .lazy
    .select { |d| d.month == 12 and d.day == 25 and d.saturday? }
    .take(5)
    .map(&->d{d.strftime('%Y/%m/%d')})
    .to_a
```
↓
```
["2021/12/25", "2027/12/25", "2032/12/25", "2038/12/25", "2049/12/25"]
```
