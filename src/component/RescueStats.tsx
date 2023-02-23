import React from 'react';
import {motion} from 'framer-motion';
import {FaPaw} from 'react-icons/fa';
import {FM_SCROLL_DROP_VARIANTS, FM_SHOW_FROM_TOP} from '../utils/constants';

const RescueStats = () => (
	<motion.div variants={FM_SCROLL_DROP_VARIANTS} initial="initial" whileInView="visible" viewport={{once: true}} exit="hidden" className='bg-zinc-100 relative overflow-hidden'>
		<FaPaw className='absolute text-4xl text-zinc-200 left-[-10%] rotate-[-45deg] text-bgIcon' />
		<div className='container relative mx-auto px-8 pt-20 pb-14 max-w-6xl'>
			<motion.h3 variants={FM_SHOW_FROM_TOP} className='px-4 mb-10 text-4xl lg:text-5xl text-center text-purple-paw'>BestPaw throughout the year</motion.h3>
			<motion.p variants={FM_SHOW_FROM_TOP} className='max-w-3xl mx-auto text-center mb-24 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi perspiciatis odio natus quos, inventore illum non sint molestiae nihil! Mollitia voluptatibus ullam facilis quisquam asperiores! Illum sed voluptates aliquam!</motion.p>

			<div className='flex flex-wrap justify-center items-start text-center -mx-4'>
				<motion.div variants={FM_SHOW_FROM_TOP} className='relative mx-4 w-full flex-1 py-10 px-10 shadow-lg bg-white rounded-xl mb-12 md:mx-16'>
					<FaPaw className='absolute rotate-[-35deg] left-2.5 top-[-20px] text-4xl text-purple-paw' />
					<FaPaw className='absolute rotate-[20deg] right-2.5 bottom-[-10px] text-2xl text-yellow-paw' />
					<h2 className='relative text-4xl lg:text-5xl font-bold text-orange-paw'>482</h2>
					<p className='mt-3'>pets rescued</p>
				</motion.div>
				<motion.div variants={FM_SHOW_FROM_TOP} className='relative mx-4 w-full flex-1 py-10 px-10 shadow-lg bg-white rounded-xl mb-12 md:mx-16'>
					<FaPaw className='absolute rotate-[25deg] left-[2px] top-[40px] text-[12px] text-orange-paw' />
					<FaPaw className='absolute rotate-[45deg] left-[36px] bottom-[2px] text-[16px] text-purple-paw' />
					<FaPaw className='absolute rotate-[35deg] right-[-20px] top-[-20px] text-[36px] text-yellow-paw' />
					<h2 className='relative text-4xl lg:text-5xl font-bold text-orange-paw'>156</h2>
					<p className='mt-3'>pets adopted</p>
				</motion.div>
				<motion.div variants={FM_SHOW_FROM_TOP} className='relative mx-4 w-full flex-1 py-10 px-10 shadow-lg bg-white rounded-xl mb-6 md:mb-12 md:mx-16'>
					<FaPaw className='absolute rotate-[-155deg] right-[15px] bottom-[-10px] text-[28px] text-orange-paw' />
					<div className='absolute left-10 top-0 rotate-[45deg]'>
						<FaPaw className='absolute left-0 top-0 text-[10px] text-purple-paw' />
						<FaPaw className='absolute left-[16px] top-[22px] text-[10px] text-purple-paw' />
						<FaPaw className='absolute left-0 top-[47px] text-[10px] text-purple-paw' />
						{/* <FaPaw className='absolute left-[16px] top-[74px] text-[10px] text-purple-paw' /> */}
					</div>
					<h2 className='relative text-4xl lg:text-5xl font-bold text-orange-paw'>1820</h2>
					<p className='mt-3'>animals neutered</p>
				</motion.div>
			</div>
		</div>
	</motion.div>
);

export default RescueStats;