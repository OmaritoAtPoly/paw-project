import React from 'react';

type CardProps = {
	cardLabel: string;
	info: string;
	buttonLabel: string;
	imgUrl: string;
};

const Card = ({cardLabel, info, buttonLabel, imgUrl}: CardProps) => {
	return (
		<div className='rounded-xl relative w-full'>
			{/* overlay */}
			<div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
				<div className='flex flex-col justify-evenly items-center align h-full'>
					<p className='font-bold text-xl px-2 sm:text-[2.5vw]'>{cardLabel}</p>
					<p className='px-2 pt-2 sm:text-[2.5vw] '>{info}</p>
					<button className='border-white bg-white text-black mx-4 bottom-4 rounded-xl font-bold h-[35px] w-28 text-[17px] sm:w-[17vw] sm:text-[2.4vw] lg:text-[24px] lg:font-[600] lg:w-[15vw]' type='button'>{buttonLabel}</button>
				</div>
			</div>
			<img className='h-full max-h-[300px] w-full rounded-xl object-cover' src={imgUrl} alt='friend' />
		</div>);
};

export default Card;