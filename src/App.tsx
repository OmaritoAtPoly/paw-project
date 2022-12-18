import React from 'react';
import Category from './component/Category';
import Pets from './component/Pets';
import HeadLinesCards from './component/HeadLinesCards';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import {RightDrawer} from './component/RightDrawer';

function App() {
	return <>
		<Navbar />
		<Hero />
		<HeadLinesCards />
		<Pets />
		<Category />
		<RightDrawer />
	</>;
}

export default App;
