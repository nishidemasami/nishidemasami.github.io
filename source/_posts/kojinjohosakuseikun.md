---
title: ダミー個人情報作成くん
date: 2017-01-29 01:04:03
tags:
- "JavaScript"
---
Javascriptだけでなにかデータのダウンロードをさせてみたいと思ったので、試しにダミーの個人情報を作成するやつを作りました。
特に統計に基づいたりなどはしていない適当なデータです。

ChromeとFirefox、Safariで動きます。
マイクロソフト社製ブラウザしか使わないポリシーの方は「Microsoft Edge」を使って下さい。

・メリット
サーバと通信しないのでどんなに大量でもデータ通信帯域などを消費しない
・デメリット
動かないブラウザがある(IE)

よければ！


<!-- <a id="download" href="#" download="ダミー個人情報.csv" onclick="dummyKojinjohoDownload()">ダウンロード</a> -->
<div class="widget" >ダミー個人情報作成くん<br />
<button onclick="dummyKojinjohoDownload();">ダミー個人情報作成</button><br />
パラメータ<br />
<label for="dummyKojinjohoSentokomokugyoCheckbox"><input id="dummyKojinjohoSentokomokugyoCheckbox" type="checkbox" checked border="0">先頭の項目行</label>
ダミーの個人情報の件数：<input id="dummyKojinjohoKensu" size="10" type="number" value="100" />
ファイル形式：<select id="dummyKojinjohoTypeSelectbox" size="1">
	<option value="plaincsv">CSVファイルをそのまま表示
	</option><option value="csv">CSVファイルをダウンロード
	<option value="plaintsv">TSVファイルをそのまま表示
	</option><option value="tsv">TSVファイルをダウンロード
</option></select> ※Microsoft Edgeではそのまま表示はできません。Safariでは表示しかできません。<br />
項目
<label for="dummyKojinjohoNameCheckbox"><input id="dummyKojinjohoNameCheckbox" type="checkbox" checked border="0">名前(苗字と名前の間は全角スペース区切りです)</label>
<label for="dummyKojinjohoAgeCheckbox"><input id="dummyKojinjohoAgeCheckbox" type="checkbox" checked border="0">年齢(生年月日から計算しています)</label>
<label for="dummyKojinjohoBirthdayCheckbox"><input id="dummyKojinjohoBirthdayCheckbox" type="checkbox" checked border="0">生年月日(現在の日付から100年前までの間でランダムです)</label>
<label for="dummyKojinjohoSeibetsuCheckbox"><input id="dummyKojinjohoSeibetsuCheckbox" type="checkbox" checked border="0">性別(男、女からランダムです。その他の人が3%います)</label>
<label for="dummyKojinjohoATodofukenCheckbox"><input id="dummyKojinjohoATodofukenCheckbox" type="checkbox" checked border="0">都道府県(47都道府県からランダムです)</label>
<label for="dummyKojinjohoPhoneCheckbox"><input id="dummyKojinjohoPhoneCheckbox" type="checkbox" checked border="0">携帯電話番号(080,090から始まり、下8桁はランダムです)</label>
<label for="dummyKojinjohoBloodCheckbox"><input id="dummyKojinjohoBloodCheckbox" type="checkbox" checked border="0">血液型(40%でA、20%でB、30%でO、10%でABです)</label>
<label for="dummyKojinjohoChokinCheckbox"><input id="dummyKojinjohoChokinCheckbox" type="checkbox" checked border="0">貯金額(0~10000000の間でランダムです)</label>
<label for="dummyKojinjohoDainigengoCheckbox"><input id="dummyKojinjohoDainigengoCheckbox" type="checkbox" checked border="0">プログラミング言語(メジャーなプログラミング言語からランダムです)</label>
<label for="dummyKojinjohoPasswordCheckbox"><input id="dummyKojinjohoPasswordCheckbox" type="checkbox" checked border="0">パスワード(5文字〜20文字の半角英数字です。半分くらいの人は簡単なパスワードを使っています。)</label></div>

<script type="text/javascript">

