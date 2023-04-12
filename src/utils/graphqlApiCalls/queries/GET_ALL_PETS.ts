import {gql} from '@apollo/client';

export const GET_ALL_PETS = gql`
query AllPets {
	getAllPets {
		id
		name
		petImage
	}
}
`;
