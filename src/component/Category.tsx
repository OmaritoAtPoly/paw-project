import React from 'react';
import {categories, type CategoriesType} from '../data/data';

const Category = () => {
	return (
		<div className='container mx-auto px-8 my-4 select-none'>
			<h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated menu Actions</h2>
			<div className='grid grid-cols-1 justify-items-center gap-6 py-6 sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{categories.map((ele: CategoriesType) => (
					<div key={ele.id} className='bg-gray-200 rounded-lg px-2 flex justify-between items-center w-[60vw] min-w-[200px] sm:w-auto'>
						<h2 className='pl-4 text-lg font-bold md:pl-1'>{ele.name}</h2>
						<img src={ele.image} alt={ele.name} className='w-20 sm:w-[10vw] h-[8vw] object-cover'/>
					</div>
				))}</div>
		</div>
	);
};

export default Category;