import {combineReducers} from 'redux';
import photoReducer from './photoReducer';
import repositoriesReducer from './repositoriesReducer';
import handleRightDrawer from './openRightDrawerReducer';

const reducers = combineReducers({
	repositories: repositoriesReducer,
	photos: photoReducer,
	drawer: handleRightDrawer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;