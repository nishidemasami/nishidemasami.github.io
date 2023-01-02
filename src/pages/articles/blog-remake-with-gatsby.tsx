/**
---
title: Gatsbyでブログをリニューアルしてみました
date: "2021-03-06T18:04:03+0900"
modified_date: '2021-03-16T18:04:03+0900'
image: /assets/images/posts/random-img.jpg
template: "post"
type: "tsx"
draft: false
category: "blog"
description: "このブログをリニューアルしてみました。このブログのソースはここ ↓ で公開しています。https://github.com/nishidemasami/nishidemasami.github.io/tree/gatsby見てみた感じどうですか？すごくないですか！？…"
tags:
  - "JavaScript"
  - "TypeScript"
  - "React"
  - "Gatsby"
---
*/

import React from 'react';

import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import ReactHelloWorld from '../../components/ReactHelloWorld/ReactHelloWorld';
import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { PostPagination } from '../../pagination/PostPagination';
import { Main } from '../../templates/Main';
import {
	getPrevNextPost,
	getRecentPosts,
	getTags,
	PostItems,
} from '../../utils/Content';

type AboutProps = {
	recents: PostItems[];
	tags: string[];
	prevPost?: PostItems;
	nextPost?: PostItems;
};

const About = (props: AboutProps) => (
	<Main
		recents={props.recents}
		tags={props.tags}
		meta={
			<Meta
				title="Gatsbyでブログをリニューアルしてみました"
				description="Gatsbyでブログをリニューアルしてみました"
			/>
		}
	>
		<h1 className="text-center font-bold text-3xl text-gray-900">
			Gatsbyでブログをリニューアルしてみました
		</h1>
		<div className="text-center text-sm mb-4">
			{format(new Date('2021-03-06T18:04:03+0900'), 'LLLL d, yyyy')}
		</div>
		<ul className="flex flex-row flex-wrap list-none p-0 m-2 justify-start">
			{['JavaScript', 'TypeScript', 'React', 'Gatsby'].map((tag) => (
				<li
					className="px-2 py-1 m-1 rounded-full overflow-hidden shadow-md border-0 bg-white w-fit break-all"
					key={tag}
				>
					<Link href="/tag/[tag]" as={`/tag/${tag}`}>
						#{tag}
					</Link>
				</li>
			))}
		</ul>
		<Content>
			<div>
				<p>
					このブログをリニューアルしてみました。
					ちなみにこのブログのソースはここ ↓ で公開しています。
					<a href="https://github.com/nishidemasami/nishidemasami.github.io/tree/gatsby">
						https://github.com/nishidemasami/nishidemasami.github.io/tree/gatsby
					</a>
				</p>
				<p>作ってみた感じ、すごくいいと思います！</p>
				<ul>
					<li>React が動いている・生で React が書ける</li>
					<li>
						ページ間の遷移の速度が速い(React の仮想 DOM 操作に由来している)
					</li>
					<li>
						ちょっとがんばれば Typescript でも書ける(使用する Gatsby
						のテンプレートによっては最初から Typescript を使っているらしい)
					</li>
					<li>
						Gatsby が静的にページを作ってくれているので Javascript
						をオフにしてても見れる
					</li>
				</ul>

				<ReactHelloWorld>
					こんな感じで普通にReact が<br />
					Typescript で書けて動きます！✨
				</ReactHelloWorld>
				<p>
					Gatsby は、HEXO や Hugo、Jekyll
					みたいに静的ジェネレータなので、こうやって Github Pages
					にも乗せられるので便利！ AWS S3 とかに乗せればスケールしますし！✨
				</p>
				<p>
					あと、ページを高速化するための細かなテクニックを最初から使ってくれています。
				</p>
				<ul>
					<li>静的プレレンダリング・静的プリフェッチ(速い)</li>
					<li>
						いわゆる PRPL パターンに準拠する PWA サポート
						<br />
						<strong>
							<em>Push </em>
						</strong>
						critical resources for the initial URL route using
						<code>&lt;link preload&gt;</code> and HTTP/2.
						<br />
						<strong>
							<em>Render </em>
						</strong>
						initial route.
						<br />
						<strong>
							<em>Pre-cache </em>
						</strong>
						remaining routes.
						<br />
						<strong>
							<em>Lazy-load </em>
						</strong>
						and create remaining routes on demand.
						<br />
						<a href="https://www.gatsbyjs.com/docs/prpl-pattern/">
							https://www.gatsbyjs.com/docs/prpl-pattern/
						</a>
					</li>
					<li>
						GraphQL(ビルド時には json
						になっている)によるデータアクセスや画面遷移(これまた速い)
					</li>
				</ul>
				<p>
					Gatsby で Markdown ファイルとかいい感じにしてくれますし、普通に React
					の仮想 DOM による高速化の恩恵も受けることできてます！
					かなりいい感じになってると思います！✨
				</p>
			</div>
		</Content>

		<PostPagination nextPost={props.nextPost} prevPost={props.prevPost} />
	</Main>
);

export const getStaticProps: GetStaticProps<AboutProps> = async () => ({
	props: {
		recents: getRecentPosts(['title', 'date', 'slug']),
		tags: getTags(),
		...getPrevNextPost(__filename),
	},
});

export default About;
