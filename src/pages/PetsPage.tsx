import {useKeycloak} from '@react-keycloak/web';
import React, {useCallback, useEffect, useState} from 'react';
import {BsHouseDoor} from 'react-icons/bs';
import {Pet} from '../component/PetDetails/Pet';
import {useGetAllApiCalls} from '../utils/apiCalls/useGetAllApiCalls';
import {usePetAllApiCalls} from '../utils/apiCalls/usePutAllApiCalls';
import {useEditPet} from '../utils/hooks/useEditPet';

export const Pets = () => {
	const [pets, setPets] = useState<Components.Schemas.Pet[]>();
	const {getAllPets} = useGetAllApiCalls();
	const {deletePet} = usePetAllApiCalls();
	const {handleEdit} = useEditPet();
	const {keycloak} = useKeycloak();

	const handleSelectedPet = (petId: string) => () => {
		const selected = pets?.filter((a) => a.id === petId);
		if (selected && selected.length > 0)
			handleEdit(selected[0]);
	};

	const handleGetAllPets = useCallback(async () => {
		const value = await getAllPets();
		if (value) setPets(value);
	}, [getAllPets]);

	const handleDeletePet = useCallback((petId: string) => async () => {
		const value = await deletePet(petId);
		if (value && (value.status >= 200 || value.status <= 299)) await handleGetAllPets();
	}, [deletePet, handleGetAllPets]);

	useEffect(() => {
		void handleGetAllPets();
	}, [handleGetAllPets]);

	return (

		<div>
			{(pets && pets.length > 0)
				? pets.map((a) => <Pet name={a.name} id={a.id} key={a.id} deletePet={handleDeletePet} showOptions={keycloak.authenticated} editPet={handleSelectedPet} />)
				: <div className='flex flex-col items-center mt-5 mb-5'>
					<BsHouseDoor size={60} />
					<p>No body at home</p>
				</div>
			}
		</div>

	);
};
