import {compare, genSaltSync, hashSync} from 'bcryptjs';
import {type DefaultUserDataType, type UserDataType} from '../data/data';

export const handleUserLogin = (preparedInfo: UserDataType) => {
	sessionStorage.setItem('usedLogged', 'true');
	sessionStorage.setItem('currentUser', JSON.stringify(preparedInfo));
};

export const LogoutUserFromSessionStorage = () => {
	sessionStorage.removeItem('currentUser');
	sessionStorage.removeItem('usedLogged');
};

export const encryptUserPassword = (password: string) => hashSync(password, genSaltSync(7));

//// erase this function when when the backend is working 
export const auxiliar = async (email: string, password: string) => {
	const currentUser = sessionStorage.getItem('user');
	if (currentUser) {
		const value = JSON.parse(currentUser) as DefaultUserDataType;
		const validated = compare(password, value.password);

		if (await validated && (value.email === email)) return value;
	}

	return currentUser;
};