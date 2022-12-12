import React from 'react';
import Category from './component/Category';
import Food from './component/Food';
import HeadLinesCards from './component/HeadLinesCards';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
	return <>
		<Navbar />
		<Hero />
		<HeadLinesCards />s
		<Food />
		<Category />
	</>;
}

export default App;
