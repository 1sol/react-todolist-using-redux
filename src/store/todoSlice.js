import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "todo 1",
    checked: false,
    done: false,
  },
  {
    id: 1,
    title: "todo 2",
    checked: false,
    done: false,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoList: {
      reducer: (state, { payload }) => {
        return [...state, { index: payload.index, title: payload.title }];
      },
      prepare: (index, title) => ({
        payload: {
          index: index + 1,
          title,
        },
      }),
    },

    toggleTodoList(state, action) {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo;
      });
    },

    updateTodoList(state, { payload }) {
      return state.map((todo) => {
        return todo.id === payload.id
          ? { ...todo, title: payload.title }
          : todo;
      });
    },

    deleteTodoList(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodoList, toggleTodoList, updateTodoList, deleteTodoList } =
  todosSlice.actions;

export default todosSlice.reducer;
