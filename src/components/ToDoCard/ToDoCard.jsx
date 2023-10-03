import { useState } from "react";

function TodoCard({ todoText, isFinished, changeFinished, onDelete, onEdit }) {
  const [status, setStatus] = useState(isFinished); //input box checked or not
  const [editMode, setEditMode] = useState(false); //editing mode
  const [editText, setEditText] = useState(todoText); //new text

  return (
    <div className="bg-blue-200 my-2 flex justify-between px-6 py-4 gap-4">
      {/* <h1>to do cards</h1> */}

      {editMode ? (
        // edit input field
        <input
          type="text"
          className=" py-1 px-2 rounded "
          value={editText}
          placeholder={todoText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <div className="font-semibold">{todoText}</div>
      )}

      <div className="flex gap-4">
        {/* checkbox  */}
        <input
          type="checkbox"
          checked={status}
          className="bg-amber-500  w-full h-full "
          onChange={(e) => {
            setStatus(e.target.checked);
            changeFinished(e.target.checked);
          }}
        />
        {/* edit button  */}
        <button
          className=" bg-yellow-500 px-2 py-1 rounded "
          onClick={() => {
            setEditMode(!editMode);
            onEdit(editText);
          }}
        >
          {editMode ? "Save" : "Edit"}
        </button>
        {/* delete button  */}
        <button
          className="text-white bg-red-500 px-2 py-1 rounded"
          onClick={() => onDelete()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoCard;