// カラムの物理名と日本語名
var global_dummyKojinjohoColumns = {
	"name" : "名前",
	"todofuken" : "都道府県",
	"dainigengo" : "プログラミング言語",
	"chokin" : "貯金額",
	"seibetsu" : "性別",
	"phone" : "携帯電話番号",
	"password" : "パスワード",
	"blood" : "血液型",
	"birthday" : "生年月日",
	"age" : "年齢"
};

// カラムの順番(物理名)
var global_dummyKojinjohoColumnsOrder = [
	"name",
	"age",
	"birthday",
	"seibetsu",
	"todofuken",
	"phone",
	"blood",
	"chokin",
	"dainigengo",
	"password"
];

// 苗字
var global_dummyKojinjohoMyoji = ["佐藤","鈴木","高橋","田中","渡辺","渡邊","伊藤","山本","中村","小林","加藤","吉田","山田","佐々木","山口","斎藤","齋藤","松本","井上","木村","林","清水","山崎","森","阿部","池田","橋本","山下","石川","中島","前田","藤田","小川","後藤","岡田","長谷川","村上","近藤","石井","斉藤","齊藤","坂本","遠藤","青木","藤井","西村","福田","太田","三浦","岡本","松田","中川","中野","原田","小野","田村","竹内","金子","藤原","和田","中山","石田","上田","森田","原","柴田","酒井","工藤","横山","宮崎","宮本","内田","高木","安藤","谷口","大野","丸山","今井","高田","藤本","武田","村田","上野","杉山","増田","平野","大塚","千葉","久保","松井","小島","岩崎","桜井","櫻井","野口","松尾","野村","木下","菊地","佐野","大西","杉本","新井","浜田","濱田","菅原","市川","古川","水野","小松","島田","小山","高野","西田","菊池","山内","西川","五十嵐","北村","安田","中田","川口","平田","川崎","飯田","吉川","本田","久保田","沢田","澤田","辻","関","關","吉村","渡部","岩田","中西","服部","樋口","福島","川上","永井","松岡","田口","山中","森本","土屋","矢野","広瀬","廣瀬","小沢","小澤","秋山","石原","松下","馬場","大橋","松浦","吉岡","小池","浅野","淺野","荒木","大久保","野田","熊谷","田辺","田邊","川村","星野","黒田","堀","尾崎","望月","永田","大谷","内藤","松村","西山","平井","大島","岩本","片山","本間","早川","横田","岡崎","荒井","大石","鎌田","成田","宮田","小田","石橋","河野","篠原","須藤","高山","大沢","大澤","小西","南","栗原","伊東","松原","三宅","福井","大森","奥村","岡","内山","片岡"];

// 女性名
var global_dummyKojinjohoJoseNamae = ["あい","愛","藍","藍華","あいり","愛莉","愛里","愛理","あおい","葵","蒼","青葉","あかね","茜","朱音","あかり","朱里","あき","明菜","晶","あけみ","明美","あこ","アコ","あさみ","あざみ","あすか","あずき","あずさ","梓","アスナ","明日菜","あつこ","あつ子","敦子","敦美","あまね","あみ","亜美","あや","彩","文","絢","綾","あやか","あやな","綾音","あやの","綾乃","綾野","あやめ","菖","あゆ","あゆみ","歩","アリサ","杏","杏子","いおり","伊織","泉","いちご","苺","憂","初","潮","卯月","梅","恵美","絵理","カイ","楓","香織","薫","香","鏡","和音","かずみ","和美","奏","かりん","京子","杏子","卿子","けい","京","圭","桂","梢","暦","ぐり子","くれあ","ここあ","こと","ことり","このみ","小鳩","さおり","さき","サキ","咲","さくら","サクラ","桜","桜子","櫻子","ささら","さちこ","幸子","沙耶","さやか","汐","しおり","栞","詩織","静","静流","しの","シノ","忍","ジュン","翔子","心","蘇芳","鈴","すずこ","節子","玉","千明","ちか","ちこ","千鶴","千歳","ちなつ","千早","ちよこ","つかさ","司","椿","つゆり","輝美","とうこ","トオル","とき","時子","ともえ","巴","ともこ","とも子","知子","友美","ナオ","渚","なずな","那智","夏希","夏美","なな","奈々","ななこ","菜々子","七瀬","なの","なゆ","鳴","寧々","のえる","ノエル","のぞみ","希","和","紀","のん","花","ハル","晴","はるか","遥","春香","柊","光","ひかる","ヒカル","仁美","ひな","雛","響","ヒマワリ","ひより","風子","二三","ほのか","ほむら","まい","マイ","舞","麻衣","まいこ","舞子","まこ","まこと","真","まさみ","雅美","まどか","円","まな","まなみ","まほろ","まみ","真美","麻耶","真弓","マリ","真理","まりあ","マリア","まりな","まりも","まりや","みうら","みお","澪","みか","ミカ","美影","みき","ミキ","美希","みく","みくる","みこ","美心","美琴","みさ","みさえ","みさお","操","美咲","みずき","みすず","美鈴","みずほ","みつき","みつこ","みどり","翠","緑","碧","みな","美凪","美那子","みなみ","南","みなも","美穂","美星","美也","みやこ","都子","みやび","雅","みわ","芽衣","めぐみ","椛","萌","桃","桃華","やよい","弥生","ゆい","唯","結衣","ゆう","ユウ","夕","悠","優","結","邑","ゆうき","ゆうこ","ゆう子","祐子","優子","ゆうな","ゆかり","ゆたか","ゆの","雪","ヨーコ","よしこ","よし子","美子","よしの","りえ","理恵","リカ","リコ","りさ","律","律子","リナ","涼","リン","凜","凛","燐","ルイ","瑠衣","レイ","怜","レイラ","れおん","レナ","蓮","蓮子","渉"];

