import {useKeycloak} from '@react-keycloak/web';
import {type AxiosResponse} from 'axios';
import {useCallback} from 'react';
import {axiosPublic} from '../axiosConfiguration';


export const useGetAllApiCalls = () => {
	const {keycloak} = useKeycloak();

	const getAllPets = useCallback(async () => {
		let result;
		sessionStorage.setItem('userToken', keycloak.token!);

		if (keycloak.token) {
			try {
				const value: AxiosResponse<Components.Schemas.Pet[]> = (await axiosPublic.get('v1/pets'));
				result = value.data;
			} catch (error) {
				if (error instanceof Error) {
					console.log('there is an error due to:', error.message);
				}
			}
		}

		return result;
	}, [keycloak.token]);

	return {getAllPets};
};
