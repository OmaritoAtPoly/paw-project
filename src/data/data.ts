import {type LatLngLiteral} from 'leaflet';
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
];

export type DataType = typeof data[number];

export const defaultSofiaCoordinate: LatLngLiteral = {lat: 42.698334, lng: 23.319941};

export const defaultAvailablePets: Components.Schemas.Pet[] = [
	{
		about: 'this is the about section',
		details: 'a very nice yellow dog',
		id: '12345',
		medicalRecord: '',
		name: 'Amarillito',
		petImage: 'https://images.pexels.com/photos/5256708/pexels-photo-5256708.jpeg?auto=compress&cs=tinysrgb&w=1600',
		rescueDate: new Date().toDateString(),
		rescueLocation: defaultSofiaCoordinate,
		socialSkills: '',
		tailDetails: '',
		training: '',
		age: 2,
		breed: 'Happy',
		gender: 'MALE',
		petType: 'DOG',
	},
	{
		about: '',
		details: 'a very nice white rabbit',
		id: '123456',
		medicalRecord: '',
		name: 'Juanito',
		petImage: 'https://images.pexels.com/photos/3828097/pexels-photo-3828097.jpeg?auto=compress&cs=tinysrgb&w=1600',
		rescueDate: new Date().toDateString(),
		rescueLocation: defaultSofiaCoordinate,
		socialSkills: '',
		tailDetails: '',
		training: '',
		age: 2,
		breed: 'Happy',
		gender: 'MALE',
		petType: 'DOG',
	},
	{
		about: '',
		details: 'a very nice white cat',
		id: '1234567',
		medicalRecord: '',
		name: 'Lucia',
		petImage: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600',
		rescueDate: new Date().toDateString(),
		rescueLocation: defaultSofiaCoordinate,
		socialSkills: '',
		tailDetails: '',
		training: '',
		age: 2,
		breed: 'Happy',
		gender: 'MALE',
		petType: 'DOG',
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
	userPicture?: {
		defaultIconName: React.ReactNode;
		iconWidth?: number;
		iconHeight?: number;
		iconClass?: string;
	};
}

export const petDefaultData: Components.Schemas.Pet = {
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
	petImage: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg',
	age: 0,
	breed: '',
	gender: '',
	petType: '',
};

export const defaultSelectOptions = [
	{value: '', label: ''},
];

export const petGender = [
	{value: 'FEMALE', label: 'FEMALE'},
	{value: 'MALE', label: 'MALE'},
];

export const petType = [
	{value: 'DOG', label: 'DOG'},
	{value: 'CAT', label: 'CAT'},
	{value: 'OTHER', label: 'OTHER'},
];

export type SelectOptionType = typeof defaultSelectOptions;

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
	'display_name': '32, улица Путлинка, Дмитриевка, Дмитриевский сельсовет, Chishminsky District, Bashkortostan, Volga Federal District, Russia',
	'address': {
		'house_number': '32',
		'road': 'улица Путлинка',
		'village': 'Дмитриевка',
		'municipality': 'Дмитриевский сельсовет',
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
