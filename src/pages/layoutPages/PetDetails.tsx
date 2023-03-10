import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {MapContainerWrapper} from '../../component/mapComponent/MapContainerWrapper';
import {AboutPet} from '../../component/PetDetails/AboutPet';
import {petDefaultData} from '../../data/data';
import {PetImage} from '../../component/PetDetails/PetImage';
import {PetStats} from '../../component/PetDetails/PetStats';
import {PetDetailAside} from '../../component/PetDetails/PetDetailAside';
import {Spinner} from '../../component/Spinner';
import {useEditPet} from '../../utils/hooks/useEditPet';
import {usePetAllApiCalls} from '../../utils/apiCalls/petApiCalls/usePutAllApiCalls';

export const PetDetails = () => {
	const {getPetById} = usePetAllApiCalls();
	const [loading, setLoading] = useState(true);
	const {id} = useParams();
	const [petData, setPetData] = useState<Components.Schemas.Pet>(petDefaultData);
	const navigate = useNavigate();

	const {handleEdit} = useEditPet();

	const getCurrentPet = useCallback(async () => {
		if (id) {
			const value = await getPetById(id);
			if (value) {
				setPetData(value);
				setLoading(false);
			}
			// TODO HERE I NEED TO ADD A TOAST TO SAY THAT THE QUERY FAIL WITH THE SELECTED PET

			if (!value) navigate('/');
		}
	}, [getPetById, id, navigate]);

	useEffect(() => {
		void getCurrentPet();
	}, [getCurrentPet]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	const handleEditPet = useCallback(() => {
		handleEdit(petData);
	}, [handleEdit, petData]);

	if (loading) return <Spinner />;

	return (
		<div className='container flex flex-col mx-auto px-8 py-20 md:flex-row'>
			<div className='flex-1 md:mr-32'>
				<div className='flex mb-20 flex-col xl:flex-row'>
					<PetImage id={id} imgUrl={petData.petImage} />
					<AboutPet id={id} editPet={handleEditPet} petName={petData.name} about={petData.about} rescueDate={petData.rescueDate} />
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
