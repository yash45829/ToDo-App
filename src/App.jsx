import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/ToDoList/ToDoList";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  finishTodo,
  editTodo,
} from "./actions/todoActions.js";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, deleteTodo, finishTodo, editTodo },
    dispatch
  );

  return (
    <>
      <h1 className="text-blue-500">Todo App</h1>
      <AddToDo addTodo={actions.addTodo} />
      <TodoList
        finishTodo={actions.finishTodo}
        editTodo={actions.editTodo}
        deleteTodo={actions.deleteTodo}
      />
    </>
  );
}

export default App;
