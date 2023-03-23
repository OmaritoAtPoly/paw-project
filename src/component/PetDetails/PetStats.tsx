import React, {useMemo} from 'react';
import {GiFoxTail, GiWeightLiftingUp} from 'react-icons/gi';
import {FaPaw, FaSuse} from 'react-icons/fa';
import {HiUserGroup} from 'react-icons/hi';
import {FiCalendar} from 'react-icons/fi';
import {TbHeartbeat, TbGenderBigender} from 'react-icons/tb';
import {generate} from 'shortid';
import {AboutPetItem} from '../aboutPetItem';

interface Props {
	petData: Components.Schemas.Pet;
}

export const PetStats = ({petData}: Props) => {
	const petListItemStyle = 'my-4 w-full max-w-[50%] xl:max-w-third 2xl:max-w-fourth';
	const itemWrapperStyle = 'p-6 mx-4 h-full shadow-lg-centered bg-white rounded-xl';
	const petSkillIconStyle = 'w-10 h-10 mb-7';

	const medicalRecordValues = useMemo((): string[] => {
		return petData.medicalRecord.split(',');
	}, [petData.medicalRecord]);

	return <div className="my-3">
		<h3 className='text-purple-paw text-2xl mb-6'>Additional details</h3>

		<ul className='flex flex-wrap text-zinc-700 -mx-4'>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<FaSuse className={`${petSkillIconStyle} text-purple-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Pet type:</h6>
					<p>{petData.petType.toLocaleLowerCase()}</p>
				</AboutPetItem>
			</li>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<TbGenderBigender className={`${petSkillIconStyle} text-yellow-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Gender:</h6>
					<p>{petData.gender.toLocaleLowerCase()}</p>
				</AboutPetItem>
			</li>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<FiCalendar className={`${petSkillIconStyle} text-orange-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Age:</h6>
					<p>{petData.age}</p>
				</AboutPetItem>
			</li>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<FaPaw className={`${petSkillIconStyle} text-yellow-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Breed:</h6>
					<p>{petData.breed.toLocaleLowerCase()}</p>
				</AboutPetItem>
			</li>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<GiFoxTail className={`${petSkillIconStyle} text-orange-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Tail:</h6>
					<p>{petData.tailDetails}&nbsp;</p>
				</AboutPetItem>
			</li>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<GiWeightLiftingUp className={`${petSkillIconStyle} text-purple-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Training:</h6>
					<p>{`${petData.training.charAt(0).toUpperCase()}${petData.training.slice(1)}`}&nbsp;</p>
				</AboutPetItem>
			</li>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<TbHeartbeat className={`${petSkillIconStyle} text-orange-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Health:</h6>
					<ul className='flex items-center'>
						{medicalRecordValues.map((element: string, index: number) => (
							<li key={generate()}>
								<span className="text-gray-700 hover:cursor-default">{element}</span>
								<span className={`text-gray-500 mx-2 ${index === medicalRecordValues.length - 1 ? 'hidden' : ''}`}>/</span>
							</li>
						))}
					</ul>
				</AboutPetItem>
			</li>
			<li className={petListItemStyle}>
				<AboutPetItem className={itemWrapperStyle}>
					<HiUserGroup className={`${petSkillIconStyle} text-purple-paw`} />
					<h6 className='text-zinc-400 mb-1 text-sm'>Good in home with:</h6>
					<p>{`${petData.socialSkills.charAt(0).toUpperCase()}${petData.socialSkills.slice(1)}`}&nbsp;</p>
				</AboutPetItem>
			</li>
		</ul>
	</div>;
};