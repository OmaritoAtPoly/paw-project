import React, {useCallback} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Facebook} from '../FacebookLogin/FacebookLogin';
import {Google} from '../GoogleLogin/GoogleLogin';
import {LoginForm} from './LoginForm';

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

		onSubmit: (formValues, actions) => {
			onSubmit(formValues);
			actions.resetForm();
		},
		validationSchema: SignInSchema,
	});

	const handleCheckBox = useCallback(async () => {
		await setFieldValue('rememberMe', !values.rememberMe);
	}, [setFieldValue, values.rememberMe]);

	return (
		<div
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
			<h2 className="font-mono text-3xl font-bold mt-[-30px]">Log In</h2>
			<LoginForm errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} touched={touched} values={values} handleCheckBox={handleCheckBox} />

			<p className="text-sm font-bold text-center text-black select-none">
				or log in with
			</p>
			<div className="mb-16 mx-auto h-[110px] flex justify-between flex-col">
				<Facebook />
				<Google />
			</div>
		</div>
	);
};
