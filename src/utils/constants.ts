export const AVAILABLE_PETS = 'Last Pets Available for Adoption';
export const CALL_US = 'Call us';
export const PUBLIC_PHONE_NUMBER = '(506) 454-2000';
export const LOGIN = 'Login';
export const TAKE_HOME = 'Take me home';
export const READ_MY_STORY = 'Do you want to read my story?';
export const WRONG_CREDENTIALS = 'Your credential are not correct';
export const ABOUT = 'About';
export const WHERE_WAS_FOUND = 'is this the place where was found_?';
export const SIGN_UP = 'New';
export const RESCUE_DATA = 'Rescue Data:';
export const PLACE = 'Place:';
export const DATE = 'Date:';
export const FM_SCROLL_DROP_VARIANTS = {
	initial: {
		opacity: 0,
		y: '-100%',
	},
	hidden: {
		opacity: 0,
		y: '-100%',
	},
	visible: (custom = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom,
			delayChildren: custom + 0.1,
			staggerChildren: 0.05,
		},
	}),
};
export const FM_SHOW_FROM_LEFT = {
	initial: {x: -20, opacity: 0},
	hidden: {x: 0, opacity: 0},
	visible: {x: 0,	opacity: 1},
};
export const FM_SHOW_FROM_TOP = {
	initial: {y: -20, opacity: 0},
	hidden: {y: -20, opacity: 0},
	visible: {y: 0,	opacity: 1},
};