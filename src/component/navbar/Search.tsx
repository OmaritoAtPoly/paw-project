import React, {type ChangeEvent, type FormEvent} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {Spinner} from '../Spinner';

interface InputProps {
	value: string;
	handleValue: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (event: FormEvent) => void;
	loading?: boolean;
}

const Search = ({
	value,
	handleValue,
	handleSubmit,
	loading = false,
}: InputProps) => (
	<form
		className="flex flex-col items-center xl:flex-row justify-around w-full lg:max-w-[25vw]"
		onSubmit={handleSubmit}
	>
		{loading ? (
			<Spinner />
		) : (
			<div className="bg-white border border-gray rounded-full flex items-center p-0.5 pl-2 w-full">
				<input
					className="bg-transparent p-2 w-full focus:outline-none"
					type="text"
					placeholder="find pets here"
					value={value}
					onChange={handleValue}
				/>
				<button type="submit" className="p-2 text-orange-600 hover:text-gray-600">
					<AiOutlineSearch size={26} />
				</button>
			</div>
		)}
	</form>
);

export default Search;
