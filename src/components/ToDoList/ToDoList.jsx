import TodoCard from "../ToDoCard/ToDoCard.jsx";

function TodoList({ list, updateList }) {
  return (
    <div>
      <h1>to do list </h1>
      <div>
        {list.map((todo, index) => (
          <div key={index}>
            <TodoCard
              key={index}
              id={todo.id}
              todoText={todo.todoText}
              isFinished={todo.isFinished}
              changeFinished={(isFinished) => {
                const updatedList = list.map((t) => {
                  if (t.id == todo.id) {
                    t.isFinished = isFinished;
                  }
                  return t;
                });
                updateList(updatedList);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
