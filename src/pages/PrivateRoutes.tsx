import React from 'react';
import {useKeycloak} from '@react-keycloak/web';
import {Outlet, useNavigate} from 'react-router-dom';
import Modal from '../component/Modal';

export const PrivateRoutes = () => {
	const {keycloak} = useKeycloak();
	const isLoggedIn = keycloak.authenticated;
	const navigation = useNavigate();

	const handleClose = () => {
		navigation(-1);
	};

	return isLoggedIn ? <Outlet /> : <Modal modalTitle='Login in the app' modalContent='You need to access in the app before to proceed' isOpen onAcceptButton={keycloak.login} acceptValue='Login' onCloseAction={handleClose} />;
};
