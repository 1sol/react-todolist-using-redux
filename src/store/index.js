import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
