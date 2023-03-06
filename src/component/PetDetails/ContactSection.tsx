import React from 'react';
import {BiPhone} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {GiDogBowl} from 'react-icons/gi';
import {FiMapPin} from 'react-icons/fi';
import {PUBLIC_PHONE_NUMBER} from '../../utils/constants';

export const ContactSection = () => (
	<div className="bg-white mt-20 p-10 shadow-xl-centered rounded-xl">
		<div className="mx-auto bg-yellow-paw rounded-full w-24 h-24 -mt-20 mb-10 flex items-center justify-center z-10">
			<GiDogBowl className="w-14 h-14 text-white" />
		</div>
		<h4 className="text-xl font-bold mb-10 text-center text-purple-paw">Paw Shelter Center</h4>
		{/* contact sub section */}
		<ul>
			<li className="flex items-end mt-6">
				<FiMapPin className='w-7 h-7 text-orange-paw' />
				<div className='ml-6'>
					<h6 className="text-zinc-400 text-xs">Location Address</h6>
					<p>Sofia City, <span className="font-semibold">BG</span></p>
				</div>
			</li>
			<li className="mt-6">
				<a href="mailto:paw@mail.com" className="flex items-end hover:cursor-pointer hover:text-orange-paw">	
					<HiOutlineMail className='w-7 h-7 text-orange-paw' />
					<div className='ml-6'>
						<h6 className="text-zinc-400 text-xs">Email address</h6>
						<p>paw@mail.com</p>
					</div>
				</a>
			</li>
			<li className="mt-6">
				<a href="tel:00123456789" className="flex items-end hover:cursor-pointer hover:text-orange-paw">
					<BiPhone className='w-7 h-7 text-orange-paw' />
					<div className='ml-6'>
						<h6 className="text-zinc-400 text-xs">Phone number</h6>
						<p>{PUBLIC_PHONE_NUMBER}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
);
