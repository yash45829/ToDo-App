import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_TODO,
} from "../constants/actionConstants.js";

// add todo
export const addTodo = (inputText) => ({
  type: ADD_TODO,
  payload: { inputText },
});
// finish todo
export const finishTodo = (todo, isFinished) => ({
  type: FINISH_TODO,
  payload: { todo, isFinished },
});
// delete todo
export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: { todo },
});
// edit todo
export const editTodo = (todo, editText) => ({
  type: EDIT_TODO,
  payload: { todo, editText },
});
