import React from 'react';
import {BiPhone} from 'react-icons/bi';
import {SlLogin} from 'react-icons/sl';
import {CALL_US, LOGIN} from '../utils/constants';

interface Props {
	handleCallFunction: () => void;
	handleRightDrawer: () => void;
}
export const RightComponentActionButtons = ({handleCallFunction, handleRightDrawer}: Props) => (
	<div className='flex flex-col h-[150px] items-center justify-between sm:flex-row sm:mx-0 sm:h-fit sm:w-[20vw] lg:w-[20vw]'>
		{/* call button */}
		<button type='submit' onClick={handleCallFunction} className='bg-blue-400 flex flex-col items-center w-16 text-white py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[7vw]'>
			<BiPhone size={20} /> {CALL_US}
		</button>
		{/* login button */}
		<button type='submit' onClick={handleRightDrawer} className='bg-primary/60 flex flex-col items-center w-16 text-white py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[8vw]'>
			<SlLogin size={20} /> {LOGIN}
		</button>
	</div>
);
