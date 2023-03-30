import {compare, genSaltSync, hashSync} from 'bcryptjs';
import {toast, type TypeOptions, type ToastOptions} from 'react-toastify';
import {type DefaultUserDataType} from '../data/data';

// export const handleUserLogin = (preparedInfo: ExtendedUserType) => {
// 	sessionStorage.setItem('usedLogged', 'true');
// 	sessionStorage.setItem('currentUser', JSON.stringify(preparedInfo));
// };

export const LogoutUserFromSessionStorage = () => {
	sessionStorage.removeItem('currentUser');
	sessionStorage.removeItem('usedLogged');
};

export const encryptUserPassword = (password: string) => hashSync(password, genSaltSync(7));

//// TODO erase this function when when the backend is working 
export const auxiliar = async (email: string, password: string) => {
	const currentUser = sessionStorage.getItem('user');
	if (currentUser) {
		const value = JSON.parse(currentUser) as DefaultUserDataType;
		const validated = compare(password, value.password);

		if (await validated && (value.email === email)) return value;
	}

	return currentUser;
};

export const cleanString = (value: string) => {
	const newValue = value.split(',');

	return newValue.filter((a) => a !== '').join(', ');
};

export const notifyToaster = (text: string, itemType?: TypeOptions) => {

	const commonProperties: ToastOptions = {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};

	switch (itemType) {
		case 'success':
			return (toast.success(text, commonProperties));

		case 'error':
			return (toast.error(text, {...commonProperties, autoClose: false}));

		case 'warning':
			return (toast.warning(text, commonProperties));
			break;

		default:
			return (toast.info(text, commonProperties));
			break;
	}

};