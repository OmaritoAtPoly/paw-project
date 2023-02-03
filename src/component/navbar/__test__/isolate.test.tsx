/* eslint-disable @typescript-eslint/no-dynamic-delete */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {generate} from 'shortid';
import {LoggedFromPlatform} from '../../../state/action-types';
import {RightComponentActionButtons} from '../RightComponentActionButtons';

const mockHandleCallFunction = jest.fn();
const mockHandleRightDrawer = jest.fn();
const itemElements = {
	itemName: 'evaluacion',
	onClick: () => { },
	imgUrl: 'https://www.google.com',
	userId: 'jHoV-5xgl',
};

const localStorageMock = (function () {
	let localstore: Record<string, unknown> = {};

	return {
		getItem(key: string) {
			return localstore[key];
		},

		setItem(key: string, value: Record<string, unknown>) {
			localstore[key] = value;
		},

		clear() {
			localstore = {};
		},

		removeItem(key: string) {
			delete localstore[key];
		},

		getAll() {
			return localstore;
		},
	};
})();

Object.defineProperty(window, 'sessionStorage', {value: localStorageMock});

const mockDefaultUser = {
	userId: generate(),
	password: 'xxx',
	email: 'omar@oma.ci',
	name: 'omar',
	picture: '',
	given_name: 'estrada',
	family_name: 'diaz',
	userLogged: false,
	loggedFrom: LoggedFromPlatform.FACEBOOK,
	rol: 'admin',
};

describe('aaaa', () => {
	beforeEach(() => {
		window.localStorage.clear();

		render(
			<BrowserRouter>
				<RightComponentActionButtons dropDownMenuValues={[itemElements]} handleCallFunction={mockHandleCallFunction} handleRightDrawer={mockHandleRightDrawer} />
			</BrowserRouter>,
		);
	});

	test('testing there is a current user in the app logged', () => {
		// render(
		// 	<BrowserRouter>
		// 		<RightComponentActionButtons dropDownMenuValues={[itemElements]} handleCallFunction={mockHandleCallFunction} handleRightDrawer={mockHandleRightDrawer} />
		// 	</BrowserRouter>,
		// );

		window.sessionStorage.setItem('currentUser', JSON.stringify(mockDefaultUser));

		const value = window.sessionStorage.getItem('currentUser');
		expect(value).toBeTruthy();
		// // console.log('zz', value);



		screen.debug();


		// const dropDownMenu = screen.getByRole('button', {name: 'Options'});
		// expect(dropDownMenu).toBeInTheDocument();
		// expect(true).toBeTruthy();
	});
});