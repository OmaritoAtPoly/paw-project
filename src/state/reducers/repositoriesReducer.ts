import {ActionType} from '../action-types';
import {type Action} from '../actions';

interface RepositorieState {
	loading: boolean;
	error?: string;
	data: string[];
}

const initialState: RepositorieState = {
	data: [],
	loading: false,
	error: '',
};


const reducer = (action: Action, state: RepositorieState = initialState) => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return {...state, loading: true, error: undefined, data: []};
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return {...state, loading: false, error: undefined, data: action.payload};
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return {...state, loading: false, error: action.payload, data: []};
		default:
			return state;
	}
};

export default reducer;