import { Button, Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";
import React from "react";
import { ReactAudioTest as ReactAudioTestStyles } from "./ReactAudioTest.module.scss";

// webkit用Typescript型宣言
declare global {
  interface Window {
    webkitAudioContext: AudioContext;
  }
}

function ReactAudioTest(): JSX.Element {
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
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    setAudioContext(audioContext);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume / 100;
    setGainState(gainNode);

    return () => {
      // unmount時の後始末
      if (source) {
        source.buffer = null; // メモリリーク防止
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  React.useEffect(() => {
    // 音量変更
    if (gainState) {
      gainState.gain.value = volume / 100;
    }
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

        for (let channel = 0; channel < channels; channel++) {
          // ホワイトノイズ生成
          const nowBuffering = myArrayBuffer.getChannelData(channel);
          for (let i = 0; i < frameCount; i++) {
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
  }, [playingFlag, audioContext, gainState]);

  if (!audioContext || !gainState) {
    return <>出力オーディオの準備中か、このブラウザでは対応していません。</>;
  }

  return (
    <div className={ReactAudioTestStyles}>
      <Grid container>
        <Grid item />
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs={10}>
          <Slider
            aria-labelledby="continuous-slider"
            defaultValue={50}
            max={100}
            min={0}
            onChange={(event, newValue) => {
              if (typeof newValue === "number") {
                setVolume(newValue);
              }
            }}
            value={volume}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item />
      </Grid>

      <Button
        color={playingFlag ? "default" : "primary"}
        onClick={onClickToStartAndStop}
        variant="contained"
      >
        ホワイトノイズ{playingFlag ? "停止" : "再生"}
      </Button>
    </div>
  );
}

export default ReactAudioTest;
