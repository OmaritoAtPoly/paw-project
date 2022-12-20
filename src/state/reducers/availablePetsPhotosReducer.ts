import {type Photo} from 'pexels';
import {ActionType, AvailablePetsActionType} from '../action-types';
import {type AvailablePetsPhotosAction, type PhotosState} from '../actions';

const initialState: PhotosState = {
	photos: [],
	total_results: 0,
	error: '',
	loading: false,
};

const availablePetsPhotoReducer = (state = initialState, action: AvailablePetsPhotosAction): PhotosState => {
	switch (action.type) {
		case AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS_SUCCESS: {
			const {page, photos, total_results} = action.payload;
			let photosArr: Photo[] = [];
			if (page > 1) {
				photosArr = [...photos];
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

		case AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS:
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

export default availablePetsPhotoReducer;