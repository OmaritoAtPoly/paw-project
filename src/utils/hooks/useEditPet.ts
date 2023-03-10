import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react';
import {useActions} from '../../state/hooks/useActions';

export const useEditPet = () => {
	const navigate = useNavigate();
	const {handleEditablePet} = useActions();

	const handleEdit = useCallback((petData: Components.Schemas.Pet) => {
		if (petData) handleEditablePet(petData);
		navigate(`/dashboard/${petData.id}`);
	}, [handleEditablePet, navigate]);

	return {handleEdit};
};