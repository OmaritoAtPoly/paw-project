import React from 'react';
import {FcFullTrash} from 'react-icons/fc';

interface Props {
	name: string;
	id: string;
	deletePet: (petId: string) => () => void;
}

export const Pet = ({name, id, deletePet}: Props) => (
	<div className='flex items-center border border-red-50 mt-[30px]'>
		{`${name}, ${id}`}
		<FcFullTrash className='ml-[10px] hover:cursor-pointer' onClick={deletePet(id)} />
	</div>
);

