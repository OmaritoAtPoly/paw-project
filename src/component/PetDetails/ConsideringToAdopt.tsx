import React from 'react';
import {NavLink} from 'react-router-dom';

interface Props {
	petName: string;
}

export const ConsideringToAdopt = ({petName}: Props) => (
	<div className="border border-red-700 mt-7 bg-purple-500 text-white text-xl flex flex-col items-center justify-around h-[250px] rounded-xl  mx-auto">
		<p className="text-center font-semibold">
			Considering {petName} for adoption_?
		</p>
		<NavLink
			to="/"
			className="bg-white text-primary p-3 rounded-full hover:bg-primary/50 hover:text-white"
		>
			Start Your Inquiry
		</NavLink>
		<NavLink
			to="/"
			className="ring-offset-2 ring-2 p-3 rounded-full hover:bg-primary/50"
		>
			Read ours FAQs
		</NavLink>
	</div>
);
