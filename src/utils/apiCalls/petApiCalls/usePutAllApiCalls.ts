import {useKeycloak} from '@react-keycloak/web';
import axios, {type AxiosResponse} from 'axios';
import {useCallback} from 'react';
import {type DefaultLocationPropertiesType} from '../../../data/data';
import {axiosPrivate, axiosPublic} from '../../axiosConfiguration';

export const usePetAllApiCalls = () => {
	const {keycloak} = useKeycloak();

	sessionStorage.setItem('userToken', keycloak.token!);

	const addNewPet = async (petInfo: Components.Schemas.Pet) => {
		const response: AxiosResponse<Components.Schemas.Pet> = await axiosPrivate.post(
			'/v1/pets',
			{...petInfo},
		);

		return response;
	};

	const updateExistingPet = async (petInfo: Components.Schemas.Pet) => {
		const response: AxiosResponse<Components.Schemas.Pet> = await axiosPrivate.put(
			'/v1/pets',
			{...petInfo},
		);
		return response;
	};

	const getPetById = useCallback(async (petId: string) => {
		let result;
		if (petId) {
			try {
				const value: AxiosResponse<Components.Schemas.Pet> = (await axiosPublic.get(`/v1/pets/${petId}`));

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
	}, []);

	const getPlaceNameFromCoordinates = async (coord: Components.Schemas.Location) => {
		let result;

		try {
			const response: AxiosResponse<DefaultLocationPropertiesType> = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${process.env.REACT_APP_LOCATION_KEY!}&lat=${coord.lat}&lon=${coord.lng}&format=json`);
			if (response) return response;
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error regarding:', error.message);
			}
		}

		return result;
	};

	const deletePet = async (petId: string) => {
		let response;

		try {
			const value: AxiosResponse = await axiosPrivate.delete(`/v1/pets/${petId}`);
			if (value) {
				response = value; return response;
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error regarding:', error.message);
			}
		}

		return response;
	};

	return {addNewPet, updateExistingPet, getPetById, getPlaceNameFromCoordinates, deletePet};
};
