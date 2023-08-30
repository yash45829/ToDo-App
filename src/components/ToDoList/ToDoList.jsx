import TodoContext from "../../context/TodoContext.js";
import { useContext } from "react";
import TodoCard from "../ToDoCard/ToDoCard.jsx";
import TodoDispatchContext from "../../context/TodoDispatchContext.js";
function TodoList() {
  const [list] = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);

  function changeFinished(todo, isFinished) {
    dispatch({ type: "finish_todo", payload: { todo, isFinished } });
  }

  function onDelete(todo) {
    dispatch({ type: "delete_todo", payload: { todo } });
  }

  function onEdit(todo, editText) {
    dispatch({ type: "edit_todo", payload: { todo, editText } });
  }

  return (
    <div>
      <h1> ToDo(s) </h1>
      <div>
        {list.map((todo, index) => (
          <div key={index}>
            <TodoCard
              key={todo.id}
              id={todo.id}
              todoText={todo.todoText}
              isFinished={todo.isFinished}
              changeFinished={(isFinished) => changeFinished(todo, isFinished)}
              onDelete={() => onDelete(todo)}
              onEdit={(editText) => onEdit(todo, editText)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
