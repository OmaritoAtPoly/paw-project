import React from 'react';

const Hero = () => (
	<div className="max-w-[1880px] mx-auto px-8 select-none">
		<div className="max-h-[500px] relative overflow-hidden rounded-tr-[180px] rounded-bl-[180px] rounded-tl-lg rounded-br-lg">
			{/* overlay */}
			<div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
				<div className="container mx-auto px-8 md:px-20">
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						Your <span className="text-orange-500">best</span>
						<br />
						<span className="text-orange-500">friend in</span> the world
					</h1>
				</div>
			</div>
			<img
				className="w-full max-h-[500px] object-cover"
				src={process.env.REACT_APP_HERO_PICTURE}
				alt="hero-pic"
			/>
		</div>
	</div>
);

export default Hero;
