import {type LatLngLiteral} from 'leaflet';
import {type Photo} from 'pexels';
import {generate} from 'shortid';
import {LoggedFromPlatform} from '../state/action-types';
import {type IconNames} from '../svg/IconNames';

export const data = [
	{
		id: 7726100,
		name: 'Arinka',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/7726100/pexels-photo-7726100.jpeg?auto=compress&cs=tinysrgb&h=350',
		price: '$$$$$',
	},
	{
		id: 7210616,
		name: 'Uri',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/7210616/pexels-photo-7210616.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$',
	},
	{
		id: 7210487,
		name: 'Kyra',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/7210487/pexels-photo-7210487.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 8498519,
		name: 'Ruja',
		category: 'burger',
		image:
			'https://images.pexels.com/photos/8498519/pexels-photo-8498519.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$',
	},
	{
		id: 7725618,
		name: 'Stitch',
		category: 'pizza',
		image:
			'https://images.pexels.com/photos/7725618/pexels-photo-7725618.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 933498,
		name: 'Yuna',
		category: 'pizza',
		image:
			'https://images.pexels.com/photos/933498/pexels-photo-933498.jpeg?auto=compress&cs=tinysrgb&h=650&w=350',

		price: '$$$',
	},
	{
		id: 10875180,
		name: 'Luke',
		category: 'pizza',
		image: 'https://images.pexels.com/photos/10875180/pexels-photo-10875180.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$$',
	},
	{
		id: 11274114,
		name: 'Drugi',
		category: 'pizza',
		image: 'https://images.pexels.com/photos/11274114/pexels-photo-11274114.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$',
	},
	{
		id: 10429084,
		name: 'Kale',
		category: 'salad',
		image: 'https://images.pexels.com/photos/10429084/pexels-photo-10429084.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 7726294,
		name: 'Ceasar',
		category: 'salad',
		image: 'https://images.pexels.com/photos/7726294/pexels-photo-7726294.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$',
	},
	{
		id: 8499451,
		name: 'Emmy',
		category: 'salad',
		image:
			'https://images.pexels.com/photos/8499451/pexels-photo-8499451.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$$',
	},
	{
		id: 10632673,
		name: 'Odgar',
		category: 'salad',
		image:
			'https://images.pexels.com/photos/10632673/pexels-photo-10632673.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$',
	},
	{
		id: 7725966,
		name: 'Wings',
		category: 'chicken',
		image:
			'https://images.pexels.com/photos/7725966/pexels-photo-7725966.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$',
	},
	{
		id: 6490022,
		name: 'Ivy',
		category: 'chicken',
		image: 'https://images.pexels.com/photos/6490022/pexels-photo-6490022.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$$$$$',
	},
	{
		id: 6547837,
		name: 'Bucky',
		category: 'chicken',
		image:
			'https://images.pexels.com/photos/6547837/pexels-photo-6547837.jpeg?auto=compress&cs=tinysrgb&h=350',

		price: '$',
	},
	{
		id: 38008,
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
		id: 5256708,
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
		id: 45201,
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
		id: 3828097,
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
	userId: generate(),
	password: '',
	email: '',
	name: '',
	picture: '',
	given_name: '',
	family_name: '',
	userLogged: false,
	loggedFrom: LoggedFromPlatform.FACEBOOK || LoggedFromPlatform.GOOGLE || LoggedFromPlatform.WEB,
	role: '',
};

export type UserDataType = typeof defaultUser; // TODO THIS TYPE IS FROM THE SCHEMAS

export const userFromToken = {
	'realm_access': {
		'roles': [
			'default-roles-myrealmdemo',
			'offline_access',
			'uma_authorization',
			'ADMIN',
			'paw-admin-role',
		],
	},
	'name': 'Omarito Estrada',
	'preferred_username': 'paw-user',
	'given_name': 'Omarito',
	'family_name': 'Estrada',
	'email': 'paw-user@mail.com',
};

export type TokenUserType = typeof userFromToken; // TODO THIS TYPE IS FROM THE SCHEMAS

export const extendedDefaultUser = {
	firstName: '',
	lastName: '',
	username: '',
	password: '',
	email: '',
	role: 'guest',
};

export type ExtendedUserType = typeof extendedDefaultUser;

const itemElements = {
	itemName: '',
	onClick: () => { },
	imgUrl: '',
	userId: '',
};

export type ItemElementType = typeof itemElements;

export interface MenuElementType {
	userId: string;
	itemName: string;
	onClick: () => void;
	icon?: {
		iconName: IconNames;
		iconWidth?: number;
		iconHeight?: number;
		iconClass?: string;
	};
}

export const defaultSofiaCoordinate: LatLngLiteral = {lat: 42.698334, lng: 23.319941};

export const petDefaultData = {
	id: generate(),
	name: '',
	about: '',
	rescueLocation: defaultSofiaCoordinate,
	details: '',
	rescueDate: new Date().toDateString(),
	tailDetails: '',
	socialSkills: '',
	training: '',
	medicalRecord: '',
	petImage: '',
};

const options = [
	{value: '', label: ''},
];

export type SelectOptionType = typeof options;

const defaultUserData = {
	name: '',
	lastName: '',
	email: '',
	password: '',
};

export type DefaultUserDataType = typeof defaultUserData;

const locationResponse = {
	'place_id': '226239866',
	'licence': 'https://locationiq.com/attribution',
	'osm_type': 'way',
	'osm_id': '562441249',
	'lat': '54.76981985',
	'lon': '55.33678005',
	'display_name': '32, ?????????? ????????????????, ????????????????????, ???????????????????????? ??????????????????, Chishminsky District, Bashkortostan, Volga Federal District, Russia',
	'address': {
		'house_number': '32',
		'road': '?????????? ????????????????',
		'village': '????????????????????',
		'municipality': '???????????????????????? ??????????????????',
		'county': 'Chishminsky District',
		'state': 'Bashkortostan',
		'region': 'Volga Federal District',
		'country': 'Russia',
		'country_code': 'ru',
	},
	'boundingbox': [
		'54.7697754',
		'54.7698643',
		'55.3366924',
		'55.3368677',
	],
};

export type DefaultLocationPropertiesType = typeof locationResponse;
