import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import {type LatLngExpression} from 'leaflet';
import {defaultSofiaCoordinate} from '../../data/data';
import {MapComponent} from './Map';

interface Props {
	markerPosition: LatLngExpression;
	handlerMarkerPosition?: (value: LatLngExpression) => void;
	scrollWheelZoom?: boolean;
	popUpMessage?: string;
}

export const MapContainerWrapper = ({markerPosition, handlerMarkerPosition = () => { }, scrollWheelZoom = true, popUpMessage = ''}: Props) => {
	return (
		<div id="map" className="w-full h-[500px]">
			<MapContainer center={defaultSofiaCoordinate} zoom={13} doubleClickZoom={false} scrollWheelZoom={scrollWheelZoom} className='w-full h-full'>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapComponent markerPosition={markerPosition} handlerMarkerPosition={handlerMarkerPosition} popUpMessage={popUpMessage} />
			</MapContainer>

		</div >
	);
};
