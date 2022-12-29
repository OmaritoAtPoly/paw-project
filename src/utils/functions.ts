import {type UserDataType} from '../data/data';

export const handleUserLogin = (preparedInfo: UserDataType) => {
	sessionStorage.setItem('usedLogged', 'true');
	sessionStorage.setItem('currentUser', JSON.stringify(preparedInfo));
};

export const LogoutUserFromSessionStorage = () => {
	sessionStorage.removeItem('currentUser');
	sessionStorage.removeItem('usedLogged');
};
