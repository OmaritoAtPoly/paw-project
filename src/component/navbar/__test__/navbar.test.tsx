import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import Navbar from '../Navbar';
import {store} from '../../../state';
import keycloak from '../../../Keycloak';

describe('this is the navbar test section', () => {
	const MockNavBar = () => {
		return (
			<Provider store={store}>
				<ReactKeycloakProvider authClient={keycloak}>
					<BrowserRouter>
						<Navbar />
					</BrowserRouter>
				</ReactKeycloakProvider>
			</Provider>
		);
	};

	beforeEach(() => {
		render(<MockNavBar />);
	});
	test('testing the navbar component', () => {
		const navbar = screen.getByLabelText('app-navbar');
		expect(navbar).toBeInTheDocument();
	});

	test('testing the hamburger component in the navbar', () => {
		const hamburgerButton = screen.getByLabelText('hamburger-button');
		expect(hamburgerButton).toBeInTheDocument();
	});

	test('testing the home link in the navbar', () => {
		const bestPaw = screen.getByRole('link', {name: 'Best Paw'});
		expect(bestPaw).toBeInTheDocument();
	});
	test('testing the Show All & Add New text in the navbar', () => {
		const delivery = screen.getByText('Show All');
		const pickUp = screen.getByText('Add New');
		expect(delivery).toBeInTheDocument();
		expect(pickUp).toBeInTheDocument();
	});
});
