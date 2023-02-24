export const FM_CASCADE_PARENT_VARIANTS = {
	initial: {
		opacity: 0,
	},
	visible: (custom = 0) => ({
		opacity: 1,
		transition: {
			delayChildren: custom + 0.25,
			staggerChildren: 0.05,
		},
	}),
};
export const FM_SHOW_FROM_TOP = {
	initial: {y: -20, opacity: 0},
	visible: {y: 0,	opacity: 1},
};
export const FM_SHOW_FROM_LEFT = {
	initial: {x: -20, opacity: 0},
	visible: {x: 0,	opacity: 1},
};
export const FM_SHOW_FROM_BOTTOM = {
	initial: {y: 20, opacity: 0},
	visible: {y: 0,	opacity: 1},
};
export const FM_SLIDE_FROM_TOP = {
	initial: {y: '-100%', opacity: 0},
	visible: {y: 0,	opacity: 1},
};
export const FM_SLIDE_FROM_LEFT = {
	initial: {x: '-100%', opacity: 0},
	visible: {x: 0,	opacity: 1},
};