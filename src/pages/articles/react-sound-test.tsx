/**
---
title: Reactでホワイトノイズを鳴らす
date: "2021-03-14T01:04:03+0900"
template: "post"
type: "tsx"
draft: false
category: "blog"
description: "Reactでホワイトノイズを鳴らしたいこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "TypeScript"
  - "React"
---
*/

import React from 'react';

import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { ReactAudioTest } from '../../components/ReactAudioTest';
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

type ReactSoundTestProps = {
	recents: PostItems[];
	tags: string[];
	prevPost?: PostItems;
	nextPost?: PostItems;
};

const ReactEmbedGist = dynamic(() => import('../../utils/CodeBlock'), {
	loading: () => <p>loading...</p>,
	ssr: false,
});

const ReactSoundTest = (props: ReactSoundTestProps) => (
	<Main
		recents={props.recents}
		tags={props.tags}
		meta={
			<Meta
				title="Reactでホワイトノイズを鳴らす"
				description="React + TypeScript でホワイトノイズを鳴らしてみました"
			/>
		}
	>
		<h1 className="text-center font-bold text-3xl text-gray-900">
			Reactでホワイトノイズを鳴らす
		</h1>
		<div className="text-center text-sm mb-4">
			{format(new Date('2021-03-14T01:04:03+0900'), 'LLLL d, yyyy')}
		</div>

		<Content>
			<div>
				<p>
					Reactでホワイトノイズを鳴らしたいこと、ありますよね。
					<br />
					僕はあるので自分用にメモです。
				</p>
				<p>
					↓ React + TypeScript でホワイトノイズを鳴らしてみました。
					<sup>
						[
						<a
							target="_blank"
							href="https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0TypeScript-%E2%80%95%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8BJavaScript%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-Boris-Cherny/dp/4873119049?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3Q7MI7KXY06BB&keywords=typescript&qid=1670505807&sprefix=typescript+%2Caps%2C224&sr=8-9&linkCode=ll1&tag=nishidemasami-22&linkId=48539012d76c58e8bc3549b5a9dc7a1f&language=ja_JP&ref_=as_li_ss_tl"
							rel="noreferrer"
						>
							参考文献
						</a>
						]
					</sup>
					<br />
					※音が鳴ります
				</p>
				<ReactAudioTest />
				<p>
					パソコンで音を鳴らすのはかんたんなんですけどスマホはガードが固いらしくて、ユーザのなんらかの動作をトリガーとして再生しないと再生されないみたいです。
				</p>
				<p>なので今回は useCallback で宣言して onClick から呼びました。</p>
				<p>↓ これが今回のコードです</p>
				<ReactEmbedGist gist="nishidemasami/133b02b3a02869dea1a2d7d3e15ce3b6" />
			</div>
		</Content>

		<PostPagination nextPost={props.nextPost} prevPost={props.prevPost} />
	</Main>
);

export const getStaticProps: GetStaticProps<ReactSoundTestProps> = async () => {
	const recents = getRecentPosts(['title', 'date', 'slug']);

	return {
		props: {
			recents,
			tags: getTags(),
			...getPrevNextPost(__filename),
		},
	};
};

export default ReactSoundTest;
