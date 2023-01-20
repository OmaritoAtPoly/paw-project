import {defaultUser, type UserDataType} from '../../data/data';
import {UserSingUpAndLogin} from '../action-types';
import {type UserLogAction} from '../actions';

export const UserLoginReducer = (state = defaultUser, action: UserLogAction): UserDataType => {
	if (action.type === UserSingUpAndLogin.USER_LOGIN_IN) {
		const {email, family_name, given_name, name, picture, userId, userLogged, loggedFrom, password, rol} = action.payload;
		return {email, family_name, given_name, name, picture, userId, userLogged, loggedFrom, password, rol};
	}

	if (action.type === UserSingUpAndLogin.USER_LOGOUT) return action.payload;

	return state;
};
