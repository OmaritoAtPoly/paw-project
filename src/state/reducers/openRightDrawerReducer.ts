import {ActionType} from '../action-types';
import {type RightDrawerActions, type RightDrawerState} from '../actions';

const initialState: RightDrawerState = {
	drawerStatus: false,
};

const handleRightDrawer = (state = initialState, action: RightDrawerActions): RightDrawerState => {
	
	if (action.type === ActionType.HANDLE_RIGHT_DRAWER) {
		return {drawerStatus: !state.drawerStatus};
	}

	return state;
};

export default handleRightDrawer;
