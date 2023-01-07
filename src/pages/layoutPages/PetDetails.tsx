/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useCallback} from 'react';
import {faker} from '@faker-js/faker';
import {Rating} from '@smastrom/react-rating';
import {BiPhone} from 'react-icons/bi';
import {GiFoxTail, GiWeightLiftingUp} from 'react-icons/gi';
import {HiUserGroup} from 'react-icons/hi';
import {MdOutlineLocationOn} from 'react-icons/md';
import {SiThunderbird} from 'react-icons/si';
import {TbHeartbeat} from 'react-icons/tb';
import {NavLink, useLocation, useParams} from 'react-router-dom';
import {AboutPetItem} from '../../component/aboutPetItem';
import {BreadCrumbs} from '../../component/BreadCrumbs';
import {ABOUT, CALL_US} from '../../utils/constants';

export const PetDetails = () => {
	const {id} = useParams();

	const location = useLocation();
	const imgUrl = location.state.petPicUrl as string;
	const petName = location.state.petName as string;
	const itemWrapperStyle = 'flex items-center py-1';
	const petSkillIconStyle = 'w-11 h-auto border border-primary rounded-full p-1';
	const petSkillTextStyle = 'pl-5 text-xl';

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	const sendEmail = useCallback(() => {
		window.open('mailto:paw@mail.com');
	}, []);

	const handleCallFunction = useCallback(() => {
		window.open('tel:111111');
	}, []);

	return (
		<div className="border border-blue-600 bg-cyann-400 h-fit sm:bg-redn-400 flex flex-col items-center md:flex-row md:items-stretch">
			{/* about section */}
			<div className="w-fit flex flex-col justify-start drop-shadow-2xl mb-3 md:ml-[5vw]">
				<img src={imgUrl} alt={id} className="w-[350px] object-contain" />
				<Rating
					className="absolute translate-x-[100%] translate-y-[100%]"
					value={3}
					style={{maxWidth: 100}}
					items={5}
				/>
				<div className="w-[350px] bg-white ">
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
			</div>
			{/* pet info section */}
			<div className='border border-lime-200 w-[350px] h-fit flex flex-col justify-between md:w-[50vw] md:ml-10 xl:bg-blue-500 xl:w-[42vw] xl:ml-3'>
				<div className='w-[350px] h-fit rounded-lg drop-shadow-xl mx-auto md:mx-0 md:w-[90%]'>
					<p className='text-center text-4xl pb-4 md:text-left'>{petName}</p>
					<BreadCrumbs elements={['Young', 'Male', 'Medium', 'Black & White']} />
				</div>

				{/* about section */}
				<div>
					<p className='text-4xl py-5'>{ABOUT}</p>
					<AboutPetItem className={itemWrapperStyle}>
						<GiFoxTail className={petSkillIconStyle} color='#d5825e' />
						<p className={petSkillTextStyle}>Short</p>
					</AboutPetItem>
					<AboutPetItem className={itemWrapperStyle}>
						<GiWeightLiftingUp className={petSkillIconStyle} color='#34a9f0' />
						<p className={petSkillTextStyle}>House-trained</p>
					</AboutPetItem>
					<AboutPetItem className={itemWrapperStyle}>
						<TbHeartbeat className={petSkillIconStyle} color='#f05534' />
						<p className={`${petSkillTextStyle} text-justify w-fit md:text-left`}>Vaccinations up to date, spayed / neutered.</p>
					</AboutPetItem>
					<AboutPetItem className={itemWrapperStyle}>
						<HiUserGroup className={petSkillIconStyle} color='#719fe8' />
						<p className={petSkillTextStyle}>Good with other pets</p>
					</AboutPetItem>
				</div>
				{/* cuando el tamanno sea menos de xl poner una seccion aki, y esta se ocultara cuando sea mayor que xl para entonces mostrar la columna derecha */}
				<div className='xl:hidden border border-red-700 mt-7 bg-purple-500 text-white text-xl flex flex-col items-center justify-around h-[250px] rounded-xl w-[70%] mx-auto'>
					<p className='text-center font-semibold'>Considering {petName} for adoption_?</p>
					<NavLink to='/' className='bg-white text-primary p-3 rounded-full hover:bg-primary/50 hover:text-white'>Start Your Inquiry</NavLink>
					<NavLink to='/' className='ring-offset-2 ring-2 p-3 rounded-full hover:bg-primary/50'>Read ours FAQs</NavLink>
				</div>
				{/* Meet our pet */}
				<div className='border border-blue-600 bg-white drop-shadow-2xl mt-5 rounded-xl'>
					<p className='text-4xl mb-5'>Meet {petName}</p>
					<p className='text-justify px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quos esse! Facilis quam nam aperiam optio labore molestias recusandae maiores nisi esse impedit! Quidem saepe provident ut voluptas accusamus repellendus! consectetur adipisicing elit. Harum, quos esse! Facilis quam nam aperiam optio labore molestias recusandae maiores nisi esse impedit! Quidem saepe provident ut voluptas accusamus repellendus!consectetur adipisicing elit. Harum, quos esse! Facilis quam nam aperiam optio labore molestias recusandae maiores nisi esse impedit! Quidem saepe provident ut voluptas accusamus repellendus!consectetur adipisicing elit. Harum, quos esse! Facilis quam nam aperiam optio labore molestias recusandae maiores nisi esse impedit! Quidem saepe provident ut voluptas accusamus repellendus! </p>
				</div>
				{/* contact section for tiny screens */}
				<div className='xl:hidden border border-red-700 mt-20 bg-white drop-shadow-2xl rounded-xl flex flex-col items-center'>
					<div className='mx-auto bg-primary/40 rounded-full w-20 h-20 flex items-center justify-center ring-offset-2 ring-2 -translate-y-[50%] z-10'>
						<img src="animal-shelter.png" alt="logo" width={50} height={50} />
					</div>
					<h1 className='text-4xl font-semibold'>Paw Shelter Center</h1>
					{/* contact sub section */}
					<div className='border border-blue-700 flex items-center justify-between'>
						<MdOutlineLocationOn size={20} />
						<div className='text-center px-3'>
							<p className='font-bold'> Location Address</p>
							<p> Sofia City, <span className='font-semibold'>BG</span></p>
						</div>
					</div>
					<div className='border border-blue-700 flex items-center justify-between hover:cursor-pointer' onClick={sendEmail}>
						<SiThunderbird size={17} />
						<div className='text-center px-3'>
							<p className='font-bold'>Write an email to us</p>
							<p>Sofia City, <span className='font-semibold'>paw@mail.com</span></p>
						</div>
					</div>
					<div className='border border-blue-700 flex items-center justify-between hover:cursor-pointer' onClick={handleCallFunction}>
						<BiPhone size={20} /> <span className=''>{CALL_US}</span>
					</div>
				</div>
			</div>
			<div className='hidden border border-red-700 mt-7 bg-purple-500 text-white text-xl xl:flex xl:flex-col items-center justify-around h-[250px] rounded-xl w-[22vw] mx-auto 2xl:w-[26vw]'>
				<p className='text-center font-semibold'>Considering {petName} for adoption_?</p>
				<NavLink to='/' className='bg-white text-primary p-3 rounded-full hover:bg-primary/50 hover:text-white'>Start Your Inquiry</NavLink>
				<NavLink to='/' className='ring-offset-2 ring-2 p-3 rounded-full hover:bg-primary/50'>Read ours FAQs</NavLink>
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
