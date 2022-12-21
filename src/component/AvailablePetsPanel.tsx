import React from 'react';
import {useActions} from '../state/hooks/useActions';
import CatMemo from '../svg/CatsLines';
import DogMemo from '../svg/DogLines';
import PawMemo from '../svg/PawLines';
import ShelterMemo from '../svg/ShelterLines';
import {PetWrapper} from './PetWrapper';

export const AvailablePetsPanel = () => {
	const {searchAvailablePetsPictures} = useActions();

	const handleAvailablePetName = (name: string) => () => {
		searchAvailablePetsPictures(name);
	};

	return (
		<div className='grid gap-y-8 justify-items-center grid-cols-1 mt-[5vw] sm:grid-cols-2 mx-auto sm:w-[80vw] sm:mt-[-50px] md:w-[100vw] md:max-w-[1100px] md:grid-cols-4 relative'>
			<PetWrapper className='min-w-[130px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:min-w-[100px] sm:h-[130px] md:min-w-[150px] hover:cursor-pointer' onClick={handleAvailablePetName('dogs')}>
				<DogMemo width={70} height={70} />
				<p>Dogs</p>
			</PetWrapper>

			<PetWrapper className='min-w-[130px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:min-w-[100px] sm:h-[130px] md:min-w-[150px] hover:cursor-pointer' onClick={handleAvailablePetName('cats')}>
				<CatMemo width={70} height={70} />
				<p>Cats</p>
			</PetWrapper>

			<PetWrapper className='min-w-[130px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:min-w-[100px] sm:h-[130px] md:min-w-[150px] hover:cursor-pointer' onClick={handleAvailablePetName('rabbits')}>
				<PawMemo width={60} height={60} />
				<p className='w-[100px] text-center'>Other Animals</p>
			</PetWrapper>

			<PetWrapper className='min-w-[130px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:min-w-[100px] sm:h-[130px] md:min-w-[150px] hover:cursor-pointer'>
				<ShelterMemo width={60} height={60} />
				<p className='w-[100px] text-center'>Shelters & Rescues</p>
			</PetWrapper>
		</div>
	);
};
