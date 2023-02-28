import {type Dispatch} from 'redux';
import {EditablePet} from '../action-types';
import {type EditablePetAction} from '../actions';

export const handleEditablePet = (value: Components.Schemas.Pet) => {
	return async (dispatch: Dispatch<EditablePetAction>) => {
		dispatch({
			type: EditablePet.EDITABLE_PET,
			payload: value,
		});
	};
};
