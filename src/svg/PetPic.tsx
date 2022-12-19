import * as React from 'react';

interface Props {
	width: number;
	height: number;
}

function PetPic({
	width = 20, height = 20,
}: Props) {
	return (
		<svg viewBox="0 0 426 439.5" width={width} height={height} >
			<style>{'.prefix__st0{opacity:.41}'}</style>
			<switch>
				<g>
					<path d="M372.5 71c2.8-2.7 3.3-6.5 2.7-10.3-.3-1.8-.8-4.2-2.6-5.1-2.1-1.1-3.8.5-5.6 1.7-8.6-4.3-18.1-3.3-27.7-1.5-11 2-19.8-1-29.4-6.3-.1 0-.4 1.6-.1 1.8 7.4 7.4 16.7 10.3 27.1 8.9 10.2-1.4 19.8-4 29.2-.2-.2 3.6-.6 7.4.9 10.7-1.4 2.8-2.1 5.9-2.6 9-1.2 6.3-2.8 11.4-7.2 16.1-3.2 3.4-6.9 6.4-10.7 9-8.5 5.8-18.3 10.6-28.5 12.7-10.8 2.2-22.2 1.8-33.2 1.8-.5 0-.5 2.6-.1 2.8 23.1 10.7 54.4-1.8 71.3-18.7 4.2-4.2 7-8.6 8.3-14.4.7-3.1 1-6.3 1.9-9.3 1.5-4.2 3.4-5.9 6.3-8.7zm-3.5-9.1c0-.2-.1-.3-.1-.5.2.4.4.8.5 1.3-.1-.3-.3-.6-.4-.8zm3 2.1v-.8c.1.2.1.4.2.6-.1.1-.2.1-.2.2zm-1.9 2.8c-.3.2-.5.4-.7.6v-.2c0-.3 0-.5-.1-.8 0-.1.1-.1.1-.2.2.2.4.4.7.6zm-3.2-3.4c-.1-.9-.1-1.8 0-2.7.1 0 .3 0 .4.1 0 .4 0 .8.1 1.2v.6s0-.1-.1-.1c-.1-.1-.2 0-.2.1-.1.4-.1.6-.2.8zm4.3-1.5h.1v.6c-.1-.1-.1-.3-.2-.4 0-.1.1-.1.1-.2zm-3 7v-1c.1.2.2.3.4 0 .1.1.1.2.1.3-.1.2-.3.4-.5.7z" />
					<path d="M291.7 32.4c-7.8-.8-16.3-1.3-24 .6-3.8.9-7.8 2.1-11.4 3.7-3.6 1.5-7.1 5.3-11 3.8-.5-.2-.5-1.3-.4-2.3-9.7 2.2-19.2 4.6-27.6 10.2-8.2 5.5-18.1 15.7-15.7 26.4 1.6 7.4 6.1 13.8 8.5 20.9 2.5 7.3 1.7 16.1 6.1 22.6 5.9 8.6 22 10.7 29 2.5 5-5.8 3.7-13.7 2.8-20.7-.8-6.1-1.6-12.2-1.6-18.3 0-1 .5-2 .6-.3.6 13.7 5.9 27.1 1.9 40.9-1.8 6.4-6.1 11.4-11.7 14.9-5.8 3.6-13.2 2-18.3-2.2-6.4-5.3-7.6-13.3-8.9-21-1.7-10.3-7.7-19-9.9-29.2-2.7-12.3-.7-26.3 8.4-35.6 9.1-9.2 24.3-15.6 37.5-13.9 2.1-3.4 4.4-5 8.5-6.8 3.5-1.5 7.4-2.6 11.3-2.7 8.6-.2 17.7.6 26.1 2.3 15.3 3.1 26.8 11.7 35.9 24.2.2.2-.1 1.2-.1 1.2-9.8-11.7-20.7-19.6-36-21.2zM343.7 373.7c-.1.3-1.2 5.2-2.1 3.6-3.8-6.9-4.2-16.8-4.4-24.6-.3-10-.7-20.2-.2-30.2.4-8.8 1.4-17.7 5.4-25.8 3-6.2 8.8-10.5 13.5-15.3.2-.2.4 2.3.1 2.8-8.2 12.2-14.9 25.2-15.4 40.2-.5 13.4 0 26.6 3.1 39.6.6 3 .5 6.7 0 9.7z" />
					<path d="M218.4 305c8.8-12.7 16.1-26.4 25-39 9.3-13.2 22.1-27.2 38.8-30.1-1-1.4-1.9-2.9-2.7-4.5-3-5.8-6.1-11.7-9.1-17.5-2.4-4.5-4.6-9.1-6.7-13.8-8.6-1.2-16.4-5.5-24.3-8.9-.3-.1 0-1.4 0-1.4 7.8 3 15.3 7.4 23.6 8.8-3-6.6-5.9-13.3-9-19.9-2.8-5.9-4.9-11.9-5-18.5-.1-2.3.5-6.3 2.2-7.3.2-.8.4-1.4.5-1.4 9.3 3 20 12.8 30.3 9.8 5-1.4 9.1-5.1 13.7-7.4 5.2-2.6 11.3-3.8 16.9-4.5s10.6-.3 15.9 1.5 8.3 1.4 11.8-2.9c6.4-7.7 16.8-9.6 25.6-13.5.2-.1.4.9.4.8 3.1 16.8 11.7 35.8 2.8 52.4-.2.4-.3-1.3-.2-1.6 2.7-7.2 3.8-14 2.6-21.6-.6-3.8-1.6-7.5-2.6-11.3-.9-3.4-1.5-7.2-2.8-10.5-.9-2.3-.7-2-2.9-1.3-1.4.5-2.7 1.2-4 1.8-6 2.7-13 5.1-17.5 10-1.4 1.5-2.4 3.8-4.4 4.8-2.6 1.3-5.8.4-8.3-.5-7.1-2.6-13.5-2.7-21-1.3-7.8 1.5-13.7 4.4-20.4 8.4-5.7 3.3-10.3 3.9-16.5 1.8-6.8-2.4-13.1-6.3-19.7-9.2-.2-.1-.4-.4-.5-.7-.5.4-.8 1.2-.8 2.6 0 2.3.9 4.9 1.6 7.1 2.8 8.3 7.9 15.7 11.9 23.5 4.4 8.4 9 16.6 13.4 25 2.2 4.1 4.1 8.3 6.9 12 2.3 3.1 3.6 5.3 4 9.1 0 .4-.1 7-1 6.6-1.5-.7-2.5-3.2-3.5-4.5-.1-.1-.1-.2-.2-.2 0 1.2-.2 2.6-.6 2.8-13.2 6-24.1 13.6-33.3 25-8.6 10.7-15.4 22.8-22.4 34.6-8.1 13.7-17.1 26.3-22 41.7-3.3 10.4-4.3 20.4-2.9 31.3.9 7.1 1.9 14.3 3.6 21.3 1.3 5.5 3 11.1 7.2 15.1 3.9 3.8 9.7 6.6 15.2 5.3.2 0 .3.5.3 1.2 14.7-3 29.2-6.8 44.2-8 17.2-1.4 34.5.1 51.5 2.8 17.2 2.8 35 4.3 51.6-2.1 14.4-5.6 27.8-19.5 30.1-35.3 2.5-17.2-18.6-26.5-32-29.3-.8-.2-.7-4.5.1-4.7 14.3-2.5 29 3.3 33.2 18.1 4.4 15.7-.2 33.8-10.3 46.3-12 14.9-30.9 19.5-49.4 18.6-9.9-.5-19.7-2.2-29.4-3.9-9.8-1.8-19.4-4.9-29.4-5.8-11.4-.9-23.7.2-34.9 2.6-5.6 1.2-10.9 3.1-16.5 4.3-4.2.9-8.1 1.3-12.1 1.2-3.5 3-7.5 5.2-11.7 1.7-4.1-3.5-6.5-10.2-8-15.2-2-6.5-3-13.2-4-19.8-1.6-10-2.9-20.1-2.2-30.3 1.6-18.2 8.8-37 19.3-52.2zM99.5 413.4c8.6-2.7 16.9-7.2 25.9-8.3 3.7-.5 7.4.1 11 .5 9.3 1.2 18.7 2.4 28.1 2.3 4.1 0 8.5-.4 12.4-1.9 1.5-.5 3-1.3 4.1-2.4.3-.3.7-.7.9-1.1-.1-.2-.2-.6-.3-1.1-.4-1.1-1-2.2-1.6-3.2-8.3-13.3-24.5-14.6-38.5-17.1-2.3 1.6-4.8 2.5-7 1.5-1.2-.5-.7-5 0-5.8 3.8-4.8 9.6-7.7 13.6-12.5 3.9-4.6 7.1-9.8 10.4-14.8 3.6-5.5 7.8-10.7 10.7-16.5 3.6-7.1 3.6-13.5.4-20.8-5.2-11.8-17.7-21.7-30.9-22.1-13.3-.4-24.4 6.7-35.6 12.8-.1 0-.4-2 0-2.3 12-10.2 26.4-24.3 43.5-19.3 14.2 4.2 24.1 17.2 27 31.3 3.1 15.8-2.4 28.6-11.2 41.3-4.1 6-7.7 12.3-12.2 18-.9 1.2-2.2 2.8-3.6 4.5 11.2-1 22.7.9 30.7 9.3 5.1 5.4 9.9 16.6 5.3 23.8-3.5 5.5-12.8 4.9-18.3 4.9-8.9 0-17.7-1.4-26.5-2.4-3.6-.4-7.2-1-10.8-.8-9.3.4-18.3 3.1-27.6 4.1-.1-.2-.2-1.8.1-1.9z" />
					<path d="M18.5 325.1c.2-13.6 2.3-29 9-41.1 6.5-11.7 18-21 20.3-34.8 1-6-.4-12-2.4-17.7-3-8.4-7.8-14-13.8-20.4-.3-.3-.1-2.5.1-2.5 8.5 3.3 16.6 11.4 18.8 20.4 3.1 12.6 1.9 28-2.6 40.1-4.5 12.3-15 20.8-20.5 32.5-5.7 12.1-8.8 31.3.9 42.2 3.9 4.4 8.6 8.2 13.2 11.7 3.6 2.8 7.8 6.2 12.3 7.9-1.1-6.4-1.1-13.1-.6-19.5 1.7-23 5.7-44.9 18.8-64.2 6.6-9.7 14.9-17.1 23.5-24.9 8.4-7.6 15.1-16.8 22.1-25.8 7.3-9.4 14.9-17.8 24.2-25.3 9.2-7.4 18.5-14.9 27-23.2 9-8.8 16.8-17.6 20.5-29.8 2.7-8.7 4.8-18.8 12.6-24.5.1-.1.2.9 0 1.1-7.1 7.5-9 17.5-11.6 27.3-2.4 9.2-6.1 17.1-11.5 24.9-12.4 17.9-30.9 28.7-46.1 43.7-15.1 14.9-25.4 33.7-41.8 47.5-15.6 13.1-28 31.3-32.4 51.5-1.4 6.2-1.8 12.7-2.6 19-1 7.7-1.2 15.2 1.9 22.5 4.7 11.1 15.1 20 24.2 27.4.4.3.2 3.4-.2 3.3-9.9-3.1-18.8-9.2-23.8-18.4-1.6-2.8-2.7-5.8-3.5-9-8.3-.9-16.6-9.1-22.2-14-1.9-1.7-3.8-3.5-5.5-5.4-1.6-1.8-3.9-3.4-5.1-5.5-2.8-4.8-3.3-11.4-3.2-17zM296.3 65.1c3.4-.8 6.7-2.5 9.6-4.5.6-.4.8 4.3.2 5.1-4.2 5.8-14.7 9.4-19.8 2.9-.2-.3-.4-2.4.1-2.5 3.3-.5 6.6-.2 9.9-1zM344.5 87.6c-2 1.2-4.1 2.3-6.3 2.9-.1 0-.2-1.3 0-1.4 2.1-.9 4.3-1.6 6.3-2.7 0-.1.3 1 0 1.2zM329.7 88.6c0-.2 0-.5.1-.7.4-1.4 1.4-2.5 2.9-2.8.1 0 .2.9 0 1-1.4.4-2.3 1.4-2.7 2.8-.3.2-.3-.2-.3-.3zM326.3 90.6c.1 0 .2 1.1 0 1.2-.7.2-1.4.5-2.1.7-.1 0-.2-1.1 0-1.2.7-.2 1.4-.5 2.1-.7zM331.2 94.8c.2 0 .2 1.2 0 1.2h-.7c-.2 0-.2-1.2 0-1.2h.7zM322.2 87.5c0 .2 0 .6-.1.7l-1.4 1.4c-.1.1-.1-.4-.1-.4 0-.2 0-.6.1-.7l1.4-1.4c.1-.1.1.4.1.4zM231.7 205.3c-.2 0-.2-1.2 0-1.2 11.4-.3 23.1-1 34.3 1.4.2 0 .1 1.2 0 1.1-11.4-2.4-22.8-1.2-34.3-1.3zM262.5 211.8c.1 0 .2 1.1 0 1.1-6.5 1.3-13.1 1.4-19.6 2.8-.1 0-.2-1.1 0-1.2 6.5-1.4 13.1-1.4 19.6-2.7zM283.8 59.9c3.8-4.1 9.8-3.5 14.9-3.5.2 0 .2 1.1 0 1.1-5.1 0-11.1-.5-14.9 3.6.1.1-.2-.9 0-1.2z" />
					<path
						className="prefix__st0"
						d="M238.5 74.9c5.5 9.7 6.5 27.9-3.9 34.8-4.6 3-10.5 4-15.7 1.8-6.8-2.8-7.5-9.6-8.2-16.1-.1-.6-.4-1.3-.5-.3-.8 8.2-.6 18.9 4.8 25.7 6.7 8.4 17.6 4.6 23-3.2 4.7-6.8 5-16 5.1-24 0-5.6.5-16.1-4.6-20-.1 0-.1 1.1 0 1.3zM105.2 293.5c4-3 9.6-4.5 14.3-6.1 5.6-1.9 11.3-3.5 17.2-4.2 11.9-1.5 23.8.9 31.3 11.1 3.7 5 5.9 11 8 16.9 1.3 3.5 1.7 3.9.5 7.6-1.1 3.6-2.7 7.1-4 10.7-2.4 6.7-3.1 13.6-7.2 19.6-1.9 2.8-4.1 5.3-5.6 8.4-1.3 2.6-1.8 5.4-4.1 7.4-2.1 1.8-1.2 8.1-1 10.4.1.9.7 7.3 2.4 5.9 2.6-2.3 3.1-5.5 4.6-8.5 2.1-4.2 5.6-7.6 7.8-11.8 1.7-3.4 2.6-7.1 3.6-10.8 1.1-4.4 2.7-8.6 4.3-12.8 6-16.6 4.1-32.6-3.5-48.4-6.3-13.1-17.4-19.7-31.9-18.1-14.8 1.6-27.5 8.4-36.7 20-.6.4-.3 2.9 0 2.7zM288.6 398c4.1 2.8 10.5 1.6 15.2 3.3 4.8 1.8 9.1 4.6 14 6.4 4.7 1.8 10 2.9 15 3.6 14.5 1.9 32.8.2 45.7-6.9 13.7-7.6 17.5-22.8 14.1-37.5-2.8-11.8-16.8-21.6-28.7-15.4-6 3.1-9.4 8.8-10 15.4-.4 4.1-.3 8.9 1.2 12.8 1.5 4 2.7 3.8 6.3 2.2.7-.3.4-2.8.1-3.3-1.4-2.6-2.4-5.3-3.7-7.9-.4-.7-.8-1.5-1.1-2.2-.8 6.5-.7 8.5.2 6 2.1-2 2.8-4.1 5.7-5.6 5.8-2.9 12.3-2.8 18.2-.2 2.8 1.3 5.3 3.2 7.2 5.6.7.9 1.1 2.2 1.8 3.1.7 2.1.7 1.1 0-3-.3 1-.7 1.9-1.1 2.8-3.1 5.9-8.9 9.9-14.9 12.4-13.6 5.6-28.8 5.6-43.3 5.2-8.7-.3-17.1-.8-25.9 0-4.6.4-11.5 3-15.9 1.1-.2-.1-.5 1.9-.1 2.1zM358.7 152c-1.3-1.1-1.4-.1-.7 1.1.4.7 1.7 1.3 2.3 1.9 1.8 1.7 3.3 3.9 4.2 6.3 2 5.1-.1 5.2-2 9.9-1.4 3.5-1.6 7.7-1.2 11.4.4 3.9 1.7 4.1 3.7.5 5.3-9.6 6.7-30.7-8.2-32.8-.2 0-.2 1.3 0 1.4.7.4 1.3.8 1.9 1.3 0 .1.2-.8 0-1zM259.8 173.4c0 3.1 1.3 6.2 2.3 9 1.8 5.2 4 10.2 6.7 15.1 1.2 2.3 11.8 21.3 14.5 13 1.9-6-6.9-13-10-17.1-4.5-6.1-11.1-13.3-13.1-20.7-.3-.9-.4.4-.4.7z"
					/>
					<path
						className="prefix__st0"
						d="M266.6 174.2c-2.8-1.6-5.3-2.7-8.6-2.7-.3 0-.3 1.8 0 1.9 3.4 1.5 6.8 2.4 10.4 3.3 2.9.7 7.8 3.2 10.5 2 .6-.3.4-2.8 0-3.3-2.5-2.6-6.4-2-9.8-2.2-3.8-.2-7.5-.7-11.1-1.8v1.9c3.2-.1 5.8 1 8.6 2.5.1.1.4-1.4 0-1.6zM232.6 402.6c-2.5-3.1-4.6-4.4-8.3-5.6s-7.2-2.6-9.9-5.6c-4.9-5.4-4.2-11-4.4-17.9-.1-3.8-.5-7.8.3-11.5 1-4.6 3.6-8.7 6-12.7 4.1-7 7.2-14.6 11.4-21.6 4.1-6.9 9.8-12.6 14.6-19 4.6-6.1 7.7-13 12.3-19.1 9.3-12.6 21.8-22.7 35.8-29.5 8.1-3.9 16.7-6.8 25.1-9.9 9.1-3.4 17.8-6.8 27.3-8.9.5-.1.4-2.7-.1-2.7-9.1-.2-18.5-.8-27.5.1-9.3 1-18 3.5-26.7 6.9-15.9 6.3-28.6 17.4-38.1 31.6-5.1 7.6-9.4 15.2-15.3 22.3-6 7.1-10.3 14.5-14.4 22.8-4.1 8.4-10.2 16.3-12.7 25.5-2.6 9.5-1.8 19.6-1.6 29.3.1 8.8 0 18.4 4.4 26.3 4.3 7.8 13 11.8 21.7 10.5 2.3-.3 1.1-10 .1-11.3z"
					/>
					<path d="M33.4 213.1c.2 0 .1-1 0-1-.2 0-.2 1 0 1z" />
					<path d="M33.5 217c1.4 0 1.3-8.9-.2-8.9-1.4 0-1.3 8.9.2 8.9z" />
					<path
						className="prefix__st0"
						d="M32 210.5c-.6-.4-1.2-.9-1.8-1.3v1.7c7.6.8 14.6 4.7 19.2 10.8 4.1 5.5 7.9 12.4 6.4 19.4-1.7 7.8-6 15.4-9.3 22.7-3.9 8.4-8.3 16.3-13.4 24.1-9.3 14.2-13.8 30.4-7.9 47.1 2.5 7 6.9 13.2 12.2 18.4 2.8 2.7 5.8 5.2 9.2 7.3 1 .6 3.2 2.3 4.4 2 1.5-.3 3.8-3.2 5.2-3.9.8-.4.5-3.6 0-4.2-2.1-2.3-3.1-5.5-5.1-7.7-1.3-1.5-3.6-2.3-5.2-3.4-3.5-2.3-6.7-5.1-9.5-8.1-2.5-2.6-4.7-5.5-6.6-8.6-1.1-1.8-2-3.6-2.7-5.6-.6-2.4-.8-2.8-.5-1.2.3-1.1.6-2.1 1-3.1 2.9-8 8.7-14.7 13-22.1 4.2-7.3 7.7-15.1 11.1-22.8 3.2-7.2 6.5-14 7.7-21.9 1.3-8.3 1.2-17.1-.6-25.3-1.3-6-3.4-12.4-9.1-15.5-6.2-3.4-12.7-1.2-19.3 0-.3.1-.2 1.5 0 1.7 1.1.9.6.5 1.9 1.1-.2-.1.1-1.4-.3-1.6zM247.1 41.2h-.2c-.2 0-.1 1 0 1h.2c.1 0 .1-1 0-1zM297.5 34.5c-2-.3-4.2-.3-6.2-.8-2.4-.6-4.7-1.7-7.1-2.4-4.1-1.1-8.3-.5-12.4.3-7.8 1.5-16.7 5.4-21.2 12.2-3.9 5.8-4.1 13.4-3.6 20.2.9 10.9 3.5 21 2.2 32.1 0 .3.3 2.7.5 2 1.8-6.6 2-13.5 1.6-20.3-.5-7.7-4.5-17.2 1.1-23.7 5.2-6 13.7-9.2 21.2-11 4-1 7.8-1.5 11.6-3.1 4.2-1.8 7.9-2.7 12.4-3.4.3-.2.3-2.1-.1-2.1z"
					/>
				</g>
			</switch>
		</svg>
	);
}

const MemoPetPic = React.memo(PetPic);
export default MemoPetPic;