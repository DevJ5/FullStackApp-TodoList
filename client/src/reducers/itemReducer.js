//reducer.js
// import uuid from 'uuid';
import {
	GET_ITEMS,
	ADD_ITEM,
	DELETE_ITEM,
	ITEMS_LOADING
} from '../actions/types';

// const initState = [
// { id: uuid(), text: 'Eggs' },
// { id: uuid(), text: 'Milk' },
// { id: uuid(), text: 'Steak' },
// { id: uuid(), text: 'Water' }
// ];

const initState = {
	items: [],
	loading: false
};

export default (state = initState, action = {}) => {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state,
				items: action.payload,
				loading: false
			};
		case ADD_ITEM:
			return { ...state, items: [...state.items, action.payload] };
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item._id !== action.payload)
			};
		case ITEMS_LOADING:
			return {
				...state,
				loading: !state.loading
			};
		default:
			return state;
	}
};
