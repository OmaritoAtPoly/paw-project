import React from 'react';

interface Props {
	petName: string;
}

export const MeetOurPets = ({petName}: Props) =>
	<div className="w-[70vw] bg-white drop-shadow-xl mt-5 rounded-xl md:w-[50vw] xl:w-[37vw]">
		<p className="text-4xl mb-5 pt-3 pl-3 pr-3">Meet {petName}</p>
		<p className="text-justify px-3 pb-4">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quos
			esse! Facilis quam nam aperiam optio labore molestias recusandae
			maiores nisi esse impedit! Quidem saepe provident ut voluptas
			accusamus repellendus! consectetur adipisicing elit. Harum, quos
			esse! Facilis quam nam aperiam optio labore molestias recusandae
			maiores nisi esse impedit! Quidem saepe provident ut voluptas
			accusamus repellendus!consectetur adipisicing elit. Harum, quos
			esse! Facilis quam nam aperiam optio labore molestias recusandae
			maiores nisi esse impedit! Quidem saepe provident ut voluptas
			accusamus repellendus!consectetur adipisicing elit. Harum, quos
			esse! Facilis quam nam aperiam optio labore molestias recusandae
			maiores nisi esse impedit! Quidem saepe provident ut voluptas
			accusamus repellendus!{' '}
		</p>
	</div>;
