import React from 'react';
import {BiPhone} from 'react-icons/bi';
import {SlLogin} from 'react-icons/sl';
import {CALL_US, LOGIN} from '../utils/constants';
import DropDownMenu from './dropDownMenu/DropDownMenu';
import {type ItemElementType} from '../data/data';
import {useGetCurrentUser} from '../utils/hooks/getCurrentUser';

interface Props {
	handleCallFunction: () => void;
	handleRightDrawer: () => void;
	dropDownMenuValues: ItemElementType[];
}
export const RightComponentActionButtons = ({handleCallFunction, handleRightDrawer, dropDownMenuValues}: Props) => {

	const {email} = useGetCurrentUser();

	return (
		<div className='flex flex-col h-[150px] items-center justify-between sm:flex-row sm:mx-0 sm:h-fit sm:w-[20vw] lg:w-[15vw]'>
			{/* call button */}
			<button type='submit' onClick={handleCallFunction} className='bg-blue-400 flex flex-col items-center w-16 text-white py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[6vw]'>
				<BiPhone size={20} /> <span className={`${email ? 'sm:hidden md:inline-block' : ''} `} >{CALL_US}</span>
			</button>
			{/* login button */}
			{email
				? <DropDownMenu menuTitle='Options' items={dropDownMenuValues} />
				: <button type='submit' onClick={handleRightDrawer} className='bg-primary/60 flex flex-col items-center w-16 text-white py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[6vw]'>
					<SlLogin size={20} /> <span>{LOGIN}</span>
				</button>
			}
		</div>
	);
};
