import {type Photo} from 'pexels';
import {type ActionType} from '../action-types';

interface SearchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}

interface SearchRepositoriesError {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string;
}

export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesError;

export interface PhotosState {
	photos: Photo[];
	total_results: number;
	error: string;
	loading: boolean;
}

interface GetPhotosAction {
	type: ActionType.GET_PHOTOS;
	payload: {
		photos: Photo[];
		page: number;
		total_results: number;
		loading: boolean;
	};
}

interface SetErrorAction {
	type: ActionType.SET_ERROR;
	payload: string;
}

interface SearchPicturesAction {
	type: ActionType.SEARCH_PICTURES;
}

interface EmptyResponseAction {
	type: ActionType.EMPTY_RESPONSE;
	payload: string;
}

export type PhotosAction = SetErrorAction | GetPhotosAction | SearchPicturesAction | EmptyResponseAction;