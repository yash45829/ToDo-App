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
    <body className="flex flex-col justify-start pt-4 items-center gap-8 bg-blue-100 min-h-[100vh] h-[100%] w-full">
      <h1 className="text-blue-500 text-2xl font-bold py-2">Todo App</h1>
    
      <AddToDo addTodo={actions.addTodo} />
      <TodoList
        finishTodo={actions.finishTodo}
        editTodo={actions.editTodo}
        deleteTodo={actions.deleteTodo}
      />
      
    </body>
  );
}

export default App;
