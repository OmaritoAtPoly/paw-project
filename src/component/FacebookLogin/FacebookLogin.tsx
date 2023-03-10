import FacebookLogin, {type ProfileSuccessResponse} from '@greatsumini/react-facebook-login';
import React, {useCallback} from 'react';
import {CiFacebook} from 'react-icons/ci';
import {generate} from 'shortid';
import {type UserDataType} from '../../data/data';
import {LoggedFromPlatform} from '../../state/action-types';
import {useActions} from '../../state/hooks/useActions';
import {authenticateUser} from '../../utils/hooks/authenticateUser';

interface Props {
	handleErrorAlert: () => void;
}
export const Facebook = ({handleErrorAlert}: Props) => {
	const {handleRightDrawer} = useActions();

	const prepareUserRawUserInfo = (response: ProfileSuccessResponse): UserDataType => ({
		email: response.email!,
		name: response.name!,
		password: generate(),
		picture: response.picture?.data.url ?? 'defaultUserPic.png',
		userId: response.id!,
		given_name: response.name?.split(' ')[0] ?? 'Anonymous',
		family_name: response.name?.split(' ')[1] ?? '',
		userLogged: true,
		loggedFrom: LoggedFromPlatform.FACEBOOK,
		role: '',
	});

	const handleFaceBookLogin = useCallback(async (response: ProfileSuccessResponse) => {
		const preparedUser = prepareUserRawUserInfo(response);
		const existingUser = await authenticateUser(undefined, undefined, preparedUser.userId);

		if (existingUser && existingUser.length > 0) {
			handleRightDrawer();
			// handleUser({...preparedUser, rol: existingUser[0].rol}, UserSingUpAndLogin.USER_LOGIN_IN);
			// handleUserLogin({...preparedUser, rol: existingUser[0].rol});
		} else {
			handleErrorAlert();
			window.FB.logout(() => { });
		}

	}, [handleErrorAlert, handleRightDrawer]);

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
					void handleFaceBookLogin(response);
				}}

				className="flex items-center"
			>
				<CiFacebook size={40} color="blue" />
				<p className="mx-5">Login with Facebook</p>
			</FacebookLogin>
		</div>
	);
};
