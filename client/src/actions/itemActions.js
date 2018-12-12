import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import * as request from 'superagent';

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());
	request.get('/api/todos').then(res => {
		dispatch({
			type: GET_ITEMS,
			payload: res.body
		});
	});
};

export const addItem = item => dispatch => {
	request
		.post('/api/todos')
		.send(item)
		.then(res => {
			dispatch({
				type: ADD_ITEM,
				payload: res.body
			});
		});
};

export const deleteItem = id => dispatch => {
	request.delete(`/api/todos/${id}`).then(_ =>
		dispatch({
			type: DELETE_ITEM,
			payload: id
		})
	);
};

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};
