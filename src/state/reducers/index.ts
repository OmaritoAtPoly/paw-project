import {combineReducers} from 'redux';
import photoReducer from './photoReducer';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
	repositories: repositoriesReducer,
	photos: photoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;