---
title: javascriptテスト
date: 2016-07-03 23:04:03
tags:
---
小さい数の素因数分解
入力：<input id="soinsu_bunkai_input" size="25" type="text" value="" /><div id="soinsu_bunkai_return">出力：ここに結果が表示されます</div>
※javascriptでは53ビット整数の上限(9007199254740991)を超えると自動的に64ビット浮動小数点型に変換されて誤差が出るため使えません


<script type="text/javascript">
$('#soinsu_bunkai_input').on('keyup change paste', function() {
  var start = new Date();
  var kotae = soinsu5($('#soinsu_bunkai_input').val());
  var end = new Date();
  $('#soinsu_bunkai_return').html("出力：" + kotae + "<br>\n ※処理時間:" + (end - start) + "ms");
});
var soinsu5=function(b){
  if(b.match(/[^0-9]/g))return"\u30a8\u30e9\u30fc:\u8aa4\u3063\u305f\u5165\u529b\u3067\u3059";
  var f=[],c=Number(b);if(!(9007199254740991>=c))return"\u30a8\u30e9\u30fc:\u6570\u5024\u304c\u5927\u304d\u3059\u304e\u307e\u3059\u3002<br>\n";
  if(2>c)return b;
  var d=Math.sqrt(c),d=[2,3,5,7,11,13,17,19,23,29];
  for(b=0;9>=b;b++)for(;0==c%d[b];)c/=d[b],f.push(d[b]);
  if(30>c)return f.join(" * ");
  for(var e=30,g=[1,7,11,13,17,19,23,29],d=Math.sqrt(c);e<=d;){for(b=0;7>=b;b++)for(;0==c%(e+g[b]);)c/=
  e+g[b],f.push(e+g[b]),d=Math.sqrt(c);e+=30}1!=c&&f.push(c);
  return f.join(" * ")
};
</script>
