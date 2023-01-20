import React from 'react';
import {GoogleLogin, type CredentialResponse, googleLogout} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {generate} from 'shortid';
import {type UserDataType} from '../../data/data';
import {LoggedFromPlatform, UserSingUpAndLogin} from '../../state/action-types';
import {useActions} from '../../state/hooks/useActions';
import {handleUserLogin} from '../../utils/functions';
import {authenticateUser} from '../../utils/hooks/authenticateUser';

interface Props {
	handleErrorAlert: () => void;
}

export const Google = ({handleErrorAlert}: Props) => {
	const {handleRightDrawer, handleUser} = useActions();

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
		rol: '',
	});

	const userLogin = async (response: CredentialResponse) => {
		if (response.credential) {

			const decodedResponse: UserDataType = jwt_decode(response.credential);
			const existingUser = await authenticateUser(undefined, undefined, response.clientId);

			if (existingUser && existingUser.length > 0) {
				const preparedInfo = prepareUserRawUserInfo(decodedResponse);
				handleUserLogin({...preparedInfo, rol: existingUser[0].rol});
				handleUser({...preparedInfo, rol: existingUser[0].rol}, UserSingUpAndLogin.USER_LOGIN_IN);
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
