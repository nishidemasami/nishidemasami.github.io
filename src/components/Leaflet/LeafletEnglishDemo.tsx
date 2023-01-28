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
										`<span class="English marker zoomLevel${zoom}marker">${feature.properties.name}</span>` +
										`<span class="日本語 marker zoomLevel${zoom}marker">${feature.properties.knj}</span>`,
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
		<div className={`allZoomLevel zoomLevel${zoom}`}>
			<style jsx>
				{`
					:global(.allZoomLevel .marker) {
						display: none;
						color: ${color};
						font-size: ${fontSize}px;
						font-weight: bold;
						text-shadow: -1px -1px #fff, 1px -1px #fff, -1px 1px #fff,
							1px 1px #fff;
						background: transparent;
						line-height: ${fontSize}px;
						white-space: nowrap;
					}
					.allZoomLevel.zoomLevel${zoom}
						:global(.zoomLevel${zoom}marker.${language}) {
						display: block;
					}
				`}
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
