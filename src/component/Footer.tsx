import React from 'react';
import {motion} from 'framer-motion';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import {FM_CASCADE_PARENT_VARIANTS, FM_SHOW_FROM_BOTTOM, FM_SHOW_FROM_TOP} from '../utils/framer-motion-settings';

const Footer = () => {
	return (
		<motion.footer initial="initial" whileInView="visible" variants={FM_CASCADE_PARENT_VARIANTS} className='pt-24 bg-purple-paw text-white'>
			<div className="container mx-auto px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					<div>
						<motion.h3 variants={FM_SHOW_FROM_BOTTOM} className='text-xl font-bold mb-6'>Contact Us</motion.h3>
						<ul>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3'>1463 Pette Kyosheta, Sofia, Bulgaria</motion.li>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3 text-white underline hover:text-yellow-paw'><a href="tel:+359123456789">(+359) 12 3456 789</a></motion.li>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3 text-white underline hover:text-yellow-paw'><a href="mailto:inquiries@bestpaw.com">inquiries@bestpaw.com</a></motion.li>
						</ul>
					</div>
					<div>
						<motion.h3 variants={FM_SHOW_FROM_BOTTOM} className='text-xl font-bold mb-6'>Opening Hours</motion.h3>
						<ul>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3'>Mon - Fri: 10am - 8pm</motion.li>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3'>Sat: 10am - 4pm</motion.li>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3'>Sun: Closed</motion.li>
						</ul>
					</div>
					<div>
						<motion.h3 variants={FM_SHOW_FROM_BOTTOM} className='text-xl font-bold mb-6'>Customer Service</motion.h3>
						<ul>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3 text-white underline hover:text-yellow-paw'><a href="/">About Us</a></motion.li>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3 text-white underline hover:text-yellow-paw'><a href="/">FAQs</a></motion.li>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3 text-white underline hover:text-yellow-paw'><a href="/">Terms of Service</a></motion.li>
							<motion.li variants={FM_SHOW_FROM_BOTTOM} className='my-3 text-white underline hover:text-yellow-paw'><a href="/">Tell Us What You Think</a></motion.li>
						</ul>
					</div>
					<div>
						<motion.h3 variants={FM_SHOW_FROM_BOTTOM} className='text-xl font-bold mb-6'>Connect With Us</motion.h3>
						<div className='flex flex-wrap items-center mx-[-1rem]'>
							<motion.a variants={FM_SHOW_FROM_BOTTOM} href="https://www.facebook.com" target="_blank" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaFacebookF />
							</motion.a>
							<motion.a variants={FM_SHOW_FROM_BOTTOM} href="/" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaInstagram />
							</motion.a>
							<motion.a variants={FM_SHOW_FROM_BOTTOM} href="/" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaLinkedinIn />
							</motion.a>
							<motion.a variants={FM_SHOW_FROM_BOTTOM} href="/" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaYoutube />
							</motion.a>
						</div>
					</div>
				</div>
			</div>
			<motion.div variants={FM_SHOW_FROM_TOP} className='bg-zinc-800 mt-24 py-5'>
				<div className="container mx-auto px-8">
					<p className='text-md text-center'>&copy; 2023 BestPaw. All Rights Reserved.</p>
				</div>
			</motion.div>
		</motion.footer>
	);
};

export default Footer;