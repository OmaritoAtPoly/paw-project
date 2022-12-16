import React, {useState, type ChangeEvent, type FormEvent} from 'react';
import Search from './Search';
import {useActions} from '../state/hooks/useActions';

const GooglePexel = () => {
	const [search, setSearch] = useState<string>('');
	const [perPage] = useState(12);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
		setSearch(searchValue);
	};

	const {searchPictures} = useActions();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (search) {
			setSearch('');
			searchPictures(search, perPage);
		}
	};


	return (
		<Search handleValue={handleChange} value={search} handleSubmit={handleSubmit} />
	);
};

export default GooglePexel;
