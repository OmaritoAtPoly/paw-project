import {GoogleOAuthProvider} from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import {store} from './state';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}>
		<Provider store={store}>
			<App />
		</Provider>
	</GoogleOAuthProvider>,
);
