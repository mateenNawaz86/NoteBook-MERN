import React, { useContext, useState } from "react";
import NoteContext from "./context/notes/noteContext";

const AddNote = () => {
  const [enteredNote, setEnteredNote] = useState({
    title: "",
    description: "",
    profile: "",
    tag: "",
    id: "633a96769f8cc317167e6aea",
  });

  // function grab from NoteState
  const context = useContext(NoteContext);
  const { addNote } = context;

  // Function for add a new note
  const addNoteHandler = (event) => {
    event.preventDefault();
    addNote(
      enteredNote.title,
      enteredNote.description,
      enteredNote.profile,
      enteredNote.tag,
      enteredNote.id
    );
  };

  // Function for handling inputs
  const onChangeHandler = (event) => {
    // ...enteredNote -> spread operator grab the note data
    // [event.target.name]: event.target.value -> name equal to entered value
    setEnteredNote({ ...enteredNote, [event.target.name]: event.target.value });
  };
  return (
    <>
      <h1 className="text-center text-success mb-3">Add a new note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="title"
            onChange={onChangeHandler}
          />
          <div id="title" className="form-text">
            Title must be atleast 3 characters
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            name="description"
            onChange={onChangeHandler}
          ></textarea>
          <div id="title" className="form-text">
            Description must be atleast 8 characters
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            aria-describedby="tag"
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profile" className="form-label">
            Upload Profile
          </label>
          <input
            type="file"
            className="form-control"
            id="profile"
            name="profile"
            aria-describedby="profile"
            onChange={onChangeHandler}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={addNoteHandler}
        >
          Add Note
        </button>
      </form>
    </>
  );
};

export default AddNote;
