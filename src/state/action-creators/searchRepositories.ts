import axios, {type AxiosResponse} from 'axios';
import {type Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {type Action} from '../actions';

const dataResult = {
	package: {
		name: '',
	},
};

type ResponseData = {
	objects: DataResultType[];
};

type DataResultType = typeof dataResult;

export const searchRepositories = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});

		try {
			const {data}: AxiosResponse<ResponseData> = await axios.get(
				'https://registry.npmjs.org/-/v1/search',
				{
					params: {
						text: term,
					},
				},
			);

			const names = data.objects.map((result: DataResultType) => {

				return result.package.name;
			});

			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: names,
			});
		} catch (error) {
			if (error instanceof Error) {
				dispatch({
					type: ActionType.SEARCH_REPOSITORIES_ERROR,
					payload: error.message,
				});
			}
		}
	};
};
