import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {RegisterForm} from '../component/registerComponent/RegisterForm';
import {useUserApiCalls} from '../utils/apiCalls/userApiCalls/register';

export const Register = () => {

	const navigate = useNavigate();
	const {register} = useUserApiCalls();

	const onSubmitForm = useCallback(async (newUser: Components.Schemas.UserDto) => {
		await register(newUser);
	}, [register]);

	const normalizeUserData = (value: {firstName: string; lastName: string; email: string; password: string; confirmationPassword: string; userName: string}): Components.Schemas.UserDto => {
		return {
			firstName: value.firstName,
			lastName: value.lastName,
			email: value.email,
			password: value.password,
			username: value.userName,
		};
	};

	return (
		<RegisterForm navigate={navigate} onSubmitForm={onSubmitForm} normalizeUserData={normalizeUserData} />);
};

// export const userLoader = async (): Promise<UserDataType> => {
// 	const value: AxiosResponse<UserDataType> = await axios.get(
// 		'http://localhost:4000/users',
// 	);
// 	if (value.status !== 200) throw new Error(value.status.toString());
// 	const response = value.data;

// 	return response;
// };
