import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FiEdit2} from 'react-icons/fi';
import {GiFoxTail, GiWeightLiftingUp} from 'react-icons/gi';
import {HiUserGroup} from 'react-icons/hi';
import {TbHeartbeat} from 'react-icons/tb';
import {useNavigate, useParams} from 'react-router-dom';
import {AboutPetItem} from '../../component/aboutPetItem';
import {BreadCrumbs} from '../../component/BreadCrumbs';
import {MapContainerWrapper} from '../../component/mapComponent/MapContainerWrapper';
import {AboutPet} from '../../component/PetDetails/AboutPet';
import {ConsideringToAdopt} from '../../component/PetDetails/ConsideringToAdopt';
import {ContactSection} from '../../component/PetDetails/ContactSection';
import {MeetOurPets} from '../../component/PetDetails/MeetOurPets';
import {petDefaultData} from '../../data/data';
import {useActions} from '../../state/hooks/useActions';
import {usePetAllApiCalls} from '../../utils/apiCalls/usePutAllApiCalls';
import {ABOUT} from '../../utils/constants';

export const PetDetails = () => {
	const {getPetById} = usePetAllApiCalls();

	const {id} = useParams();
	const [petData, setPetData] = useState<Components.Schemas.Pet>(petDefaultData);
	const navigate = useNavigate();

	const itemWrapperStyle = 'flex items-center py-1';
	const petSkillIconStyle = 'w-11 h-auto border border-primary rounded-full p-1';
	const petSkillTextStyle = 'pl-5 text-xl';

	const {handleEditablePet} = useActions();

	const editPet = () => {
		handleEditablePet(petData);
		navigate(`/dashboard/${id!}`);
	};

	const getCurrentPet = useCallback(async () => {
		if (id) {
			const value = await getPetById(id);
			if (value) setPetData(value);
		}
	}, [getPetById, id]);

	useEffect(() => {
		void getCurrentPet();
	}, [getCurrentPet]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sendEmail = useCallback(() => {
		window.open('mailto:paw@mail.com');
	}, []);

	const handleCallFunction = useCallback(() => {
		window.open('tel:111111');
	}, []);


	const medicalRecordValues = useMemo(() => {
		return petData.medicalRecord.split(',');
	}, [petData.medicalRecord]);

	return (
		<>
			<div className=" h-fit flex flex-col items-center md:flex-row md:items-stretch">
				{/* about section */}
				<AboutPet id={id} imgUrl={petData.petImage} about={petData.about} rescueDate={petData.rescueDate} />
				{/* pet info section */}
				<div className="w-[350px] h-fit flex flex-col justify-between md:w-[50vw] md:ml-10 xl:w-[42vw] xl:ml-3 items-center">
					<div className="w-[350px] h-fit rounded-lg drop-shadow-lg mx-auto md:mx-0 md:w-[90%]">
						<div className='flex items-center w-full max-w-xs justify-between'>
							<p className="text-center text-4xl pb-4 md:text-left">{petData.name}</p>
							{id && <FiEdit2 size={20} className='cursor-pointer hover:scale-125' onClick={editPet} />}
						</div>
						<BreadCrumbs elements={['Young', 'Male', 'Medium', 'Black & White']} />
					</div>

					{/* about section */}
					<div>
						<p className="text-4xl py-5">{ABOUT}</p>
						<AboutPetItem className={itemWrapperStyle}>
							<GiFoxTail className={petSkillIconStyle} color="#d5825e" />
							<p className={petSkillTextStyle}>{petData.tailDetails}</p>
						</AboutPetItem>
						<AboutPetItem className={itemWrapperStyle}>
							<GiWeightLiftingUp className={petSkillIconStyle} color="#34a9f0" />
							<p className={petSkillTextStyle}>{`${petData.training.charAt(0).toUpperCase()}${petData.training.slice(1)}`}</p>
						</AboutPetItem>
						<AboutPetItem className={itemWrapperStyle}>
							<TbHeartbeat className={petSkillIconStyle} color="#f05534" />
							<BreadCrumbs elements={medicalRecordValues} separator='/' />
						</AboutPetItem>
						<AboutPetItem className={itemWrapperStyle}>
							<HiUserGroup className={petSkillIconStyle} color="#719fe8" />
							<p className={petSkillTextStyle}>{`${petData.socialSkills.charAt(0).toUpperCase()}${petData.socialSkills.slice(1)}`}</p>
						</AboutPetItem>
					</div>
					<div className="w-[70%] mx-auto xl:hidden">
						<ConsideringToAdopt petName={petData.name} />
					</div>

					{/* Meet our pet TODO FALTA PONER AKI LA INFO DEL PET*/}
					<MeetOurPets petName={petData.name} />
					{/* contact section for tiny screens */}
					<div className="xl:hidden">
						<ContactSection
							sendEmail={sendEmail}
							handleCallFunction={handleCallFunction}
						/>
					</div>
				</div>

				<div className="hidden xl:flex xl:flex-col">
					<div className="hidden drop-shadow-xl w-[22vw] xl:inline-block  2xl:w-[26vw]">
						<ConsideringToAdopt petName={petData.name} />
					</div>
					<ContactSection
						sendEmail={sendEmail}
						handleCallFunction={handleCallFunction}
					/>
				</div>
			</div>
			<div className='w-[300px] mx-auto my-10 sm:w-[80vw] drop-shadow-xl'>
				<p className="text-2xl sm:text-[27px] text-center">Place where the Pet was found</p>
				<MapContainerWrapper markerPosition={petData.rescueLocation} handlerMarkerPosition={() => { }} scrollWheelZoom={false} />
			</div>
		</>
	);
};

// TODO use this code when needed,
// export const petDetailsLoader = async ({params}: LoaderFunctionArgs) => {
// 	const {id} = params;

// 	let result;
// 	if (id) {
// 		try {
// 			// const url = `http://localhost:4000/petDetails/${id}`;

// 			// const value: AxiosResponse<Components.Schemas.Pet> = (await axiosPublic.get(`/v1/pets/${id}`));

// 			if (value.status === 200) {
// 				result = value.data;
// 			}
// 		} catch (error) {
// 			if (error instanceof Error) {
// 				console.log('there is an error due to:', error.message);
// 			}
// 		}
// 	}

// 	return result;
// };
