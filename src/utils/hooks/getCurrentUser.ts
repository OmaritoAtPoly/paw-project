import {defaultUser, type UserDataType} from '../../data/data';

export const useGetCurrentUser = (): UserDataType => {
	let currentLoggedUser = defaultUser;
	const value = sessionStorage.getItem('currentUser');
	if (value) currentLoggedUser = JSON.parse(value) as UserDataType;
	return {
		email: currentLoggedUser.email,
		family_name: currentLoggedUser.family_name,
		given_name: currentLoggedUser.given_name,
		loggedFrom: currentLoggedUser.loggedFrom,
		name: currentLoggedUser.name,
		password: currentLoggedUser.password,
		picture: currentLoggedUser.picture,
		userId: currentLoggedUser.userId,
		userLogged: currentLoggedUser.userLogged,
	};
};