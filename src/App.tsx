import React from 'react';
import Category from './component/Category';
import Pets from './component/Pets';
import HeadLinesCards from './component/HeadLinesCards';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
	return <>
		<Navbar />
		<Hero />
		<HeadLinesCards />
		<Pets />
		<Category />
	</>;
}

export default App;
