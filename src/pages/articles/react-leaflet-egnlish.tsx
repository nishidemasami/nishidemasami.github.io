/**
---
title: Reactで地図上に地名を英語で表示する
date: "2023-01-28T12:00:00+0900"
template: "post"
type: "tsx"
draft: false
category: "blog"
description: "Reactで地図上に地名を英語で表示したいこと、ありますよね。僕はあるので自分用にメモです。"
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

const firstArticle = `Next.jsとReactとTypeScriptで地図に地名を英字表記で表示したいこと、ありますよね。  
僕はあるので自分用にメモです。<sup>[<a target="_blank" href="https://www.amazon.co.jp/dp/4873119049?&linkCode=ll1&tag=nishidemasami-22&linkId=269abe7d00fb75538542192fd6ea40b4&language=ja_JP&ref_=as_li_ss_tl" rel="noreferrer" >参考文献</a>]</sup>

[前回のレポート](https://nishidemasami.github.io/articles/react-leaflet/)の続きです。

国土地理院が、地図データをgeojson形式で公開してくれています。  
[ベクトルタイルとその提供実験について 国土地理院](https://maps.gsi.go.jp/development/vt.html)  
地名を多言語で表記するためのデータも公開してくれています。
[国土地理院地図 多言語表記の地図 国土地理院](https://www.gsi.go.jp/kihonjohochousa/multilingual.html)  
仕様も[PDF](https://www.gsi.go.jp/common/000212661.pdf)で見られます。

このデータも、国土地理院の地図と同様に、国土交通省国土地理院地図は利用規約を守る限り自由に使えます。  
利用規約は以下の通りです。  
国土地理院コンテンツ利用規約 国土地理院:<https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html>

今回このデータを使って、地図上に地名などを表示するように作ってみました。  
文字の色やサイズ、日本語と英語と非表示を切り替えられるように作ってみました。

なお、本当はgeojsonには「地物種別コード(ftCode)」や「注記分類コード(annoCtg)」などで、どれが都道府県名だとかどれが空港名だとか、どれが河川名でどれが駅名だとかがコードでデータに入っていて、仕様も[PDF](https://maps.gsi.go.jp/help/pdf/vector/dataspec.pdf)で公開されているのですが、ご覧の通り(少なくとも個人開発でやる分には)やってられないので、今回は全部一緒くたに表示してみます。

さて、実際に実装してみたのが ↓ これです。
`;

const secondArticle = `
先述の通り、都道府県名から河川名まで一緒くたに表示されているので見にくいですが、無事に表示することができました！  
用途に合わせてもう少しチューニングしてゆけば、もっと見やすくなると思います。

これが ↓ この今回のコードです。
\`\`\`tsx
import React from 'react';

import { TextDecrease, TextIncrease } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import { Util, geoJSON, marker, divIcon } from 'leaflet';
import { SketchPicker } from 'react-color';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const languages = ['English', '日本語', '地名非表示'];

const MapController: React.FC<{
  setZoom: (zoom: number) => void;
}> = ({ setZoom }) => {
  const map = useMap();
  React.useEffect(() => {
    map.on('zoomend', () => {
      setZoom(map.getZoom());
    });
  }, [map, setZoom]);
  return (
    <TileLayer
      attribution='<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
      url="https://maps.gsi.go.jp/xyz/pale2/{z}/{x}/{y}.png"
      eventHandlers={{
        tileload: async (event) => {
          const response = await fetch(
            Util.template(
              'https://cyberjapandata.gsi.go.jp/xyz/experimental_multil/{z}/{x}/{y}.geojson',
              event.coords
            )
          );
          if (!response.ok) return;
          const geojson = await response.json();
          if (!geojson) return;
          const zoom = event.coords.z;
          geoJSON(geojson, {
            filter: (feature) => feature.properties.name,
            pointToLayer: (feature, latlng) =>
              marker(latlng, {
                icon: divIcon({
                  className: 'gsi-div-icon font-sans',
                  html:
                    \`<span class="English marker zoomLevel\${zoom}marker">\${feature.properties.name}</span>\` +
                    \`<span class="日本語 marker zoomLevel\${zoom}marker">\${feature.properties.knj}</span>\`,
                }),
              }),
          }).addTo(map);
        },
      }}
    />
  );
};

const LeafletEnglishDemo = (): JSX.Element => {
  const [zoom, setZoom] = React.useState<number>(7);
  const [fontSize, setFontSize] = React.useState<number>(12);
  const [color, setColor] = React.useState<string>('#000000');
  const [language, setLanguage] = React.useState<string>('English');

  return (
    <div className={\`allZoomLevel zoomLevel\${zoom}\`}>
      <style jsx>
        {\`
          :global(.allZoomLevel .marker) {
            display: none;
            color: \${color};
            font-size: \${fontSize}px;
            font-weight: bold;
            text-shadow: -1px -1px #fff, 1px -1px #fff, -1px 1px #fff,
              1px 1px #fff;
            background: transparent;
            line-height: \${fontSize}px;
            white-space: nowrap;
          }
          .allZoomLevel.zoomLevel\${zoom}
            :global(.zoomLevel\${zoom}marker.\${language}) {
            display: block;
          }
        \`}
      </style>
      <SketchPicker
        className="float-left m-2"
        color={color}
        disableAlpha
        onChangeComplete={(value) => {
          setColor(value.hex);
        }}
      />
      <Typography className="m-1">地図上の地名の文字設定</Typography>
      <Stack
        className="mb-1 w-1/2"
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <TextDecrease />
        <Slider
          value={fontSize}
          min={10}
          max={50}
          onChange={(_, newValue) => {
            if (typeof newValue === 'number') setFontSize(newValue);
          }}
        />
        <TextIncrease />
      </Stack>
      <FormControl margin="normal">
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          label="Language"
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
        >
          {languages.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <MapContainer
        center={[35.0585904, 137.5191176]}
        className="h-96 w-full"
        zoom={7}
        minZoom={5}
        maxZoom={17}
        scrollWheelZoom={true}
      >
        <MapController setZoom={setZoom} />
      </MapContainer>
    </div>
  );
};

export default LeafletEnglishDemo;
\`\`\`
よかったら参考にしてみてください！(なげやり)
`;

const ReactLeafletTest = (props: ReactSoundTestProps) => {
	const LeafletDemoComponent = useMemo(
		() =>
			dynamic(() => import('../../components/Leaflet/LeafletEnglishDemo'), {
				loading: () => <CircularProgress className="w-full" />,
				ssr: false,
			}),
		[],
	);
	return (
		<Main
			recents={props.recents}
			tags={props.tags}
			meta={
				<Meta
					title="Reactで地図上に地名を英語で表示する"
					description="Reactで地図上に地名を英語で表示したいこと、ありますよね。僕はあるので自分用にメモです。"
				/>
			}
		>
			<h1 className="content-title">Reactで地図上に地名を英語で表示する</h1>
			<div className="content-date">
				Posted {format(new Date('2023-01-28T12:00:00+0900'), 'LLLL d, yyyy')}
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
