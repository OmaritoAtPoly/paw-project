import React from 'react';
import {BiPhone} from 'react-icons/bi';
import {MdOutlineLocationOn} from 'react-icons/md';
import {SiThunderbird} from 'react-icons/si';
import {PUBLIC_PHONE_NUMBER} from '../../utils/constants';
import {PetWrapper} from '../PetWrapper';

interface Props {
	handleCallFunction: () => void;
	sendEmail: () => void;
}

export const ContactSection = ({handleCallFunction, sendEmail}: Props) => (
	<div className="bg-white w-[70vw] mt-20 drop-shadow-2xl rounded-xl flex flex-col items-center md:w-[50vw] xl:w-[22vw]">
		<div className="mx-auto bg-primary/40 rounded-full w-20 h-20 flex items-center justify-center ring-offset-2 ring-2 -translate-y-[50%] z-10">
			<img src="animal-shelter.png" alt="logo" width={50} height={50} />
		</div>
		<h1 className="text-4xl lg:text-4xl font-semibold text-center xl:text-3xl">Paw Shelter Center</h1>
		{/* contact sub section */}
		<div className="flex items-center flex-col justify-between py-4 w-[23vw]  sm:w-[140px]  lg:flex-row lg:w-[40vw] xl:flex-col xl:w-full">
			<PetWrapper className="flex flex-col items-center justify-between sm:flex-row xl:justify-start  w-full md:w-[140px]">
				<MdOutlineLocationOn size={20} />
				<div className="text-center  xl:mx-auto">
					<p className="font-bold text-sm"> Location Address</p>
					<p>
						Sofia City, <span className="font-semibold">BG</span>
					</p>
				</div>
			</PetWrapper>
			<PetWrapper
				className="border-y-[1px] border-slate-500 flex items-center py-3 my-2 hover:cursor-pointer  justify-between w-[140px] sm:w-full md:w-[130px]"
				onClick={sendEmail}
			>
				<SiThunderbird />
				<div className="text-left  mx-auto ">
					<span className="font-semibold text-sm text-center h-fit">
						paw@mail.com
					</span>
				</div>
			</PetWrapper>
			<PetWrapper
				className=" flex items-center justify-between w-full md:w-[140px]"
				onClick={handleCallFunction}
			>
				<BiPhone size={20} />
				<p className="text-center mx-auto ">{PUBLIC_PHONE_NUMBER}</p>
			</PetWrapper>
		</div>
	</div>
);
