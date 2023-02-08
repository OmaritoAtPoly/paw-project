import React from 'react';
import {useKeycloak} from '@react-keycloak/web';
import {Outlet} from 'react-router-dom';
import Modal from '../component/Modal';

export const PrivateRoutes = () => {
	const {keycloak} = useKeycloak();
	const isLoggedIn = keycloak.authenticated;

	return isLoggedIn ? <Outlet /> : <Modal isOpen onAcceptButton={keycloak.login} />;
};
