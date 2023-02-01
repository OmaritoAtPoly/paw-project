import React from 'react';
import {RegisterForm} from '../component/registerComponent/RegisterForm';

export const Register = () => (
	<div className="flex justify-around align-middle items-center lg:h-[17vw]">
		<RegisterForm />
	</div>
);

// export const userLoader = async (): Promise<UserDataType> => {
// 	const value: AxiosResponse<UserDataType> = await axios.get(
// 		'http://localhost:4000/users',
// 	);
// 	if (value.status !== 200) throw new Error(value.status.toString());
// 	const response = value.data;

// 	return response;
// };
