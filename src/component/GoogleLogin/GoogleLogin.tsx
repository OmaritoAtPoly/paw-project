import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useActions} from '../../state/hooks/useActions';

export const Google = () => {
	const {handleRightDrawer} = useActions();

	return (
		<GoogleLogin
			onSuccess={(credentialResponse) => {
				console.log(credentialResponse);
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
