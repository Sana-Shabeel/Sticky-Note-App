import { useState } from "react";

function EditNote({ id, defaultValue, setEditable, handleAddNote }) {
  const [newNote, setNewNote] = useState("");

  const charLimit = 200;
  const inputChangeHandler = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNewNote(e.target.value);
    }
  };

  const saveChangeHandler = () => {
    handleAddNote(newNote, id);
    setEditable(false);
  };

  return (
    <div className="note new-note">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type or speack to add a note..."
        defaultValue={defaultValue || newNote}
        onChange={inputChangeHandler}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - newNote.length} Remaining</small>
        <button className="save" onClick={saveChangeHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditNote;
