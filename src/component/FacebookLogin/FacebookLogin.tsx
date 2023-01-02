/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import FacebookLogin, {type ProfileSuccessResponse} from '@greatsumini/react-facebook-login';
import React, {useCallback} from 'react';
import {CiFacebook} from 'react-icons/ci';
import {generate} from 'shortid';
import {type UserDataType} from '../../data/data';
import {LoggedFromPlatform, UserSingUpAndLogin} from '../../state/action-types';
import {useActions} from '../../state/hooks/useActions';
import {handleUserLogin} from '../../utils/functions';

export const Facebook = () => {
	const {handleRightDrawer, handleUser} = useActions();

	const prepareUserRawUserInfo = (response: ProfileSuccessResponse): UserDataType => ({
		email: response.email!,
		name: response.name!,
		password: generate(),
		picture: response.picture?.data.url || 'defaultUserPic.png',
		userId: response.id!,
		given_name: response.name?.split(' ')[0] || 'Anonymous',
		family_name: response.name?.split(' ')[1] || '',
		userLogged: true,
		loggedFrom: LoggedFromPlatform.FACEBOOK,
	});

	const handleFaceBookLogin = useCallback((response: ProfileSuccessResponse) => {
		const preparedUser = prepareUserRawUserInfo(response);

		handleRightDrawer();
		handleUser(preparedUser, UserSingUpAndLogin.USER_LOGIN_IN);
		handleUserLogin(preparedUser);

	}, [handleRightDrawer, handleUser]);

	return (
		<div className="bg-white flex items-center rounded-md w-fit select-none border-2">
			<FacebookLogin
				appId={process.env.REACT_APP_FACEBOOK_LOGIN_API_KEY!}
				// onSuccess={(response) => { DO NOT ERASE THIS METHOD FOR INFORMATION PURPOSE 
				// 	// console.log(response);
				// }}

				onFail={(error) => {
					console.log('Login Failed!', error);
				}}

				onProfileSuccess={(response) => {
					handleFaceBookLogin(response);
				}}

				className="flex items-center"
			>
				<CiFacebook size={40} color="blue" />
				<p className="mx-5">Login with Facebook</p>
			</FacebookLogin>
		</div>
	);
};
