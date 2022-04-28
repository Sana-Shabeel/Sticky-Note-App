import { useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import EditNote from "./EditNote";
function Note({ id, text, date, handleDeleteNote, handleAddNote }) {
  const ran = () => Math.floor(Math.random() * 3);
  const colors = ["#D9F636", "#43E8F0", "#FECE01"];

  const [editable, setEditable] = useState(false);

  const editTodoHandler = () => {
    setEditable(true);
  };

  if (editable) {
    return (
      <EditNote
        id={id}
        date={date}
        text={text}
        setEditable={setEditable}
        defaultValue={text}
        handleAddNote={handleAddNote}
      />
    );
  }
  return (
    <div className="note" style={{ backgroundColor: colors[ran()] }}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div className="note-footer-icons">
          <BiEdit
            className="edit-icon"
            onClick={editTodoHandler}
            size="1.3em"
          />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
