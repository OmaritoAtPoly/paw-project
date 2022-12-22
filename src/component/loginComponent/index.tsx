import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {RxThickArrowRight} from 'react-icons/rx';
import {Facebook} from '../FacebookLogin';
import {Google} from '../GoogleLogin';

interface Props {
	onSubmit: ((value: {email: string; password: string; rememberMe: boolean}) => void);
}
const SignInSchema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Required'),
	password: yup.string().required('Required'),
});

export const SignUpForm = ({onSubmit}: Props) => {
	const {handleSubmit, values, handleChange, errors, touched, setFieldValue} = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false,
		},

		onSubmit: (formValues) => {
			alert(JSON.stringify(formValues, null, 2));
			onSubmit(formValues);
		},
		validationSchema: SignInSchema,
	});

	const handleCheckBox = async () => {
		await setFieldValue('rememberMe', !values.rememberMe);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-6 pt-0 flex flex-col h-[700px] justify-around w-[350px]"
		>
			<div
				className="mx-auto w-[70px] h-[70px] flex justify-center items-center rounded-full border border-blue-300  hover:bg-blue-100"
				onClick={() => {
					alert('go home');
				}}
				onKeyUp={() => { }}
				role="button"
				tabIndex={0}
				aria-label="hidden text"
			>
				<img src="animal-shelter.png" alt="logo" width={50} height={50} />
			</div>
			<h2 className="font-mono text-3xl font-bold">Log In</h2>
			<label htmlFor="mail">
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
				<input
					id="password"
					name="password"
					type="password"
					onChange={handleChange}
					value={values.password}
					placeholder="write your password"
					className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light outline-none"
				/>
				{errors.password && touched.password ? (
					<div className="text-red-500">{errors.password}</div>
				) : null}
			</label>
			<div className="flex justify-between">
				<div role="group" aria-labelledby="checkbox-group" className="flex">
					<input name="rememberMe" type="checkbox" onChange={handleChange} checked={values.rememberMe} />
					<span
						className="text-blue-900 text-center ml-3"
						onClick={handleCheckBox}
						onKeyUp={() => { }}
						role="button"
						tabIndex={0}
						aria-label="hidden alert"
					>
						Remember me
					</span>
				</div>
				<p className="text-blue-900 text-center">Forgot password</p>
			</div>
			<button
				type="submit"
				className="w-full flex justify-center items-center p-2 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-primary/70 shadow-blue-200 hover:shadow-lg hover:scale-y-105 duration-200"
			>
				<span>Next</span>
				<RxThickArrowRight />
			</button>
			{/* <!-- Border --> */}
			{/* <div className="border-b border-b-gray-600" /> */}
			{/* <!-- Bottom Content --> */}
			<p className="text-sm font-bold text-center text-black select-none">
				or log in with
			</p>
			<div className="mb-7 mx-auto h-[110px] flex justify-between flex-col">
				<Facebook />
				<Google />
			</div>
		</form>
	);
};
