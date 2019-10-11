---
title: 電話番号の音を鳴らすやつ
date: 2017-01-21 01:04:03
tags:
- "JavaScript"
---
必要に迫られたため、入力された電話番号の音を鳴らすやつを作りました。
(この音はDTMFという名前らしいです。[DTMF - Wikipedia](https://ja.wikipedia.org/wiki/DTMF))
Wikipediaを見ると数字、*、#だけでなく、A、B、C、Dもあるそうなのでそれも鳴らせるようにしています。

電話番号入力：<input id="phone_number" size="40" type="text" value="" /> <button id="phone_call" disabled>鳴らす</button>
※注：音が鳴ります
※鳴らすボタンが押せない時は、ロード中か、もしくはブラウザが対応していません

よければ！
<script type="text/javascript" src="/js/phone.js"></script>
<script type="text/javascript">
$('#phone_number').keypress(e=>{
	if(e.which == 13){
    phone_number_call($('#phone_number').val());
		return false;
	}
});
$('#phone_call').on('click', function() {
  phone_number_call($('#phone_number').val());
});
var phone_number_call = function(phonenumberString) {

    if(playflag) {
      return;
    }
    playflag = true;
    $("#phone_call").prop("disabled", true);

    phonenumberArray = phonenumberString.replace(/[Ａ-Ｄａ-ｄ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)}).toUpperCase().split('').filter(x=>{return /^[A-D0-9*#]$/.test(x)});

    if(phonenumberArray.length == 0) return;

    var count = 0;
    var setIntervalID = setInterval(function() {
        if(count == 0) {
          toner.press(phonenumberArray[count]);
        } else {
          toner.release(phonenumberArray[count-1]);
          if (phonenumberArray.length > count) {
              toner.press(phonenumberArray[count]);
            } else {
              clearInterval(setIntervalID);

              $("#phone_call").prop("disabled", false);
              playflag = false;
            }
        }
        count++;
    }, 200);
};
var toner, table;
var playflag = false;
document.addEventListener('DOMContentLoaded', function() {
    table = document.querySelector('table');
    if(window.AudioContext == null && !/\WPhantomJS\W/.test(navigator.userAgent)) {
        table.style.display = 'none';
        document.querySelector('div').style.display = '';
        return;
    }
    var ctx = new AudioContext();
    toner = new DTMFToner(ctx);
    toner.connect(ctx.destination);
    //adjustSize();
    $("#phone_call").prop("disabled", false);
});
</script>
