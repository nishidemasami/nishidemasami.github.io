/**
---
title: Reactでホワイトノイズを鳴らす
date: "2021-03-14T01:04:03+0900"
template: "post"
type: "tsx"
draft: false
category: "blog"
description: "↓ React + TypeScript でホワイトノイズを鳴らしてみました ※音が鳴ります！パソコンで音を鳴らすのはかんたんなんですけどスマホはガードが固いらしくて、ユーザのなんらかの動作をトリガーとして再生しないと再生されないみたいです。なので今回は useCallback で宣言して onClick から呼びました。…"
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
					↓ React + TypeScript でホワイトノイズを鳴らしてみました
					※音が鳴ります！
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
