import axios from 'axios';

const baseURL = 'http://localhost:8089';

export const axiosPublic = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

export const axiosPrivate = (accessToken = '') => axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${accessToken}`,
	},
});
