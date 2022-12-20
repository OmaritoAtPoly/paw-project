import axios, {type AxiosResponse} from 'axios';
import {type Photos} from 'pexels';
import {type Dispatch} from 'redux';
import {ActionType, AvailablePetsActionType} from '../action-types';
import {type AvailablePetsPhotosAction} from '../actions';

export const searchAvailablePetsPictures = (availablePetsName: string) => {
	return async (dispatch: Dispatch<AvailablePetsPhotosAction>) => {

		dispatch({
			type: AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS,
		});

		try {
			if (availablePetsName) {

				const url = `https://api.pexels.com/v1/search?query=${availablePetsName}&per_page=${5}&page=4`;

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
						type: AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS_SUCCESS,
						payload: {
							loading: false,
							page: value.data.page,
							photos: value.data.photos,
							total_results: value.data.per_page,
						},

					});
				} else {
					dispatch({
						type: AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS_ERROR,
						payload: value.statusText,
					});
				}
			}
		} catch (error) {
			if (error instanceof Error) {
				dispatch({
					type: AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS_ERROR,
					payload: error.message,
				});
			}
		}
	};
};
