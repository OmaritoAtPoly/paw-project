import {googleLogout} from '@react-oauth/google';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {MdFavorite} from 'react-icons/md';
import {TbTruckDelivery} from 'react-icons/tb';
import {defaultUser, type ItemElementType, type UserDataType} from '../data/data';
import {LoggedFromPlatform, UserSingUpAndLogin} from '../state/action-types';
import {useActions} from '../state/hooks/useActions';
import {useTypedSelector} from '../state/hooks/useTypedSelector';
import {LogoutUserFromSessionStorage} from '../utils/functions';
import GooglePexel from './GooglePexel';
import {RightComponentActionButtons} from './RightComponentActionButtons';

const Navbar = () => {
	const [navState, setNavState] = useState(false);
	const [currentUser, setCurrentUser] = useState<UserDataType>(defaultUser);
	const {name, picture, userId, email, userLogged, given_name, family_name, loggedFrom} = useTypedSelector(
		(state) => state.currentUser,
	);

	const {handleRightDrawer, handleUser} = useActions();

	const Logout = useCallback(() => {
		handleUser(defaultUser, UserSingUpAndLogin.USER_LOGOUT);
		setCurrentUser(defaultUser);
		LogoutUserFromSessionStorage();

		if (loggedFrom === LoggedFromPlatform.FACEBOOK) window.FB.logout(() => { });
		if (loggedFrom === LoggedFromPlatform.GOOGLE)  googleLogout();

	}, [handleUser, loggedFrom]);

	const currentUserValues = useCallback(() => {
		const value = sessionStorage.getItem('currentUser');
		let transformedValue;
		if (value) {
			transformedValue = JSON.parse(value) as UserDataType;
			setCurrentUser({
				name: name || transformedValue.name,
				picture: picture || transformedValue.picture,
				userId: userId || transformedValue.userId,
				email: email || transformedValue.email,
				userLogged: userLogged || transformedValue.userLogged,
				given_name: given_name || transformedValue.given_name,
				family_name: family_name || transformedValue.family_name,
				loggedFrom: loggedFrom || transformedValue.loggedFrom,
			});
		}

	}, [email, family_name, given_name, loggedFrom, name, picture, userId, userLogged]);

	useEffect(() => {
		currentUserValues();
	}, [currentUserValues]);

	const dropDownMenuValues: ItemElementType[] = useMemo(() => {
		const onClickExample = () => {
			console.log(`User Name ${currentUser.name}`);
		};

		return [{
			itemName: currentUser.name,
			imgUrl: currentUser.picture,
			userId: currentUser.userId,
			onClick: onClickExample,
		},
		{
			imgUrl: 'power.png',
			itemName: 'Logout',
			userId: currentUser.userId,
			onClick: Logout,
		},
		];

	}, [currentUser, Logout]);

	const handleNavState = () => {
		setNavState((prev) => !prev);
	};

	const handleCallFunction = () => {
		window.open('tel:111111');
	};

	return (
		<div className="mx-auto flex justify-between items-center p-4 sticky z-10 top-0 bg-white">
			{/* left side */}
			<div className="flex items-center w-[80px] md:w-[25vw]">
				<AiOutlineMenu
					size={30}
					onClick={handleNavState}
					className="cursor-pointer mx-auto md:m-0"
				/>
				<div className="hidden w-full md:flex md:items-center md:flex-col xl:flex-row xl:md:justify-around">
					<h1 className="hidden text-2xl sm:text-3xl px-2 select-none md:flex lg:text-4xl ">
						Best <span className="font-bold">Paw</span>
					</h1>

					<div className="hidden lg:flex items-center rounded-full p-1 text-[14px]">
						<p className="bg-black rounded-full text-white p-2">Delivery</p>
						<p className="p-2">Pick up</p>
					</div>
				</div>
			</div>

			{/* search input */}
			<GooglePexel />
			<RightComponentActionButtons
				handleCallFunction={handleCallFunction}
				handleRightDrawer={handleRightDrawer}
				dropDownMenuValues={dropDownMenuValues}
			/>
			{/* overlay */}
			{navState ? (
				<div
					className="bg-black/70 fixed w-full h-screen left-0 top-0"
					onClick={handleNavState}
					onKeyUp={handleNavState}
					role="button"
					tabIndex={0}
					aria-label="hidden text"
				/>
			) : (
				''
			)}
			{/* side drawer menu */}
			<div
				className={`${navState
					? 'fixed w-[300px] h-screen duration-300 bg-white left-0 top-0 z-10'
					: 'fixed w-[300px] h-screen duration-300 bg-white left-[-100%] top-0'} `}>
				<AiOutlineClose
					size={25}
					className="absolute right-4 top-4 cursor-pointer"
					onClick={handleNavState}
				/>
				<h2 className="text-2xl p-4">
					Best <span className="font-bold">Paw</span> Home
				</h2>
				<nav>
					<ul className="flex flex-col p-4">
						<li className="text-xl py-4 flex">
							<TbTruckDelivery size={25} className="mr-4" />
							Orders
						</li>
						<li className="text-xl py-4 flex">
							<MdFavorite size={25} className="mr-4" />
							Favorites
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
