import {Rating} from '@smastrom/react-rating';
import React, {useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {faker} from '@faker-js/faker';

export const PetDetails = () => {
	const {id} = useParams();

	const location = useLocation();
	const imgUrl = location.state.petPicUrl as string;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="drop-shadow-2xl border border-blue-600">
			<div className="w-fit ml-[10vw] h-[500px] flex flex-col justify-between">
				<img src={imgUrl} alt={id} className="w-[300px] object-contain" />
				<Rating
					className="absolute translate-x-[100%] translate-y-[100%]"
					value={3}
					style={{maxWidth: 100}}
					items={5}
				/>
				<div className="w-[300px] bg-white ">
					<div className="border-solid border-black border-2 m-4 h-full flex-col">
						<p className="font-bold mb-3">About</p>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
							officiis inventore soluta dolorem! Nostrum numquam sequi ipsum,
							odit, quisquam adipisci excepturi consectetur, optio fuga
							repellendus harum. Velit voluptatibus ab voluptas?{' '}
						</span>
						<span className="block text-red-400 font-bold text-center my-4">
							Rescue Data:
						</span>
						<div className="flex flex-col ">
							<span className='font-bold text-black/80'>
								Place:
								<span className="ml-[10px] font-normal text-black">{faker.address.city()}</span>
							</span>

							<span className='font-bold text-black/80'>
								Date:
								<span className="ml-[10px] font-normal text-black">{new Date().toDateString()}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// TODO use this code when needed,
// export const petDetailsLoader = async ({params}: LoaderFunctionArgs) => {
// 	const {id} = params;
// 	let result;
// 	if (id) {
// 		try {
// 			const url = `https://api.pexels.com/v1/photos/${id}`;

// 			const value: AxiosResponse<Photo> = (await axios.get(url, {
// 				headers: {
// 					'Authorization': process.env.REACT_APP_PEXEL_KEY,
// 				},
// 			}));

// 			if (value.status === 200) {
// 				result = value.data;
// 			}
// 		} catch (error) {
// 			if (error instanceof Error) {
// 				console.log('there is an error due to:', error.message);
// 			}
// 		}
// 	}

// 	return result;
// };
