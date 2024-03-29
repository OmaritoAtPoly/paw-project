import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {ErrorPage} from '../ErrorPage';
import {HomePage} from '../HomePage';
import {MainPageLayout} from '../layoutPages/MainPageLayout';
import {NotFoundPage} from '../NotFoundPage';
import {PetPageLayout} from '../layoutPages/PetPageLayout';
import {PetDetails} from '../layoutPages/PetDetails';
import {DashboardPage, petDashboardLoader} from '../DashboardPage';
import {PrivateRoutes} from '../PrivateRoutes';
import {Register} from '../Register';
import {Pets} from '../PetsPage';
import {WelcomePage} from '../WelcomePage';

export const routerElements = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainPageLayout />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path='register' element={<Register />} />
			<Route path='/pets' element={<Pets />} />
			<Route path='pet' element={<PetPageLayout />}>
				<Route path=':id' element={<PetDetails />} />
			</Route>
			<Route element={<PrivateRoutes />} >
				<Route path='/dashboard/:id?' element={<DashboardPage />} loader={petDashboardLoader} />
				<Route path='/welcome' element={<WelcomePage />} />
				<Route path='/editUser/:username' element={<Register />} />
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Route>,
	),
);

