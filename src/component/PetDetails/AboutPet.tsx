import React from 'react';
import {Rating} from '@smastrom/react-rating';
import {faker} from '@faker-js/faker';
import {FiEdit2} from 'react-icons/fi';
import {IoCheckmarkDone} from 'react-icons/io5';
import {DATE, PLACE, RESCUE_DATA} from '../../utils/constants';
import '@smastrom/react-rating/style.css';
import {Spinner} from '../Spinner';

interface Props {
	about: string;
	id?: string;
	petName: string;
	editPet: () => void;
	rescueDate: string;
	handlePetReview: (value: number) => void;
	review: number;
	isHide?: boolean;
	savePetReview: () => void;
	isLoading: boolean;
}

export const AboutPet = ({id = 'imageAlt', petName, editPet, about, rescueDate, handlePetReview, review, isHide = false, savePetReview, isLoading}: Props) =>
	<div className="flex-1 mt-10 rounded-xl py-10 xl:ml-20 xl:mt-0">
		<div className='flex items-center w-full mb-10 -mt-10 pb-4 border-b-2 border-zinc-300'>
			<h2 className="text-center text-4xl text-purple-paw">{petName}</h2>
			<div className='flex w-[150px] justify-between'>
				<Rating
					className="ml-2"
					value={review}
					style={{maxWidth: 100}}
					items={5}
					readOnly={!id}
					onChange={handlePetReview}
				/>
				{isHide && <IoCheckmarkDone color='green' size={25} className='hover:cursor-pointer' onClick={savePetReview} />}
			</div>
			{isLoading && <Spinner />}
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
