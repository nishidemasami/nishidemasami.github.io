import { randomBytes, createHash, BinaryLike } from 'crypto';

import { useState, FC, useMemo, useCallback } from 'react';

import { Button, TextField } from '@mui/material';
import { bech32 } from 'bech32';
import bs58 from 'bs58';
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
	bs58.encode([...data, ...calcBase58Checksum(data)]);

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
		bufferToHex(randomBytes(32)),
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
		[],
	);

	/** 秘密鍵(WIF形式) */
	const wif = useMemo(
		() => genWif(hexToUint8Array(hexPrivateKey)),
		[hexPrivateKey],
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
