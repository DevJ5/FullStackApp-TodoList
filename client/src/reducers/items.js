//reducer.js
import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initState = [
	{ id: uuid(), text: 'Eggs' },
	{ id: uuid(), text: 'Milk' },
	{ id: uuid(), text: 'Steak' },
	{ id: uuid(), text: 'Water' }
];

export default (state = initState, action = {}) => {
	switch (action.type) {
		case GET_ITEMS:
			return state;
		case ADD_ITEM:
			return [...state, action.payload];
		case DELETE_ITEM:
			return state.filter(item => item.id !== action.payload);
		default:
			return state;
	}
};
