import {type TableColumn} from 'react-data-table-component';

export const petColumns: Array<TableColumn<Components.Schemas.Pet>> = [
	{
		name: 'Name',
		selector: row => row.name,
		sortable: true,
	},
	{
		name: 'About',
		selector: row => row.about,
		sortable: true,
	},
	{
		name: 'Age',
		selector: row => row.age,
		sortable: true,
	},
];