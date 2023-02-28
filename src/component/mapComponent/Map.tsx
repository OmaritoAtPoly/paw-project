import React from 'react';
import {Marker, Popup, useMapEvents} from 'react-leaflet';

interface Props {
	markerPosition: Components.Schemas.Location;
	handlerMarkerPosition: (value: Components.Schemas.Location) => void;
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
