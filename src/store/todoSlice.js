import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "todo 1",
    done: false,
  },
  {
    id: 1,
    title: "todo 2",
    done: false,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      state.push({
        id: nextId,
        title: action.payload,
        done: false,
      });
    },

    toggleCheckedTodoList: (state, { payload: { id, done } }) => {
      const checkedId = state.findIndex((item) => item.id === id);
      state[checkedId].done = !done;
    },

    deleteTodoList: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  addTodoList,
  toggleCheckedTodoList,
  toggleDoneTodoList,
  deleteTodoList,
} = todosSlice.actions;

export default todosSlice.reducer;
