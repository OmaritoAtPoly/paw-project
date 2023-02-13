import {combineReducers} from 'redux';
import photoReducer from './photoReducer';
import repositoriesReducer from './repositoriesReducer';
import handleRightDrawer from './openRightDrawerReducer';
import availablePetsPhotosReducer from './availablePetsPhotosReducer';
import {UserLoginReducer} from './UserLoginReducer';
import {currentEditablePet} from './currentEditablePet';

const reducers = combineReducers({
	repositories: repositoriesReducer,
	photos: photoReducer,
	drawer: handleRightDrawer,
	availablePetsPhotos: availablePetsPhotosReducer,
	currentUser: UserLoginReducer,
	currentPet: currentEditablePet,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;