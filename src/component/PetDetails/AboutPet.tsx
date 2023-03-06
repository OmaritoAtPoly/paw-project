import React from 'react';
import {Rating} from '@smastrom/react-rating';
import {faker} from '@faker-js/faker';
import {FiEdit2} from 'react-icons/fi';
import {DATE, PLACE, RESCUE_DATA} from '../../utils/constants';
import '@smastrom/react-rating/style.css';

interface Props {
	about: string;
	id?: string;
	petName: string;
	editPet: () => void;
	rescueDate: string;
}

export const AboutPet = ({id = 'imageAlt', petName, editPet, about, rescueDate}: Props) =>
	<div className="flex-1 mt-10 rounded-xl py-10 xl:ml-20 xl:mt-0">
		<div className='flex items-center w-full mb-10 -mt-10 pb-4 border-b-2 border-zinc-300'>
			<h2 className="text-center text-4xl text-purple-paw">{petName}</h2>
			<Rating
				className="ml-4"
				value={3}
				style={{maxWidth: 100}}
				items={5}
				readOnly={!id} />
			{id && <FiEdit2 size={20} className='ml-auto cursor-pointer text-zinc-400 hover:text-orange-paw' onClick={editPet} />}
		</div>

		<p>{about}</p>

		<div>
			<h4 className="text-purple-paw text-lg mt-8 mb-3">{RESCUE_DATA}</h4>
			<ul>
				<li className='text-zinc-700 my-2'>
					<span className='font-bold'>{PLACE}</span>
					<span className='ml-2.5'>{faker.address.city()}</span>
				</li>
				<li className='text-zinc-700 my-2'>
					<span className='font-bold'>{DATE}</span>
					<span className='ml-2.5'>{rescueDate}</span>
				</li>
			</ul>
		</div>
	</div>;
