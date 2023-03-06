import React from 'react';
import {motion} from 'framer-motion';
import {useActions} from '../state/hooks/useActions';
import CatMemo from '../svg/CatsLines';
import DogMemo from '../svg/DogLines';
import PawMemo from '../svg/PawLines';
import ShelterMemo from '../svg/ShelterLines';
import {FM_CASCADE_PARENT_VARIANTS, FM_SHOW_FROM_LEFT} from '../utils/framer-motion-settings';

export const AvailablePetsPanel = () => {
	const {searchAvailablePetsPictures} = useActions();

	const handleAvailablePetName = (name: string) => () => {
		searchAvailablePetsPictures(name);
	};

	return (
		<motion.div
			custom={0.25}
			initial="initial"
			whileInView="visible"
			variants={FM_CASCADE_PARENT_VARIANTS}
			className="grid gap-y-8 justify-items-center grid-cols-2 mt-[5vw] mx-auto sm:mt-[-50px] md:w-[100vw] max-w-screen-md md:grid-cols-4 relative"
		>
			<motion.div 
				variants={FM_SHOW_FROM_LEFT}
				className="min-w-[150px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:h-[130px] hover:cursor-pointer"
				onClick={handleAvailablePetName('dogs')}
			>
				<DogMemo width={70} height={70} />
				<p>Dogs</p>
			</motion.div>

			<motion.div 
				variants={FM_SHOW_FROM_LEFT} 
				className="min-w-[150px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:h-[130px] hover:cursor-pointer"
				onClick={handleAvailablePetName('cats')}
			>
				<CatMemo width={70} height={70} />
				<p>Cats</p>
			</motion.div>

			<motion.div 
				variants={FM_SHOW_FROM_LEFT}
				className="min-w-[150px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:h-[130px] hover:cursor-pointer"
				onClick={handleAvailablePetName('rabbits')}
			>
				<PawMemo width={60} height={60} />
				<p className="w-[100px] text-center">Other Animals</p>
			</motion.div>

			<motion.div
				variants={FM_SHOW_FROM_LEFT}
				className="min-w-[150px] max-w-[15vw] h-[150px] bg-white flex justify-evenly flex-col items-center hover:bg-[#efeef1] hover:border hover:border-primary shadow-xl rounded-2xl sm:h-[130px] hover:cursor-pointer"
			>
				<ShelterMemo width={60} height={60} />
				<p className="w-[100px] text-center">Shelters & Rescues</p>
			</motion.div>
		</motion.div>
	);
};
