import {type Photo} from 'pexels';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {defaultAvailablePets} from '../data/data';
import {type RootState} from '../state';
import {AVAILABLE_PETS, READ_MY_HISTORY, TAKE_HOME} from '../utils/constants';
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

	return (
		<>
			<AvailablePetsPanel />
			{loading ? (
				<Spinner />
			) : (
				<>
					<p className="text-4xl sm:text-5xl md:text-6xl text-center w-full pt-[4vw] text-primary ">
						{AVAILABLE_PETS}
					</p>
					<div className="max-w-[1880px] min-w-[100px] mx-auto p2 p-4 py-8 grid justify-center sm:grid-cols-3 gap-6 select-none">
						{data?.map((element: Photo) => (
							<Card
								key={element.id}
								buttonLabel={TAKE_HOME}
								cardLabel={element.photographer.split(' ')[0]}
								imgUrl={element.src.original}
								info={READ_MY_HISTORY}
								elementId={element.id.toString()}
								petName={element.photographer}
							/>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default HeadLinesCards;