// 男性名
var global_dummyKojinjohoDanseNamae = ["秋","アキト","あきら","アキラ","彰","陽","旭","晃","昭","晶","章","朗","斐","輝","飛鳥","梓","東","中","惇","敦","あまね","周","歩","新","伊織","幾","イサム","至","格","一松","いつき","樹","斎","一輝","出","巌","おさむ","乱","修","治","紀","納","統","導","温","海","快","薫","格","革","和興","和音","鼎","完二","京","恭","京介","京助","京也","きよし","清","潔","キリト","究","吟","邦","国生","汲","兄","圭","敬","健","元","彦","玄","厳","けんと","玄人","けんいち","健一","健太","甲","行","耕","興","航","號","康一","こうじ","コウジ","暦","五郎","宇","栄","授","貞夫","教","怜","聖","聡","三郎","重信","しげる","シゲル","卯","茂","静","七郎","忍","修治","十三","秀太","周平","ジュン","准","隼","準","順","純一","俊介","唱","祥","翔","奨","二郎","信","晋","仁","甚","しんのすけ","甚平","末吉","清白","進","則","スバル","昴","整","雪城","聡太郎","大","大五郎","大輔","平","たかし","タカシ","尚","尊","昂","隆","隆史","高","高久","隆元","匠","たけし","武","佑","匡","ただし","是","正","達夫","辰雄","達也","保","巽","太郎","長七郎","つかさ","司","常","彝","翼","烈","禎","哲也","照","輝美","伝","田","冬馬","トオル","通","達","ともお","寅","直樹","直次郎","直政","流","渚","那智","のえる","ノエル","望","昇","黎","一","丕","創","甫","萌","初","果","八郎","駿","速","逸","ハルヒコ","ひかる","光","彦左衛門","ひさし","久","永","密","斉","響","一二三","ヒロ","ひろし","博","広","洋","昊","浩","拡","風太","平八郎","弁慶","北斗","穂積","まこと","誠","真","誠人","まさお","正樹","まさし","政","昌","正宗","まさる","優","勝","将","学","まひろ","護","麻呂","操","みつお","満","農","みのる","実","穣","黙","求","寧","泰","休","保志","唯","ゆう","ユウ","勇","遊","悠","有","由","祐","悠一","ゆうき","ゆうさく","ゆうと","ゆうや","雪男","ゆたか","豊","裕","ヨシ","力","陸","竜","隆太","りょう","了","亮","涼","良","尞","亮太","凛","燐","レイ","礼","烈","蓮","六郎","亘","済","渉"];

// 都道府県
var global_dummyKojinjohoTodofuken = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];

