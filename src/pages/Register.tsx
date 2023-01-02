import React from 'react';
import {useLoaderData} from 'react-router-dom';

import axios, {type AxiosResponse} from 'axios';
import {type UserDataType} from '../data/data';

export const Register = () => {
	const data = useLoaderData() as UserDataType[];

	data.map((a) => {
		console.log(a.email);
		return a;
	});

	return (
		<div className="flex justify-center items-center h-screen">
			<h1 className="text-9xl">Register Page</h1>
		</div>
	);
};

export const userLoader = async (): Promise<UserDataType> => {
	const value: AxiosResponse<UserDataType> = await axios.get(
		'http://localhost:4000/users',
	);
	if (value.status !== 200) throw new Error(value.status.toString());
	const response = value.data;

	return response;
};
