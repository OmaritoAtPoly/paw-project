import React from 'react';
import {generate} from 'shortid';

interface Props {
	elements: string[];
}

export const BreadCrumbs = ({elements}: Props) => (
	<nav className="hidden bg-white px-5 py-3 rounded-md w-fit select-none sm:block">
		<ol className="sm:flex flex-wrap">
			{elements.map((element, index) => (
				<ul className='flex' key={generate()}>
					<li>
						<p className="text-gray-700 hover:text-blue-700 hover:cursor-default">{element}</p>
					</li>
					<p className={`text-gray-500 mx-2 ${index === elements.length - 1 ? 'hidden' : ''}`}>{'>'}</p>
				</ul>
			))}
		</ol>
	</nav>
);