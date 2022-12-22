/* eslint-disable @typescript-eslint/no-unused-vars */
import FacebookLogin, {
	type SuccessResponse,
	type FB,
} from '@greatsumini/react-facebook-login';
import React, {useState} from 'react';
import {CiFacebook} from 'react-icons/ci';
import {useActions} from '../../state/hooks/useActions';

declare global {
	interface Window {
		FB: FB;
	}
}

export const Facebook = () => {
	const [, setData] = useState<SuccessResponse>();

	const {handleRightDrawer} = useActions();

	const getStatus = () => { // ERASE THIS CODE WHEN THE LOGOUT BUTTON IS READY 
		window.FB.getLoginStatus((response) => {
			console.log(response);
		});
	};

	const handleCloseFaceBookSession = () => {
		window.FB.logout((res: unknown) => {
			console.log(res);
			setData(undefined);
		});
	};

	return (
		< div className="bg-blue-200 flex items-center rounded-xl w-fit select-none">
			<FacebookLogin
				appId={process.env.REACT_APP_FACEBOOK_LOGIN_API_KEY!}
				onSuccess={(response) => {
					if (response) setData(response);
				}}
				onFail={(error) => {
					console.log('Login Failed!', error);
				}}
				onProfileSuccess={(response) => {
					// console.log('Get Profile Success!', response);
					handleRightDrawer();
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
