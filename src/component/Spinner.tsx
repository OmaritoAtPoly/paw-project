import React from 'react';

export const Spinner = () => (
	<div className="flex justify-center items-center w-fit mx-auto my-20">
		<div className="flex items-center justify-center">
			<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-blue-500 animate-spin">
				<div className="h-9 w-9 rounded-full bg-white" />
			</div>
		</div>
	</div>
);
