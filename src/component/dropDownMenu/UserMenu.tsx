import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {type MenuElementType} from '../../data/data';
import UserMemo from '../../svg/User';
import Icon from '../../svg/Icon';

interface MenuProps {
	items: MenuElementType[];
}

const UserMenu = ({items}: MenuProps) => {
	return (
		<Menu as="div" className="relative">
			<Menu.Button className="rounded-full border border-gray-300 bg-blue-100 p-3 text-zinc-600 hover:bg-gray-50 focus:outline-none">
				<UserMemo width={22} height={22} aria-hidden="true" />
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-6 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none active:ring-amber-700">
					<div className="py-1 w-max min-w-[260px]">
						{items.map((element) => (
							<Menu.Item key={element.itemName}>
								{({active}) => {
									return (
										<div
											key={element.itemName}
											className={`${active
												? ' bg-gray-200 whitespace-nowrap'
												: 'text-gray-700 whitespace-nowrap'} flex items-center py-2 cursor-pointer`}
											onClick={element.onClick}
										>
											{!!element.icon && <Icon
												name={element.icon.iconName}
												width={element.icon.iconWidth}
												height={element.icon.iconHeight}
												className={element.icon.iconClass}
											/>}
											{!!element.userPicture && <div className='ml-3 active::outline-none'>{element.userPicture.defaultIconName}</div>}
											<span className='mx-3 active::outline-none w-full'>{element.itemName}</span>
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
};

export default UserMenu;