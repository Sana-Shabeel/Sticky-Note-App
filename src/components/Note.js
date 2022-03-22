import { MdDeleteForever } from "react-icons/md";
function Note({ id, text, date, handleDeleteNote }) {
  const ran = () => Math.floor(Math.random() * 3);
  const colors = ["#D9F636", "#43E8F0", "#FECE01"];
  return (
    <div className="note" style={{ backgroundColor: colors[ran()] }}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
