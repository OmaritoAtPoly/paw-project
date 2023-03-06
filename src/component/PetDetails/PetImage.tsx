import React from 'react';

interface Props {
	imgUrl: string;
	id?: string;
}

export const PetImage = ({id = 'imageAlt', imgUrl}: Props) =>
	<div className="drop-shadow-xl w-full max-w-sm xl:max-w-md">
		<div className='relative pb-[100%] mb-12 rounded-tl-lg rounded-br-lg rounded-tr-[120px] rounded-bl-[120px] overflow-hidden md:mb-0'>
			<img src={imgUrl} alt={id} className="absolute top-0 left-0 w-full h-full object-cover" />
		</div>
	</div>;