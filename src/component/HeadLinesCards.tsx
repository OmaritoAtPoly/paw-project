import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {type Photo} from 'pexels';
import {useSelector} from 'react-redux';
import {defaultAvailablePets} from '../data/data';
import {type RootState} from '../state';
import {AVAILABLE_PETS} from '../utils/constants';
import {FM_CASCADE_PARENT_VARIANTS, FM_SHOW_FROM_TOP} from '../utils/framer-motion-settings';
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
				<motion.div variants={FM_CASCADE_PARENT_VARIANTS} initial="initial" whileInView="visible" className='max-w-screen-lg mx-auto p-4 my-20'>
					<motion.h3 variants={FM_SHOW_FROM_TOP} className="text-3xl sm:text-4xl md:text-5xl text-center mb-20 text-zinc-800">
						{AVAILABLE_PETS}
					</motion.h3>
					<div className="grid justify-items-center px-4 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-16 select-none sm:px-0">
						{data?.map((element: Photo, index: number) => (
							<Card
								elementData={element}
								key={element.id}
								cardColor={cardColors[index % cardColors.length]}
							/>
						))}
					</div>
				</motion.div>
			)}
		</>
	);
};

export default HeadLinesCards;
