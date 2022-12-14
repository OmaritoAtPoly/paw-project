import React, {useEffect, useState} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {Rating} from '@smastrom/react-rating';
import {data, type DataType} from '../data/data';
import '@smastrom/react-rating/style.css';

const Food = () => {
	const [pics, setPics] = useState<DataType[]>();
	const [starColor, setStarColor] = useState<boolean>(false);

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

	const handleStarColor = () => {
		setStarColor(!starColor);
	};

	return (
		<div className='max-w-[1880px] m-auto px-4 py-12 select-none'>
			<h1 className='text-orange-600 text-4xl font-bold text-center'>Top Ranked Pets</h1>

			{/* filter row */}
			<div className='flex flex-col max-w-[450px] sm:max-w-none md:flex-row justify-around'>
				{/* filter type */}
				<div className='w-full'>
					<p className='font-bold text-gray-700 text-center'>Filter type</p>
					<div className='flex justify-around flex-wrap'>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleAllCategories}>All</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('burger')}>Girls</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('pizza')}>Boys</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('salad')}>Younger</button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleCategories('chicken')}>Older</button>
					</div>
				</div>

				{/* filter Price */}
				<div className='w-full'>
					<p className='font-bold text-gray-700 text-center'>Filter starred</p>
					<div className='flex justify-around  w-full flex-wrap'>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handleAllCategories}> All </button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white' type='button' onClick={handlePrices('$')}> <AiOutlineStar /></button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white flex items-center' type='button' onClick={handlePrices('$$')}> 2 <AiOutlineStar /></button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white flex items-center' type='button' onClick={handlePrices('$$$')}> 3 <AiOutlineStar /></button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white flex items-center' type='button' onClick={handlePrices('$$$$')}> 4 <AiOutlineStar /></button>
						<button className='mx-1 border-orange-200 border-2 text-orange-600 rounded-full px-2 py-1 hover:bg-orange-600 hover:text-white flex items-center' type='button' onClick={handlePrices('$$$$$')}> 5 <AiOutlineStar /></button>
					</div>
				</div>
			</div>
			{/* display pics */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
				{pics?.map((element: DataType) => {
					return (
						<div key={element.id} className="border shadow-lg hover:scale-105 duration-200 rounded-lg" onClick={handleStarColor} onKeyUp={() => { }} role='button' tabIndex={0} aria-label='hidden text'>
							<img src={element.image} alt={element.name} className="w-full h-[300px] object-cover" />
							<div className='flex justify-between px-2 py-4 bg-blue-400'>
								<p className='font-bold'>{element.name}</p>
								<Rating value={element.price.length} style={{maxWidth: 100}} readOnly items={5}/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Food;