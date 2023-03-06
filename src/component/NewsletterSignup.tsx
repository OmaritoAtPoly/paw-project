import React, {useState, useCallback} from 'react';
import {motion} from 'framer-motion';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {BiMailSend} from 'react-icons/bi';
import {WRONG_CREDENTIALS} from '../utils/constants';
import {FM_CASCADE_PARENT_VARIANTS, FM_SHOW_FROM_LEFT, FM_SLIDE_FROM_LEFT} from '../utils/framer-motion-settings';
import CardAlert from './CardAlert';

const SignInSchema = yup.object().shape({
	name: yup.string().required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
});

interface Values {
	name: string;
	email: string;
}

const NewsletterSignup = () => {
	const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);

	const handleErrorAlert = useCallback(() => {
		setShowErrorAlert(!showErrorAlert);
	}, [showErrorAlert]);

	const onSubmit = (values: Values) => {
		const {name, email} = values;
		console.log(name, email);
	};

	const {handleSubmit, values, handleChange, errors, touched} = useFormik({
		initialValues: {
			name: '',
			email: '',
		},

		onSubmit: (formValues, actions) => {
			onSubmit(formValues);
			actions.resetForm();
		},
		validationSchema: SignInSchema,
	});

	return (
		<motion.div variants={FM_CASCADE_PARENT_VARIANTS} initial="initial" whileInView="visible" className="container max-w-6xl mx-auto px-8 py-20">
			<div className='flex flex-col items-end md:flex-row md:items-center'>
				<motion.div variants={FM_SHOW_FROM_LEFT} className='drop-shadow-xl mb-12 max-w-xs rounded-tl-lg rounded-br-lg rounded-tr-[120px] rounded-bl-[120px] overflow-hidden md:mr-16 md:mb-0'>
					<img src={process.env.REACT_APP_NEWSPAPER_VISUAL} alt="Subscribe newspaper visual" />
				</motion.div>
				<div className='flex-1 w-full'>
					<motion.h3 variants={FM_SLIDE_FROM_LEFT} className='px-4 mb-16 text-4xl lg:text-5xl text-orange-paw'>Subscribe to our newsletter</motion.h3>
					
					<form onSubmit={handleSubmit}>
						{showErrorAlert
							? (
								<CardAlert
									cardInfo={WRONG_CREDENTIALS}
									handleOnClose={handleErrorAlert} />
							) : (
								<>
									<motion.div variants={FM_SLIDE_FROM_LEFT} className='mx-0 py-8 relative w-full md:w-3/6 md:mx-3'>
										<label className="absolute top-0 left mx-3" htmlFor="name">Full Name</label>
										<input
											id="name"
											name="name"
											type="text"
											onChange={handleChange}
											value={values.name}
											placeholder="John Doe"
											className="p-3 w-full focus:outline-none bg-white border border-zinc-400 rounded-full flex items-center" />
										{errors.name && touched.name ? (
											<div className="text-red-500 absolute bottom-0 left mx-3">{errors.name}</div>
										) : null}
									</motion.div>
									<motion.div variants={FM_SLIDE_FROM_LEFT} className='mx-0 py-8 relative w-full md:w-9/12 md:mx-3'>
										<label className='absolute top-0 left mx-3' htmlFor="email">Email address</label>
										<input
											id="email"
											name="email"
											type="text"
											onChange={handleChange}
											value={values.email}
											placeholder="name@mail.com"
											className="p-3 w-full focus:outline-none bg-white border border-zinc-400 rounded-full flex items-center" />
										{errors.email && touched.email ? (
											<div className="text-red-500 absolute bottom-0 left mx-3">{errors.email}</div>
										) : null}
									</motion.div>
									<motion.button
										variants={FM_SLIDE_FROM_LEFT}
										type="submit"
										className="text-2xl my-3 py-3 px-24 md:mx-3 lg:max-xs text-white rounded-full shadow-lg bg-purple-paw"
									>
										<BiMailSend />
									</motion.button>
								</>
							)}
					</form>
				</div>
			</div>
		</motion.div>
	);
};

export default NewsletterSignup;