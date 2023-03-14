import {type AxiosResponse} from 'axios';
import {useCallback} from 'react';
import {axiosPublic} from '../../axiosConfiguration';

export const useUserApiCalls = () => {

	const register = useCallback(async (userData: Components.Schemas.UserDto) => {
		try {
			const response: AxiosResponse<Components.Schemas.UserDto> = await axiosPublic.post('/v1/users', {...userData});
			if (response.status >= 200 && response.status <= 299) {
				return true;
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error creating a user:', error.message);
			}
		}

		return false;
	}, []);

	return {register};
};
