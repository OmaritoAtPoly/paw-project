import React from 'react';
import {MapContainer, TileLayer, type MapContainerProps} from 'react-leaflet';
import {defaultSofiaCoordinate} from '../../data/data';
import {MapComponent} from './Map';

interface Props {
	markerPosition: Components.Schemas.Location;
	handlerMarkerPosition?: (value: Components.Schemas.Location) => void;
	scrollWheelZoom?: boolean;
	popUpMessage?: string;
}

export const MapContainerWrapper = ({markerPosition, handlerMarkerPosition = () => { }, popUpMessage = '', ...props}: Props & MapContainerProps) => {
	return (
		<div id="map" className="w-full h-[500px]">
			<MapContainer center={defaultSofiaCoordinate} zoom={13} doubleClickZoom={false} className='w-full h-full' {...props}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapComponent markerPosition={markerPosition} handlerMarkerPosition={handlerMarkerPosition} popUpMessage={popUpMessage} />
			</MapContainer>

		</div >
	);
};
