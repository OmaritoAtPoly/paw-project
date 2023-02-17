export enum ActionType {
	SEARCH_REPOSITORIES = 'search_repositories',
	SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
	SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',

	GET_PHOTOS = 'get_photos',
	SET_ERROR = 'set_error',
	SEARCH_PICTURES = 'search_pictures',
	EMPTY_RESPONSE = 'empty_response',

	HANDLE_RIGHT_DRAWER = 'handle_drawer',
}

export enum AvailablePetsActionType {
	SEARCH_AVAILABLE_PETS_PHOTOS = 'search_available_pets_photos',
	SEARCH_AVAILABLE_PETS_PHOTOS_SUCCESS = 'search_available_pets_photos_success',
	SEARCH_AVAILABLE_PETS_PHOTOS_ERROR = 'search_available_pets_photos_error',
	SET_AVAILABLE_PETS_NAME = 'set_available_pets_pets_name',
}

export enum UserSingUpAndLogin {
	USER_LOGIN_IN = 'user_login_in',
	USER_LOGOUT = 'user_log_out',
}

export enum LoggedFromPlatform {
	FACEBOOK = 'facebook',
	GOOGLE = 'google',
	WEB = 'web',
}

export enum EditablePet {
	EDITABLE_PET = 'EditablePet',
}
