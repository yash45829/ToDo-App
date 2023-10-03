import TodoCard from "../ToDoCard/ToDoCard.jsx";
import { useSelector } from "react-redux";

function TodoList({ finishTodo, deleteTodo, editTodo }) {
  const list = useSelector((state) => state.todo);

  //CALLING ACTIONS THROUGH FUNCTIONS
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
    <div className="min-w-[40%] gap-4 ">
      {/* <h1> ToDo(s) </h1> */}
      <div>
        {list == "" ? (
          <p className="text-center">no todo</p>
        ) : (
          list.map((todo, index) => (
            <div key={index}>
              <TodoCard
                key={todo.id}
                id={todo.id}
                todoText={todo.todoText}
                isFinished={todo.isFinished}
                changeFinished={(isFinished) =>
                  changeFinished(todo, isFinished)
                }
                onDelete={() => onDelete(todo)}
                onEdit={(editText) => onEdit(todo, editText)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
