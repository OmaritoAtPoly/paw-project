import React from 'react';
import {CiEdit} from 'react-icons/ci';
import {FcFullTrash} from 'react-icons/fc';

interface Props {
	name: string;
	id: string;
	deletePet: (petId: string) => () => void;
	editPet: (petId: string) => () => void;
	showOptions?: boolean;
}

export const Pet = ({name, id, deletePet, showOptions = false, editPet}: Props) => (
	<div className='flex items-center border border-red-50 mt-[30px]'>
		{`${name}, ${id}`}
		{
			showOptions
				? <>
					<FcFullTrash className='ml-[10px] hover:cursor-pointer' onClick={deletePet(id)} />
					<CiEdit className='ml-[10px] hover:cursor-pointer' onClick={editPet(id)} />
				</>
				: null
		}
	</div>
);

