import React from 'react';
import {type IconNames, icons} from './IconNames';

export interface SvgProps {
	width?: number;
	height?: number;
}

interface Props {
	name: IconNames;
	className?: string;
}

const Icon = React.memo(
	({
		name,
		width,
		height,
		className,
		...props
	}: Props & SvgProps) => {
		const svg = React.createElement(icons[name], {
			width,
			height,
		});
		return (
			<div className={className} {...props}>
				{svg}
			</div>
		);
	},
);

export default Icon;
