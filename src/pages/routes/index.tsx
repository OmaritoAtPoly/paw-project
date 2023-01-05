import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {ErrorPage} from '../ErrorPage';
import {HomePage} from '../HomePage';
import {MainPageLayout} from '../layoutPages/MainPageLayout';
import {NotFoundPage} from '../NotFoundPage';
import {PetPageLayout} from '../layoutPages/PetPageLayout';
import {PrivateRoutes} from '../PrivateRoutes';
import {Register, userLoader} from '../Register';
import {PetDetails, petDetailsLoader} from '../layoutPages/PetDetails';

export const routerElements = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainPageLayout />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path='pet' element={<PetPageLayout />}>
				<Route path=':id' element={<PetDetails />} loader={petDetailsLoader} />
			</Route>
			<Route path='register' element={<PrivateRoutes />} >
				<Route index element={<Register />} loader={userLoader} />
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Route>,
	),
);