import React from 'react';
import {ToastContainer} from 'react-toastify';

export const ToasterContainer = () => {
	return (
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss={false}
			draggable
			pauseOnHover
		/>
	);
};
