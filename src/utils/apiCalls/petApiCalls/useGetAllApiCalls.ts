import {type AxiosResponse} from 'axios';
import {useCallback} from 'react';
import {axiosPublic} from '../../axiosConfiguration';
import {notifyToaster} from '../../functions';


export const useGetAllApiCalls = () => {
	const getAllPets = useCallback(async () => {
		let result;

		try {
			const value: AxiosResponse<Components.Schemas.Pet[]> = (await axiosPublic.get('v1/pets'));
			result = value.data;
		} catch (error) {
			if (error instanceof Error) {
				notifyToaster(error.message, 'error');
			}
		}

		return result;
	}, []);

	return {getAllPets};
};
