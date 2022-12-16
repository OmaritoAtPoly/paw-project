import {type Photo} from 'pexels';
import {ActionType} from '../action-types';
import {type PhotosState, type PhotosAction} from '../actions';

const initialState: PhotosState = {
	photos: [],
	total_results: 0,
	error: '',
	loading: false,
};

const photoReducer = (state = initialState, action: PhotosAction): PhotosState => {
	switch (action.type) {
		case ActionType.GET_PHOTOS: {
			const {page, photos, total_results} = action.payload;
			let photosArr: Photo[] = [];
			if (page > 1) {
				photosArr = [...state.photos, ...photos];
			} else {
				photosArr = photos;
			}

			return {
				...state,
				photos: photosArr,
				total_results,
				error: '',
				loading: false,
			};
		}

		case ActionType.SET_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case ActionType.SEARCH_PICTURES:
			return {
				...state,
				loading: true,
			};
		case ActionType.EMPTY_RESPONSE:
			return {...state, error: action.payload, loading: false};
		default:
			return state;
	}
};

export default photoReducer;