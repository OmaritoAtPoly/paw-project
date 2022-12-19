import * as React from 'react';

interface Props {
	width?: number;
	height?: number;
}

function CatLines({height = 20, width = 20}: Props) {
	return (
		<svg viewBox="19 13 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" height={height} width={width}>
			<path d="M60.248 77.64c1.258-.05 8.756-.484 13.497-6.531 4.693-5.95 3.87-13.884 2.032-20.753-1.887-6.87-4.064-13.642-5.708-20.56-.097-.484-.726-.677-1.065-.29-2.95 3.193-5.901 6.434-8.852 9.626H46.994c-2.951-3.192-5.902-6.433-8.853-9.626-.339-.387-.968-.194-1.064.29-1.694 6.918-3.87 13.69-5.709 20.56-1.886 6.869-2.66 14.802 2.032 20.753 4.74 6.047 12.24 6.482 13.497 6.53" stroke="#6504B5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
			<path d="M53.186 61.385a2.806 2.806 0 100-5.612 2.806 2.806 0 000 5.612zM61.506 55a2.806 2.806 0 100-5.612 2.806 2.806 0 000 5.612z" fill="#6504B5" />
			<path d="M20.048 54.274l18.286 1.548M20 65.98l18.334-1.74M86.951 54.274l-18.285 1.548M87 65.98l-18.335-1.74M45.059 65.109c.193.242 1.5 2.032 3.918 2.177 2.467.145 4.064-1.548 4.257-1.742v-5.176" stroke="#6504B5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
			<path d="M61.361 65.062c-.194.242-1.5 2.031-3.918 2.177-2.468.145-4.064-1.549-4.258-1.742v-5.176" stroke="#6504B5" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
		</svg>
	);
}

const CatMemo = React.memo(CatLines);
export default CatMemo;
