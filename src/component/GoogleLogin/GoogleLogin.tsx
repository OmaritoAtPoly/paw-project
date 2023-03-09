/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {GoogleLogin, type CredentialResponse, googleLogout} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {generate} from 'shortid';
import {type UserDataType} from '../../data/data';
import {LoggedFromPlatform, UserSingUpAndLogin} from '../../state/action-types';
import {useActions} from '../../state/hooks/useActions';
import {authenticateUser} from '../../utils/hooks/authenticateUser';

interface Props {
	handleErrorAlert: () => void;
}

export const Google = ({handleErrorAlert}: Props) => {
	const {handleRightDrawer} = useActions();

	const prepareUserRawUserInfo = (response: UserDataType): UserDataType => ({
		email: response.email,
		name: response.name,
		password: generate(),
		picture: response.picture || 'defaultUserPic.png',
		userId: generate(),
		given_name: response.given_name,
		family_name: response.family_name,
		userLogged: true,
		loggedFrom: LoggedFromPlatform.GOOGLE,
		role: '',
	});

	const userLogin = async (response: CredentialResponse) => {
		if (response.credential) {

			const decodedResponse: UserDataType = jwt_decode(response.credential); // TODO HERE IS CHANGED THE ROLE FIELD DUE TO THE CHANGE OF KEYKEOAK
			const existingUser = await authenticateUser(undefined, undefined, response.clientId);

			if (existingUser && existingUser.length > 0) {
				const preparedInfo = prepareUserRawUserInfo(decodedResponse); // TODO HERE IS CHANGED THE ROLE FIELD DUE TO THE CHANGE OF KEYKEOAK
				// handleUserLogin({...preparedInfo, rol: existingUser[0].username}); // TODO HERE IS CHANGED THE ROLE FIELD DUE TO THE CHANGE OF KEYKEOAK
				// handleUser({...preparedInfo}, UserSingUpAndLogin.USER_LOGIN_IN); // TODO HERE IS CHANGED THE ROLE FIELD DUE TO THE CHANGE OF KEYKEOAK
				handleRightDrawer();
			} else {
				handleErrorAlert();
				googleLogout();
			}
		}
	};

	const handleLoginUser = (credentialResponse: CredentialResponse) => {
		void userLogin(credentialResponse);
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
