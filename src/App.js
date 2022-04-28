import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import NotesList from "./components/Notes";

function App(params) {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "21/03/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "22/03/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "23/03/2022",
    },
  ]);
  const [searchText, setsearchText] = useState("");
  // SAVING THE NOTES TO LOCALSTORAGE
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-sticky-note"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-sticky-note", JSON.stringify(notes));
  }, [notes]);

  const addNote = (inputText, id) => {
    const date = new Date();
    setNotes((prev) => [
      { id: nanoid(), text: inputText, date: date.toLocaleDateString() },
      ...notes.filter((note) => note.id !== id),
    ]);
  };
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };
  return (
    <div className="container">
      <Search handleSearchNote={setsearchText} />
      <NotesList
        notes={notes.filter((note) => note.text.includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}
export default App;
