import React, {
	useState,
	type ChangeEvent,
	type FormEvent,
	useEffect,
} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {type RootState} from '../state';
import {ActionType} from '../state/action-types';
import {useActions} from '../state/hooks/useActions';
import CardAlert from './CardAlert';
import Search from './Search';

const GooglePexel = () => {
	const [search, setSearch] = useState<string>('');
	const [perPage] = useState(12);
	const [showAlert, setShowAlert] = useState(true);
	const dispatch = useDispatch();
	const {error, loading} = useSelector((state: RootState) => state.photos);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!!error && showAlert)
				dispatch({
					type: ActionType.SET_ERROR,
					payload: '',
				});
		}, 2000);
		return () => {
			clearTimeout(timer);
		};

	}, [dispatch, error, showAlert]);

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
			setShowAlert(true);
		}
	};

	const handleOnClose = () => {
		setShowAlert(!showAlert);
	};

	return (
		<div className='flex flex-col h-[200px] justify-around items-center'>
			<Search
				handleValue={handleChange}
				value={search}
				handleSubmit={handleSubmit}
				loading={loading}
			/>
			{(!!error && showAlert) && <CardAlert
				cardInfo={error}
				cardTitle='Alert.!'
				handleOnClose={handleOnClose}
			/>}
		</div>
	);
};

export default GooglePexel;
