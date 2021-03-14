---
title: Reactで音を鳴らす
date: "2021-03-14T01:04:03+0900"
socialImage: "photo.jpg"
template: "post"
draft: false
slug: "/2021/03/14/react-sound-test"
category: "ブログ"
description: "↓ React + TypeScript で音を鳴らしてみました ※音が鳴ります！パソコンで音を鳴らすのはかんたんなんですけどスマホはガードが固いらしくて、ユーザのなんらかの動作をトリガーとして再生しないと再生されないみたいです。なので今回は useCallback で宣言して onClick から呼びました。…"
tags:
  - "TypeScript"
  - "React"
---

↓ React + TypeScript で音を鳴らしてみました ※音が鳴ります！

<ReactAudioTest />

パソコンで音を鳴らすのはかんたんなんですけどスマホはガードが固いらしくて、ユーザのなんらかの動作をトリガーとして再生しないと再生されないみたいです。

なので今回は useCallback で宣言して onClick から呼びました。

↓ これが今回のコードです

```typescript
import { Button, Grid, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";
import React from "react";
import styles from "./ReactAudioTest.module.scss";

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

        for (var channel = 0; channel < channels; channel++) {
          // ホワイトノイズ生成
          var nowBuffering = myArrayBuffer.getChannelData(channel);
          for (var i = 0; i < frameCount; i++) {
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
    return (
      <React.Fragment>
        出力オーディオの準備中か、このブラウザでは対応していません。
      </React.Fragment>
    );
  }

  return (
    <div className={styles["ReactAudioTest"]}>
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
            onChange={(event, newValue) => {
              if (typeof newValue === "number") {
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
        variant="contained"
        color={playingFlag ? "default" : "primary"}
        onClick={onClickToStartAndStop}
      >
        ホワイトノイズ{playingFlag ? "停止" : "再生"}
      </Button>
    </div>
  );
};
```
