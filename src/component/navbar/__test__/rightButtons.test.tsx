import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {CALL_US, LOGIN, SIGN_UP} from '../../../utils/constants';
import {RightComponentActionButtons} from '../RightComponentActionButtons';

const mockHandleCallFunction = jest.fn();
const mockHandleRightDrawer = jest.fn();

describe('these are the three buttons shown in the navbar', () => {
	beforeEach(() => {

		render(
			<BrowserRouter>
				<RightComponentActionButtons dropDownMenuValues={[]} handleCallFunction={mockHandleCallFunction} handleRightDrawer={mockHandleRightDrawer} />
			</BrowserRouter>,
		);
	});

	test('Selecting the call us button', () => {
		const callButton = screen.getByRole('button', {name: CALL_US});
		expect(callButton).toBeInTheDocument();
	});

	test('Selecting the login button', () => {
		const loginButton = screen.getByRole('button', {name: LOGIN});
		expect(loginButton).toBeInTheDocument();
	});

	test('Selecting the sign up button', () => {
		const signUoButton = screen.getByRole('link', {name: SIGN_UP});
		expect(signUoButton).toBeInTheDocument();
	});

	test('testing the handleCallFunction in the call us button', () => {
		const callButton = screen.getByRole('button', {name: CALL_US});
		fireEvent.click(callButton);
		expect(mockHandleCallFunction).toHaveBeenCalled();
	});

	test('testing the mockHandleRightDrawer in the login button', () => {
		const loginButton = screen.getByRole('button', {name: LOGIN});
		fireEvent.click(loginButton);
		expect(mockHandleRightDrawer).toHaveBeenCalled();
	});
	test('testing the sign up button', () => {
		const signUoButton = screen.getByRole('link', {name: SIGN_UP});
		fireEvent.click(signUoButton);
		expect(window.location.href).toBe('http://localhost/register');
	});
});
