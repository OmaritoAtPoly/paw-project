import React from 'react';

const RescueStats = () => (
	<div className='bg-zinc-100'>
		<div className='container mx-auto my-20 px-4 py-10'>
			<h3 className='px-4 text-4xl lg:text-5xl font-bold text-center text-zinc-800'>BestPaw throughout the year in numbers</h3>
			<p className='max-w-5xl mx-auto text-center mb-12 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi perspiciatis odio natus quos, inventore illum non sint molestiae nihil! Mollitia voluptatibus ullam facilis quisquam asperiores! Illum sed voluptates aliquam!</p>

			<div className='flex justify-center items-center max-w-5xl mx-auto text-center'>
				<div className='border-r border-gray-400 mr-20 pr-20'>
					<h2 className='text-4xl lg:text-5xl font-bold text-orange-paw'>482</h2>
					<p className='mt-3'>pets adopted</p>
				</div>
				<div className='border-r border-gray-400 mr-20 pr-20'>
					<h2 className='text-4xl lg:text-5xl font-bold text-orange-paw'>82</h2>
					<p className='mt-3'>pets rescued</p>
				</div>
				<div>
					<h2 className='text-4xl lg:text-5xl font-bold text-orange-paw'>1820</h2>
					<p className='mt-3'>animals neutered</p>
				</div>
			</div>
		</div>
	</div>
);

export default RescueStats;