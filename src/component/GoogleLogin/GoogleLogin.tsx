import React, {useState} from 'react';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {useActions} from '../../state/hooks/useActions';
import {type UserDataType} from '../../data/data';

export const Google = () => {
	const {handleRightDrawer} = useActions();
	const [, setToken] = useState<UserDataType>();


	return (
		<GoogleLogin
			onSuccess={(credentialResponse) => {
				if (credentialResponse.credential) setToken(jwt_decode(credentialResponse.credential));
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
