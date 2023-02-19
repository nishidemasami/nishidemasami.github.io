import { GetStaticProps } from 'next';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getRecentPosts, getTags, PostItems } from '../utils/Content';
import { markdownToHtml } from '../utils/Markdown';

const contentMarkdown = String.raw`
### 自分について

- 西出 正美
- 男
- 芸術系SE
- 昭和62年生まれ

### 近影

<div class="photo-space"><img
srcset="/assets/images/autheorsphoto1.webp"
src="https://lh3.googleusercontent.com/YbDcEwRnlZKH8aNdZjLE8niWF0pmZc2pqmjAHATb6fZfKBtoAF8j-JKz9u4LwWYCrliHBvDOScLGS4yCIT_SgTLdfp46CXJuKXUu1aVfMFJn8UO6Q-Ld-VgpGiV1QeRgJXcm_cL1nNQaWj3YSBUsbF9OoqY3Qz18WaPQq4GPR0ThQAS2Ka26X1KPyIsRqrZIBdN9IMHBlB65Rik7ISJrqAHb-nH2nC9OEiJd1oONhuVEdrWOe7Qa394MPX7S0uZRyPM4k1CUNwM-pehOokUdROgiUu_pQjMzPnnrSfFsLKog_ninHDxzeuod8k4hCCykRR56dJbU5TkMbWs1x2gAp2Kml5a_D7BhkMiZMi9FM2dYH3d3Ox89pwfqK7tv3C7q2JKQ2IwQ0b9P41phl5dw8u45dXAt8iZOuBbOGkZ12Xh0dwBoD_pMBgHyqf48fDy-BPD4-jqnjDKDg7qFM6rg1c3lxQdunhk1hnAAQR2l6W6pPRrVy7JkYi7qepM6td-v6feO6ssTOOVBJ-W4OEH1meT19yv-q_5RIrQaKgOHjpKUxhTWdgZjtDcUlNG2g2GMNl9GjoRjY4_JPwtlBqt3RJVHsqUi7Drr3etTHoUxV9443qrWlowElxFUP0gUb2JKUgwkyVjxdTuOnjzTy5zinpXyGvyvgdutuf1IovJ8m1kP9WOE1KkwseSMiKnLcp-LnBy63cDvt2rn-Y8D0N3KKUin5hXtNiq2KawZK5zb8fRrPPwa=w2902-h2176-no"
alt="著者近影：天龍寺、庭園にて"/></div>

### 連絡先

- email: [nishidemasami@gmail.com](mailto:nishidemasami@gmail.com)
- twitter: [@nishidemasami](https://twitter.com/nishidemasami)
- github: [nishidemasami](https://github.com/nishidemasami)

### 所有資格

- 初級システムアドミニストレータ ライセンス番号: 第 AD-2003-10-18611 号
- 基本情報技術者 ライセンス番号: 第 FE-2004-04-10069 号
- 応用情報技術者 ライセンス番号: 第 AP-2013-04-05293 号
- 情報セキュリティスペシャリスト ライセンス番号: 第 SC-2014-10-02120 号
- ネットワークスペシャリスト ライセンス番号: 第 NW-2016-10-01567 号)
- [情報処理安全確保支援士(RISS) 登録番号: 第 007398 号](https://riss.ipa.go.jp/r?r=007398)

### 最終学歴

- 大阪芸術大学 芸術学部 卒業

### 得意なプログラミング言語

- [TypeScript](/tag/TypeScript/)
- [JavaScript](/tag/JavaScript/)
- [Rust](/tag/Rust/)
- [Java](/tag/Java/)
- Ruby
- Python
- PHP
- C#

### 得意なライブラリ

- [React](/tag/React/)
- [JavaScript](/tag/JavaScript/)
- [Next.js](/tag/Next.js/)
- [Gatsby.js](/tag/Gatsby.js/)
- Tailwind CSS
- Spring Framework
- Express.js
- AngularJS
- Vue.js
- Rails
- Django
- CakePHP
- Laravel

### 得意な技術

- [Docker](/tag/Docker/)
- [Tor](/tag/Tor/)
- tRPC
- Prisma
- NextAuth
- GraalVM
- Node.js
- AWS  
  Amazon EC2  
  Amazon DynamoDB  
  Amazon S3  
  Amazon SES  
  Amazon SQS  
  Amazon Aurora  
  Amazon Route 53  
  Amazon CloudFront  
  AWS Lambda  
- GitHub  
  GitHub CodeSpaces  
  GitHub Actions  
  GitHub Pages
- Kubernetes
- Ansible
- ESXi
- VirtualBox
- SQLite

### 得意なOS
- Debian
- Ubuntu
- macOS
- Alpine Linux
- FreeBSD
- RHEL
- CentOS(終了)
- Fedora
- LFS(Linux from Scratch)
- Arch Linux
- Gentoo Linux
- Windows

### 得意ななにか

- pf
- ZFS
- LLVM/Clang
- BHyVe
- vim
- VSCode
- WSL
- iptables
- screen
- git

### 趣味

- ルービックキューブ [2008大阪オープン 1分04秒81(世界45228位、日本国内862位)](https://www.worldcubeassociation.org/results/p.php?i=2008NISH01)
- キャンプ・ハイキング
- 楽器(ドラム・ギター・ピアノ・三線・尺八・カホン・シンセサイザー・トランペット)
- 旅行
- 読書
- ゲーム

### 好きなマンガ

- ぼくの地球を守って
- 蟲師
- NANA
- D.Gray-man
- XXXHOLiC
- カードキャプターさくら
- メイドインアビス
- 宝石の国

### 好きなアニメ

- 輪るピングドラム
- TVアニメ版アイドルマスターシンデレラガールズ
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
		meta={<Meta title="ポートフォリオ" description="ポートフォリオ" />}
	>
		<h1 className="content-title">ポートフォリオ</h1>
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
