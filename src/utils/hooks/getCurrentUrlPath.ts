import {useLocation} from 'react-router-dom';

export const useGetCurrentUrl = () => {
	const {pathname} = useLocation();
	return pathname;
};