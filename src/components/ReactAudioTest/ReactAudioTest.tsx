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
