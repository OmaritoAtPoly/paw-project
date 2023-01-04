import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const isAuthenticated = () => sessionStorage.getItem('currentUser');

export const PrivateRoutes = () => {
	return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};
