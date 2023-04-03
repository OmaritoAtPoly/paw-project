import {useKeycloak} from '@react-keycloak/web';
import {motion} from 'framer-motion';
import jwtDecode from 'jwt-decode';
import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {GrUserAdmin} from 'react-icons/gr';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {MdFavorite} from 'react-icons/md';
import {TbTruckDelivery} from 'react-icons/tb';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {
	type ExtendedUserType,
	type MenuElementType,
	extendedDefaultUser,
	type TokenUserType,
} from '../../data/data';
import {UserSingUpAndLogin} from '../../state/action-types';
import {useActions} from '../../state/hooks/useActions';
import {
	FM_CASCADE_PARENT_VARIANTS,
	FM_SHOW_FROM_LEFT,
} from '../../utils/framer-motion-settings';
import {LogoutUserFromSessionStorage} from '../../utils/functions';
import GooglePexel from '../GooglePexel';
import {RightComponentActionButtons} from './RightComponentActionButtons';

const Navbar = () => {
	const [navState, setNavState] = useState(false);
	const {keycloak} = useKeycloak();

	const [currentUser, setCurrentUser] =
		useState<ExtendedUserType>(extendedDefaultUser);

	const initialUserValues = useCallback(() => {
		let decodeValues: TokenUserType;
		if (keycloak.token) {
			decodeValues = jwtDecode(keycloak.token);

			const value = {
				firstName: decodeValues.given_name,
				lastName: decodeValues.family_name,
				username: decodeValues.preferred_username,
				password: '',
				email: decodeValues.email,
				role: decodeValues.realm_access.roles.toString(),
			};

			if (value) setCurrentUser(value);
		}

		return extendedDefaultUser;
	}, [keycloak.token]);

	useEffect(() => {
		initialUserValues();
	}, [initialUserValues]);

	const {handleUser} = useActions();
	const {pathname} = useLocation();
	const navigate = useNavigate();

	const Login = () => {
		navigate('welcome');
	};

	const Logout = useCallback(async () => {
		handleUser(extendedDefaultUser, UserSingUpAndLogin.USER_LOGOUT);
		setCurrentUser(extendedDefaultUser);
		LogoutUserFromSessionStorage();

		// if (window.FB && loggedFrom === LoggedFromPlatform.FACEBOOK) // TODO HERE IS CHANGED THE ROLE FIELD DUE TO THE CHANGE OF KEYKEOAK
		// 	window.FB.logout(() => { });
		// if (loggedFrom === LoggedFromPlatform.GOOGLE) googleLogout();
		navigate('/');
		await keycloak.logout();
	}, [handleUser, keycloak, navigate]);


	const renderingUserPic = () => {
		if (Number(Math.random()) > .5) return <HiOutlineUserCircle size={25} />;
		return <img src='perfil.jpg' alt='pic' className='w-[30px]' />;
	};

	const handleEditUser = useCallback(() => {
		navigate(`/editUser/${currentUser.username}`);
	}, [currentUser.username, navigate]);

	const dropDownMenuValues: MenuElementType[] = useMemo(() => {
		const onClickExample = () => {
			console.log(`User Name ${currentUser.firstName}`);
			console.log(`User id ${currentUser.username}`);
		};

		return [
			{
				itemName: `${currentUser.firstName} ${currentUser.lastName}`,
				userId: currentUser.username,
				onClick: onClickExample,
			},
			{
				userPicture: {
					defaultIconName: renderingUserPic(),
				},
				itemName: 'My profile',
				userId: currentUser.username,
				onClick: handleEditUser,
			},
			{
				icon: {
					iconName: 'logout',
					iconWidth: 25,
					iconHeight: 25,
					iconClass: 'ml-3.5 mb-[-1px]',
				},
				itemName: 'Logout',
				userId: currentUser.username,
				onClick: Logout,
			},
		];
	}, [currentUser.firstName, currentUser.lastName, currentUser.username, handleEditUser, Logout]);

	const handleNavState = useCallback(() => {
		setNavState((prev) => !prev);
	}, []);

	const handleCallFunction = useCallback(() => {
		window.open('tel:111111');
	}, []);

	return (
		<motion.div
			variants={FM_CASCADE_PARENT_VARIANTS}
			initial="initial"
			whileInView="visible"
			viewport={{once: true}}
			className="bg-white py-4 sticky z-[1400] top-0 shadow-lg"
		>
			<div className="container mx-auto px-8">
				<div
					className="flex justify-between items-center"
					aria-label="app-navbar"
				>
					{/* left side */}
					<div className="flex items-center mr-5">
						<motion.div variants={FM_SHOW_FROM_LEFT}>
							<AiOutlineMenu
								size={30}
								onClick={handleNavState}
								className="cursor-pointer mx-auto md:m-0"
								aria-label="hamburger-button"
							/>
						</motion.div>
						<motion.div
							variants={FM_SHOW_FROM_LEFT}
							className="hidden w-full md:flex md:items-center md:flex-col xl:flex-row xl:md:justify-around"
						>
							<NavLink
								to="/"
								className="hidden text-2xl sm:text-3xl px-2 select-none md:flex lg:text-4xl "
							>
								Best <span className="font-bold">Paw</span>
							</NavLink>

							<div className="hidden bg-gray-200 lg:flex items-center rounded-full text-[14px]">
								<NavLink
									to="/pets"
									className="bg-black rounded-full text-white p-2"
								>
									Show All
								</NavLink>
								<NavLink to="/dashboard" className="p-2">
									Add New
								</NavLink>
							</div>
						</motion.div>
					</div>

					{/* search input */}
					<GooglePexel />
					<RightComponentActionButtons
						handleCallFunction={handleCallFunction}
						handleRightDrawer={Login}
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
								{(keycloak.tokenParsed?.realm_access?.roles.includes('paw-admin-role') && pathname !== '/dashBoard') && <li className="text-xl py-4 flex">
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
