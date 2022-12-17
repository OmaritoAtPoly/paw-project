import axios, {type AxiosResponse} from 'axios';
import {type Photos} from 'pexels';
import {type Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {type PhotosAction} from '../actions';

export const searchPictures = (search: string, perPage: number) => {
	return async (dispatch: Dispatch<PhotosAction>) => {
		dispatch({
			type: ActionType.SEARCH_PICTURES,
		});
		try {

			const url = `https://api.pexels.com/v1/search?query=${search}&per_page=${perPage}&page=4`;

			const value: AxiosResponse<Photos> = (await axios.get(url, {
				headers: {
					'Authorization': process.env.REACT_APP_PEXEL_KEY,
				},
			}));

			if (value.status === 200 && value.data.photos.length === 0) {
				dispatch({
					type: ActionType.EMPTY_RESPONSE,
					payload: 'No values fit with your search',
				});
				return;
			}

			if (value.status === 200 && value.data.photos.length > 0) {
				dispatch({
					type: ActionType.GET_PHOTOS,
					payload: {
						loading: false,
						page: 1,
						photos: value.data.photos,
						total_results: value.data.per_page,
					},

				});
			} else {
				dispatch({
					type: ActionType.SET_ERROR,
					payload: value.statusText,
				});
			}
		} catch (error) {
			if (error instanceof Error) {
				dispatch({
					type: ActionType.SET_ERROR,
					payload: error.message,
				});
			}
		}
	};
};
