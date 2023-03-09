import {type Dispatch} from 'redux';
import {UserSingUpAndLogin} from '../action-types';
import {type UserLogAction} from '../actions';

export const handleUser = (value: Components.Schemas.UserDto, action: string) => {
	return async (dispatch: Dispatch<UserLogAction>) => {

		if (action === UserSingUpAndLogin.USER_LOGIN_IN) {
			dispatch({
				type: UserSingUpAndLogin.USER_LOGIN_IN,
				payload: value,
			});
		}

		if (action === UserSingUpAndLogin.USER_LOGOUT) {
			dispatch({
				type: UserSingUpAndLogin.USER_LOGOUT,
				payload: value,
			});
		}

	};
};
