import React, {useEffect, useState} from 'react';
import {type Photo} from 'pexels';
import {useSelector} from 'react-redux';
import {defaultAvailablePets} from '../data/data';
import {type RootState} from '../state';
import {AVAILABLE_PETS} from '../utils/constants';
import {AvailablePetsPanel} from './AvailablePetsPanel';
import Card from './Card';
import {Spinner} from './Spinner';

const HeadLinesCards = () => {

	const [data, setData] = useState<Photo[]>();

	const {photos, loading} = useSelector(
		(state: RootState) => state.availablePetsPhotos,
	);

	useEffect(() => {
		if (photos.length > 0) {
			setData(photos);
		} else setData(defaultAvailablePets);
	}, [photos]);

	const cardColors: string[] = ['orange-paw', 'purple-paw', 'yellow-paw'];

	return (
		<>
			<AvailablePetsPanel />
			{loading ? (
				<Spinner />
			) : (
				<div className='max-w-screen-lg mx-auto p-4 my-20'>
					<h3 className="text-3xl sm:text-4xl md:text-5xl text-center mb-20 text-zinc-800">
						{AVAILABLE_PETS}
					</h3>
					<div className="grid justify-items-center sm:grid-cols-3 gap-8 gap-y-16 select-none">
						{data?.map((element: Photo, index: number) => (
							<Card
								elementData={element}
								key={element.id}
								cardColor={cardColors[index % cardColors.length]}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default HeadLinesCards;
