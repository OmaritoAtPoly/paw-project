import {type PetDataType, petDefaultData} from '../../data/data';
import {EditablePet} from '../action-types';
import {type EditablePetAction} from '../actions';

export const currentEditablePet = (state = petDefaultData, action: EditablePetAction): PetDataType => {
	if (action.type === EditablePet.EDITABLE_PET) {
		return action.payload;
	}

	return state;
};
