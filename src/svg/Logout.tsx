import * as React from 'react';

interface Props {
	width?: number;
	height?: number;
}

function Logout({width = 20, height = 20, ...props}: Props & React.SVGProps<SVGSVGElement>) {
	return (
		<svg width={width} height={height} viewBox="0 0 90 90" {...props}>
			<g fill="currentColor">
				<path d="M35.5 10.3c-5.4 1.8-9.9 4.2-11.5 6.2-1.1 1.3-1.1 1.8.2 3.2 1.5 1.4 2.1 1.3 7.5-1.3 8.2-4.1 18.3-4.1 26.5-.1C68.9 23.6 74.5 32.7 74.5 45c0 8.5-2.1 14.2-7.4 20.3-8.2 9.3-23.7 12.1-35.4 6.3-5.4-2.6-6-2.7-7.5-1.3-1.4 1.5-1.4 1.8.2 3.6 3.7 4 11.5 6.6 20.6 6.6 7.2 0 9.4-.4 14.5-2.8 7.8-3.6 14.6-10.4 18.2-18.1 2.4-5.2 2.8-7.4 2.8-14.6 0-7.2-.4-9.4-2.8-14.6C72 18.1 60 10 46.6 9.3c-4.1-.1-8.8.3-11.1 1z" />
				<path d="M12.8 36.7C9 40.5 6 44.2 6 45.1c0 2.4 13.5 15.2 15.6 14.7 3.3-.6 2.8-3.8-1.2-7.9L16.6 48l17-.2 16.9-.3v-5l-16.9-.3-17-.2 3.8-3.9c4.1-4.1 4.5-7.4 1.1-7.9-1.4-.2-4.2 1.9-8.7 6.5z" />
			</g>
		</svg>
	);
}

const LogoutMemo = React.memo(Logout);
export default LogoutMemo;
