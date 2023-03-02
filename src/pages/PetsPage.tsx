import React, {useCallback, useEffect, useState} from 'react';
import {Pet} from '../component/PetDetails/Pet';
import {useGetAllApiCalls} from '../utils/apiCalls/useGetAllApiCalls';

export const Pets = () => {
	const [pets, setPets] = useState<Components.Schemas.Pet[]>();
	const {getAllPets} = useGetAllApiCalls();

	const handleGetAllPets = useCallback(async () => {
		const value = await getAllPets();
		if (value) setPets(value);
	}, [getAllPets]);

	useEffect(() => {
		void handleGetAllPets();
	}, [handleGetAllPets]);

	return (

		<div>
			{(pets && pets.length > 0) ? pets.map((a) => <Pet name={a.name} key={a.id} />) : <div>no hay</div>}
		</div>

	);
};
