import {type FormikErrors, type FormikTouched} from 'formik';
import React from 'react';
import {RxThickArrowRight} from 'react-icons/rx';
import {NavLink} from 'react-router-dom';
import {WRONG_CREDENTIALS} from '../../utils/constants';
import CardAlert from '../CardAlert';

interface Props {
	handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
	handleChange: {
		(e: React.ChangeEvent<any>): void;
		<T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent) => void;
	};
	values: {
		email: string;
		password: string;
		rememberMe: boolean;
	};
	errors: FormikErrors<{
		email: string;
		password: string;
		rememberMe: boolean;
	}>;
	touched: FormikTouched<{
		email: string;
		password: string;
		rememberMe: boolean;
	}>;
	handleCheckBox: () => Promise<void>;
	showErrorAlert: boolean;
	handleErrorAlert: () => void;
}

export const LoginForm = ({
	handleSubmit,
	handleChange,
	values,
	errors,
	touched,
	handleCheckBox,
	showErrorAlert,
	handleErrorAlert,
}: Props) => (
	<form
		onSubmit={handleSubmit}
		className="h-[200px] flex flex-col justify-between mt-[-10px]"
	>
		{showErrorAlert
			? (
				<div className="w-full flex justify-center">
					<CardAlert
						cardInfo={WRONG_CREDENTIALS}
						handleOnClose={handleErrorAlert}
					/>
				</div>
			) : (
				<>
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
				</>
			)}
		<div
			className={` flex justify-between ${errors.password ? 'mt-3 mb-3' : ''} `}
		>
			<div role="group" aria-labelledby="checkbox-group" className="flex">
				<input
					name="rememberMe"
					type="checkbox"
					onChange={handleChange}
					checked={values.rememberMe}
				/>
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
		<NavLink to='register' className='hover:text-purple-900 hover:underline hover:underline-offset-1 text-center w-fit mx-auto mb-[-20px]'>Not register yet_?</NavLink>
	</form >
);
