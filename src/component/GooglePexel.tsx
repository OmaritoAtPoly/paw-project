import {type Photos, type Photo} from 'pexels';
import axios, {type AxiosResponse} from 'axios';
import React, {useState, type ChangeEvent, type FormEvent} from 'react';
import Search from './Search;';

const request = async (url: string): Promise<Photo[]> => {
	let result: Photo[] = [];
	try {

		const value: AxiosResponse<Photos> = (await axios.get(url, {
			headers: {
				'Authorization': process.env.REACT_APP_PEXEL_KEY,
			},
		}));
		if (value.status === 200 && value.data !== undefined) {
			result = value.data.photos;
			return result;
		}

	} catch (error) {
		if (error) {
			throw new Error;
		}
	}

	return result;
};

const GooglePexel = () => {
	const [search, setSearch] = useState<string>('');
	const [perPage, setPerPage] = useState(8);
	const [result, setResult] = useState<Photo[] | undefined>();

	const url = `https://api.pexels.com/v1/search?query=${search}&per_page=${perPage}&page=4`;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
		setSearch(searchValue);
	};

	// const noOfPics = (event: ChangeEvent<HTMLInputElement>) => {
	// 	const perPagevalue = event.target.value;
	// 	if (perPagevalue)
	// 		setPerPage(Number(perPagevalue));
	// };
	if (Math.random() === 0.17277845) {
		setPerPage(4);
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (search) {
			setSearch('');

			const value = await request(url);
			setResult(value);
		}
	};


	return (
		<>
			<Search handleValue={handleChange} value={search} handleSubmit={handleSubmit} />
			{result?.map((ele: Photo) => <div key={ele.id}><img src={ele.src.large} alt="/" /></div>)}
		</>
	);
};

export default GooglePexel;
