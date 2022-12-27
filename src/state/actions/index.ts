import {type Photo} from 'pexels';
import {type UserDataType} from '../../data/data';
import {type AvailablePetsActionType, type ActionType, type UserSingUpAndLogin} from '../action-types';

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

interface HandleRightDrawerAction {
	type: ActionType.HANDLE_RIGHT_DRAWER;
}

export interface RightDrawerState {
	drawerStatus: boolean;
}

export type RightDrawerActions = HandleRightDrawerAction;

interface SearchAvailablePetsAction {
	type: AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS;
}
interface GetAvailablePetsAction {
	type: AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS_SUCCESS;
	payload: {
		photos: Photo[];
		page: number;
		total_results: number;
		loading: boolean;
	};
}

interface SetAvailablePetsErrorAction {
	type: AvailablePetsActionType.SEARCH_AVAILABLE_PETS_PHOTOS_ERROR;
	payload: string;
}
interface EmptyAvailablePetsResponseAction {
	type: ActionType.EMPTY_RESPONSE;
	payload: string;
}

interface SetAvailablePetsNameAction {
	type: AvailablePetsActionType.SET_AVAILABLE_PETS_NAME;
	payload: string;
}

export interface AvailablePetsName {
	availablePetsName: string;
}

export type AvailablePetsPhotosAction = GetAvailablePetsAction | SetAvailablePetsErrorAction | SearchAvailablePetsAction | SetAvailablePetsNameAction | SetAvailablePetsNameAction | EmptyAvailablePetsResponseAction;

interface UserLogInAction {
	type: UserSingUpAndLogin.USER_LOGIN_IN;
	payload: UserDataType;
}

interface UserLogOutAction {
	type: UserSingUpAndLogin.USER_LOGOUT;
	payload: UserDataType;
}

export type UserLogAction = UserLogInAction | UserLogOutAction;