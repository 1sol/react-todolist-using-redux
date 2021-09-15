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
    addTodoList(state, action) {
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      state.push({
        id: nextId,
        title: action.payload,
        checked: false,
        done: false,
      });
    },

    toggleTodoList(state, action) {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo;
      });
    },

    deleteTodoList(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodoList, toggleTodoList, deleteTodoList } =
  todosSlice.actions;

export default todosSlice.reducer;
