import React from 'react';

interface Props {
	name: string;
	id: string;
}
export const Pet = ({name, id}: Props) => {
	return (
		<div>{`${name}, ${id}`}</div>
	);
};

