import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite} from 'react-icons/md';
import {BiPhone} from 'react-icons/bi';
import GooglePexel from './GooglePexel';

const Navbar = () => {
	const [navState, setNavState] = useState(false);

	const handleNavState = () => {
		setNavState(prev => !prev);
	};

	const handleCallFunction = () => {
		window.open('tel:111111');
	};

	return (
		<div className='border-red-200 border-8 mx-auto flex justify-between items-center p-4'>
			{/* left side */}
			<div className='flex items-center'>
				<div className='cursor-pointer'>
					<AiOutlineMenu size={30} onClick={handleNavState} />
				</div>
				<h1 className='hidden sm:flex text-2xl sm:text-3xl lg:text-4xl px-2 select-none'>
					Best <span className='font-bold'>Paw</span>
				</h1>

				<div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
					<p className='bg-black rounded-full text-white p-2'>Delivery</p>
					<p className='p-2'>Pick up</p>
				</div>
			</div>

			{/* search input */}
			<GooglePexel />
			
			{/* call button */}
			<button type='submit' onClick={handleCallFunction} className='bg-black flex flex-col items-center w-16 text-white py-2 rounded-2xl sm:w-[8vw] lg:flex-row lg:justify-around lg:max-w-[6vw]'>
				<BiPhone size={20} /> call us
			</button>
			{/* mobile menu */}
			{/* overlay */}
			{navState ? <div className='bg-black/70 fixed w-full h-screen left-0 top-0' onClick={handleNavState} onKeyUp={handleNavState} role='button' tabIndex={0} aria-label='hidden text' /> : ''}
			{/* side drawer menu */}
			<div className={`${navState ? 'fixed w-[300px] h-screen duration-300 bg-white left-0 top-0 z-10' : 'fixed w-[300px] h-screen duration-300 bg-white left-[-100%] top-0'} `}>
				<AiOutlineClose size={25} className="absolute right-4 top-4 cursor-pointer" onClick={handleNavState} />
				<h2 className='text-2xl p-4'>Best <span className='font-bold'>Paw</span> Home</h2>
				<nav>
					<ul className='flex flex-col p-4'>
						<li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
						<li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' />Favorites</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;