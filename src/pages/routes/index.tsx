import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {ErrorPage} from '../ErrorPage';
import {MainPage} from '../MainPage';
import {MainPageLayout} from '../MainPageLayout';
import {NotFoundPage} from '../NotFoundPage';
import {PrivateRoutes} from '../PrivateRoutes';
import {Register, userLoader} from '../Register';

export const routerElements = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainPageLayout />} errorElement={<ErrorPage />}>
			<Route index element={<MainPage />} />
			<Route path='register' element={<PrivateRoutes />} >
				<Route index element={<Register />} loader={userLoader} />
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Route>,
	),
);