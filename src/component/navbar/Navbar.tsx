import {googleLogout} from '@react-oauth/google';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {MdFavorite} from 'react-icons/md';
import {TbTruckDelivery} from 'react-icons/tb';
import {GrUserAdmin} from 'react-icons/gr';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {useKeycloak} from '@react-keycloak/web';
import {motion} from 'framer-motion';
import {
	defaultUser,
	type MenuElementType,
	type UserDataType,
} from '../../data/data';
import {LoggedFromPlatform, UserSingUpAndLogin} from '../../state/action-types';
import {useActions} from '../../state/hooks/useActions';
import {useTypedSelector} from '../../state/hooks/useTypedSelector';
import {LogoutUserFromSessionStorage} from '../../utils/functions';
import {useGetCurrentUser} from '../../utils/hooks/getCurrentUser';
import GooglePexel from '../GooglePexel';
import {RightComponentActionButtons} from './RightComponentActionButtons';
import {FM_CASCADE_PARENT_VARIANTS, FM_SHOW_FROM_LEFT} from '../../utils/framer-motion-settings';

const Navbar = () => {
	const [navState, setNavState] = useState(false);
	const [currentUser, setCurrentUser] = useState<UserDataType>(defaultUser);
	const {
		name,
		picture,
		userId,
		email,
		userLogged,
		given_name,
		family_name,
		loggedFrom,
		password,
		rol,
	} = useTypedSelector((state) => state.currentUser);

	const {keycloak} = useKeycloak();

	const {handleRightDrawer, handleUser} = useActions();
	const {pathname} = useLocation();
	const navigate = useNavigate();

	const Logout = useCallback(async () => {
		handleUser(defaultUser, UserSingUpAndLogin.USER_LOGOUT);
		setCurrentUser(defaultUser);
		LogoutUserFromSessionStorage();

		if (window.FB && loggedFrom === LoggedFromPlatform.FACEBOOK)
			window.FB.logout(() => { });
		if (loggedFrom === LoggedFromPlatform.GOOGLE) googleLogout();
		navigate('/');
		await keycloak.logout();
	}, [handleUser, keycloak, loggedFrom, navigate]);
	const transformedValue = useGetCurrentUser();

	const currentUserValues = useCallback(() => {
		setCurrentUser({
			name: name || transformedValue.name,
			picture: picture || transformedValue.picture,
			userId: userId || transformedValue.userId,
			email: email || transformedValue.email,
			userLogged: userLogged || transformedValue.userLogged,
			given_name: given_name || transformedValue.given_name,
			family_name: family_name || transformedValue.family_name,
			loggedFrom: loggedFrom || transformedValue.loggedFrom,
			password: password || transformedValue.password,
			rol: rol || transformedValue.rol,
		});

	}, [name, transformedValue.name, transformedValue.picture, transformedValue.userId, transformedValue.email, transformedValue.userLogged, transformedValue.given_name, transformedValue.family_name, transformedValue.loggedFrom, transformedValue.password, transformedValue.rol, picture, userId, email, userLogged, given_name, family_name, loggedFrom, password, rol]);

	useEffect(() => {
		if (!transformedValue.email) return;
		currentUserValues();
	}, [currentUserValues, transformedValue.email]);

	const dropDownMenuValues: MenuElementType[] = useMemo(() => {
		const onClickExample = () => {
			console.log(`User Name ${currentUser.name}`);
			console.log(`User id ${currentUser.userId}`);
		};

		return [
			{
				itemName: currentUser.name,
				userId: currentUser.userId,
				onClick: onClickExample,
			},
			{
				icon: {
					iconName: 'logout',
					iconWidth: 25,
					iconHeight: 25,
					iconClass: 'ml-3.5 mb-[-1px]',
				},
				itemName: 'Logout',
				userId: currentUser.userId,
				onClick: Logout,
			},
		];
	}, [currentUser, Logout]);

	const handleNavState = useCallback(() => {
		setNavState((prev) => !prev);
	}, []);

	const handleCallFunction = useCallback(() => {
		window.open('tel:111111');
	}, []);

	return (
		<motion.div variants={FM_CASCADE_PARENT_VARIANTS} initial="initial" whileInView="visible" viewport={{once: true}} className='bg-white py-4 sticky z-[1400] top-0 shadow-lg'>
			<div className='container mx-auto px-8'>
				<div className="flex justify-between items-center" aria-label='app-navbar'>
					{/* left side */}
					<div className="flex items-center mr-5">
						<motion.div variants={FM_SHOW_FROM_LEFT}>
							<AiOutlineMenu
								size={30}
								onClick={handleNavState}
								className="cursor-pointer mx-auto md:m-0"
								aria-label='hamburger-button'
							/>
						</motion.div>
						<motion.div variants={FM_SHOW_FROM_LEFT} className="hidden w-full md:flex md:items-center md:flex-col xl:flex-row xl:md:justify-around">
							<NavLink
								to="/"
								className="hidden text-2xl sm:text-3xl px-2 select-none md:flex lg:text-4xl "
							>
								Best <span className="font-bold">Paw</span>
							</NavLink>

							<div className="hidden bg-gray-200 lg:flex items-center rounded-full text-[14px]">
								<NavLink to='/pets' className="bg-black rounded-full text-white p-2">Delivery</NavLink>
								<NavLink to='/dashboard' className="p-2">Pick up</NavLink>
							</div>
						</motion.div>
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
							: 'fixed w-[300px] h-screen duration-300 bg-white left-[-100%] top-0'} `}
					>
						<AiOutlineClose
							size={25}
							className="absolute right-4 top-4 cursor-pointer"
							onClick={handleNavState}
						/>
						<h2 className="text-2xl p-4">
							<NavLink to="/" onClick={handleNavState}>
								Best <span className="font-bold">Paw</span> Home
							</NavLink>
						</h2>
						<nav>
							<ul className="flex flex-col p-4">
								{(currentUser.rol === 'admin' && pathname !== '/dashBoard') && <li className="text-xl py-4 flex">
									<GrUserAdmin size={25} className="mr-4" />
									<NavLink to='dashBoard' onClick={handleNavState}>DashBoard</NavLink>
								</li>}
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
			</div>
		</motion.div>
	);
};

export default Navbar;
