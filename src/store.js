import { combineReducers, createStore } from "redux";
import TodoReducer from "./reducers/TodoReducer";

const reducers = combineReducers({ todo: TodoReducer });

const store = createStore(reducers);

export default store;
