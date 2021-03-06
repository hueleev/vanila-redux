import { createStore } from 'redux';
import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
	name: 'toDosReducer',
	initialState: [],
	reducers: {
		add: (state, action) => {
			state.push({ text: action.payload, id: Date.now() });
		},
		remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
	},
});

// --- 2
/* const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.push({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload),
}); */

// --- 1
/* const addToDo = text => {
	return {
		type: ADD,
		text,
	};
};

const deleteTodo = id => {
	return {
		type: DELETE,
		id,
	};
};


const reducer = (state = [], action) => {
	switch (action.type) {
		case addToDo.type:
			return [{ text: action.payload, id: Date.now() }, ...state];
		case deleteToDo.type:
			return state.filter(toDo => toDo.id !== action.payload);
		default:
			return state;
	}
};
 */

//  const store = createStore(reducer);
// const store = configureStore({ reducer: toDos.reducer });
// store.subscribe();

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
