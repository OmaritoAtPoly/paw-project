import axios, {type AxiosResponse} from 'axios';
import {type Photo} from 'pexels';
import React from 'react';
import {type LoaderFunctionArgs, useParams, useLoaderData} from 'react-router-dom';

export const PetDetails = () => {
	const {id} = useParams();
	const petDetails = useLoaderData() as Photo;

	return (
		<>
			<h1>{id}</h1>
			<img src={petDetails.src.medium} alt={petDetails.alt?.toString()} />
		</>
	);
};

export const petDetailsLoader = async ({params}: LoaderFunctionArgs) => {
	const {id} = params;
	let result;
	if (id) {
		try {
			const url = `https://api.pexels.com/v1/photos/${id}`;

			const value: AxiosResponse<Photo> = (await axios.get(url, {
				headers: {
					'Authorization': process.env.REACT_APP_PEXEL_KEY,
				},
			}));

			if (value.status === 200) {
				result = value.data;
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error due to:', error.message);
			}
		}
	}

	return result;
};