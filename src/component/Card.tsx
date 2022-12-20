import React from 'react';

type CardProps = {
	cardLabel: string;
	info: string;
	buttonLabel: string;
	imgUrl: string;
};

const Card = ({cardLabel, info, buttonLabel, imgUrl}: CardProps) => (
	<div className='rounded-xl relative w-full'>
		{/* overlay */}
		<div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
			<div className='flex flex-col justify-evenly items-center h-full'>
				<p className='font-bold text-3xl sm:text-[2.5vw]'>{cardLabel}</p>
				<p className='text-center pt-1 text-[4vw] sm:text-[2.5vw] md:text-[1.8vw]'>{info}</p>
				<button className='border-white bg-white text-center text-black bottom-4 rounded-xl font-bold h-[35px] w-32 text-[15px] sm:w-40 sm:text-[2.8vw] md:text-[2.2vw] md:w-44 lg:text-[20px] lg:w-156px' type='button'>{buttonLabel}</button>
			</div>
		</div>
		<img className='h-full max-h-[300px] w-full rounded-xl object-cover' src={imgUrl} alt={cardLabel} />
	</div>);

export default Card;