import {extendedDefaultUser, type ExtendedUserType} from '../../data/data';

export const useGetCurrentUser = (): ExtendedUserType => {
	let currentLoggedUser = extendedDefaultUser;
	const value = sessionStorage.getItem('currentUser');
	if (value) currentLoggedUser = JSON.parse(value) as ExtendedUserType;
	return {
		email: currentLoggedUser.email,
		lastName: currentLoggedUser.lastName,
		firstName: currentLoggedUser.firstName,
		password: '',
		username: currentLoggedUser.username,
		role: currentLoggedUser.role,
	};
};