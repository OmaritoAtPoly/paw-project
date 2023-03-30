import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../../component/navbar/Navbar';
import {RightDrawer} from '../../component/RightDrawer';
import Footer from '../../component/Footer';
import {ToasterContainer} from '../../component/Toaster/ToasterContainer';

export const MainPageLayout = () => (
	<>
		<Navbar />
		<RightDrawer />
		<main>
			<ToasterContainer />
			<Outlet />
		</main>
		<Footer />
	</>
);
