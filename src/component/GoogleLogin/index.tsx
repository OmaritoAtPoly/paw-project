/* eslint-disable @typescript-eslint/no-unused-vars */
import FacebookLogin, {
	type SuccessResponse,
	type FB,
} from '@greatsumini/react-facebook-login';
import React, {useState} from 'react';
import {FcGoogle} from 'react-icons/fc';

declare global {
	interface Window {
		FB: FB;
	}
}

export const Google = () => {
	const [, setData] = useState<SuccessResponse>();

	// erase this code when the logout feature is done
	const getStatus = () => {
		window.FB.getLoginStatus((response) => {
			console.log(response);
		});
	};

	// erase this code when the logout feature is done
	const handleCloseFaceBookSession = () => {
		window.FB.logout((res: unknown) => {
			console.log(res);
			setData(undefined);
		});
	};

	return (
		< div className="bg-red-200 flex items-center rounded-xl w-fit select-none">
			<FcGoogle size={30} color='blue' className='m-1' />
			<p className='mx-7'>Login with Google</p>
		</div >
	);
};
