import React from 'react';
import {type LatLngExpression} from 'leaflet';
import {Marker, Popup, useMapEvents} from 'react-leaflet';

interface Props {
	markerPosition: LatLngExpression;
	handlerMarkerPosition: (value: LatLngExpression) => void;
	popUpMessage: string;
}

export const MapComponent = ({markerPosition, handlerMarkerPosition, popUpMessage}: Props) => {
	const map = useMapEvents({
		click: () => {
			map.on('click', function (e) {
				handlerMarkerPosition({lat: e.latlng.lat, lng: e.latlng.lng});
			});
		},
	});
	return markerPosition === null ? null : (
		<Marker position={markerPosition}>
			{popUpMessage && <Popup>{popUpMessage}</Popup>}
		</Marker>
	);
};
