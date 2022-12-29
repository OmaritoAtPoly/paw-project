import {type Photo} from 'pexels';
import {LoggedFromPlatform} from '../state/action-types';

export const data = [
	{
		id: 1,
		name: 'Arinka',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/7726100/pexels-photo-7726100.jpeg?auto=compress&cs=tinysrgb&h=350',
		price: '$$$$$',
	},
	{
		id: 2,
		name: 'Uri',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/7725966/pexels-photo-7725966.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$',
	},
	{
		id: 3,
		name: 'Kyra',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/7210487/pexels-photo-7210487.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 4,
		name: 'Ruja',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/8498519/pexels-photo-8498519.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$',
	},
	{
		id: 5,
		name: 'Stitch',
		category: 'pizza',
		image:
			'https://images.pexels.com/photos/7725618/pexels-photo-7725618.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 6,
		name: 'Yuna',
		category: 'pizza',
		image:
			'https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&h=650&w=350',

		price: '$$$',
	},
	{
		id: 7,
		name: 'Luke',
		category: 'pizza',
		image: 'https://images.pexels.com/photos/10875180/pexels-photo-10875180.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$$',
	},
	{
		id: 8,
		name: 'Drugi',
		category: 'pizza',
		image: 'https://images.pexels.com/photos/11274114/pexels-photo-11274114.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$',
	},
	{
		id: 9,
		name: 'Kale',
		category: 'salad',
		image: 'https://images.pexels.com/photos/10429084/pexels-photo-10429084.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 10,
		name: 'Ceasar',
		category: 'salad',
		image: 'https://images.pexels.com/photos/7726294/pexels-photo-7726294.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$',
	},
	{
		id: 11,
		name: 'Emmy',
		category: 'salad',
		image:
			'https://images.pexels.com/photos/7726100/pexels-photo-7726100.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$$',
	},
	{
		id: 12,
		name: 'Odgar',
		category: 'salad',
		image:
			'https://images.pexels.com/photos/10632673/pexels-photo-10632673.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$',
	},
	{
		id: 13,
		name: 'Wings',
		category: 'chicken',
		image:
			'https://images.pexels.com/photos/7725966/pexels-photo-7725966.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 14,
		name: 'Ivy',
		category: 'chicken',
		image: 'https://images.pexels.com/photos/11274114/pexels-photo-11274114.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$$',
	},
	{
		id: 15,
		name: 'Bucky',
		category: 'chicken',
		image:
			'https://images.pexels.com/photos/7725618/pexels-photo-7725618.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$',
	},
	{
		id: 16,
		name: 'Kabob',
		category: 'chicken',
		image:
			'https://images.pexels.com/photos/38008/pexels-photo-38008.jpeg?auto=compress&cs=tinysrgb&h=650&w=350',

		price: '$$$',
	},
];

export const categories = [
	{
		id: 1,
		name: 'Together',
		image:
			'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=350',
	},
	{
		id: 2,
		name: 'My Family',
		image:
			'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&h=350',
	},
	{
		id: 3,
		name: 'Scope',
		image:
			'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=350',
	},
	{
		id: 4,
		name: 'Actions',
		image:
			'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&h=350',
	},
	{
		id: 5,
		name: 'Uniques',
		image:
			'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&h=350',
	},
	{
		id: 6,
		name: 'Passion',
		image:
			'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&h=350',
	},
	{
		id: 7,
		name: 'Colorful',
		image:
			'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&h=350',
	},
	{
		id: 8,
		name: 'Freedom',
		image:
			'https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&h=350',
	},
];

export type DataType = typeof data[number];
export type CategoriesType = typeof categories[number];

export const defaultAvailablePets: Photo[] = [
	{
		alt: '',
		avg_color: '',
		height: 2020,
		id: 121,
		liked: false,
		photographer: 'Enrique',
		width: 2020,
		url: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
		photographer_id: '',
		photographer_url: '',
		src: {
			landscape: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
			large: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
			large2x: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
			medium: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
			original: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
			portrait: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
			small: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
			tiny: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
	},
	{
		alt: '',
		avg_color: '',
		height: 2020,
		id: 122,
		liked: false,
		photographer: 'Lucia',
		width: 2020,
		url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
		photographer_id: '',
		photographer_url: '',
		src: {
			landscape: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
			large: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
			large2x: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
			medium: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
			original: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
			portrait: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
			small: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
			tiny: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
	},
	{
		alt: '',
		avg_color: '',
		height: 2020,
		id: 123,
		liked: false,
		photographer: 'Juan',
		width: 2020,
		url: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
		photographer_id: '',
		photographer_url: '',
		src: {
			landscape: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
			large: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
			large2x: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
			medium: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
			original: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
			portrait: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
			small: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
			tiny: ' https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
	},
];

export const defaultUser = {
	userId: '',
	email: '',
	name: '',
	picture: '',
	given_name: '',
	family_name: '',
	userLogged: false,
	loggedFrom: LoggedFromPlatform.FACEBOOK || LoggedFromPlatform.GOOGLE || LoggedFromPlatform.WEB,
};

export type UserDataType = typeof defaultUser;

const itemElements = {
	itemName: '',
	onClick: () => { },
	imgUrl: '',
	userId: '',
};

export type ItemElementType = typeof itemElements;

export const itemMenu: ItemElementType[] = [
	{
		userId: '',
		itemName: '',
		onClick: () => { },
		imgUrl: '',

	},
];
