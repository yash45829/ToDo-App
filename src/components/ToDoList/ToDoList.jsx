import TodoCard from "../ToDoCard/ToDoCard.jsx";
import { useSelector } from "react-redux";

function TodoList({ finishTodo, deleteTodo, editTodo }) {

  const list = useSelector((state) => state.todo);

  function changeFinished(todo, isFinished) {
    finishTodo(todo, isFinished);
  }

  function onDelete(todo) {
    deleteTodo(todo);
  }

  function onEdit(todo, editText) {
    editTodo(todo, editText);
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
