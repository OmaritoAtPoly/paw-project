import axios, {type AxiosRequestConfig, type AxiosResponse, type AxiosError} from 'axios';

const baseURL = 'http://localhost:8089';

export const axiosPublic = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
	const newConfig = {...config};
	const token = sessionStorage.getItem('userToken');
	if (token !== undefined) newConfig.headers.Authorization = `Bearer ${token!}`;
	return newConfig;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
	// console.error(`[request error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	// console.info(`[response] [${JSON.stringify(response)}]`);
	if (response.status >= 200 || response.status <= 299)
		return response;
	throw new Error(response.statusText);
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
	// console.error(`[response error] [${JSON.stringify(error.isAxiosError)}]`);
	return Promise.reject(error);
};

axiosPublic.interceptors.response.use(onResponse, onResponseError);
axiosPublic.interceptors.request.use(onRequest, onRequestError);
