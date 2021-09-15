import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "todolist/state",
  initialState: false,
  reducers: {
    addTodoList(state, { payload }) {
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
        },
      ];
    },

    deleteTodoList(state, { payload }) {
      const nextState = state.filter((todo) => todo.id !== payload.id);
      return nextState;
    },
  },
});

export const { addTodoList, deleteTodoList } = stateSlice.actions;

export default stateSlice.reducer;
