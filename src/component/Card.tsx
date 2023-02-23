import React from 'react';
import {type Photo} from 'pexels';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';
import {FiCalendar, FiMapPin} from 'react-icons/fi';
import {IoPawOutline} from 'react-icons/io5';
import HeartMemo from '../svg/Heart';
import {READ_MY_STORY, FM_SHOW_FROM_TOP} from '../utils/constants';

type CardProps = {
	elementData: Photo;
	cardColor: string;
};

const Card = ({elementData, cardColor}: CardProps) => (
	<motion.div variants={FM_SHOW_FROM_TOP}
		className='rounded-lg relative w-full shadow-xl max-w-xs hover:shadow-2xl'>
		<button type='button' className={`absolute rounded-full border-4 border-white bg-${cardColor} p-2 text-white left-[-20px] top-[-20px] hover:bg-zinc-400`}>
			<HeartMemo height={24} width={24} />
		</button>
		<div className='rounded-br-[64px] rounded-t-lg overflow-hidden'>
			<img className='h-[260px] w-full object-cover' src={elementData.src.original} alt={elementData.photographer.split(' ')[0]} />
		</div>
		<div className='block p-6'>
			<p className='font-bold text-lg sm:text-xl text-zinc-700 mb-7'>{elementData.photographer.split(' ')[0]}</p>
			<ul className='my-5'>
				<li className='flex my-3 text-zinc-700'>
					<FiCalendar className='text-2xl text-purple-paw' />
					<p className='flex-1 ml-3'>
						<span className='font-bold mr-2'>Age:</span>
						<span>3 years old</span>
					</p>
				</li>
				<li className='flex my-3 text-zinc-700'>
					<FiMapPin className='text-2xl text-purple-paw' />
					<p className='flex-1 ml-3'>
						<span className='font-bold mr-2'>Location:</span>
						<span>Skopje</span>
					</p>
				</li>
				<li className='flex my-3 text-zinc-700'>
					<IoPawOutline className='text-2xl text-purple-paw' />
					<p className='flex-1 ml-3'>
						<span className='font-bold mr-2'>Breed:</span>
						<span>Domestic Short Hair - Mixed breed</span>
					</p>
				</li>
			</ul>
			<NavLink 
				to={`pet/${elementData.id}`}
				className='block mt-6 font-bold text-sm text-center bg-white text-orange-paw border-2 border-orange-paw p-3 sm:px-4 rounded-full hover:bg-zinc-100'>
				{READ_MY_STORY}
			</NavLink>
		</div>
	</motion.div>);

export default Card;
