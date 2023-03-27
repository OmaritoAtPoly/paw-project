import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useKeycloak} from '@react-keycloak/web';
import {MapContainerWrapper} from '../../component/mapComponent/MapContainerWrapper';
import {AboutPet} from '../../component/PetDetails/AboutPet';
import {defaultAvailablePets, petDefaultData} from '../../data/data';
import {PetImage} from '../../component/PetDetails/PetImage';
import {PetStats} from '../../component/PetDetails/PetStats';
import {PetDetailAside} from '../../component/PetDetails/PetDetailAside';
import {Spinner} from '../../component/Spinner';
import {useEditPet} from '../../utils/hooks/useEditPet';
import {usePetAllApiCalls} from '../../utils/apiCalls/petApiCalls/usePutAllApiCalls';
import {usePetReviewApiCalls} from '../../utils/apiCalls/petApiCalls/usePetReviewApiCalls';

export const PetDetails = () => {
	const {getPetById} = usePetAllApiCalls();
	const [loading, setLoading] = useState(true);
	const {id} = useParams();
	const [petData, setPetData] = useState<Components.Schemas.Pet>(petDefaultData);
	const [review, setReview] = useState<number>(1);
	const [isLoading, setIsLoading] = useState(false);
	const {keycloak} = useKeycloak();
	const [isHide, setIsHide] = useState(false);

	const {handleEdit} = useEditPet();
	const {addPetReview, getPetReview} = usePetReviewApiCalls();

	const getCurrentPet = useCallback(async () => {
		if (id) {
			const value = await getPetById(id);
			if (value) {
				setPetData(value);
				setLoading(false);
			}
			// TODO HERE I NEED TO ADD A TOAST TO SAY THAT THE QUERY FAIL WITH THE SELECTED PET

			if (!value) {
				const defaultPet = defaultAvailablePets.find((a) => a.id === id);
				if (defaultPet) {
					setPetData(defaultPet);
					setLoading(false);
				}
			}
		}
	}, [getPetById, id]);

	useEffect(() => {
		void getCurrentPet();

		if (id) {
			(async () => {
				const value = await getPetReview(id);
				if (value && value.length > 0) setReview(value[value.length - 1].stars ?? 3);
			})();
		}

	}, [getCurrentPet, getPetReview, id]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	const handleEditPet = useCallback(() => {
		handleEdit(petData);
	}, [handleEdit, petData]);


	const handlePetReview = useCallback((amount: number) => {
		setReview(amount);
		if (keycloak.authenticated) setIsHide(true);
	}, [keycloak.authenticated]);

	const savePetReview = useCallback(async () => {
		setIsHide(prev => !prev);
		setIsLoading(prev => !prev);

		const value = await addPetReview({description: petData.details, petId: petData.id, stars: review});

		if (value) setIsLoading(false);

	}, [addPetReview, petData.details, petData.id, review]);

	if (loading) return <Spinner />;

	return (
		<div className='container flex flex-col mx-auto px-8 py-20 md:flex-row'>
			<div className='flex-1 md:mr-32'>
				<div className='flex mb-20 flex-col xl:flex-row'>
					<PetImage id={id} imgUrl={petData.petImage} />
					<AboutPet id={id} editPet={handleEditPet} petName={petData.name} about={petData.about} rescueDate={petData.rescueDate} review={review} handlePetReview={handlePetReview} isHide={isHide} savePetReview={savePetReview} isLoading={isLoading} />
				</div>
				<PetStats petData={petData} />
				<div className="mx-auto mt-20 mb-10">
					<h3 className='text-purple-paw text-2xl mb-6'>Where we found this cutie</h3>
					<MapContainerWrapper
						markerPosition={petData.rescueLocation}
						handlerMarkerPosition={() => { }}
						scrollWheelZoom={false}
					/>
				</div>
			</div>
			<PetDetailAside petData={petData} />
		</div>
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
