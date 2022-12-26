/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unused-vars */
import FacebookLogin, {
	type ProfileSuccessResponse, type FB,
} from '@greatsumini/react-facebook-login';
import React, {useState} from 'react';
import {CiFacebook} from 'react-icons/ci';
import {type UserDataType} from '../../data/data';
import {UserSingUpAndLogin} from '../../state/action-types';
import {useActions} from '../../state/hooks/useActions';

declare global {
	interface Window {
		FB: FB;
	}
}

export const Facebook = () => {
	const [, setData] = useState<string | undefined>();

	const {handleRightDrawer, handleUser} = useActions();

	const getStatus = () => { // ERASE THIS CODE WHEN THE LOGOUT BUTTON IS READY 
		window.FB.getLoginStatus((response) => {
			console.log(response);
		});
	};

	const handleCloseFaceBookSession = () => {
		window.FB.logout((res: unknown) => {
			console.log(res);
		});
	};

	const prepareUserRawUserInfo = (response: ProfileSuccessResponse): UserDataType => ({
		email: response.email!,
		name: response.name!,
		picture: `https://graph.facebook.com/${response.id!}/picture`,
		userId: response.id!,
		given_name: response.name?.split(' ')[0] || 'Anonymous',
		family_name: response.name?.split(' ')[1] || '',
		userLogged: true,
	});

	return (
		<div className="bg-white flex items-center rounded-md w-fit select-none border-2">
			<FacebookLogin
				appId={process.env.REACT_APP_FACEBOOK_LOGIN_API_KEY!}
				onSuccess={(response) => {
					// console.log(response);
				}}

				onFail={(error) => {
					console.log('Login Failed!', error);
				}}

				onProfileSuccess={(response) => {
					// console.log('Get Profile Success!', response);
					handleRightDrawer();
					handleUser(prepareUserRawUserInfo(response), UserSingUpAndLogin.USER_LOGIN_IN);
				}}

				className="flex items-center"
			>
				<CiFacebook size={40} color="blue" />
				<p className="mx-5">Login with Facebook</p>
			</FacebookLogin>
			{/* // ERASE THIS CODE WHEN THE LOGOUT BUTTON IS READY  */}
			{/* <button type='button' onClick={getStatus}>getStatus</button> */}
			{/* <button type='button' className='m-20' onClick={handleCloseFaceBookSession}>close</button> */}
		</div>
	);
};
