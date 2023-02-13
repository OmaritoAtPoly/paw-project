import {type Photo} from 'pexels';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {READ_MY_HISTORY, TAKE_HOME} from '../utils/constants';

type CardProps = {
	elementData: Photo;
};

const Card = ({elementData}: CardProps) => (
	<div className='rounded-xl relative w-full'>
		{/* overlay */}
		<div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
			<div className='flex flex-col justify-evenly items-center h-full'>
				<p className='font-bold text-3xl sm:text-[2.5vw]'>{elementData.photographer.split(' ')[0]}</p>
				<p className='text-center pt-1 text-[4vw] sm:text-[2.5vw] md:text-[1.8vw]'>{READ_MY_HISTORY}</p>
				<NavLink
					to={`pet/${elementData.id}`}
					className='border-white bg-white text-center text-black bottom-4 rounded-xl font-bold h-[35px] w-32 text-[15px] sm:w-40 sm:text-[2.8vw] md:text-[2.2vw] md:w-44 lg:text-[20px] lg:w-156px'
				>{TAKE_HOME}</NavLink>
			</div>
		</div>
		<img className='h-full max-h-[300px] w-full rounded-xl object-cover' src={elementData.src.original} alt={elementData.photographer.split(' ')[0]} />
	</div>);

export default Card;