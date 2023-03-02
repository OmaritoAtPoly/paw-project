import {useKeycloak} from '@react-keycloak/web';
import {type AxiosResponse} from 'axios';
import {axiosPublic} from '../axiosConfiguration';

export const usePutAllApiCalls = () => {
	const {keycloak} = useKeycloak();

	sessionStorage.setItem('userToken', keycloak.token!);

	const addNewPet = async (petInfo: Components.Schemas.Pet) => {
		const response: AxiosResponse<Components.Schemas.Pet> = await axiosPublic.post(
			'/v1/pets',
			{
				...petInfo, petImage: 'no value',
			},
		);

		return response;
	};

	const updateExistingPet = async (petInfo: Components.Schemas.Pet) => {
		const response: AxiosResponse<Components.Schemas.Pet> = await axiosPublic.put(
			'/v1/pets',
			{
				...petInfo, petImage: 'no value',
			},
		);
		return response;
	};

	return {addNewPet, updateExistingPet};
};
