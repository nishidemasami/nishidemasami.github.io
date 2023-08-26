/**
---
title: Reactで国土地理院地図やOpenStreetMapなどを表示する
date: "2023-01-21T01:04:03+0900"
template: "post"
type: "tsx"
draft: false
category: "blog"
description: "ReactとTypeScriptで国土地理院地図やOpenStreetMapなどを表示したいこと、ありますよね。僕はあるので自分用にメモです。"
tags:
  - "TypeScript"
  - "React"
  - "OpenStreetMap"
  - "国土地理院地図"
  - "Leaflet"
  - "Next.js"
---
*/

import { useMemo } from 'react';

import { CircularProgress } from '@mui/material';
import { format } from 'date-fns';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

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

const firstArticle = `ReactとTypeScriptで国土地理院地図やOpenStreetMapを表示したいこと、ありますよね。  
僕はあるので自分用にメモです。<sup>[<a target="_blank" href="https://www.amazon.co.jp/dp/4873119049?&linkCode=ll1&tag=nishidemasami-22&linkId=269abe7d00fb75538542192fd6ea40b4&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >参考文献</a>]</sup>

Google Mapsが2018年の7月頃に有料になってからかなり経ちました。  
いまさらGoogle Mapsの代わりを探している人はいないと思いますが、あれから色々とWebの事情も変わったので自分用にメモの意味も込めて書いています。

「画像タイル地図」を公開しているWebサービスはたくさんあります。  
ですが無料で自由に使えるものは意外と少なく、国土地理院やOpenStreetMapは貴重な選択肢の一つだと思います。  
(「画像タイル地図」ではなく「ベクトルタイル地図」も国土地理院は(実験的に)提供しているので次のレポートで説明します。)

### 国土地理院地図

国土交通省国土地理院地図は利用規約を守る限り自由に使えます。  
利用規約は以下です。  
国土地理院コンテンツ利用規約 国土地理院:<https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html>

### OpenStreetMap

OpenStreetMapもODbLライセンスに従って自由に使えます。ODbLライセンスの詳細は以下の通りです。  
OpenStreetMap著作権とライセンス:<https://www.openstreetmap.org/copyright/ja>  
OpenStreetMapは現地の言語(日本はもちろん日本語)を表示しているみたいでした。  
ただ、ドイツ語版が日本では英語を併記しているようなので試しに表示してみます。

### Stamen Maps

Stamen MapsもODbLライセンスに従って自由に使えます。ODbLライセンスの詳細は以下の通りです。  
Stamen Maps:<http://maps.stamen.com/>  

### OpenTopoMap

OpenTopoMapは、OSMやSRTMのデータから地形図を表示するようにした地図です。ライセンスはCC-BY-SAです。  
OpenTopoMap:<opentopomap.org>  

今回は、この4つのフリーの地図から5種類の地図を表示してみたいと思います。

地図描画にはLeafletを使用します。

ライブラリとしては現在最新の\`leaflet@1.9.3\`と\`react-leaflet@4.2.0\`、それからTypeScript用の型定義として\`@types/leaflet@1.9.0\`を利用しています。  
※react-leafletはバージョンがv4にメジャーバージョンアップされてからまだ1年も経っておらず、ネット上にもv3の情報ばかりですが最近v4の情報も少しずつ増えてきています。僕もこのことに困っていたので後の参考になるようにこのレポートを書いています。

必要なnpm installは以下の通りです。TypeScript用にleafletの型定義が公開されています。react-leafletは最初から型定義が含まれています。

\`\`\`bash
npm install leaflet react-leaflet
npm install -D @types/leaflet
\`\`\`

以上で実装のための説明は終了ですが、ただ地図を表示するだけだとつまらないので今回は東海道五十三次の場所をピンで表示して、セレクトボックスで選択したらその場所に動くようにしてみます。  
そのための\`@mui/material\`も入れています。

実際に実装してみたのが ↓ これです。
`;

