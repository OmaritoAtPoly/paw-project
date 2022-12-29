import React from 'react';
import {type CredentialResponse, GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {useActions} from '../../state/hooks/useActions';
import {type UserDataType} from '../../data/data';
import {LoggedFromPlatform, UserSingUpAndLogin} from '../../state/action-types';
import {handleUserLogin} from '../../utils/functions';

export const Google = () => {
	const {handleRightDrawer, handleUser} = useActions();

	const prepareUserRawUserInfo = (response: UserDataType): UserDataType => ({
		email: response.email,
		name: response.name,
		picture: response.picture || 'defaultUserPic.png',
		userId: response.userId,
		given_name: response.given_name,
		family_name: response.family_name,
		userLogged: true,
		loggedFrom: LoggedFromPlatform.GOOGLE,
	});

	const userLogin = (response: CredentialResponse) => {
		if (response.credential) {
			const decodedResponse: UserDataType = jwt_decode(response.credential);
			const preparedInfo = prepareUserRawUserInfo(decodedResponse);
			handleUserLogin(preparedInfo);
			handleUser(preparedInfo, UserSingUpAndLogin.USER_LOGIN_IN);
		}
	};

	const handleLoginUser = (credentialResponse: CredentialResponse) => {
		userLogin(credentialResponse);
		handleRightDrawer();		
	};

	return (
		<GoogleLogin
			// onSuccess={(credentialResponse) => {
			// 	userLogin(credentialResponse); DO NOT ERASE THIS METHOD FOR INFORMATION PURPOSE 
			// 	handleRightDrawer();
			// }}
			onSuccess={handleLoginUser}

			onError={() => {
				console.log('Login Failed');
			}}

			text="continue_with"
			locale="en"
		/>
	);
};
