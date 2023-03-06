import React from 'react';
import {NavLink} from 'react-router-dom';
import HeartMemo from '../../svg/Heart';

interface Props {
	petName: string;
}

export const ConsideringToAdopt = ({petName}: Props) => (
	<div className="p-10 shadow-xl bg-purple-paw text-white text-xl text-center rounded-xl">
		<h4 className="font-bold mb-6">
			Considering {petName} for adoption?
		</h4>
		<NavLink
			to="/"
			className="w-full bg-white mb-6 flex items-center justify-center text-purple-paw p-3 sm:px-4 rounded-full"
		>
			Adopt
		</NavLink>
		<button
			type="button"
			className="w-full bg-transparent border-2 border-white text-white flex items-center justify-center p-3 sm:px-4 rounded-full"
		>
			<HeartMemo height={24} width={24} />
			<span className="ml-4">Favorite</span>
		</button>
	</div>
);
