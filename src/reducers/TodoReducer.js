function TodoReducer(state, action) {
  if (action.type == "add_todo") {
    let inputText = action.payload.inputText;
    let l = state.length;
    let id = l + 1;
    return [
      ...state,
      {
        id: id,
        todoText: inputText,
        isFinished: false,
      },
    ];
  } else if (action.type == "edit_todo") {
    let editText = action.payload.editText;
    let todo = action.payload.todo;
    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        t.todoText = editText;
      }
      return t;
    });
    return updatedList;
  } else if (action.type == "delete_todo") {
    let todo = action.payload.todo;
    let updatedList = state.filter((t) => t.id != todo.id);
    return updatedList;
  } else if (action.type == "finish_todo") {
    let todo = action.payload.todo;
    let isFinished = action.payload.isFinished;
    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        t.isFinished = isFinished;
      }
      return t;
    });
    return updatedList;
  } else {
    return state;
  }
}
export default TodoReducer;