const secondArticle = `

書いたのが ↓ この今回のコードです。
\`\`\`tsx
import React from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { LatLngExpression, Icon } from 'leaflet';
import PinIcon from 'leaflet/dist/images/marker-icon.png';
import { TileLayer, MapContainer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const merkerIcon = new Icon({
  iconUrl: PinIcon.src,
  iconAnchor: [13, 41],
});

const maps = [
  {
    name: 'OpenStreetMap',
    url: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
    attribution:
      'Daten von <a href="https://www.openstreetmap.org/">OpenStreetMap</a> - Veröffentlicht unter <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>',
  },
  {
    name: '国土地理院地図',
    url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    attribution:
      '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
  },
  {
    name: 'OpenStreetMap(日本語版)',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  },
  {
    name: 'Stamen Maps(Terrain)',
    url: '//stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
    attribution:
      '© Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>.',
  },
  {
    name: 'Stamen Maps(Toner)',
    url: '//stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    attribution:
      '© Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a>.',
  },
  {
    name: 'OpenTopoMap',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributions, <a href="http://viewfinderpanoramas.org/">SRTM</a> | map style: © <a href="https://opentopomap.org/#map=15/35.68374/139.75330">OpenTopoMap</a>',
  },
];
const places: {
  name: string;
  latlng: LatLngExpression;
}[] = [
  { name: '日本橋', latlng: [35.6836111111111, 139.774444444444] },
  { name: '品川宿', latlng: [35.6219444444444, 139.739166666667] },
  { name: '川崎宿', latlng: [35.5355555555556, 139.707777777778] },
  { name: '神奈川宿', latlng: [35.4727777777778, 139.632277777778] },
  { name: '保ヶ谷宿', latlng: [35.4440277777778, 139.595555555556] },
  { name: '戸塚宿', latlng: [35.3950277777778, 139.529861111111] },
  { name: '藤沢宿', latlng: [35.3456666666667, 139.486305555556] },
  { name: '平塚宿', latlng: [35.3272777777778, 139.337805555556] },
  { name: '大磯宿', latlng: [35.309, 139.315305555556] },
  { name: '小田原宿', latlng: [35.2487222222222, 139.161027777778] },
  { name: '箱根宿', latlng: [35.1904166666667, 139.026361111111] },
  { name: '三島宿', latlng: [35.11925, 138.914472222222] },
  { name: '沼津宿', latlng: [35.1001111111111, 138.857416666667] },
  { name: '原宿', latlng: [35.1255277777778, 138.797333333333] },
  { name: '吉原宿', latlng: [35.1627777777778, 138.685638888889] },
  { name: '蒲原宿', latlng: [35.1199722222222, 138.605472222222] },
  { name: '由比宿', latlng: [35.1076111111111, 138.567472222222] },
  { name: '興津宿', latlng: [35.0498333333333, 138.519555555556] },
  { name: '江尻宿', latlng: [35.0198888888889, 138.480861111111] },
  { name: '府中宿', latlng: [34.9749166666667, 138.387638888889] },
  { name: '鞠子宿', latlng: [34.9494166666667, 138.342444444444] },
  { name: '岡部宿', latlng: [34.9188333333333, 138.282666666667] },
  { name: '藤枝宿', latlng: [34.8698055555556, 138.252722222222] },
  { name: '島田宿', latlng: [34.8328055555556, 138.175861111111] },
  { name: '金谷宿', latlng: [34.8228611111111, 138.129277777778] },
  { name: '日坂宿', latlng: [34.8041388888889, 138.075361111111] },
  { name: '掛川宿', latlng: [34.7729166666667, 138.015888888889] },
  { name: '袋井宿', latlng: [34.7474722222222, 137.923222222222] },
  { name: '見附宿', latlng: [34.7268055555556, 137.857027777778] },
  { name: '浜松宿', latlng: [34.7051111111111, 137.731916666667] },
  { name: '舞阪宿', latlng: [34.6843888888889, 137.608944444444] },
  { name: '新居宿', latlng: [34.6941388888889, 137.560777777778] },
  { name: '白須賀宿', latlng: [34.6885555555556, 137.500833333333] },
  { name: '二川宿', latlng: [34.7230555555556, 137.464527777778] },
  { name: '吉田宿', latlng: [34.7666388888889, 137.389722222222] },
  { name: '御油宿', latlng: [34.8448888888889, 137.317333333333] },
  { name: '赤坂宿', latlng: [34.8557222222222, 137.308222222222] },
  { name: '藤川宿', latlng: [34.9110555555556, 137.222194444444] },
  { name: '岡崎宿', latlng: [34.9579166666667, 137.169194444444] },
  { name: '池鯉鮒宿', latlng: [35.0081111111111, 137.040944444444] },
  { name: '鳴海宿', latlng: [35.0796666666667, 136.949805555556] },
  { name: '宮宿', latlng: [35.1204166666667, 136.906722222222] },
  { name: '桑名宿', latlng: [35.0687222222222, 136.6955] },
  { name: '四日市宿', latlng: [34.9695277777778, 136.625277777778] },
  { name: '石薬師宿', latlng: [34.9043333333333, 136.548] },
  { name: '庄野宿', latlng: [34.8833888888889, 136.524833333333] },
  { name: '亀山宿', latlng: [34.8543055555556, 136.454111111111] },
  { name: '関宿', latlng: [34.8524722222222, 136.392083333333] },
  { name: '坂下宿', latlng: [34.8885555555556, 136.354083333333] },
  { name: '土山宿', latlng: [34.9344166666667, 136.283833333333] },
  { name: '水口宿', latlng: [34.9655555555556, 136.1835] },
  { name: '石部宿', latlng: [35.0100555555556, 136.054638888889] },
  { name: '草津宿', latlng: [35.0174444444444, 135.960638888889] },
  { name: '大津宿', latlng: [35.0059722222222, 135.861416666667] },
  { name: '三条大橋', latlng: [35.0103333333333, 135.774361111111] },
];

const MapController: React.FC<{ center?: LatLngExpression }> = ({ center }) => {
  const map = useMap();
  React.useEffect(() => {
    if (center) {
      map.setView(center, 13, { animate: true });
    }
  }, [center, map]);
  return null;
};

const LeafletDemo = (): JSX.Element => {
  const [center, setCenter] = React.useState<LatLngExpression>();
  const [mapName, setMapName] = React.useState(maps[0].name);
  const [placeName, setPlaceName] = React.useState('');
  const selectedMap = React.useMemo(
    () => maps.find((value) => value.name === mapName)!,
    [mapName]
  );

  return (
    <>
      <FormControl margin="normal">
        <InputLabel>地図選択</InputLabel>
        <Select
          value={mapName}
          label="地図選択"
          onChange={(event) => {
            setMapName(event.target.value);
          }}
        >
          {maps.map(({ name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl margin="normal">
        <InputLabel>場所選択</InputLabel>
        <Select
          className="w-28"
          value={placeName}
          label="場所選択"
          onChange={(event) => {
            const selected = places.find(
              (value) => value.name === event.target.value
            );
            if (selected) {
              setPlaceName(selected.name);
              setCenter(selected.latlng);
            }
          }}
        >
          {places.map(({ name }) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <MapContainer
        center={[35.0585904, 137.5191176]}
        zoom={7}
        maxZoom={18}
        scrollWheelZoom={true}
        style={{ height: 400, width: '100%' }}
      >
        <MapController center={center} />
        <TileLayer
          attribution={selectedMap.attribution}
          url={selectedMap.url}
        />
        {places.map((place) => (
          <Marker key={place.name} position={place.latlng} icon={merkerIcon}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default LeafletDemo;
\`\`\`

なお、Next.jsでSSGでLeafletを含むページを静的に生成しようとすると
\`\`\`
ReferenceError: window is not defined
\`\`\`
というエラーが出てしまうので、Dynamic Importで
\`\`\`tsx
const LeafletDemoComponent = React.useMemo(
	() =>
		dynamic(() => import('../../components/Leaflet/LeafletDemo'), {
			loading: () => <CircularProgress className="w-full" />,
			ssr: false,
		}),
	[]
);
\`\`\`
というコンポーネントを1つ挟んでブラウザへのレンダリング時に動的インポートさせて表示させるようにしました。
`;

