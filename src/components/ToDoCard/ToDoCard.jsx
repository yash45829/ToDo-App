import { useState } from "react";

function TodoCard({ todoText, isFinished, changeFinished, onDelete, onEdit }) {
  const [status, setStatus] = useState(isFinished);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todoText);

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
      {editMode ? (
        <input
          type="text"
          value={editText}
          placeholder={todoText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        todoText
      )}
      <button
        onClick={() => {
          setEditMode(!editMode);
          onEdit(editText);
        }}
      >
        {editMode ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete()}>Delete</button>
    </div>
  );
}
export default TodoCard;
