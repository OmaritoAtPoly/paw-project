import React from 'react';
import {categories, type CategoriesType} from '../data/data';

const Category = () => {
	return (
		<div className=' mx-auto sm:max-w-[1880px] bg-black/50 px-4 py-12 select-none'>
			<h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated menu Actions</h1>
			<div className='grid grid-cols-1 justify-items-center gap-6 py-6 sm:justify-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{categories.map((ele: CategoriesType) => (
					<div key={ele.id} className='bg-gray-100 rounded-lg px-2 flex justify-between items-center w-[60vw] min-w-[200px] sm:w-auto sm:bg-slate-500 md:bg-green-500'>
						<h2 className='pl-4 text-lg font-bold md:pl-1'>{ele.name}</h2>
						<img src={ele.image} alt={ele.name} className='w-20 sm:w-[10vw] h-[8vw] object-cover'/>
					</div>
				))}</div>
		</div>
	);
};

export default Category;