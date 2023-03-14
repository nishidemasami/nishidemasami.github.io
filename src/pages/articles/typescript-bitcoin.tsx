/**
---
title: Typescriptでビットコインアドレスを生成する
date: "2022-12-24T01:04:03+0900"
template: "post"
type: "tsx"
draft: false
category: "blog"
description: "Typescriptでビットコインアドレスを生成したいこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "TypeScript"
  - "React"
  - "Bitcoin"
---
*/

import React from 'react';

import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { TypescriptBitcoin } from '../../components/TypescriptBitcoin';
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
	firstArticle: string;
	secondArticle: string;
	prevPost?: PostItems;
	nextPost?: PostItems;
};

const firstArticle = `
Typescriptでビットコインアドレスを生成したいこと、ありますよね。  
僕はあるので自分用にメモです。<sup>[<a target="_blank" href="https://www.amazon.co.jp/%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-%E3%83%93%E3%83%83%E3%83%88%E3%82%B3%E3%82%A4%E3%83%B3%E3%81%8B%E3%82%89%E3%82%A4%E3%83%BC%E3%82%B5%E3%83%AA%E3%82%A2%E3%83%A0%E3%80%81DApp%E9%96%8B%E7%99%BA%E3%81%BE%E3%81%A7-Bikramaditya-Singhal/dp/4274225372?_encoding=UTF8&qid=1671896601&sr=8-1&linkCode=ll1&tag=nishidemasami-22&linkId=b026b2c2bd3729a8fe4c35dda528a7bb&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >参考文献</a>]</sup>

👇このボタンをクリックするとビットコインアドレスを生成します。
`;

