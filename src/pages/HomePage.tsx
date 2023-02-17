import React from 'react';
import Category from '../component/Category';
import HeadLinesCards from '../component/HeadLinesCards';
import Hero from '../component/Hero';
import Pets from '../component/Pets';
import RescueStats from '../component/RescueStats';

export const HomePage = () => (
	<>
		<Hero />
		<HeadLinesCards />
		<RescueStats />
		<Pets />
		<Category />
	</>
);
