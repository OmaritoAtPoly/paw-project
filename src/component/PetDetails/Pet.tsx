import React from 'react';

interface Props {
	name: string;
}
export const Pet = ({name}: Props) => {
	return (
		<div>{name}</div>
	);
};

