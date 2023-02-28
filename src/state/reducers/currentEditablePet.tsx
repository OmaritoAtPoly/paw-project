import {petDefaultData} from '../../data/data';
import {EditablePet} from '../action-types';
import {type EditablePetAction} from '../actions';

export const currentEditablePet = (state = petDefaultData, action: EditablePetAction): Components.Schemas.Pet => {
	if (action.type === EditablePet.EDITABLE_PET) {
		return action.payload;
	}

	return state;
};