// 第二言語
var global_dummyKojinjohoGengo = ["COBOL","PASCAL","Scheme","Clojure","Haskell","Fortran","Swift","JavaScript","PHP","Ruby","Python","C++","C#","Java","C言語","BASIC","Go","LISP","Scala","sh"];

// 簡単なパスワード
var global_dummyKojinjohoEasypassword = ["123456","password","12345678","qwerty","12345","123456789","baseball","welcome","1234567890","abc123","111111","1qaz2wsx","dragon","master","monkey","login","princess","qwertyuiop","passw0rd","football",];

// ダウンロード方式
var global_type = {
	"csv" : { "type" : "text/csv" },
	"plaincsv" : { "type" : "text/plain" },
	"tsv" : { "type" : "text/tsv" },
	"plaintsv" : { "type" : "text/plain" }
}

var global_today = new Date();
var global_today_int = parseInt("" + global_today.getFullYear() + ( "0" + (global_today.getMonth() + 1)).slice(-2) + ( "0" + global_today.getDate()).slice(-2));

// ダミーの個人情報を作成
function dummyKojinjohosMaker(prm) {

  var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
	var content = '';

	if(prm["sentokomokugyo"]) {
		if(prm["type"].match(/tsv/)) {
			content += global_dummyKojinjohoColumnsOrder.filter(x=>{return prm[x]}).map(x=>{return global_dummyKojinjohoColumns[x]}).join("\t") + "\n";
		} else if(prm["type"].match(/csv/)) {
			content += global_dummyKojinjohoColumnsOrder.filter(x=>{return prm[x]}).map(x=>{return '"' + global_dummyKojinjohoColumns[x] + '"'}).join(",") + "\n";
		}
	}

	for(var i = 0; i < prm["kensu"]; i++) {
		var adummyKojinjoho = dummyKojinjohoMaker(prm);

		if(prm["type"].match(/tsv/)) {
			content += global_dummyKojinjohoColumnsOrder.filter(x=>{return prm[x]}).map(x=>{return adummyKojinjoho[x]}).join("\t") + "\n";
		} else if(prm["type"].match(/csv/)) {
			content += global_dummyKojinjohoColumnsOrder.filter(x=>{return prm[x]}).map(x=>{return '"' + adummyKojinjoho[x] + '"'}).join(",") + "\n";
		}

	}

	return [ bom, content ];
}


// ダミーの個人情報(1人分)を作成
function dummyKojinjohoMaker(prm) {

	// 0なら女性、1なら男性
	var seibetsu = Math.round( Math.random() );

	// 誕生日
	var birthDay = new Date();
	birthDay.setDate(birthDay.getDate() - Math.floor(Math.random() * 36500));

	var adummyKojinjoho = {};

	var f = {}

	// パスワード生成
	f['password'] = function() {
		if(Math.round( Math.random() ) === 1) {
		  return global_dummyKojinjohoEasypassword[Math.floor( Math.random() * global_dummyKojinjohoEasypassword.length )];
		} else {
			var length = (Math.floor( Math.random() * 15 ) + 5);
			var password = "";
			var password_string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			for(var i = 0; i <= length; i++){
			  password += password_string[Math.floor(Math.random() * password_string.length)];
			}
			return password;
		}
	};

	// 貯金額生成
	f['chokin'] = function() {
		return Math.floor( Math.random() * 10000000 );
	};

	f['age'] = function() {
		var birth_int = parseInt("" + birthDay.getFullYear() +
			( "0" + ( birthDay.getMonth() + 1 ) ).slice(-2) +
			( "0" + birthDay.getDate() ).slice(-2));
		return parseInt((global_today_int - birth_int) / 10000);
	};

	// 性別生成
	f['seibetsu'] = function() {
		if(Math.floor( Math.random() * 100 ) < 3) {
			return "その他";
		}
		if(seibetsu === 1) {
			return "男";
		} else {
			return "女";
		}
	};

	// 誕生日生成
	f['birthday'] = function() {
		return birthDay.getFullYear() + "/" +
			( "0" + ( birthDay.getMonth() + 1 ) ).slice(-2) + "/" +
			( "0" + birthDay.getDate() ).slice(-2);
	};

	// 血液型生成
	f['blood'] = function() {
		var blood = Math.round( Math.random() * 100);
		if(blood < 40) {
			return "A";
		} else if(blood < 70) {
			return "O";
		} else if(blood < 90) {
			return "B";
		} else {
			return "AB";
		}
	};

	// 携帯電話番号生成
	f['phone'] = function() {
		if(Math.round( Math.random() ) === 1) {
			return "090" + ( ("00000000") + Math.floor( Math.random() * 99999999) ).substr(-8);
		} else {
			return "080" + ( ("00000000") + Math.floor( Math.random() * 99999999) ).substr(-8);
		}
	};

	// 都道府県生成
	f['todofuken'] = function() {
	  return global_dummyKojinjohoTodofuken[Math.floor( Math.random() * global_dummyKojinjohoTodofuken.length )];
	};

	// プログラミング言語生成
	f['dainigengo'] = function() {
	  return global_dummyKojinjohoGengo[Math.floor( Math.random() * global_dummyKojinjohoGengo.length )];
	};

	// 名前生成
	f['name'] = function() {
		if(seibetsu === 1) {
		  return global_dummyKojinjohoMyoji[Math.floor( Math.random() * global_dummyKojinjohoMyoji.length )] +
							"　" +
							global_dummyKojinjohoDanseNamae[Math.floor( Math.random() * global_dummyKojinjohoDanseNamae.length )];
		} else {
		  return global_dummyKojinjohoMyoji[Math.floor( Math.random() * global_dummyKojinjohoMyoji.length )] +
							"　" +
							global_dummyKojinjohoJoseNamae[Math.floor( Math.random() * global_dummyKojinjohoJoseNamae.length )];
		}
	};

	for (key in global_dummyKojinjohoColumns) {
		if(prm[key]) {
			adummyKojinjoho[key] = f[key]();
		}
	}

	return adummyKojinjoho;
}

