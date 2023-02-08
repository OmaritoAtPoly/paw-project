import {useKeycloak} from '@react-keycloak/web';
import React from 'react';
import {BiPhone, BiUserPlus} from 'react-icons/bi';
import {SlLogin} from 'react-icons/sl';
import {NavLink, useLocation} from 'react-router-dom';
import {type ItemElementType} from '../../data/data';
import {CALL_US, LOGIN, SIGN_UP} from '../../utils/constants';
import DropDownMenu from '../dropDownMenu/DropDownMenu';

interface Props {
	handleCallFunction: () => void;
	handleRightDrawer: () => void;
	dropDownMenuValues: ItemElementType[];
}
export const RightComponentActionButtons = ({handleCallFunction, handleRightDrawer, dropDownMenuValues}: Props) => {

	const {pathname} = useLocation();
	const {keycloak} = useKeycloak();
	const isLoggedIn = keycloak.authenticated;

	return (
		<div className={`flex flex-col h-[150px] items-center ${isLoggedIn ? 'justify-around' : 'justify-between'} sm:flex-row sm:mx-0 sm:h-fit ${pathname === '/' ? 'w-full' : 'w-[30vw]'}`}>
			{/* call button */}
			<button type='submit' onClick={handleCallFunction} className='bg-blue-400 flex flex-col items-center w-16 text-white py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[7vw]'>
				<BiPhone size={20} /> <span className={`hidden sm:inline-block ${isLoggedIn ? 'sm:hidden md:inline-block' : ''} `} >{CALL_US}</span>
			</button>
			{/* login button */}
			{isLoggedIn
				? <div aria-label='drop-down-menu'><DropDownMenu menuTitle='Options' items={dropDownMenuValues} /></div>
				: <>
					<button type='submit' onClick={handleRightDrawer} className='bg-primary/60 flex flex-col items-center w-16 text-white py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[6vw]'>
						<SlLogin size={20} /> <span className='hidden sm:inline-block'>{LOGIN}</span>
					</button>
					<NavLink to='register' className='bg-yellow-200 flex flex-col items-center w-16 text-red-400 py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[6vw]'>
						<BiUserPlus size={20} /> <span className='hidden sm:inline-block'>{SIGN_UP}</span>
					</NavLink>
				</>
			}
		</div>
	);
};
