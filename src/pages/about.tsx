import React from 'react';

import { GetStaticProps } from 'next';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getRecentPosts, getTags, PostItems } from '../utils/Content';
import { markdownToHtml } from '../utils/Markdown';

const contentMarkdown = String.raw`
最初はこのウェブサイトを書く高尚な目的があったんですけど、いつしか無くなって気楽な気持ちで書いています。

このウェブサイトは、TypeScript + React + Next.js + Tailwindで作成して、GitHub Pagesで公開しています。  
jQueryレス・WordPressレスを実現しています。  
レスポンシブデザイン・マテリアルデザインを考慮して、パソコンでもスマホでも見やすいように作っています。  
また、スタイルはCSSではなくTailwindを使って記述していて、保守や拡張しやすいモダンな設計をしています。  
GitHub ActionsでCI/CDをしています。  
ソースコードはすべてGitHubに公開していますので見てみて下さい。  
<https://github.com/nishidemasami/nishidemasami.github.io>

<div class="photo-space"><img
srcset="/assets/images/autheorsphoto1.webp"
src="https://lh3.googleusercontent.com/YbDcEwRnlZKH8aNdZjLE8niWF0pmZc2pqmjAHATb6fZfKBtoAF8j-JKz9u4LwWYCrliHBvDOScLGS4yCIT_SgTLdfp46CXJuKXUu1aVfMFJn8UO6Q-Ld-VgpGiV1QeRgJXcm_cL1nNQaWj3YSBUsbF9OoqY3Qz18WaPQq4GPR0ThQAS2Ka26X1KPyIsRqrZIBdN9IMHBlB65Rik7ISJrqAHb-nH2nC9OEiJd1oONhuVEdrWOe7Qa394MPX7S0uZRyPM4k1CUNwM-pehOokUdROgiUu_pQjMzPnnrSfFsLKog_ninHDxzeuod8k4hCCykRR56dJbU5TkMbWs1x2gAp2Kml5a_D7BhkMiZMi9FM2dYH3d3Ox89pwfqK7tv3C7q2JKQ2IwQ0b9P41phl5dw8u45dXAt8iZOuBbOGkZ12Xh0dwBoD_pMBgHyqf48fDy-BPD4-jqnjDKDg7qFM6rg1c3lxQdunhk1hnAAQR2l6W6pPRrVy7JkYi7qepM6td-v6feO6ssTOOVBJ-W4OEH1meT19yv-q_5RIrQaKgOHjpKUxhTWdgZjtDcUlNG2g2GMNl9GjoRjY4_JPwtlBqt3RJVHsqUi7Drr3etTHoUxV9443qrWlowElxFUP0gUb2JKUgwkyVjxdTuOnjzTy5zinpXyGvyvgdutuf1IovJ8m1kP9WOE1KkwseSMiKnLcp-LnBy63cDvt2rn-Y8D0N3KKUin5hXtNiq2KawZK5zb8fRrPPwa=w2902-h2176-no"
alt="著者近影：天龍寺、庭園にて"/><div class="photo-space-detail">著者近影：天龍寺、庭園にて</div></div>

### 自分について

- 西出 正美
- 男
- 芸術系 SE
- 昭和 62 年生まれ

### 連絡先

email: [nishidemasami@gmail.com](mailto:nishidemasami@gmail.com)  
twitter: [@nishidemasami](https://twitter.com/nishidemasami)  
github: [nishidemasami](https://github.com/nishidemasami)

### 目下の目標

- フルマラソン完走
- 英検準一級合格
- ネスペ・セキュスペ・デベスペ制覇(残るはデベスペ！)

### 言語・技術・フレームワーク・OS・コマンド

- TypeScript
- JavaScript
- React
- Gatsby.js  
	このウェブサイトもReact + TypeScript + Next.jsで書いています。
- Next.js
- tRPC
- Tailwind CSS
- TypeScript
- Prisma
- NextAuth  
	T3 stackでWebアプリケーションを作っています。
- Java
- Spring Framework  
- GraalVM  
	Java8くらいからlambda式が使えるようになって、Optional型やStreamに型推論も加わってJavaも好きです。  
	Spring Frameworkもちゃちゃっと開発できて好きです。  
	AWS lambdaにGraalVMで乗せればコールドスタートも怖くありません。
- node.js
- Express.js  
	node.jsはAWS lambdaあたりに乗せたら、サーバレスを考える時の強い味方と言えそうです。
- AngularJS
- Vue.js  
	このウェブサイトこそReactで書いていますが、他のがキライなわけでは決してありません。
- Ruby
- Rails
- Python
- Django
- PHP
- CakePHP
- Laravel  
	API サーバにするのにここらへんの、RailsとかDjangoとかLaravelとかっていいですよね。
- C#  
	C#ってほぼ Java だと思いません？
- SQL  
	SQLをこねこねするのが個人的に好きです。パズルみたいで…。
- C/C++
- boost
	なんだかんだで組み込みやろうと思ったらCとかC++がいるんですよね…。
- Rust  
	Rustサイコー
- SQLite  
	スモールスタートで始めるならば、SQLiteが早くて速くてよいと思います。  
	データベースロックがバンバン発生しても許容できてスケールできなくてもいいならSQLiteでもういいんじゃないですかね。
- ESXi
- VirtualBox  
	vagrantでESXiやVirtualBoxにポコポコとテスト環境を立てるのが趣味です。
- Docker  
	Docker なしではもう生きられません。もう既に端から端までDocker漬けです。
- Kubernetes
- Ansible  
	自動化が好きです。防ごう属人化！
- macOS  
	ARM Mac を買おうと思っています。思っているだけです。
- ARM  
	ARMアーキテクチャっていいですよね。  
	貴重な電気を非効率なCISCアーキテクチャに使ってられなくないですか？  
	ほーらあなたもRISCアーキテクチャを使いたくなってくる…
- FreeBSD
- pf
- ZFS
- LLVM/Clang
- BHyVe  
	車輪の再発明？ああ、そうだ。ただし、BSDライセンスの車輪だ。
- Debian
- Ubuntu  
	アップグレードが楽なので最近は Ubuntu も好きです。
- vim  
	vim派です。
- iptables  
	iptablesが好きです。pfと同じくらい好きです。
- git  
	このウェブサイトもgitで管理しています。
- screen  
	SSH接続でコマンドをバックグラウンド起動していたらSSHを切断した時にKILLされてしまいます。そう、nohupしたりscreenを使っていないとね。
- RHEL  
	レッドハットのタンブラーがほしいです
- GitHub
- GitHub CodeSpaces
- GitHub Actions
- GitHub Pages
	このウェブサイトはGitHubで管理して、GitHub CodeSpacesで開発して、GitHub ActionsでCI/CDして、GitHub Pagesで公開しています。  
	GitHubなしではもう生きられません。

### 新しく Linux(Debian 系)をインストールした時に真っ先叩くコマンド

- echo export HISTIGNORE=?:??:???:exit:history\*:ls >> ~/.bash_profile
- echo export HISTSIZE=999999 >> ~/.bash_profile
- echo export HISTFILESIZE=999999 >> ~/.bash_profile
- sudo apt-get update
- sudo apt-get install vim git screen perl ruby python ufw gcc make sqlite3 buyld-essential python-pip

### 所有資格

- 初級システムアドミニストレータ ライセンス番号: 第 AD-2003-10-18611 号
- 基本情報技術者 ライセンス番号: 第 FE-2004-04-10069 号
- 応用情報技術者 ライセンス番号: 第 AP-2013-04-05293 号
- 情報セキュリティスペシャリスト ライセンス番号: 第 SC-2014-10-02120 号
- ネットワークスペシャリスト ライセンス番号: 第 NW-2016-10-01567 号)
- [情報処理安全確保支援士(RISS) 登録番号: 第 007398 号](https://riss.ipa.go.jp/r?r=007398)

### 最終学歴

- 大阪芸術大学 芸術学部 卒業

### 趣味

- ルービックキューブ [2008大阪オープン 1分04秒81(世界45228位、日本国内862位)](https://www.worldcubeassociation.org/results/p.php?i=2008NISH01)
- キャンプ・ハイキング
- 楽器(ドラム・ギター・ピアノ・三線・尺八・カホン・シンセサイザー・トランペット)
- 旅行
- 献血
- 読書
- ゲーム

### 好きなマンガ

- ぼくの地球を守って
- 赤ちゃんと僕
- 蟲師
- NANA
- D.Gray-man
- XXXHOLiC
- カードキャプターさくら
- メイドインアビス
- 宝石の国

### 好きなアニメ

- 輪るピングドラム
- アイドルマスターシンデレラガールズ
- おおかみこどもの雨と雪
- フリクリ

### 好きなゲーム

- ゼルダの伝説ブレスオブザワイルド
- 聖剣伝説レジェンドオブマナ
`;

type AboutProps = {
	recents: PostItems[];
	tags: string[];
	contentHTML: string;
};

const About = (props: AboutProps) => (
	<Main
		recents={props.recents}
		tags={props.tags}
		meta={
			<Meta
				title="このウェブサイトについて"
				description="このウェブサイトについて"
			/>
		}
	>
		<h1 className="content-title">このウェブサイトについて</h1>
		<Content>
			<div dangerouslySetInnerHTML={{ __html: props.contentHTML }} />
		</Content>
	</Main>
);

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
	const recents = getRecentPosts(['title', 'date', 'slug']);

	return {
		props: {
			recents,
			tags: getTags(),
			contentHTML: await markdownToHtml(contentMarkdown),
		},
	};
};

export default About;