// ダミーの個人情報をダウンロード
function dummyKojinjohoDownload(){    

		var prm = {
			"name" : $("#dummyKojinjohoNameCheckbox:checked").val(),
			"age" : $("#dummyKojinjohoAgeCheckbox:checked").val(),
			"todofuken" : $("#dummyKojinjohoATodofukenCheckbox:checked").val(),
			"dainigengo" : $("#dummyKojinjohoDainigengoCheckbox:checked").val(),
			"seibetsu" : $("#dummyKojinjohoSeibetsuCheckbox:checked").val(),
			"phone" : $("#dummyKojinjohoPhoneCheckbox:checked").val(),
			"blood" : $("#dummyKojinjohoBloodCheckbox:checked").val(),
			"chokin" : $("#dummyKojinjohoChokinCheckbox:checked").val(),
			"birthday" : $("#dummyKojinjohoBirthdayCheckbox:checked").val(),
			"password" : $("#dummyKojinjohoPasswordCheckbox:checked").val(),
			"sentokomokugyo" : $("#dummyKojinjohoSentokomokugyoCheckbox:checked").val(),
			"type" : $("#dummyKojinjohoTypeSelectbox").val(),
			"kensu" : parseInt($('#dummyKojinjohoKensu').val(), 10)
		};

		var filename = "ダミー個人情報.csv";

		if(prm["type"].match(/tsv/)) {
			filename = "ダミー個人情報.tsv";
		}

		console.log(global_type[prm["type"]]);
		console.log(prm["type"]);

		var data = new Blob(dummyKojinjohosMaker(prm), global_type[prm["type"]]);

	  if (window.navigator.msSaveBlob) {
			// Microsoft Browser start
			if(!prm["type"].match(/^plain/)) {
	    	window.navigator.msSaveBlob(data, filename);
			} else {
				  if (window.navigator.msSaveOrOpenBlob) {
	    			window.navigator.msSaveOrOpenBlob(data, filename);
					} else {
			    	window.navigator.msSaveBlob(data, filename);
					}
			}
			// Microsoft Browser end
	  } else {
	    var a = document.createElement("a");
	    a.href = URL.createObjectURL(data);
	    if(!prm["type"].match(/^plain/))a.download = filename;
	    document.body.appendChild(a) //  FireFox specification
	    a.click();
	    document.body.removeChild(a) //  FireFox specification

      // document.getElementById("download").href = window.URL.createObjectURL(blob);
	  }
}
</script>
