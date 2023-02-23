import React from 'react';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='pt-24 bg-purple-paw text-white'>
			<div className="container mx-auto px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					<div>
						<h3 className='text-xl font-bold mb-6'>Contact Us</h3>
						<ul>
							<li className='my-3'>1463 Pette Kyosheta, Sofia, Bulgaria</li>
							<li className='my-3 text-white underline hover:text-yellow-paw'><a href="tel:+359123456789">(+359) 12 3456 789</a></li>
							<li className='my-3 text-white underline hover:text-yellow-paw'><a href="mailto:inquiries@bestpaw.com">inquiries@bestpaw.com</a></li>
						</ul>
					</div>
					<div>
						<h3 className='text-xl font-bold mb-6'>Opening Hours</h3>
						<ul>
							<li className='my-3'>Mon - Fri: 10am - 8pm</li>
							<li className='my-3'>Sat: 10am - 4pm</li>
							<li className='my-3'>Sun: Closed</li>
						</ul>
					</div>
					<div>
						<h3 className='text-xl font-bold mb-6'>Customer Service</h3>
						<ul>
							<li className='my-3 text-white underline hover:text-yellow-paw'><a href="/">About Us</a></li>
							<li className='my-3 text-white underline hover:text-yellow-paw'><a href="/">FAQs</a></li>
							<li className='my-3 text-white underline hover:text-yellow-paw'><a href="/">Terms of Service</a></li>
							<li className='my-3 text-white underline hover:text-yellow-paw'><a href="/">Tell Us What You Think</a></li>
						</ul>
					</div>
					<div>
						<h3 className='text-xl font-bold mb-6'>Connect With Us</h3>
						<div className='flex flex-wrap items-center mx-[-1rem]'>
							<a href="/" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaFacebookF />
							</a>
							<a href="/" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaInstagram />
							</a>
							<a href="/" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaLinkedinIn />
							</a>
							<a href="/" className="rounded-full text-zinc-700 p-3 text-xl bg-white mx-4 mb-4 hover:bg-yellow-paw hover:text-white">
								<FaYoutube />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-zinc-800 mt-24 py-5'>
				<div className="container mx-auto px-8">
					<p className='text-md text-center'>&copy; 2023 BestPaw. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;