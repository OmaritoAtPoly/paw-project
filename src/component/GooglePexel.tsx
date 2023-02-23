import React, {
	useState,
	type ChangeEvent,
	type FormEvent,
	useEffect,
	useCallback,
} from 'react';
import {motion} from 'framer-motion';
import {useSelector, useDispatch} from 'react-redux';
import {type RootState} from '../state';
import {ActionType} from '../state/action-types';
import {useActions} from '../state/hooks/useActions';
import {useGetCurrentUrl} from '../utils/hooks/getCurrentUrlPath';
import CardAlert from './CardAlert';
import Search from './navbar/Search';
import {FM_SHOW_FROM_LEFT} from '../utils/framer-motion-settings';

const GooglePexel = () => {
	const [search, setSearch] = useState<string>('');
	const [perPage] = useState(12);
	const [showAlert, setShowAlert] = useState(true);
	const dispatch = useDispatch();
	const {error, loading} = useSelector((state: RootState) => state.photos);

	const currentUrl = useGetCurrentUrl();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (error)
				dispatch({
					type: ActionType.SET_ERROR,
					payload: '',
				});
			setShowAlert(true);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};

	}, [dispatch, error, showAlert]);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
		setSearch(searchValue);
	}, []);

	const {searchPictures} = useActions();

	const handleSubmit = useCallback(async (e: FormEvent) => {
		e.preventDefault();
		if (search) {
			setSearch('');
			searchPictures(search, perPage);
		}
	}, [perPage, search, searchPictures]);

	const handleOnClose = useCallback(() => {
		setShowAlert(false);
	}, []);

	return (
		<motion.div variants={FM_SHOW_FROM_LEFT} className='flex items-center flex-1 mr-10'>
			{currentUrl === '/'
				? <Search
					handleValue={handleChange}
					value={search}
					handleSubmit={handleSubmit}
					loading={loading}
				/>
				: null}
			{(!!error && showAlert) && <CardAlert
				cardInfo={error}
				cardTitle='Alert.!'
				handleOnClose={handleOnClose}
			/>}
		</motion.div>
	);
};

export default GooglePexel;
