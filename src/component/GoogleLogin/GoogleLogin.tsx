import React from 'react';
import {type CredentialResponse, GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {useActions} from '../../state/hooks/useActions';
import {type UserDataType} from '../../data/data';
import {UserSingUpAndLogin} from '../../state/action-types';

export const Google = () => {
	const {handleRightDrawer, handleUser} = useActions();

	const prepareUserRawUserInfo = (response: UserDataType): UserDataType => ({
		email: response.email,
		name: response.name,
		picture: response.picture,
		userId: response.userId,
		given_name: response.given_name,
		family_name: response.family_name,
		userLogged: true,
	});

	const userLogin = (response: CredentialResponse) => {
		if (response.credential) {
			const decodedResponse: UserDataType = jwt_decode(response.credential);
			const preparedInfo = prepareUserRawUserInfo(decodedResponse);
			sessionStorage.setItem('usedLogged', 'true');
			sessionStorage.setItem('currentUser', JSON.stringify(preparedInfo));
			handleUser(preparedInfo, UserSingUpAndLogin.USER_LOGIN_IN);
		}
	};

	return (
		<GoogleLogin
			onSuccess={(credentialResponse) => {
				userLogin(credentialResponse);
				handleRightDrawer();
			}}
			onError={() => {
				console.log('Login Failed');
			}}

			text="continue_with"
			locale="en"
		/>
	);
};
