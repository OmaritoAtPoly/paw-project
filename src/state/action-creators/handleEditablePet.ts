import {type Dispatch} from 'redux';
import {type PetDataType} from '../../data/data';
import {EditablePet} from '../action-types';
import {type EditablePetAction} from '../actions';

export const handleEditablePet = (value: PetDataType) => {
	return async (dispatch: Dispatch<EditablePetAction>) => {
		dispatch({
			type: EditablePet.EDITABLE_PET,
			payload: value,
		});
	};
};
