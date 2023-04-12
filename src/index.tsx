import {ReactKeycloakProvider} from '@react-keycloak/web';
import {GoogleOAuthProvider} from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import keycloak from './Keycloak';
import {store} from './state';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}>
		<Provider store={store}>
			<ReactKeycloakProvider authClient={keycloak}>
				<App />
			</ReactKeycloakProvider>
		</Provider>
	</GoogleOAuthProvider>,
);
