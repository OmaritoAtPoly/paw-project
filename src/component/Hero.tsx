import React from 'react';
import {motion} from 'framer-motion';
import {FM_SCROLL_DROP_VARIANTS, FM_SHOW_FROM_LEFT} from '../utils/constants';

const Hero = () => (
	<motion.div custom={0.25} variants={FM_SCROLL_DROP_VARIANTS} initial="initial" whileInView="visible" viewport={{once: true}} exit="hidden" className="max-w-[1880px] mx-auto mt-10 px-8 select-none">
		<div className="max-h-[500px] relative overflow-hidden rounded-tr-[180px] rounded-bl-[180px] rounded-tl-lg rounded-br-lg">
			{/* overlay */}
			<div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
				<div className="container mx-auto px-12 md:px-20">
					<motion.h1 variants={FM_SHOW_FROM_LEFT} className="text-4xl sm:text-5xl md:text-6xl">Help us <span className="text-orange-500">save lives</span></motion.h1>
					<motion.p variants={FM_SHOW_FROM_LEFT} className='text-white text-md md:text-lg mt-5 mb-10 max-w-screen-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque earum dolore veniam itaque recusandae, nihil placeat quasi dignissimos</motion.p>
					<motion.button variants={FM_SHOW_FROM_LEFT} className='flex items-center text-white border-white border-2 p-3 sm:px-4 rounded-full lg:max-w-xs hover:bg-white hover:text-zinc-600' type="button">Become a hero</motion.button>
				</div>
			</div>
			<img
				className="w-full max-h-[500px] object-cover"
				src={process.env.REACT_APP_HERO_PICTURE}
				alt="hero-pic"
			/>
		</div>
	</motion.div>
);

export default Hero;
