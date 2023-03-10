import {compare, genSaltSync, hashSync} from 'bcryptjs';
import {type DefaultUserDataType} from '../data/data';

// export const handleUserLogin = (preparedInfo: ExtendedUserType) => {
// 	sessionStorage.setItem('usedLogged', 'true');
// 	sessionStorage.setItem('currentUser', JSON.stringify(preparedInfo));
// };

export const LogoutUserFromSessionStorage = () => {
	sessionStorage.removeItem('currentUser');
	sessionStorage.removeItem('usedLogged');
};

export const encryptUserPassword = (password: string) => hashSync(password, genSaltSync(7));

//// TODO erase this function when when the backend is working 
export const auxiliar = async (email: string, password: string) => {
	const currentUser = sessionStorage.getItem('user');
	if (currentUser) {
		const value = JSON.parse(currentUser) as DefaultUserDataType;
		const validated = compare(password, value.password);

		if (await validated && (value.email === email)) return value;
	}

	return currentUser;
};

export const cleanString = (value: string) => {
	const newValue = value.split(',');

	return newValue.filter((a) => a !== '').join(', ');
};

