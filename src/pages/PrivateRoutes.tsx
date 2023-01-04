import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const isAuthenticated = () => {
	// const value = sessionStorage.getItem('currentUser');
	// return value;
	return true;
};

export const PrivateRoutes = () => {
	return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};
