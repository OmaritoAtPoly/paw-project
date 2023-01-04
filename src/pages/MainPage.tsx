import React from 'react';
import Category from '../component/Category';
import HeadLinesCards from '../component/HeadLinesCards';
import Hero from '../component/Hero';
import Pets from '../component/Pets';

export const MainPage = () => (
	<>
		<Hero />
		<HeadLinesCards />
		<Pets />
		<Category />
	</>
);
