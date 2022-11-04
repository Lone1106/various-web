import { Fragment, useState } from "react";

import Header from "./components/header";
import Notes from "./components/notes";
import NoteForm from "./components/note-form";

import "./styles.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([
    { id: 0, title: "Title Preview", content: "This is how your notes will look like! So give it a try!" },
  ]);

  const clearNotesHandler = () => {
    setNotes([]);
  };

  const addNoteHandler = (note) => {
    setNotes((current) => {
      return [...current, note];
    });
  };

  const showFormHandler = () => {
    if (showForm) setShowForm(false);
    if (!showForm) setShowForm(true);
  };

  const deleteHandler = (id) => {
    const afterDelete = notes.filter(note => note.id !== id)
    setNotes(afterDelete);
  };

  return (
    <Fragment>
      <Header toggleForm={showFormHandler} toggleClear={clearNotesHandler} />
      {showForm && (
        <NoteForm addNote={addNoteHandler} toggleForm={showFormHandler} />
      )}
      <Notes notes={notes} deleteNote={deleteHandler} />
    </Fragment>
  );
};

export default App;
