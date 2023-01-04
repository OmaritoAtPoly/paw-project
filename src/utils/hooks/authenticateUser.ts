import axios, {type AxiosResponse} from 'axios';
import {type UserDataType} from '../../data/data';

export const authenticateUser = async (email?: string, password?: string, userId?: string) => {
	const url = 'http://localhost:4000/users';

	try {
		const value: AxiosResponse<UserDataType[]> = (await axios.get(url));

		if (value.status === 200) {
			if (userId) return value.data.filter((val) => val.userId === userId);
			if (email && password) return value.data.filter((val) => (val.email === email && val.password === password));
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log('there is an error due to:', error.message);
		}
	}

	return undefined;
};