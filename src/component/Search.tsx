import React, {type ChangeEvent, type FormEvent} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {Spinner} from './Spinner';

interface InputProps {
	value: string;
	handleValue: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (event: FormEvent) => void;
	loading?: boolean;
}

const Search = ({value, handleValue, handleSubmit, loading = false}: InputProps) => (
	<form className="flex flex-col items-center w-[50vw] sm:flex-row justify-between lg:max-w-[80vw] h-[100px]" onSubmit={handleSubmit}>
		{loading
			? <Spinner />
			: <>
				<div className='bg-gray-200 rounded-full flex  items-center p-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
					<AiOutlineSearch size={25} />
					<input className=' bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='find pets here' value={value} onChange={handleValue} />
				</div><button type='submit' className='border border-orange-600 rounded-2xl w-[20vw] mx-2 px-2 hover:bg-orange-500 hover:text-white mt-2 sm:mt-0 '>Find me</button>
			</>
		}
	</form>);

export default Search;
