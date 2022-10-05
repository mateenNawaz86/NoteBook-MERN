import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "./context/notes/noteContext";
import NoteItem from "./NoteItem";
import Spinner from "./Spinner";

const AllNotes = () => {
  const context = useContext(NoteContext);
  const { notes, getAllNotes, editNote, loading } = context;
  const ref = useRef(null);
  const refClose = useRef(null);

  // Function for loading notes from DB
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  const [enteredNote, setEnteredNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  // Function for handling update states of note
  const updateNote = (curNote) => {
    setEnteredNote({
      id: curNote._id,
      etitle: curNote.title,
      edescription: curNote.description,
      etag: curNote.tag,
    });
    ref.current.click();
  };

  // Function for handling inputs
  const onChangeHandler = (event) => {
    setEnteredNote({ ...enteredNote, [event.target.name]: event.target.value });
  };

  // function for update the note in real time
  const updateNoteHandler = (event) => {
    event.preventDefault();
    refClose.current.click();
    editNote(
      enteredNote.id,
      enteredNote.etitle,
      enteredNote.edescription,
      enteredNote.etag
    );
  };

  return (
    <>
      {/* Modal code start */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
        ref={ref}
      >
        Open modal for @mdo
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={enteredNote.etitle}
                    onChange={onChangeHandler}
                    minLength="3"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="col-form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={enteredNote.edescription}
                    onChange={onChangeHandler}
                    minLength="8"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="etage" className="col-form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etage"
                    name="etage"
                    value={enteredNote.etag}
                    onChange={onChangeHandler}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateNoteHandler}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal code end */}

      <h2 className="text-center text-primary mb-5">ALL OF YOUR NOTES</h2>
      {loading && <Spinner />}
      <div className="card__container">
        {notes.length !== 0
          ? notes.map((item, index) => {
              return (
                <NoteItem
                  key={index}
                  note={item}
                  title={item.title}
                  description={item.description}
                  tag={item.tag}
                  id={item._id}
                  updateNote={updateNote}
                />
              );
            })
          : !loading && <p id="no_notes">NO NOTES FOUND!</p>}
      </div>
    </>
  );
};

export default AllNotes;
