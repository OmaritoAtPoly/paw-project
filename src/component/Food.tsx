import React, {useEffect, useState} from 'react';
import {data, type DataType} from '../data/data';

const Food = () => {
	const [pics, setPics] = useState<DataType[]>();

	useEffect(() => {
		if (data) setPics(data);
	}, []);

	const handleAllCategories = () => {
		setPics(data);
	};

	const handleCategories = (categ: string) => () => {
		const filteredCategory = data.filter((ele: DataType) => ele.category === categ);
		setPics(filteredCategory);
	};

	const handlePrices = (price: string) => () => {
		const filteredCategory = data.filter((ele: DataType) => ele.price === price);
		setPics(filteredCategory);
	};

	return (
		<div className='max-w-[1880px] m-auto px-4 py-12'>
			<h1 className='text-orange-600 text-4xl font-bold text-center'>Top ranked menu items</h1>

			{/* filter row */}
			<div className='flex flex-col max-w-[450px] sm:max-w-none md:flex-row justify-around'>
				{/* filter type */}
				<div className='w-full'>
					<p className='font-bold text-gray-700 text-center'>filter type</p>
					<div className='flex justify-around flex-wrap'>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleAllCategories}>All</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('burger')}>Burgers</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('pizza')}>Pizza</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('salad')}>Salads</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('chicken')}>Chicken</button>
					</div>
				</div>

				{/* filter Price */}
				<div className='w-full'>
					<p className='font-bold text-gray-700 text-center'>filter price</p>
					<div className='flex justify-around  w-full flex-wrap'>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handlePrices('$')}>$</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handlePrices('$$')}>$$</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handlePrices('$$$')}>$$$</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handlePrices('$$$$')}>$$$$</button>
					</div>
				</div>
			</div>
			{/* display pics */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
				{pics?.map((element: DataType) => {
					return (
						<div key={element.id} className="border shadow-lg hover:scale-105 duration-200 rounded-lg">
							<img src={element.image} alt={element.name} className="w-full h-[200px] object-cover" />
							<div className='flex justify-between px-2 py-4'>
								<p className='font-bold'>{element.name}</p>
								<p><span className='bg-orange-500 rounded-lg px-2 py-1'>{element.price}</span></p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Food;
