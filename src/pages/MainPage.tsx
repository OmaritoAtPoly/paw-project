import React from 'react';
import Category from '../component/Category';
import HeadLinesCards from '../component/HeadLinesCards';
import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import {RightDrawer} from '../component/RightDrawer';
import Pets from '../component/Pets';

export const MainPage = () => (
	<>
		<Navbar />
		<Hero />
		<HeadLinesCards />
		<Pets />
		<Category />
		<RightDrawer />
	</>
);
