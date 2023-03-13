import {useFormik} from 'formik';
import React from 'react';
import {RxThickArrowRight} from 'react-icons/rx';
import * as yup from 'yup';
import CardAlert from '../CardAlert';

interface Props {
	navigate: (path: string) => void;
	onSubmitForm: (newUser: Components.Schemas.UserDto) => void;
	normalizeUserData: (value: {
		firstName: string;
		lastName: string;
		userName: string;
		email: string;
		password: string;
		confirmationPassword: string;
	}) => Components.Schemas.UserDto;
}

const RegisterSchema = yup.object().shape({
	firstName: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
	password: yup.string().min(8, 'grater than 8 chars').required('Required'),
	confirmationPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'passwords must match')
		.required('Required'),
});

export const RegisterForm = ({navigate, onSubmitForm, normalizeUserData}: Props) => {
	const varr = false; //////////////////  remove this when the backed gave me a valid response

	const {handleSubmit, values, handleChange, errors, touched} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmationPassword: '',
			userName: '',
		},

		onSubmit: (formValues, actions) => {
			const normalized = normalizeUserData(formValues);
			onSubmitForm(normalized);
			sessionStorage.setItem('user', JSON.stringify((formValues)));
			actions.resetForm();
			navigate('/');
		},
		validationSchema: RegisterSchema,
	});

	return (
		<div className='flex justify-between items-center flex-col'>
			<form
				onSubmit={handleSubmit}
			>
				{/* TODO este componente logico se cambiara cuando  el server este implementado*/}
				{varr
					? (
						<div className="w-full flex justify-center">
							<CardAlert
								cardInfo="WRONG_CREDENTIALS"
								handleOnClose={() => { }}
							/>
						</div>
					) : (
						<div className='w-fit flex flex-col lg:justify-between drop-shadow-xl h-fit'>
							<label htmlFor="firstName">
								<p className='my-2'>
									Name
								</p>
								<input
									id="firstName"
									name="firstName"
									type="text"
									onChange={handleChange}
									value={values.firstName}
									placeholder="write your name"
									className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
								/>
								{errors.firstName && touched.firstName ? (
									<div className="text-red-500">{errors.firstName}</div>
								) : null}
							</label>
							<label htmlFor="lastName">
								<p className='my-2'>
									LastName
								</p>
								<input
									id="lastName"
									name="lastName"
									type="text"
									onChange={handleChange}
									value={values.lastName}
									placeholder="write your last name"
									className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
								/>
								{errors.lastName && touched.lastName ? (
									<div className="text-red-500">{errors.lastName}</div>
								) : null}
							</label>
							<label htmlFor="userName">
								<p className='my-2'>
									User Name
								</p>
								<input
									id="userName"
									name="userName"
									type="text"
									onChange={handleChange}
									value={values.userName}
									placeholder="write your last name"
									className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
								/>
								{errors.userName && touched.userName ? (
									<div className="text-red-500">{errors.userName}</div>
								) : null}
							</label>
							<label htmlFor="email">
								<p className='my-2'>
									Email
								</p>
								<input
									id="email"
									name="email"
									type="text"
									onChange={handleChange}
									value={values.email}
									placeholder="write your mail"
									className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
								/>
								{errors.email && touched.email ? (
									<div className="text-red-500">{errors.email}</div>
								) : null}
							</label>
							<label htmlFor="password">
								<p className='my-2 lg:mt:0'>
									Credentials
								</p>
								<input
									id="password"
									name="password"
									type="password"
									onChange={handleChange}
									value={values.password}
									placeholder="write your password"
									className="w-fit p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
								/>
								{errors.password && touched.password ? (
									<div className="text-red-500">{errors.password}</div>
								) : null}
							</label>
							<label htmlFor="confirmationPassword">
								<p className='my-2 lg:mt:0'>
									Repeat Again
								</p>
								<input
									id="confirmationPassword"
									name="confirmationPassword"
									type="password"
									onChange={handleChange}
									value={values.confirmationPassword}
									placeholder="Confirm again your password"
									className="w-fit p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
								/>
								{errors.confirmationPassword && touched.confirmationPassword ? (
									<div className="text-red-500">{errors.confirmationPassword}</div>
								) : null}
							</label>
						</div>
					)}
				<button
					type="submit"
					className="w-fit flex justify-center items-center mx-auto p-2 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-primary/70 shadow-blue-200 mt-5 mb-5 hover:shadow-lg hover:scale-y-105 duration-200"
				>
					<span>Next</span>
					<RxThickArrowRight />
				</button>
			</form >
		</div>
	);
};
