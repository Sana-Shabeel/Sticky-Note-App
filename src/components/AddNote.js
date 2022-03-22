import { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;
  const inputChangeHandler = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const saveChangeHandler = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
  };

  // speach recognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.onresult = (e) => {
    console.log(e);
    const transcript = e.results[0][0].transcript;
    console.log(transcript);
    setNoteText(transcript);
  };
  return (
    <div className="note new-note">
      <BsFillMicFill
        className="mic"
        onClick={() => {
          recognition.start();
          setNoteText("SPEAK NOW...");
        }}
      ></BsFillMicFill>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type or speack to add a note..."
        value={noteText}
        onChange={inputChangeHandler}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={saveChangeHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
export default AddNote;
