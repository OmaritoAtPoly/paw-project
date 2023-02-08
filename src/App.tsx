import {ReactKeycloakProvider} from '@react-keycloak/web';
import React from 'react';
import {RouterProvider} from 'react-router-dom';
import keycloak from './Keycloak';
import {routerElements} from './pages/routes';

function App() {
	return (
		<ReactKeycloakProvider authClient={keycloak}>
			<RouterProvider router={routerElements} />
		</ReactKeycloakProvider>
	);
}

export default App;
