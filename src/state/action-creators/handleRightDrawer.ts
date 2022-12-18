import {type Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {type RightDrawerActions} from '../actions';

export const handleRightDrawer = () => {
	return async (dispatch: Dispatch<RightDrawerActions>) => {

		dispatch({
			type: ActionType.HANDLE_RIGHT_DRAWER,
		});
	};
};
