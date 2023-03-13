import {type AxiosResponse} from 'axios';
import {useCallback} from 'react';
import {extendedDefaultUser} from '../../../data/data';
import {axiosPublic} from '../../axiosConfiguration';

export const useUserApiCalls = () => {

	const register = useCallback(async (userData: Components.Schemas.UserDto) => {
		let value: Components.Schemas.UserDto = extendedDefaultUser;
		try {
			const response: AxiosResponse<Components.Schemas.UserDto> = await axiosPublic.post('/v1/users', {...userData});
			if (response.status >= 200 && response.status <= 299) {
				value = response.data;
				return value;
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error creating a user:', error.message);
			}
		}

		return value;
	}, []);

	return {register};
};
