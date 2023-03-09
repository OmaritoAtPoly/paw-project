import {extendedDefaultUser} from '../../data/data';
import {UserSingUpAndLogin} from '../action-types';
import {type UserLogAction} from '../actions';

export const UserLoginReducer = (state = extendedDefaultUser, action: UserLogAction): Components.Schemas.UserDto => {
	if (action.type === UserSingUpAndLogin.USER_LOGIN_IN) {
		const {email, firstName, lastName, username, password} = action.payload;
		return {email, firstName, lastName, username, password};
	}

	if (action.type === UserSingUpAndLogin.USER_LOGOUT) return action.payload;

	return state;
};
