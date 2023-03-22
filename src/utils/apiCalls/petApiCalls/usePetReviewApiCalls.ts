import {type AxiosResponse} from 'axios';
import {useCallback} from 'react';
import {axiosPrivate} from '../../axiosConfiguration';

export const usePetReviewApiCalls = () => {


	const addPetReview = useCallback(async (review: Components.Schemas.Rating) => {
		try {
			const value: AxiosResponse = (await axiosPrivate.post('/v1/ratings', {...review}));

			if (value.status === 200) {
				return true;
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error due to:', error.message);
				return false;
			}
		}

		return false;
	}, []);

	const getPetReview = useCallback(async (petId: string) => {
		let result;

		try {
			const value: AxiosResponse<Components.Schemas.Rating[]> = (await axiosPrivate.get(`/v1/ratings/${petId}`));

			if (value.status === 200) {
				result = value.data;
				return result;
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error due to:', error.message);
			}
		}

		return result;
	}, []);

	return {addPetReview, getPetReview};
};