const secondArticle = `
ビットコインのアドレスは、32バイトの秘密鍵を以下のようにしてビットコインアドレスに変換します。

\`\`\`mermaid
flowchart TD

A[32バイトの秘密鍵] -->|secp256k1| B(公開鍵)
A -->|base58変換とチェックサム付与| F[WIF形式秘密鍵]
B --> C{ビットコインアドレス形式}
C -->|BASE58変換とチェックサム付与| D[P2PKH形式ビットコインアドレス]
C -->|BASE32変換とチェックサム付与| E[Bech32形式ビットコインアドレス]
\`\`\`

これはTypescriptでも簡単に計算できます。

それを実際に書いてみたのが ↓ この今回のコードです
\`\`\`tsx
import { randomBytes, createHash, BinaryLike } from 'crypto';

import { useState, FC, useMemo, useCallback } from 'react';

import { Button, TextField } from '@mui/material';
import { bech32 } from 'bech32';
import { encode } from 'bs58';
import RIPEMD160 from 'ripemd160';
import { publicKeyCreate, privateKeyVerify } from 'secp256k1';

/** 16進数の文字列かどうかチェックする正規表現 */
const check32BytesHex = /^[0-9a-fA-F]{64}$/;

/** 16進数の文字列をUint8Arrayに変換する */
const hexToUint8Array = (hex: string): Uint8Array => Buffer.from(hex, 'hex');

/** Bufferを16進数の文字列に変換する */
const bufferToHex = (data: Buffer): string => data.toString('hex');

/** sha256でハッシュする */
const sha256 = (data: BinaryLike): Buffer =>
  createHash('sha256').update(data).digest();

/** ripemd160でハッシュする */
const ripemd160 = (data: BinaryLike): Buffer =>
  new RIPEMD160().update(data).digest();

/** BASE58チェックサム生成 */
const calcBase58Checksum = (data: BinaryLike): Buffer =>
  sha256(sha256(data)).subarray(0, 4);

/** BASE58変換＋チェックサム */
const base58WithChecksum = (data: Uint8Array): string =>
  encode([...data, ...calcBase58Checksum(data)]);

/** ビットコインアドレス(BASE58(P2PKH)形式)生成 */
const genBitcoinAddressP2PKH = (publicKey: Uint8Array): string =>
  base58WithChecksum(Uint8Array.from([0x00, ...ripemd160(sha256(publicKey))]));

/** BASE32変換＋チェックサム */
const bech32WithChecksum = (data: Uint8Array) =>
  bech32.encode('bc', [0x00, ...bech32.toWords(data)]);

/** ビットコインアドレス(BASE32(Bech32)形式)生成 */
const genBitcoinAddressBECH32 = (publicKey: Uint8Array): string =>
  bech32WithChecksum(ripemd160(sha256(publicKey)));

/** 秘密鍵(WIF形式)生成 */
const genWif = (privateKey: Uint8Array): string =>
  base58WithChecksum(Uint8Array.from([0x80, ...privateKey]));

const TypescriptBitcoin: FC = () => {
  // 秘密鍵(32バイトの16進数)
  const [hexPrivateKey, setHexPrivateKey] = useState(
    bufferToHex(randomBytes(32))
  );

  /** 秘密鍵(32バイト) */
  const privateKey: Uint8Array | string = useMemo(() => {
    if (!check32BytesHex.test(hexPrivateKey))
      return '秘密鍵が32バイトの16進数ではない';
    return hexToUint8Array(hexPrivateKey);
  }, [hexPrivateKey]);

  /** 公開鍵 */
  const publicKey: Uint8Array | string = useMemo(() => {
    if (typeof privateKey === 'string') return privateKey;
    if (!privateKeyVerify(privateKey)) return '秘密鍵が不適切';
    return publicKeyCreate(privateKey, false);
  }, [privateKey]);

  /** ビットコインアドレス(BASE32(Bech32)形式) */
  const bitcoinAddressBECH32 = useMemo(() => {
    if (typeof privateKey === 'string') return privateKey;
    if (typeof publicKey === 'string') return publicKey;
    return genBitcoinAddressBECH32(publicKey);
  }, [privateKey, publicKey]);

  /** ビットコインアドレス(BASE58(P2PKH)形式) */
  const bitcoinAddressP2PKH = useMemo(() => {
    if (typeof privateKey === 'string') return privateKey;
    if (typeof publicKey === 'string') return publicKey;
    return genBitcoinAddressP2PKH(publicKey);
  }, [privateKey, publicKey]);

  /** 秘密鍵をランダムに生成 */
  const genRamdamKey = useCallback(
    () => setHexPrivateKey(bufferToHex(randomBytes(32))),
    []
  );

  /** 秘密鍵(WIF形式) */
  const wif = useMemo(
    () => genWif(hexToUint8Array(hexPrivateKey)),
    [hexPrivateKey]
  );

  return (
    <>
      <Button onClick={genRamdamKey} variant="outlined">
        秘密鍵をランダムに生成
      </Button>
      <TextField
        error={!check32BytesHex.test(hexPrivateKey)}
        fullWidth
        label="秘密鍵(32バイトの16進数)"
        margin="dense"
        value={hexPrivateKey}
        onChange={(e) => {
          setHexPrivateKey(e.currentTarget.value);
        }}
      />
      <TextField
        fullWidth
        label="秘密鍵(WIF形式)"
        margin="dense"
        value={wif}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWidth
        label="ビットコインアドレス(BASE58(P2PKH)形式)"
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
        value={bitcoinAddressP2PKH}
      />
      <TextField
        fullWidth
        label="ビットコインアドレス(BASE32(Bech32)形式)"
        margin="dense"
        InputProps={{
          readOnly: true,
        }}
        value={bitcoinAddressBECH32}
      />
    </>
  );
};

export { TypescriptBitcoin };
\`\`\`
`;

const ReactSoundTest = (props: ReactSoundTestProps) => (
	<Main
		recents={props.recents}
		tags={props.tags}
		meta={
			<Meta
				title="Typescriptでビットコインアドレスを生成する"
				description="Typescriptでビットコインアドレスを生成したいこと、ありますよね。僕はあるので自分用にメモです。"
			/>
		}
	>
		<h1 className="content-title">
			Typescriptでビットコインアドレスを生成する
		</h1>
		<div className="content-date">
			{format(new Date('2022-12-10T01:04:03+0900'), 'LLLL d, yyyy')}
		</div>
		<ul className="flex flex-row flex-wrap list-none p-0 m-2 justify-start">
			{['TypeScript', 'React', 'Bitcoin'].map((tag) => (
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
				<div dangerouslySetInnerHTML={{ __html: props.firstArticle }} />
				<TypescriptBitcoin />
				<div dangerouslySetInnerHTML={{ __html: props.secondArticle }} />
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
			firstArticle: await markdownToHtml(firstArticle),
			secondArticle: await markdownToHtml(secondArticle),
			...getPrevNextPost(__filename),
		},
	};
};

export default ReactSoundTest;
