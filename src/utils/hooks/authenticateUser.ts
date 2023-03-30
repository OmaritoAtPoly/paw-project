import axios, {type AxiosResponse} from 'axios';

export const authenticateUser = async (email?: string, password?: string, userId?: string) => {
	const url = 'http://localhost:4000/users';

	try {
		const value: AxiosResponse<Components.Schemas.UserDto[]> = (await axios.get(url));

		if (value.status === 200) {
			if (userId) return value.data.filter((val) => val.username === userId); // TODO HERE IS CHANGED THE ROLE FIELD DUE TO THE CHANGE OF KEYKEOAK
			if (email && password) return value.data.filter((val) => (val.email === email && val.password === password));
		}
	} catch (error) {
		if (error instanceof Error) {
			return Promise.reject(error);
		}
	}

	return undefined;
};