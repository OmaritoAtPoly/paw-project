import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {ErrorPage} from '../ErrorPage';
import {HomePage} from '../HomePage';
import {MainPageLayout} from '../layoutPages/MainPageLayout';
import {NotFoundPage} from '../NotFoundPage';
import {PetPageLayout} from '../layoutPages/PetPageLayout';
import {PetDetails, petDetailsLoader} from '../layoutPages/PetDetails';
import {DashboardPage, petDashboardLoader} from '../DashboardPage';
import {PrivateRoutes} from '../PrivateRoutes';
import {Register} from '../Register';
import {Pets} from '../PetsPage';

export const routerElements = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainPageLayout />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path='register' element={<Register />} />
			<Route path='pet' element={<PetPageLayout />}>
				<Route path=':id' element={<PetDetails />} loader={petDetailsLoader} />
			</Route>
			<Route element={<PrivateRoutes />} >
				<Route path='/dashboard/:id?' element={<DashboardPage />} loader={petDashboardLoader} />
				<Route path='/secured' element={<>Testing</>} />
				<Route path='/pets' element={<Pets />} />
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Route>,
	),
);

