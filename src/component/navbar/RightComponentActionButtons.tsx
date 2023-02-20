import {useKeycloak} from '@react-keycloak/web';
import React from 'react';
import {BiPhone, BiUserPlus} from 'react-icons/bi';
import {SlLogin} from 'react-icons/sl';
import {NavLink} from 'react-router-dom';
import {type MenuElementType} from '../../data/data';
import {CALL_US, LOGIN, SIGN_UP} from '../../utils/constants';
import UserMenu from '../dropDownMenu/UserMenu';

interface Props {
	handleCallFunction: () => void;
	handleRightDrawer: () => void;
	dropDownMenuValues: MenuElementType[];
}
export const RightComponentActionButtons = ({handleCallFunction, handleRightDrawer, dropDownMenuValues}: Props) => {

	const {keycloak} = useKeycloak();
	const isLoggedIn = keycloak.authenticated;

	return (
		<div className="flex items-center sm:mx-0 sm:h-fit">
			{/* call button */}
			<button type='submit' onClick={handleCallFunction} className='bg-orange-paw flex items-center text-white p-3 sm:px-4 rounded-full lg:max-w-xs'>
				<BiPhone size={20} /> <span className={`hidden sm:inline-block ml-3 ${isLoggedIn ? 'sm:hidden md:inline-block' : ''} `} >{CALL_US}</span>
			</button>
			{/* login button */}
			{isLoggedIn
				? <div className='ml-5' aria-label='drop-down-menu'><UserMenu items={dropDownMenuValues} /></div>
				: <>
					<button type='submit' onClick={handleRightDrawer} className='bg-purple-paw ml-5 flex justify-around items-center text-white p-3 sm:px-4 rounded-full lg:max-w-xs'>
						<SlLogin size={20} /> <span className='hidden sm:inline-block ml-3'>{LOGIN}</span>
					</button>
					<NavLink to='register' className='bg-yellow-paw ml-5 flex justify-around items-center text-white p-3 sm:px-4 rounded-full lg:max-w-xs'>
						<BiUserPlus size={20} /> <span className='hidden sm:inline-block ml-3'>{SIGN_UP}</span>
					</NavLink>
				</>
			}
		</div>
	);
};
