import React from 'react';

interface CardAlertProps {
	cardTitle?: string;
	cardInfo: string;
	handleOnClose: () => void;
}

const CardAlert = ({handleOnClose, cardInfo = '', cardTitle = 'Error'}: CardAlertProps) => {
	return (
		<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-3xl relative w-fit flex-col" onClick={handleOnClose} onKeyUp={handleOnClose} role='button' tabIndex={0} aria-label='hidden alert' >
			<div className='flex justify-between'><strong className="font-bold">{cardTitle}</strong>
				<span className='relative right-0'>
					<svg onClick={handleOnClose} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
				</span>
			</div>
			<span className="block sm:inline">{cardInfo}</span>
		</div>
	);
};

export default CardAlert;