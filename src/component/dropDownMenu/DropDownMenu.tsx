import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import {type ItemElementType} from '../../data/data';

interface MenuProps {
	menuTitle: string;
	items: ItemElementType[];
}

export default function DropDownMenu({menuTitle, items}: MenuProps) {
	return (
		<Menu as="div" className="relative inline-block text-left ">
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
					{menuTitle}
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none active:ring-amber-700">
					<div className="py-1 w-max">
						{items.map((element) => (
							<Menu.Item key={element.itemName}>
								{({active}) => {
									return (
										<div
											key={element.itemName}
											className={`${active
												? ' bg-gray-200 whitespace-nowrap'
												: 'text-gray-700 whitespace-nowrap'} flex justify-between py-2 text-right}`}
											onClick={element.onClick}
										>
											{element.imgUrl ? <img
												className="h-8 w-8 rounded-full ring-2 ring-white ml-3 hidden sm:inline-block"
												alt=""
												src={element.imgUrl}
											/> : <div className=' h-8 w-8 ml-3 hidden sm:inline-block' />}
											<span className='mx-3 cursor-default active::outline-none text-center w-full'>{element.itemName}</span>
										</div>
									);
								}}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}