const ReactLeafletTest = (props: ReactSoundTestProps) => {
	const LeafletDemoComponent = useMemo(
		() =>
			dynamic(() => import('../../components/Leaflet/LeafletDemo'), {
				loading: () => <CircularProgress className="w-full" />,
				ssr: false,
			}),
		[]
	);
	return (
		<Main
			recents={props.recents}
			tags={props.tags}
			meta={
				<Meta
					title="Reactで国土地理院地図やOpenStreetMapを表示する"
					description="ReactとTypeScriptで国土地理院地図やOpenStreetMapを表示したいこと、ありますよね。僕はあるので自分用にメモです。"
				/>
			}
		>
			<h1 className="content-title">
				Reactで国土地理院地図やOpenStreetMapを表示する
			</h1>
			<div className="content-date">
				Posted {format(new Date('2023-01-21T01:04:03+0900'), 'LLLL d, yyyy')}
			</div>
			<ul className="flex flex-row flex-wrap list-none p-0 m-2 justify-start">
				{[
					'TypeScript',
					'React',
					'OpenStreetMap',
					'国土地理院地図',
					'leaflet',
					'Next.js',
				].map((tag) => (
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
					<LeafletDemoComponent />
					<div dangerouslySetInnerHTML={{ __html: props.secondArticle }} />
				</div>
			</Content>

			<PostPagination nextPost={props.nextPost} prevPost={props.prevPost} />
		</Main>
	);
};

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

export default ReactLeafletTest;
