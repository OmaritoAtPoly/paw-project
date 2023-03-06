import React, {useCallback, useEffect, useState} from 'react';
import {Pet} from '../component/PetDetails/Pet';
import {useGetAllApiCalls} from '../utils/apiCalls/useGetAllApiCalls';
import {usePetAllApiCalls} from '../utils/apiCalls/usePutAllApiCalls';

export const Pets = () => {
	const [pets, setPets] = useState<Components.Schemas.Pet[]>();
	const {getAllPets} = useGetAllApiCalls();

	const {deletePet} = usePetAllApiCalls();

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
			{(pets && pets.length > 0) ? pets.map((a) => <Pet name={a.name} id={a.id} key={a.id} deletePet={handleDeletePet} />) : <div>no hay</div>}
		</div>

	);
};
