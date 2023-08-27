import { useState } from "react";

function TodoCard({ id, todoText, isFinished, changeFinished }) {
  const [status, setStatus] = useState(isFinished);
  return (
    <div>
      {/* <h1>to do cards</h1> */}
      <input
        type="checkbox"
        checked={status}
        onChange={(e) => {
          setStatus(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {todoText}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
export default TodoCard;
