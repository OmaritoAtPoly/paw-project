import {useFormik} from 'formik';
import React from 'react';
import {RxThickArrowRight} from 'react-icons/rx';
import {useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import {type DefaultUserDataType} from '../../data/data';
import {encryptUserPassword} from '../../utils/functions';
import CardAlert from '../CardAlert';

const RegisterSchema = yup.object().shape({
	name: yup.string().required('Required'),
	lastName: yup.string().required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
	password: yup.string().required('Required'),
	confirmationPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'passwords must match')
		.required('Required'),
});

export const RegisterForm = () => {
	const varr = false; //////////////////  remove this when the backed gave me a valid response
	const navigate = useNavigate();
	const prepareDataToSubmit = (value: DefaultUserDataType) => ({
		name: value.name,
		lastName: value.lastName,
		email: value.email,
		password: encryptUserPassword(value.password),
	});

	const {handleSubmit, values, handleChange, errors, touched} = useFormik({
		initialValues: {
			name: '',
			lastName: '',
			email: '',
			password: '',
			confirmationPassword: '',
		},

		onSubmit: (formValues, actions) => {
			console.log('formValues', prepareDataToSubmit(formValues));
			sessionStorage.setItem('user', JSON.stringify(prepareDataToSubmit(formValues)));
			actions.resetForm();
			navigate('/');
		},
		validationSchema: RegisterSchema,
	});

	return (
		<div className='h-full flex justify-between items-center flex-col'>
			<form
				onSubmit={handleSubmit}
				className="flex flex-wrap justify-center sm:justify-around sm:w-[70vw] h-full"
			>
				{varr
					? (
						<div className="w-full flex justify-center">
							<CardAlert
								cardInfo="WRONG_CREDENTIALS"
								handleOnClose={() => { }}
							/>
						</div>
					) : (
						<>
							<div className='w-fit  flex flex-col justify-center lg:w-full lg:flex-row lg:justify-between drop-shadow-xl'>
								<label htmlFor="name">
									<p className='my-2'>
										Name
									</p>
									<input
										id="name"
										name="name"
										type="text"
										onChange={handleChange}
										value={values.name}
										placeholder="write your name"
										className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
									/>

									{errors.name && touched.name ? (
										<div className="text-red-500">{errors.name}</div>
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
							</div>
							<div className=' w-full flex flex-col items-center lg:w-full lg:flex-row lg:justify-evenly drop-shadow-xl'>
								<label htmlFor="password">
									<p className='my-2'>
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
									<p className='my-2'>
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
						</>
					)}
				<button
					type="submit"
					className="w-fit flex justify-center items-center mx-auto p-2 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-primary/70 shadow-blue-200 hover:shadow-lg hover:scale-y-105 duration-200"
				>
					<span>Next</span>
					<RxThickArrowRight />
				</button>
			</form >
		</div>
	);
};
