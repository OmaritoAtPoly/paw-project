import {combineReducers} from 'redux';
import photoReducer from './photoReducer';
import repositoriesReducer from './repositoriesReducer';
import handleRightDrawer from './openRightDrawerReducer';
import availablePetsPhotosReducer from './availablePetsPhotosReducer';

const reducers = combineReducers({
	repositories: repositoriesReducer,
	photos: photoReducer,
	drawer: handleRightDrawer,
	availablePetsPhotos: availablePetsPhotosReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;