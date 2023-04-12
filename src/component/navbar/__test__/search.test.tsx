import {render, screen} from '@testing-library/react';
import React from 'react';
import Search from '../Search';

const mockHandleValue = jest.fn();
const mockHandleSubmit = jest.fn();
const mockStringValue = 'fake value for test';

describe('this is the search component test section', () => {
	beforeEach(() => {
		render(<Search handleSubmit={mockHandleSubmit} handleValue={mockHandleValue} value={mockStringValue} loading={false} />);
	});

	test('testing the search input in the navbar', () => {
		const searchInput = screen.getByPlaceholderText('find pets here');
		expect(searchInput).toBeInTheDocument();
	});

	// test('testing the search input in the navbar', () => {
	// 	const button = screen.getByRole('button', {name: 'Find me'});
	// 	expect(button).toBeInTheDocument();
	// });
});
