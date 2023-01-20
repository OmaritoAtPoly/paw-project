import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/24/outline';
import React, {Fragment, useCallback, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {defaultUser, type UserDataType} from '../data/data';
import {type RootState} from '../state';
import {LoggedFromPlatform, UserSingUpAndLogin} from '../state/action-types';
import {useActions} from '../state/hooks/useActions';
import {handleUserLogin} from '../utils/functions';
import {authenticateUser} from '../utils/hooks/authenticateUser';
import {SignUpForm} from './loginComponent';

export const RightDrawer = () => {
	const {drawerStatus} = useSelector((state: RootState) => state.drawer);
	const {handleRightDrawer, handleUser} = useActions();

	const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);

	const handleErrorAlert = useCallback(() => {
		setShowErrorAlert(!showErrorAlert);
	}, [showErrorAlert]);

	const onSubmit = async (values: {
		email: string;
		password: string;
		rememberMe: boolean;
	}) => {
		const {email, password} = values;
		const webUser: UserDataType = {
			...defaultUser,
			email,
			picture: 'defaultUserPic.png',
			name: email.split('@')[0],
			family_name: email.split('@')[1],
			loggedFrom: LoggedFromPlatform.WEB,
			userLogged: true,
		};

		const existingUser = await authenticateUser(email, password);
		if (existingUser && existingUser.length > 0) {
			handleRightDrawer();
			handleUser(webUser, UserSingUpAndLogin.USER_LOGIN_IN);
			handleUserLogin({...webUser, rol: existingUser[0].rol});
		} else handleErrorAlert();
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (showErrorAlert)
				handleErrorAlert();
		}, 2000);
		return () => {
			clearTimeout(timer);
		};

	}, [handleErrorAlert, showErrorAlert]);

	return (
		<Transition.Root show={drawerStatus} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={handleRightDrawer}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
											<button
												type="button"
												className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
												onClick={handleRightDrawer}
											>
												<span className="sr-only">Close panel</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex flex-col overflow-y-scroll shadow-xl">
										<div className="px-4 sm:px-6 h-fit bg-rose-50 pt-3">
											<Dialog.Title className="text-lg font-medium text-gray-900 flex flex-col items-center">
												<p className="text-2xl text-primary">
													Join us for free & for ever
												</p>
											</Dialog.Title>
										</div>
										{/* <!-- Global Container --> */}
										<div className="flex justify-center bg-rose-50">
											<div className="h-fit shadow-2xl rounded-2xl">
												<SignUpForm onSubmit={onSubmit} showErrorAlert={showErrorAlert} handleErrorAlert={handleErrorAlert} />
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
