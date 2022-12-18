import React from 'react';
import {AVAILABLE_PETS} from '../utils/constants';
import Card from './Card';

const HeadLinesCards = () => (
	<>
		<p className='text-4xl sm:text-5xl md:text-6xl text-center w-full pt-5 text-primary'>{AVAILABLE_PETS}</p>
		<div className='max-w-[1880px] min-w-[100px] mx-auto p2 p-4 py-8 grid justify-center sm:grid-cols-3 gap-6 select-none'>
			{/* Cards */}
			<Card cardLabel='Find your real Friend' info='Learn more...' buttonLabel='Find Out' imgUrl='https://images.pexels.com/photos/4178724/pexels-photo-4178724.jpeg?auto=compress&cs=tinysrgb&w=1600' />
			<Card cardLabel='Find your real Friend' info='Learn more...' buttonLabel='Find Out' imgUrl='https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600' />
			<Card cardLabel='Find your real Friend' info='Learn more...' buttonLabel='Find Out' imgUrl='https://images.pexels.com/photos/6001779/pexels-photo-6001779.jpeg?auto=compress&cs=tinysrgb&w=1600' />
			<Card cardLabel='Find your real Friend' info='Learn more...' buttonLabel='Find Out' imgUrl='https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1600' />
			<Card cardLabel='Find your real Friend' info='Learn more...' buttonLabel='Find Out' imgUrl='https://images.pexels.com/photos/1174081/pexels-photo-1174081.jpeg?auto=compress&cs=tinysrgb&w=1600' />
		</div>
	</>
);

export default HeadLinesCards;