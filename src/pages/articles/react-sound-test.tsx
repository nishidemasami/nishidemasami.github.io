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
import { markdownToHtml } from '../../utils/Markdown';

type ReactSoundTestProps = {
	recents: PostItems[];
	tags: string[];
	sorceCodeHTML: string;
	prevPost?: PostItems;
	nextPost?: PostItems;
};

const sorceCodeMarkdown = `
\`\`\`typescript
import React from 'react';

import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Button, CircularProgress, Grid, Slider } from '@mui/material';

// webkit用Typescript型宣言
declare global {
	interface Window {
		webkitAudioContext: AudioContext;
	}
}

const ReactAudioTest: React.FunctionComponent = () => {
	// 音量：初期値25
	const [volume, setVolume] = React.useState(25);
	// 再生状態：初期値false
	const [playingFlag, setPlayingFlag] = React.useState(false);
	// AudioContext：初期値undefined
	const [audioContext, setAudioContext] = React.useState<
		AudioContext | undefined
	>(undefined);
	// 音源ソース：初期値undefined
	const [source, setSourceState] = React.useState<
		AudioBufferSourceNode | undefined
	>(undefined);
	// 音量調節：初期値undefined
	const [gainState, setGainState] = React.useState<GainNode | undefined>(
		undefined
	);

	React.useEffect(() => {
		// 初期化
		const newAudioContext = new (window.AudioContext ||
			window.webkitAudioContext)();
		setAudioContext(newAudioContext);
		const gainNode = newAudioContext.createGain();
		gainNode.gain.value = volume / 100;
		setGainState(gainNode);

		return () => {
			// unmount時の後始末
			if (source) {
				source.buffer = null; // メモリリーク防止
			}
			if (newAudioContext) {
				newAudioContext.close();
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		// 音量変更
		if (gainState) {
			gainState.gain.value = volume / 100;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [volume]);

	// スマホなどでは迷惑な自動再生を防ぐ目的で
	// ユーザの操作に伴う再生でしか音を再生できない
	const onClickToStartAndStop = React.useCallback(() => {
		if (audioContext && gainState) {
			if (playingFlag) {
				// 停止
				if (source) {
					source.stop();
					source.buffer = null; // メモリリーク防止
				}
			} else {
				// 再生
				const channels = 1; // モノラル
				const frameCount = audioContext.sampleRate * 2.0; // 2秒

				const myArrayBuffer = audioContext.createBuffer(
					channels,
					frameCount,
					audioContext.sampleRate
				);

				for (let channel = 0; channel < channels; channel += 1) {
					// ホワイトノイズ生成
					const nowBuffering = myArrayBuffer.getChannelData(channel);
					for (let i = 0; i < frameCount; i += 1) {
						nowBuffering[i] = Math.random() * 2 - 1;
					}
				}
				const buffersource = audioContext.createBufferSource();
				setSourceState(buffersource);
				buffersource.buffer = myArrayBuffer;
				buffersource.loop = true;
				buffersource.connect(gainState).connect(audioContext.destination);
				buffersource.start();
			}
			setPlayingFlag(!playingFlag);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playingFlag, audioContext, gainState]);

	if (!audioContext || !gainState) {
		return (
			<React.Fragment>
				<CircularProgress />
				loading...
			</React.Fragment>
		);
	}

	return (
		<div className="text-center h-fit w-full">
			<Grid container>
				<Grid item></Grid>
				<Grid item>
					<VolumeDown />
				</Grid>
				<Grid item xs={10}>
					<Slider
						min={0}
						max={100}
						defaultValue={50}
						value={volume}
						onChange={(__, newValue) => {
							if (typeof newValue === 'number') {
								setVolume(newValue);
							}
						}}
						valueLabelDisplay="auto"
						aria-labelledby="continuous-slider"
					/>
				</Grid>
				<Grid item>
					<VolumeUp />
				</Grid>
				<Grid item></Grid>
			</Grid>

			<Button
				variant="outlined"
				color={playingFlag ? 'info' : 'primary'}
				onClick={onClickToStartAndStop}
			>
				ホワイトノイズ{playingFlag ? '停止' : '再生'}
			</Button>
		</div>
	);
};

export { ReactAudioTest };
\`\`\`
`;

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
				<div dangerouslySetInnerHTML={{ __html: props.sorceCodeHTML }} />
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
			sorceCodeHTML: await markdownToHtml(sorceCodeMarkdown),
			...getPrevNextPost(__filename),
		},
	};
};

export default ReactSoundTest;
