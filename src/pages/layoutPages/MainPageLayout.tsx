import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../../component/Navbar';
import {RightDrawer} from '../../component/RightDrawer';

export const MainPageLayout = () => (
	<>
		<Navbar />
		<RightDrawer />
		<main>
			<Outlet />
		</main>
	</>
);