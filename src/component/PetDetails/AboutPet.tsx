import {Rating} from '@smastrom/react-rating';
import React from 'react';
import {faker} from '@faker-js/faker';


interface Props {
	imgUrl: string;
	id?: string;
}

export const AboutPet = ({id = 'imageAlt', imgUrl}: Props) =>
	<div className="w-[70vw] flex flex-col justify-start drop-shadow-2xl mb-3 md:ml-[5vw] md:w-[60vw] lg:w-[400px]">
		<Rating
			className="mx-auto translate-y-[200%] z-10"
			value={3}
			style={{maxWidth: 100}}
			items={5}
		/>
		<img src={imgUrl} alt={id} className=" object-contain" />
		<div className=" bg-white ">
			<div className="m-4 h-full flex-col">
				<p className="font-bold mb-3">About</p>
				<p className='text-justify'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
					officiis inventore soluta dolorem! Nostrum numquam sequi ipsum,
					odit, quisquam adipisci excepturi consectetur, optio fuga
					repellendus harum. Velit voluptatibus ab voluptas?{' '}
				</p>
				<span className="block text-red-400 font-bold text-center my-4">
					Rescue Data:
				</span>
				<div className="flex flex-col ">
					<span className="font-bold text-black/80">
						Place:
						<span className="ml-[10px] font-normal text-black">
							{faker.address.city()}
						</span>
					</span>

					<span className="font-bold text-black/80">
						Date:
						<span className="ml-[10px] font-normal text-black">
							{new Date().toDateString()}
						</span>
					</span>
				</div>
			</div>
		</div>
	</div>;
