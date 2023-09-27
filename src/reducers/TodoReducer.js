function TodoReducer(state = [], action) {
  //ADD TODO
  if (action.type == "add_todo") {
    let inputText = action.payload.inputText;
    return [
      ...state,
      {
        id: state.length + 1,
        todoText: inputText,
        isFinished: false,
      },
    ];
  }
  //EDIT TODO
  else if (action.type == "edit_todo") {
    let editText = action.payload.editText;
    let todo = action.payload.todo;
    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        t.todoText = editText;
      }
      return t;
    });
    return updatedList;
  }
  //DELETE TODO
  else if (action.type == "delete_todo") {
    let todo = action.payload.todo;
    let updatedList = state.filter((t) => t.id != todo.id);
    return updatedList;
  }
  //FINISH TODO
  else if (action.type == "finish_todo") {
    let todo = action.payload.todo;
    let isFinished = action.payload.isFinished;
    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        t.isFinished = isFinished;
      }
      return t;
    });
    return updatedList;
  }
  //RETURNING ORIGINAL STATE
  else {
    return state;
  }
}
export default TodoReducer;
