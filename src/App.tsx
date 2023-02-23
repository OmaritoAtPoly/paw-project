import React from 'react';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import {RouterProvider} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import keycloak from './Keycloak';
import {routerElements} from './pages/routes';

function App() {
	return (
		<ReactKeycloakProvider authClient={keycloak}>
			<AnimatePresence mode='wait'>
				<RouterProvider router={routerElements} />
			</AnimatePresence>
		</ReactKeycloakProvider>
	);
}

export default App;
