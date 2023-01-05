import {Rating} from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {type Photo} from 'pexels';
import React, {useEffect, useState} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {data, type DataType} from '../data/data';
import {type RootState} from '../state';
import {Spinner} from './Spinner';

const Food = () => {
	const [pics, setPics] = useState<DataType[]>();
	const {photos, loading} = useSelector((state: RootState) => state.photos);

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
		<div className='max-w-[1880px] m-auto px-2 py-12 select-none'>
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
			{loading && <Spinner />}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
				{photos.length > 0
					? photos.map((element: Photo) => {
						return (
							<NavLink
								to={`pet/${element.id}`}
								state={{petPicUrl: `${element.src.original}`}}
								key={element.id}
								className="border shadow-lg hover:scale-105 duration-200 rounded-lg"
							>
								<img src={element.src.large} alt={element.alt ?? '/'} className="w-full h-[300px] object-cover" />
								<div className='flex justify-between px-2 py-4 bg-blue-400'>
									<p className='font-bold'>{element.alt}</p>
									<Rating value={3} style={{maxWidth: 100}} readOnly items={5} />
								</div>
							</NavLink>
						);
					})
					: pics?.map((element: DataType) => {
						return (
							<NavLink
								to={`pet/${element.id}`}
								state={{petPicUrl: `${element.image}`}}
								key={element.id}
								className="border shadow-lg hover:scale-105 duration-200 rounded-lg"
							>
								<img src={element.image} alt={element.name} className="w-full h-[300px] object-cover" />
								<div className='flex justify-between px-2 py-4 bg-blue-400'>
									<p className='font-bold'>{element.name}</p>
									<Rating value={element.price.length} style={{maxWidth: 100}} readOnly items={5} />
								</div>
							</NavLink>
						);
					})}
			</div>
		</div>
	);
};

export default Food;
